Add a pull request to the OSS contribution table in `docs/oss-contribution.md`.

## Instructions

1. Fetch the PR information from the provided GitHub PR URL: $ARGUMENTS
2. Extract the following details:
   - Merged date (YYYY-MM-DD format)
   - Repository name (owner/repo)
   - Language/Technology (e.g., Go, YAML (GitHub Actions), YAML (GoReleaser), Markdown, etc.)
   - PR title
3. Add a new row to the table in `docs/oss-contribution.md`
4. Insert the entry in chronological order (newest first, at the top of the table after the header)

## Table Format

```
merged date | repository | lang | PR's short description
--- | --- | --- | ---
YYYY-MM-DD | [owner/repo](https://github.com/owner/repo) | Language | [PR Title](PR_URL)
```

## Example

For `https://github.com/example/repo/pull/123`:

```
2025-01-15 | [example/repo](https://github.com/example/repo) | Go | [Fix bug in parser](https://github.com/example/repo/pull/123)
```
