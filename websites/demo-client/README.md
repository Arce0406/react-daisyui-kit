# React DaisyUI Kit - Demo Site

Component showcase and interactive examples for [@featherstudio/react-daisyui-kit](https://www.npmjs.com/package/@featherstudio/react-daisyui-kit).

## Online Demo

🎯 **[View live demo](https://arce0406.github.io/react-daisyui-kit/)**

## Local Development

From the monorepo root:

```bash
pnpm install
pnpm --filter demo-client dev
```

Then open [http://localhost:3000](http://localhost:3000) to see the component showcase.

## Building for GitHub Pages

This demo is statically built and deployed to GitHub Pages:

```bash
pnpm --filter demo-client build
# Output: websites/demo-client/out/
```

Deployment is automated via GitHub Actions on every push to `main`.

## Features Showcased

- 20+ React components with live examples
- Theme switcher (light/dark mode)
- Component API documentation
- Installation and usage instructions

## Stack

- Next.js 16 (static export)
- React 19
- TypeScript
- Tailwind CSS v4
- DaisyUI

For more info, see the [main repository](https://github.com/Arce0406/react-daisyui-kit).
