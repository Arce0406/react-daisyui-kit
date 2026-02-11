'use client';

import Link from 'next/link';

export default function TextAreaPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link href="/components" className="hover:text-blue-600 dark:hover:text-blue-400">Components</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">TextArea</span>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          TextArea Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A multi-line text input component suitable for longer form content with resizable and customizable options.
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
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Enter your message here..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
            />
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { TextArea } from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      rows={5}
      placeholder="Enter your message..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multi-line Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Perfect for longer text entries and detailed content.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Resizable</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Users can resize the textarea to fit their needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Row Control</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Adjustable rows for different content lengths.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessible</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full keyboard and screen reader support.
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
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">rows</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">number</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">4</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Number of rows</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">cols</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">number</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Number of columns</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">value</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">string</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Textarea value</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onChange</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">function</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Change handler</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">placeholder</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">string</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Placeholder text</td>
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
