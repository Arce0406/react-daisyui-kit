# @featherstudio/react-daisyui-kit

A React component library built with DaisyUI and Tailwind CSS. Includes form controls, data display, overlays, notifications, and a theme switcher ready for app-level use.

## Features

- DaisyUI-first styling with Tailwind CSS utility overrides
- TypeScript-ready components and hooks
- ThemeProvider and ThemeSwitcher for data-theme switching
- Form system with validation helpers
- Toast and Notification utilities

## Installation

```bash
pnpm add @featherstudio/react-daisyui-kit
```

Peer dependencies (install in your app):

```bash
pnpm add react react-dom tailwindcss daisyui zod react-icons
```

## Tailwind + DaisyUI setup

Tailwind v4 (CSS-first) example:

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: all;
}
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

body {
  background-color: hsl(var(--b1));
  color: hsl(var(--bc));
}
```

Tailwind v3 config example (tailwind.config.js):

```js
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
  plugins: [require("daisyui")],
};
```

## Quick start

```tsx
import { ThemeProvider, ThemeSwitcher, Button } from "@featherstudio/react-daisyui-kit";

export default function App() {
  return (
    <ThemeProvider>
      <nav>
        <ThemeSwitcher />
      </nav>
      <main>
        <Button variant="primary">Click me</Button>
      </main>
    </ThemeProvider>
  );
}
```

## Usage examples

Input + validation:

```tsx
import { Input } from "@featherstudio/react-daisyui-kit";

export default function Profile() {
  return <Input type="email" placeholder="you@example.com" />;
}
```

Toast:

```tsx
import { ToastProvider, ToastContainer, toast } from "@featherstudio/react-daisyui-kit";

export default function RootLayout({ children }) {
  return (
    <ToastProvider>
      {children}
      <ToastContainer />
    </ToastProvider>
  );
}

toast.success("Saved!");
```

Notification:

```tsx
import { NotificationProvider, NotificationContainer, notification } from "@featherstudio/react-daisyui-kit";

export default function RootLayout({ children }) {
  return (
    <NotificationProvider>
      {children}
      <NotificationContainer />
    </NotificationProvider>
  );
}

notification.success({ message: "Done" });
```

## Project links

- Demo site: /websites/demo-client
- Source: https://github.com/Arce0406/react-daisyui-kit

## License

MIT
