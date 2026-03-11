'use client';

import { Fieldset, type FieldsetItem, type FieldsetColSpan } from '@featherstudio/react-daisyui-kit';
import Link from 'next/link';

const basicItems: FieldsetItem[] = [
  {
    label: 'Email',
    content: <input type="email" className="input input-bordered w-full" placeholder="you@example.com" />,
  },
  {
    label: 'Username',
    content: <input type="text" className="input input-bordered w-full" placeholder="johndoe" />,
  },
  {
    label: 'Phone',
    content: <input type="tel" className="input input-bordered w-full" placeholder="+1 234 567 890" />,
  },
];

const twoColSpan: FieldsetColSpan = { xs: 1, md: 2 };

export default function FieldsetPage() {
  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Fieldset</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Fieldset Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Group related form fields together with a legend, responsive column layout, and built-in loading skeleton.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-4 space-y-8">

          {/* Basic */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Basic</p>
            <Fieldset legend="Account Settings" items={basicItems} />
          </div>

          {/* Two-column responsive */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Responsive 2-column (md+)</p>
            <Fieldset legend="Profile" items={basicItems} colSpan={twoColSpan} />
          </div>

          {/* Loading state */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Loading state</p>
            <Fieldset legend="Loading…" items={basicItems} loading />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { Fieldset, type FieldsetItem } from '@featherstudio/react-daisyui-kit';

const items: FieldsetItem[] = [
  { label: 'Email',    content: <input type="email" className="input input-bordered w-full" /> },
  { label: 'Username', content: <input type="text"  className="input input-bordered w-full" /> },
];

export default function App() {
  return (
    <Fieldset
      legend="Account Settings"
      items={items}
      colSpan={{ xs: 1, md: 2 }}
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Items-based API</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Pass an array of <code>FieldsetItem</code> objects — each with a <code>label</code> and <code>content</code> node.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Responsive Columns</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Control column count per breakpoint via <code>colSpan</code> (xs / sm / md / lg / xl).
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Loading Skeleton</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Set <code>loading</code> to replace content with a skeleton placeholder automatically.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Direction</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Use <code>direction</code> to switch label/content layout between row and column per breakpoint.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">FieldsetItem Type</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Field</th><th className="text-left py-3 px-4 font-semibold">Type</th><th className="text-left py-3 px-4 font-semibold">Required</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">label</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Label text displayed above the field content</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">content</td>
                <td className="py-3 px-4 font-mono">ReactNode</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Any React node to render as the field value or control</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">inputProps</td>
                <td className="py-3 px-4 font-mono">InputHTMLAttributes</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Native input props when rendering a bare input element</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Prop</th><th className="text-left py-3 px-4 font-semibold">Type</th><th className="text-left py-3 px-4 font-semibold">Default</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">items</td>
                <td className="py-3 px-4 font-mono">FieldsetItem[]</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">List of field definitions to render (required)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">legend</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Optional legend / title for the fieldset group</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">colSpan</td>
                <td className="py-3 px-4 font-mono">FieldsetColSpan</td>
                <td className="py-3 px-4 font-mono">1 col</td>
                <td className="py-3 px-4">Responsive grid column count — keys: xs / sm / md / lg / xl</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">loading</td>
                <td className="py-3 px-4 font-mono">boolean</td>
                <td className="py-3 px-4 font-mono">false</td>
                <td className="py-3 px-4">Show a loading skeleton instead of items</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">direction</td>
                <td className="py-3 px-4 font-mono">FieldsetDirection</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Per-breakpoint flex direction for the label/content pair ('row' | 'col')</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Additional classes forwarded to the fieldset element</td>
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
