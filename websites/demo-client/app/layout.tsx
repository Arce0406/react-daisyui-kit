import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider, ThemeSwitcher } from "@featherstudio/react-daisyui-kit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React DaisyUI Kit - Component Library",
  description: "A beautiful and customizable React component library built with DaisyUI and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900`}
      >
        <ThemeProvider>
          <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="font-bold text-xl text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
                  React DaisyUI Kit
                </Link>
                <div className="flex gap-6 items-center">
                  <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                    Home
                  </Link>
                  <Link href="/themes" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                    Themes
                  </Link>
                  <Link href="/components" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                    Components
                  </Link>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </nav>
          <main>
            {children}
          </main>
          <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400 text-sm">
              <p>© 2026 React DaisyUI Kit. Built with React, TypeScript, and Tailwind CSS.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
