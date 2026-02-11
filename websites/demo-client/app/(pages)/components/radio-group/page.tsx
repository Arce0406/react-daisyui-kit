'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RadioGroupPage() {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link href="/components" className="hover:text-blue-600 dark:hover:text-blue-400">Components</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">RadioGroup</span>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          RadioGroup Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A group of radio buttons for selecting a single option from multiple choices with easy state management.
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
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="option" value="option1" checked={selected === 'option1'} onChange={(e) => setSelected(e.target.value)} className="w-4 h-4 cursor-pointer" />
              <span className="text-gray-700 dark:text-gray-300">Option 1</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="option" value="option2" checked={selected === 'option2'} onChange={(e) => setSelected(e.target.value)} className="w-4 h-4 cursor-pointer" />
              <span className="text-gray-700 dark:text-gray-300">Option 2</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="option" value="option3" checked={selected === 'option3'} onChange={(e) => setSelected(e.target.value)} className="w-4 h-4 cursor-pointer" />
              <span className="text-gray-700 dark:text-gray-300">Option 3</span>
            </label>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { RadioGroup } from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState('opt1');

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      options={[
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
      ]}
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Single Selection</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Only one option can be selected at a time.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy State Management</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Simple onChange callback handling.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessible</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Keyboard navigation and semantic HTML.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Layout</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Vertical or horizontal arrangement.</p>
          </div>
        </div>
      </section>

      {/* props */}
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
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Selected value</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onChange</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">function</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Change handler</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">options</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">array</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Radio options</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">disabled</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">false</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Disable group</td>
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
