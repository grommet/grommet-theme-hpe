/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import del from 'del';
import fs from 'fs-extra';
import git from 'simple-git/promise';
import path from 'path';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-theme-hpe`;
const localFolder = path.resolve('.tmp/grommet-theme-hpe');
const localDist = path.resolve('dist');

if (process.env.CI) {
  del(localFolder).then(() => {
    git()
      .silent(false)
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout('gh-pages'))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() =>
        fs.copy(
          `${localDist}/grommet-theme-hpe.min.js`,
          `${localFolder}/grommet-theme-hpe-next.min.js`,
        ),
      )
      .then(() =>
        fs.copy(
          `${localDist}/grommet-theme-hpe.json`,
          `${localFolder}/grommet-theme-hpe-next.json`,
        ),
      )
      .then(() =>
        git(localFolder).add([
          `${localFolder}/grommet-theme-hpe-next.json`,
          `${localFolder}/grommet-theme-hpe-next.min.js`,
        ]),
      )
      .then(() =>
        git(localFolder).commit(
          'grommet-theme-hpe-next .min.js and .json updated',
        ),
      )
      .then(() => git(localFolder).push('origin', 'gh-pages'))
      .catch(err => console.error('failed: ', err));
  });
} else {
  console.warn(
    'Skipping release. Release-gh-pages task should be executed by CI only.',
  );
}
