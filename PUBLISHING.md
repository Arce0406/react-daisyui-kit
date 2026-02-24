# Publishing Guide

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

## Workflow

### 1. Make Changes

Develop your features or fix bugs as usual.

### 2. Create a Changeset

When you're ready to document your changes, run:

```bash
pnpm changeset
```

This will:
- Prompt you to select which packages have changed (usually `@featherstudio/react-daisyui-kit`)
- Ask for the type of change:
  - **patch** (0.0.6 → 0.0.7): Bug fixes, minor updates
  - **minor** (0.0.6 → 0.1.0): New features, backwards compatible
  - **major** (0.0.6 → 1.0.0): Breaking changes
- Ask you to write a summary of the changes (will appear in CHANGELOG)

This creates a markdown file in `.changeset/` folder.

💡 **Tip**: You can create multiple changesets before releasing. They will all be combined when you publish.

### 3. Commit the Changeset

```bash
git add .changeset
git commit -m "chore: add changeset for [your feature]"
```

### 4. Version Bump (When Ready to Publish)

When you're ready to release, run:

```bash
pnpm changeset:version
```

This will:
- Update version numbers in package.json
- Generate/update CHANGELOG.md
- Delete the consumed changeset files

### 5. Review & Commit

Check the changes:
- Review [packages/react-daisyui-kit/package.json](packages/react-daisyui-kit/package.json) (version updated)
- Review [packages/react-daisyui-kit/CHANGELOG.md](packages/react-daisyui-kit/CHANGELOG.md) (if it exists)

Commit the version changes:

```bash
git add .
git commit -m "chore: release version X.X.X"
git push
```

### 6. Publish to npm

```bash
pnpm changeset:publish
```

This will:
- Build the package
- Publish to npm
- Create git tags

Push the tags:

```bash
git push --follow-tags
```

## Quick Reference

```bash
# Step 1: Create changeset (after making changes)
pnpm changeset

# Step 2: Version bump (when ready to release)
pnpm changeset:version

# Step 3: Publish
pnpm changeset:publish
git push --follow-tags
```

## Configuration

The configuration is in [.changeset/config.json](.changeset/config.json):

- `access: "public"` - Package is published as public
- `ignore: ["demo-client"]` - demo-client is ignored (it's a private website)
- `baseBranch: "main"` - Base branch for comparison

## Example: Publishing a New Feature

```bash
# 1. Develop your feature
# ... make changes ...

# 2. Create changeset
pnpm changeset
# Select: @featherstudio/react-daisyui-kit
# Type: minor (new feature)
# Summary: "Add new Toast component"

# 3. Commit
git add .
git commit -m "feat: add Toast component"
git push

# 4. When ready to release, update version
pnpm changeset:version
# This updates version from 0.0.6 → 0.1.0

# 5. Commit version change
git add .
git commit -m "chore: release v0.1.0"
git push

# 6. Publish
pnpm changeset:publish
git push --follow-tags
```

## Benefits

✅ **Automatic version management** - No manual version editing
✅ **Automatic CHANGELOG** - Changelog is generated from changesets  
✅ **Safe workflow** - Review changes before publishing
✅ **Monorepo friendly** - Handles multiple packages easily
✅ **CI/CD ready** - Can be automated with GitHub Actions

## GitHub Actions (Optional)

You can automate releases with the Changesets GitHub Action. See [.github/workflows/release.yml](.github/workflows/release.yml) for an example configuration.
