'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ButtonPage() {
  const [variantExample, setVariiantExample] = useState('primary');
  const [sizeExample, setSizeExample] = useState('md');

  const sizeMap = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantMap: Record<string, { bg: string; text: string; hover: string }> = {
    primary: {
      bg: 'bg-blue-600',
      text: 'text-white',
      hover: 'hover:bg-blue-700',
    },
    secondary: {
      bg: 'bg-gray-200 dark:bg-gray-700',
      text: 'text-gray-900 dark:text-white',
      hover: 'hover:bg-gray-300 dark:hover:bg-gray-600',
    },
    success: {
      bg: 'bg-green-600',
      text: 'text-white',
      hover: 'hover:bg-green-700',
    },
    danger: {
      bg: 'bg-red-600',
      text: 'text-white',
      hover: 'hover:bg-red-700',
    },
  };

  const currentVariant = variantMap[variantExample];

  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <span>/</span>
          <Link href="/components" className="hover:text-blue-600 dark:hover:text-blue-400">
            Components
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Button</span>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          Button Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A versatile and interactive button component for your application. Supports multiple variants, 
          sizes, and states to fit any design need.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700">
            Form Control
          </span>
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full border border-green-200 dark:border-green-700">
            Interactive
          </span>
        </div>
      </section>

      {/* Live Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6 flex items-center justify-center min-h-40">
          <button
            className={`${currentVariant.bg} ${currentVariant.text} ${currentVariant.hover} rounded-lg font-medium transition-colors ${sizeMap[sizeExample as keyof typeof sizeMap]}`}
          >
            Click me
          </button>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Variant</h3>
            <div className="space-y-3">
              {Object.keys(variantMap).map((variant) => (
                <label key={variant} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={variantExample === variant}
                    onChange={(e) => setVariiantExample(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 dark:text-gray-300 capitalize">{variant}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Size</h3>
            <div className="space-y-3">
              {(Object.keys(sizeMap) as Array<keyof typeof sizeMap>).map((size) => (
                <label key={size} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={sizeExample === size}
                    onChange={(e) => setSizeExample(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 dark:text-gray-300 uppercase text-sm">{size}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Variants</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Choose from primary, secondary, success, and danger variants to match your design.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Sizes</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Available in xs, sm, md, and lg sizes for any use case.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">State Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full support for hover, active, disabled, and loading states.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Easy to customize colors, sizes, and styles using Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { Button } from '@featherstudio/react-daisyui-kit';

export default function App() {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="success" size="lg">Success Button</Button>
      <Button variant="danger" size="sm" disabled>
        Disabled Button
      </Button>
    </>
  );
}`}
          </pre>
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
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">variant</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">
                  'primary' | 'secondary' | 'success' | 'danger'
                </td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'primary'</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Button variant style</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">size</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">
                  'xs' | 'sm' | 'md' | 'lg'
                </td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'md'</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Button size</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">disabled</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">false</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Disable the button</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onClick</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">function</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Click handler function</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">ReactNode</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Button label content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Back Link */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/components"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
        >
          <span>←</span> Back to Components
        </Link>
      </section>
    </div>
  );
}
