'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Tabs, type TabItem } from '@featherstudio/react-daisyui-kit';

const DEMO_ITEMS: TabItem[] = [
  { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
  { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
  { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
];

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Tabs</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Tabs Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Tabbed interface for organizing content into separate panels.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <Tabs
            items={DEMO_ITEMS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { Tabs, type TabItem } from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

const items: TabItem[] = [
  { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
  { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
];

export default function App() {
  const [active, setActive] = useState<string>('tab1');

  return (
    <Tabs
      items={items}
      activeTab={active}
      onTabChange={setActive}
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Navigation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Click tabs to switch between content panels.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Controlled & Uncontrolled</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Supports both controlled (activeTab + onTabChange) and uncontrolled usage.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Variants</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Choose from default, bordered, lifted, or boxed styles.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Icon Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Each tab item can include an optional icon alongside the label.
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
                <td className="py-3 px-4 font-mono">TabItem[]</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Array of tab definitions (id, label, content, disabled?, icon?)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">activeTab</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Controlled active tab id</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onTabChange</td>
                <td className="py-3 px-4 font-mono">(tabId: string) =&gt; void</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Callback when active tab changes</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">variant</td>
                <td className="py-3 px-4 font-mono">'default' | 'bordered' | 'lifted' | 'boxed'</td>
                <td className="py-3 px-4 font-mono">'default'</td>
                <td className="py-3 px-4">Tab style variant</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">size</td>
                <td className="py-3 px-4 font-mono">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td className="py-3 px-4 font-mono">'md'</td>
                <td className="py-3 px-4">Tab size</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">position</td>
                <td className="py-3 px-4 font-mono">'top' | 'bottom'</td>
                <td className="py-3 px-4 font-mono">'top'</td>
                <td className="py-3 px-4">Tab bar position</td>
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
