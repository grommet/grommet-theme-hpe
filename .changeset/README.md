# Changesets

This repository uses Changesets to record user-visible package changes and generate release versions and changelog entries.

## Add a changeset

For a source change that affects consumers, run:

```text
yarn changeset
```

Select `grommet-theme-hpe`, choose the appropriate semver level, and write a concise description for consumers. Commit the generated file in `.changeset/` with the pull request.

Changesets are not normally required for documentation-only, CI-only, or internal changes. Explain that exemption in the pull request.

Maintainers use the collected changesets to generate the release version and update `CHANGELOG.md` with:

```text
yarn changeset version
```

The generated version update must be reviewed in a pull request before a release tag is created.

We have a quick list of common questions to get you started engaging with this project in
[our documentation](https://github.com/changesets/changesets/blob/main/docs/common-questions.md)
