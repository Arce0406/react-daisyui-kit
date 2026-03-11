'use client';

import { Dropdowns, type DropdownItem } from '@featherstudio/react-daisyui-kit';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function DropdownsPage() {
  const [selectedKey, setSelectedKey] = useState<string>('');

  const menuItems = useMemo<DropdownItem[]>(
    () => [
      { key: 'profile', label: 'Profile' },
      { key: 'settings', label: 'Settings' },
      { divider: true },
      { key: 'help', label: 'Help Center' },
      { key: 'delete', label: 'Delete Project', danger: true },
      { key: 'disabled', label: 'Disabled Option', disabled: true },
    ],
    []
  );

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Dropdowns</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Dropdowns Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A flexible dropdown menu component with keyboard navigation, placement options, and customizable trigger content.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex flex-wrap items-start gap-4">
            <Dropdowns
              items={menuItems}
              onSelect={(key) => setSelectedKey(key)}
              trigger={
                <button className="btn btn-primary" type="button">
                  Actions
                </button>
              }
            />

            <Dropdowns
              items={menuItems}
              placement="top"
              trigger={
                <button className="btn btn-outline" type="button">
                  Open Upward
                </button>
              }
            />

            <Dropdowns
              items={menuItems}
              disabled
              trigger={
                <button className="btn" type="button">
                  Disabled
                </button>
              }
            />

            <div className="w-full text-sm text-gray-600 dark:text-gray-300 mt-2">
              Selected: {selectedKey || 'None selected'}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { Dropdowns, type DropdownItem } from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

const items: DropdownItem[] = [
  { key: 'profile', label: 'Profile' },
  { key: 'settings', label: 'Settings' },
  { divider: true },
  { key: 'delete', label: 'Delete', danger: true },
];

export default function App() {
  const [selected, setSelected] = useState('');

  return (
    <Dropdowns
      items={items}
      placement="bottom"
      onSelect={setSelected}
      trigger={<button className="btn">Menu</button>}
    />
  );
}`}
          </pre>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Placement Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Supports top and bottom dropdown placement.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Click Outside</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically close on outside click.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Keyboard Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              ESC to close and arrow key navigation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Content</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Customize item labels, danger state, disabled state, and divider rows.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Prop</th><th className="text-left py-3 px-4 font-semibold">Type</th><th className="text-left py-3 px-4 font-semibold">Default</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">items</td>
                <td className="py-3 px-4 font-mono">DropdownItem[]</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Dropdown item list (required)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onSelect</td>
                <td className="py-3 px-4 font-mono">(key: string) =&gt; void</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Called when an enabled item with key is selected</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">disabled</td>
                <td className="py-3 px-4 font-mono">boolean</td>
                <td className="py-3 px-4 font-mono">false</td>
                <td className="py-3 px-4">Disables trigger interaction</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">trigger</td>
                <td className="py-3 px-4 font-mono">ReactNode</td>
                <td className="py-3 px-4 font-mono">default button</td>
                <td className="py-3 px-4">Custom trigger content for opening the dropdown</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">placement</td>
                <td className="py-3 px-4 font-mono">'bottom' | 'top'</td>
                <td className="py-3 px-4 font-mono">'bottom'</td>
                <td className="py-3 px-4">Menu position</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">''</td>
                <td className="py-3 px-4">Additional classes for the wrapper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/components" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1">
          <span>←</span> Back to Components
        </Link>
      </section>
    </div>
  );
}
