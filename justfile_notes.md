# Justfile Notes (Just 1.46.0, Windows/PowerShell)

## Critical: Recipe Parameters Are Always Positional

In Just, recipe parameters are filled **positionally** from the command line. The `name=value` syntax on the command line sets **Just-level variables**, NOT recipe parameters. Recipe parameters shadow same-named variables, so `name=value` overrides are invisible to recipes that declare a parameter with the same name.

```just
# BAD: format=typst sets a Just variable, but the recipe parameter shadows it
release file format='':
    echo {{format}}   # always '' because recipe param shadows the variable

# Calling `just release paper.md format=typst` does NOT work as expected.
# 'format=typst' sets a Just variable, but the recipe param 'format' keeps its default ''.
```

## Solution: Use `[arg]` Attributes (Just 1.46+)

The `[arg("param", long="flag")]` attribute converts a recipe parameter into a named `--flag value` option. This is the correct way to get named arguments in Just.

```just
[arg("format", long="format")]
[arg("output", long="output")]
[arg("dry_run", long="dry-run", value="true")]  # flag, no value needed
release file='' format='' output='' dry_run='false':
    echo {{file}} {{format}} {{output}}
```

Usage: `just release paper.md --format typst --output releases/final.pdf --dry-run`

### `[arg]` Syntax Reference

| Attribute | Effect |
|---|---|
| `[arg("param", long="flag")]` | `--flag value` option |
| `[arg("param", short="f")]` | `-f value` option |
| `[arg("param", long="flag", value="true")]` | `--flag` boolean flag (no value) |
| `[arg("param", help="description")]` | Shows in `--help` output |
| `[arg("param", pattern="\\d+")]` | Validates against regex |

**Important:** The first argument must be a **quoted string** matching the parameter name: `[arg("format", ...)]` not `[arg(format, ...)]`.

**Limitation:** Variadic (`+` and `*`) parameters cannot use `[arg]`.

## Other Key Just Behaviors

- `set shell := ["powershell", "-NoProfile", "-Command"]` makes all recipe bodies run as PowerShell commands.
- `@` prefix on a recipe line suppresses echoing the command.
- `{{variable}}` substitution happens before the shell sees the command.
- Recipes calling other recipes via `just recipe args` spawn a new Just process with the same CLI parsing rules.
- Parameters without defaults are required and positional. Parameters with defaults are optional but still positional (unless `[arg]` is used).

## PowerShell Splatting Pattern

The project uses PowerShell array splatting (`@cmd_args`) to build argument lists dynamically:

```powershell
$cmd_args = @()
if ("{{format}}") { $cmd_args += @("--format", "{{format}}") }
& python scripts/release.py @cmd_args
```

This works well with `[arg]` attributes because the template variables resolve correctly.

## Convenience Recipes

For commonly used release targets, use convenience recipes that call the script directly (bypassing Just's argument parsing entirely):

```just
release-final file='paper.md':
    @& python scripts/release.py "{{file}}" --format typst --output "releases/final.pdf"
```

These accept their own positional parameter (`file`) and hardcode the rest.
