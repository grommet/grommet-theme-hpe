Use the canonical [grommet-theme-hpe publishing capability](../../knowledge/capabilities/grommet-theme-hpe-publishing.md) for release planning and execution.

The near-term workflow keeps CircleCI as the release authority. Use the capability to:

- Prepare and review Changesets-based version updates.
- Run the existing release checks.
- Create the correctly formatted `vX.Y.Z` tag.
- Create and verify the GitHub release.
- Verify the CircleCI-triggered NPM publication.
- Prepare the human-reviewed Slack announcement.

Do not create a parallel GitHub Actions publishing workflow. A future CircleCI-to-GitHub-Actions migration is documented as a separate evaluation phase in the canonical capability.
