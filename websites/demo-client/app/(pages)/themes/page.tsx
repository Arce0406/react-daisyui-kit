export default function ThemesPage() {
    return (
        <div className="min-h-screen pb-16">
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Themes
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Configure DaisyUI themes, enable data-theme switching, and make page colors follow the active theme.
                </p>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">1. Install DaisyUI</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Install DaisyUI in the demo-client workspace so the theme tokens are available.
                    </p>
                    <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
                        <pre className="text-gray-100 font-mono text-sm">
                            {`pnpm add -D daisyui`}
                        </pre>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">2. Enable DaisyUI in globals.css</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        These directives enable DaisyUI and make the dark variant respond to data-theme.
                    </p>
                    <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
                        <pre className="text-gray-100 font-mono text-sm">
                            {`@import "tailwindcss";
@plugin "daisyui" {
  themes: all;
  logs: true;
}
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));`}
                        </pre>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">3. Use ThemeProvider and ThemeSwitcher</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        The provider initializes the theme from localStorage and the switcher updates data-theme.
                    </p>
                    <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
                        <pre className="text-gray-100 font-mono text-sm">
                            {`import { ThemeProvider, ThemeSwitcher } from "@featherstudio/react-daisyui-kit";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <nav>
            <ThemeSwitcher />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
                        </pre>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">4. Bind page colors to theme tokens</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        If the page background or text stays fixed, it is usually because custom colors override DaisyUI tokens.
                        Use the theme tokens for the body so the page follows data-theme.
                    </p>
                    <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
                        <pre className="text-gray-100 font-mono text-sm">
                            {`body {
  background-color: hsl(var(--b1));
  color: hsl(var(--bc));
}`}
                        </pre>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Troubleshooting</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Verify the HTML element has data-theme set by ThemeSwitcher.</li>
                        <li>Make sure DaisyUI is installed in demo-client, not only in the package.</li>
                        <li>Do not hardcode background or text colors that override DaisyUI variables.</li>
                        <li>Keep the dark variant line in globals.css so dark styles follow data-theme.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
