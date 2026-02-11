'use client';

import Link from 'next/link';

export default function PasswordInputPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link href="/components" className="hover:text-blue-600 dark:hover:text-blue-400">Components</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">PasswordInput</span>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          PasswordInput Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Secure password input with visibility toggle control to help users securely enter passwords.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700">
            Form Control
          </span>
        </div>
      </section>

      {/* Live Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input type="password" placeholder="Enter password..." className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700">👁️</button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { PasswordInput } from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState('');

  return (
    <PasswordInput
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter password"
    />
  );
}`}
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visibility Toggle</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Easy toggle button to show/hide password.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure by Default</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Password is masked initially for security.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">User Friendly</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Toggle helps users verify their input easily.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable Icons</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Use custom icons for visibility controls.
            </p>
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Prop</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Default</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">value</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">string</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Password value</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onChange</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">function</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Change handler</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">placeholder</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">string</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Placeholder text</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">showToggle</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">true</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Show visibility toggle</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">disabled</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">false</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Disable input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Back Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/components" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
          <span>←</span> Back to Components
        </Link>
      </section>
    </div>
  );
}
