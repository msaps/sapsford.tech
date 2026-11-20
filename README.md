# sapsford.tech

Personal website for Merrick Sapsford.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Development

Install the standalone pnpm CLI using the [pnpm installation instructions](https://pnpm.io/installation#using-a-standalone-script). No separate Node.js installation, Corepack, or Volta is required. The project declares exact pnpm and Node.js versions in `package.json`; pnpm downloads and uses those versions when needed.

```bash
# Install dependencies using the committed lockfile
pnpm install --frozen-lockfile

# Verify the project-managed versions
pnpm --version
pnpm node --version

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```
