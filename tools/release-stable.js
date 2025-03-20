/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import del from 'del';
import fs from 'fs-extra';
import path from 'path';
import { simpleGit as git } from 'simple-git';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-theme-hpe.git`;
const localFolder = path.resolve('.tmp/grommet-theme-hpe');
const BUILD_DIR = 'dist';
const localDist = path.resolve(BUILD_DIR);

const [BRANCH] = process.argv
  .find((v) => v.includes('--branch='))
  .split('=')
  .slice(-1);

if (process.env.CI) {
  del(localFolder).then(() => {
    git()
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout(BRANCH))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, `${localFolder}/${BUILD_DIR}`))
      .then(() =>
        fs.copyFile(
          path.resolve('package.json'),
          `${localFolder}/${'package.json'}`,
        ),
      )
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit(`${BRANCH} updated`))
      .then(() => git(localFolder).push('origin', BRANCH))
      .catch((err) => console.error('failed: ', err));
  });
} else {
  console.warn(
    'Skipping release. Release:stable task should be executed by CI only.',
  );
}
