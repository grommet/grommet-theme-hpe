# grommet-theme-hpe

Hewlett Packard Enterprise Design-System theme.

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

## stable

grommet-theme-hpe is also available on a NEXT-stable branch build with the
content of the master branch.
From your package.json point to stable.

```
"grommet-theme-hpe": "https://github.com/grommet/grommet-theme-hpe/tarball/stable",
```

_NOTE: To install `grommet-theme-hpe` from a branch, use the `yarn` package
manager, since `npm install` fails to install from a branch name. `npm install`
will produce the error:_

```
$ npm install
npm ERR! code ENOPACKAGEJSON
...
```
