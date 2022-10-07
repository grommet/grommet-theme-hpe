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
