# Changesets

This repository uses Changesets to record user-visible package changes and generate release versions and changelog entries.

## Add a changeset

Every pull request should include a changeset. For a source change that affects consumers, run:

```text
yarn changeset
```

Select `grommet-theme-hpe`, choose the appropriate semver level, and write a concise description for consumers. Commit the generated file in `.changeset/` with the pull request.

For documentation-only, CI-only, or internal changes, create an empty changeset instead:

```text
yarn changeset add --empty
```

Commit the generated empty file in `.changeset/` with the pull request. It records that the change was reviewed and intentionally does not require a release.

Maintainers use the collected changesets to generate the release version and update `CHANGELOG.md` with:

```text
yarn changeset version
```

The generated version update must be reviewed in a pull request before a release tag is created.

We have a quick list of common questions to get you started engaging with this project in
[our documentation](https://github.com/changesets/changesets/blob/main/docs/common-questions.md)
