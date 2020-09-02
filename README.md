# grommet-theme-hpe

Hewlett Packard Enterprise design-system theme.
Pull-Requests with theme changes and adaptation to Figma designs, will be submitted to the NEXT branch rather than the master branch to avoid backward compatibility issues on official HPE theme releases.

## Installation

```
  $ yarn add grommet-theme-hpe
```

## Usage

```
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

<Grommet theme={hpe} />
```

## NEXT-stable

grommet-theme-hpe is also available on a NEXT-stable branch build with the content of NEXT branch.
From your package.json point to NEXT-stable.

```
"grommet-theme-hpe": "https://github.com/grommet/grommet-theme-hpe/tarball/NEXT-stable",
```

_NOTE: To install `grommet-theme-hpe` from a branch, use the `yarn` package 
manager, since `npm install` fails to install from a branch name. `npm install`
will produce the error:_

```
$ npm install
npm ERR! code ENOPACKAGEJSON
...
```
