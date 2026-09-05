# grommet-theme-hpe Publishing Capability

## Purpose

Use this capability to prepare, approve, publish, and verify a `grommet-theme-hpe` release. The near-term release authority is CircleCI. GitHub Actions migration is a separate future evaluation and must not be enabled alongside CircleCI publishing for the same tag or version.

## Current Release Authority

CircleCI currently owns the executable release path:

- Pull requests and branch builds run compatibility tests, lint, and build checks.
- A successful `master` build promotes generated artifacts to `stable` and `gh-pages`.
- A tag matching `v*` runs the `publish` job, which authenticates to NPM and runs `npm publish`.
- The GitHub release record is currently created manually.

Relevant implementation files:

- [.circleci/config.yml](../../.circleci/config.yml)
- [.changeset/config.json](../../.changeset/config.json)
- [package.json](../../package.json)
- [tools/release-stable.js](../../tools/release-stable.js)
- [tools/release-gh-pages.js](../../tools/release-gh-pages.js)

## Near-Term Workflow

### 1. Prepare the release

1. Confirm the working tree is clean and update `master`.
2. Install dependencies with the repository-supported Node and Yarn versions.
3. Review merged changes since the last release.
4. Add or review Changesets for user-visible package changes. The repository already has Changesets configured for the single package.
5. Generate the version update using the repository's Changesets workflow. Review the resulting `package.json` version and `CHANGELOG.md` entry.
6. Run the release checks locally where practical:

   ```text
   yarn lint
   ```

yarn test
yarn build
yarn jsonify
yarn license-check

````

### 2. Review and merge

Create or update the version PR and require a second maintainer to review:

- The semantic version level.
- The generated changelog and release-note quality.
- Public API or compatibility impact.
- Test, lint, build, JSON generation, and license-check results.
- CircleCI status checks.

Do not create or push a release tag until the version PR is approved and merged into `master`.

### 3. Create the GitHub release

1. Update local `master` after the version PR merges.
2. Confirm the package version in `package.json` matches the intended release.
3. Create and push an annotated tag using the CircleCI convention:

```text
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin vX.Y.Z
````

4. Create the GitHub release for `vX.Y.Z` from `master`.
5. Use the matching `CHANGELOG.md` section as the release notes.
6. Publish the GitHub release only after confirming the tag and release notes are correct.

The GitHub release and NPM publication are related but separate operations. The pushed `v*` tag triggers CircleCI's NPM publish job; publishing the GitHub release does not itself publish the NPM package.

### 4. Verify publication

After CircleCI completes:

- Confirm the NPM registry reports `grommet-theme-hpe@X.Y.Z`.
- Inspect the published package contents and confirm the expected `dist` files, `README.md`, `CHANGELOG.md`, and `LICENSE` are present.
- Confirm the GitHub release points to the intended tag.
- Confirm `stable` and `gh-pages` updates when the release originated from the normal `master` flow.
- Check CircleCI logs for failed or partially completed jobs.

### 5. Prepare the announcement

Draft an announcement for `#hpe-design-system` containing:

- Package name and version.
- A short summary of the user-visible changes.
- A link to the GitHub release.
- A link to the NPM package.
- Any migration or compatibility notes.

A human should review and post the announcement. Automated Slack posting is deferred until ownership, secrets, and approval controls are defined.

## Automation Boundaries

Automate or retain as CI checks:

- Dependency installation.
- React compatibility tests.
- Linting.
- Build and JSON artifact generation.
- License compliance.
- Stable and gh-pages artifact promotion.
- NPM publication after an approved `v*` tag.
- Registry and artifact verification where reliable checks can be added.

Retain human approval for:

- Changeset content and semantic version selection.
- Merging the version PR.
- Creating and pushing the production tag.
- Reviewing and publishing GitHub release notes.
- Posting the Slack announcement.

## Failure Recovery

- If validation fails before tagging, fix the version PR or source branch and rerun checks.
- If a tag exists but the GitHub release was not created, create the release from the existing tag; do not create a second tag.
- If NPM already contains the version, do not rerun `npm publish` or modify the published package. Investigate the CircleCI job and verify the package contents.
- If a release job partially completes, record which artifacts were published before rerunning any operation.
- Never enable a new GitHub Actions publish workflow while CircleCI remains able to publish the same tag.

## Future CircleCI-to-GitHub-Actions Evaluation

Migration is intentionally deferred. Before removing CircleCI:

1. Reproduce tests, lint, build, React-version matrix, stable-branch promotion, gh-pages publication, and NPM publication in GitHub Actions.
2. Run GitHub Actions in non-publishing parity mode while CircleCI remains authoritative.
3. Compare branch and tag filters, caches, generated artifacts, status checks, secrets, permissions, retry behavior, and auditability.
4. Decide whether NPM trusted publishing or a protected environment should replace the current NPM token approach.
5. Define a cutover date, rollback procedure, and owner for the migration.
6. Disable CircleCI publishing before enabling GitHub Actions publishing.
7. Retire CircleCI release jobs only after a successful production release through GitHub Actions.

The migration plan must account for the main risks: permission differences, filter mismatches, secret migration, duplicate publishing, changed dependency-cache behavior, operational retraining, and rollback complexity.

## Release Checklist

- [ ] `master` is current and the working tree is clean.
- [ ] Changesets are present or an exemption is documented.
- [ ] Version PR has been reviewed and merged.
- [ ] Local checks and CircleCI checks passed.
- [ ] `package.json` and `CHANGELOG.md` contain the intended version.
- [ ] Annotated `vX.Y.Z` tag was pushed.
- [ ] GitHub release notes match the changelog.
- [ ] CircleCI NPM publish completed successfully.
- [ ] NPM registry shows the expected version and package contents.
- [ ] Stable and gh-pages artifacts were verified where applicable.
- [ ] Slack announcement was reviewed and posted by a human.
