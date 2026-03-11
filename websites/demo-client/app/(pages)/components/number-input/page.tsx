'use client';

import Link from 'next/link';
import { useState } from 'react';
import NumberInput from '@featherstudio/react-daisyui-kit/src/components/NumberInput';

export default function NumberInputPage() {
  const [quantity, setQuantity] = useState<number | undefined>(1);
  const [price, setPrice] = useState<number | undefined>(99.99);
  const [smallValue, setSmallValue] = useState<number | undefined>(12);
  const [largeValue, setLargeValue] = useState<number | undefined>(1200);

  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <span>/</span>
          <Link href="/components" className="hover:text-blue-600 dark:hover:text-blue-400">Components</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">NumberInput</span>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          NumberInput Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Numeric input component with value parsing, precision control, DaisyUI size variants, and native input attributes such as min / max / step.
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
          <div className="max-w-lg space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quantity (min 0, max 100, step 1)
              </label>
              <NumberInput
                value={quantity}
                onChange={(next) => setQuantity(typeof next === 'number' ? next : undefined)}
                min={0}
                max={100}
                step={1}
                placeholder="Enter quantity"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Current value: {quantity ?? '-'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Unit Price (precision 2)
              </label>
              <NumberInput
                value={price}
                onChange={(next) => setPrice(typeof next === 'number' ? next : undefined)}
                precision={2}
                step={0.01}
                min={0}
                placeholder="0.00"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Current value: {typeof price === 'number' ? price.toFixed(2) : '-'}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Size sm
                </label>
                <NumberInput
                  size="sm"
                  value={smallValue}
                  onChange={(next) => setSmallValue(typeof next === 'number' ? next : undefined)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Size lg
                </label>
                <NumberInput
                  size="lg"
                  value={largeValue}
                  onChange={(next) => setLargeValue(typeof next === 'number' ? next : undefined)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { NumberInput } from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState<number | undefined>(1);

  return (
    <NumberInput
      value={value}
      onChange={(next) => setValue(typeof next === 'number' ? next : undefined)}
      min={0}
      max={100}
      step={1}
      precision={2}
      size="md"
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Native Number Input</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Uses type=&quot;number&quot; and supports native attributes like min, max, and step.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Precision Control</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Use the precision prop to round user input to a fixed number of decimals.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DaisyUI Size Variants</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built-in size options: sm, md, and lg.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Error State Styling</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Pass error to apply DaisyUI error styles for validation feedback.
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
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">number | undefined</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">undefined</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Current value</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onChange</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">(value: number) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Callback when value changes</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">size</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'sm' | 'md' | 'lg'</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'md'</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input size variant</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">precision</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">number</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Decimal places after rounding</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">...rest input props</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">InputHTMLAttributes</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Supports native props like min, max, step, placeholder, disabled</td>
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
