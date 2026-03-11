'use client';

import { LoadingOverlay, LoadingSkeleton } from '@featherstudio/react-daisyui-kit';
import Link from 'next/link';
import { useState } from 'react';

export default function LoadingPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Loading</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Loading Components</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Two loading components: <code>LoadingOverlay</code> for full-screen blocking states, and <code>LoadingSkeleton</code> for inline placeholder content.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6 space-y-8">

          {/* LoadingSkeleton */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              <code>LoadingSkeleton</code> — default height (5rem)
            </p>
            <LoadingSkeleton />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              <code>LoadingSkeleton</code> — custom height (2rem)
            </p>
            <LoadingSkeleton height="2rem" />
          </div>

          {/* LoadingOverlay */}
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              <code>LoadingOverlay</code> — full-screen overlay (click button to preview)
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setShowOverlay(true);
                setTimeout(() => setShowOverlay(false), 2000);
              }}
            >
              Show Overlay (2s)
            </button>
            {showOverlay && <LoadingOverlay />}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { LoadingOverlay, LoadingSkeleton } from '@featherstudio/react-daisyui-kit';

// Skeleton placeholder — renders inline
<LoadingSkeleton />
<LoadingSkeleton height="2rem" />

// Full-screen overlay with spinner — renders fixed over the whole page
<LoadingOverlay size="lg" />`}
          </pre>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Full-screen Overlay</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <code>LoadingOverlay</code> renders a fixed backdrop covering the entire viewport with a centered spinner.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Spinner Size</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Control spinner size via the <code>size</code> prop using DaisyUI breakpoint values: xs / sm / md / lg / xl.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Skeleton Placeholder</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <code>LoadingSkeleton</code> renders a full-width animated skeleton block for inline content placeholders.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configurable Height</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Set <code>height</code> on <code>LoadingSkeleton</code> as any CSS value (e.g. <code>'3rem'</code>, <code>80</code>) to match your layout.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Props</h2>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">LoadingOverlay</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Prop</th><th className="text-left py-3 px-4 font-semibold">Type</th><th className="text-left py-3 px-4 font-semibold">Default</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">size</td>
                <td className="py-3 px-4 font-mono">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td className="py-3 px-4 font-mono">'lg'</td>
                <td className="py-3 px-4">DaisyUI spinner size</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">LoadingSkeleton</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Prop</th><th className="text-left py-3 px-4 font-semibold">Type</th><th className="text-left py-3 px-4 font-semibold">Default</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">height</td>
                <td className="py-3 px-4 font-mono">number | string</td>
                <td className="py-3 px-4 font-mono">'5rem'</td>
                <td className="py-3 px-4">CSS height of the skeleton block</td>
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
