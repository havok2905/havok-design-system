# havok-design-system

general design system for my personal projects

## Workflow

1. Create a new branch and create a draft MR
2. Make code change
3. Squash all commits for the MR
4. Reference "Semantic Versioning" section below to ensure the commit message matches what is expected
5. Merge into main
6. Pull from main
7. Update package-json with `npm version <patch | minor | major>`
8. Push to main

## Semantic Versioning

**Source:** https://docs.npmjs.com/about-semantic-versioningnpm 

| Code status | Stage | Rule | Example Version |
| ----------- | ----- | ---- | --------------- |
| First release | New product | Start with 1.0.0 | 1.0.0 |
| Backward compatible bug fixes | Patch release | Increment third digit | 1.0.1 |
| Backward compatible new features | Minor release | Increment the middle digit and reset last digit to zero | 1.1.0 |
| Changes that break backward compatibility | Major release | Increment the first digit and reset middle and last digits to zero | 2.0.0 |

### Semantic Tags

Our commit message format is as follows:

```
tag: Short description (#1234)

Longer description here if necessary
```

The Tag is one of the following:

- **breaking:** ( Major )for cutting a backwards incompatible release
- **feat:** ( Minor ) implemented a new feature
- **fix:** ( Patch ) for a bug fix
- **chore:** for refactoring (anything that isn't user-facing).
- **docs** - changes or additions to documentation only.
- **test:** for adding or modifying tests
