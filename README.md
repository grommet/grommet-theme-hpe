# grommet-theme-hpe

Hewlett Packard Enterprise design system theme.

## Installation

```
  $ yarn add grommet-theme-hpe
```

_NOTE: To install `grommet-theme-hpe` from a branch, use the `yarn` package
manager, since `npm install` fails to install from a branch name. `npm install`
will produce the error:_

```
$ npm install
npm ERR! code ENOPACKAGEJSON
...
```

## Usage

```
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

<Grommet theme={hpe} />
```

## stable

The `stable` branch includes all changes that have been merged to `master`. This branch can be used to experiment with changes that will be included in the next release. From your package.json point to stable.

```
"grommet-theme-hpe": "https://github.com/grommet/grommet-theme-hpe/tarball/stable",
```

## NEXT-stable

The `NEXT-stable` branch is used to prepare and stage changes for the next major theme release. The contents of `NEXT` branch are available on `NEXT-stable`. From your package.json point to NEXT-stable.

_NOTE: This branch should never be used in production as it contains work in progress and is a feature branch meant for experimentation._

```
"grommet-theme-hpe": "https://github.com/grommet/grommet-theme-hpe/tarball/NEXT-stable",
```

## AUDIT-stable

The `AUDIT-stable` branch is used to increase UI consistency and velocity across HPE applications by ensuring implementations use theme design tokens and avoid use of custom style overrides. Clean implmentations allow for evolving HPE brand styles and best practices to be seamlessly incorporated into HPE applications.

This branch serves as tool to help audit implementations by applying visual highlights to UI components whose implementations may prevent theme styles from being applied cleanly. An accompanying legend provides each highlight paired with an issue description and suggested remedy.

The contents of `AUDIT` branch are available on `AUDIT-stable`. From your package.json point to AUDIT-stable.

_NOTE: This branch should never be used in production as it is a branch meant for use as a tool to help teams maintain best practices for consuming `grommet-theme-hpe`._

## Migration Guide: v6 to v7 T-shirt Size Changes

### Automated Migration with Codemod

To migrate from v6 to v7 t-shirt sizes, use the built-in codemod via npx:

```sh
# Show help
node node_modules/grommet-theme-hpe/codemod --help

# Dry run (shows changes, does not modify files)
node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes <your-source-folder> --dry

# Apply changes
node node_modules/grommet-theme-hpe/codemod migrate-tshirt-sizes <your-source-folder>
```

#### What does it do?

Automatically updates t-shirt size props (e.g., `pad`, `margin`, `gap`, etc.) in JSX to the new v6 values:

| v6 (Old) | v7 (New) |
| -------- | -------- |
| xxsmall  | 5xsmall  |
| xsmall   | 3xsmall  |
| small    | xsmall   |
| medium   | medium   |
| large    | xlarge   |
| xlarge   | 3xlarge  |

#### Manual Migration Required

You must manually review and update:

- Dynamic values (variables, expressions)
- Custom logic or computed t-shirt sizes
- Non-standard prop names or custom components

Flag these for your team to review during migration.

#### References

- [T-shirt size changes for v7](https://github.com/grommet/hpe-design-system/issues/4487#issuecomment-2576435972)

```
"grommet-theme-hpe": "https://github.com/grommet/grommet-theme-hpe/tarball/AUDIT-stable",
```
