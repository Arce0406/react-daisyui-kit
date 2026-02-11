'use client';

import Link from 'next/link';

export default function ToastPage() {
  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Toast</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Toast Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Lightweight, non-intrusive notifications that appear briefly and auto-dismiss. Perfect for feedback messages.
        </p>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Setup Provider</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Wrap your application with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">ToastProvider</code> and add <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">ToastContainer</code>:
            </p>
            <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
              <pre className="text-gray-100 font-mono text-sm">
{`import { ToastProvider, ToastContainer } 
  from '@featherstudio/react-daisyui-kit';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>
          {children}
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  );
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Basic Usage</h3>
            <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
              <pre className="text-gray-100 font-mono text-sm">
{`import { toast } from '@featherstudio/react-daisyui-kit';

// Success toast
toast.success('Operation completed successfully!');

// Error toast
toast.error('Something went wrong');

// Warning toast
toast.warning('Please save your changes');

// Info toast
toast.info('New update available');`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Advanced Options</h3>
            <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
              <pre className="text-gray-100 font-mono text-sm">
{`// Custom duration (milliseconds)
toast.success('Saved!', 2000);

// Custom position
toast.show({
  message: 'Custom toast',
  type: 'info',
  duration: 3000,
  position: 'top-center',
  onClose: () => console.log('Toast closed')
});`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Dismiss</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically disappears after configurable timeout.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Types</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Success, error, warning, and info variants.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Non-Intrusive</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Appears in corner without blocking content.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable Position</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Top/bottom and left/right/center positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Props</h2>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Toast Methods</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 px-4 font-semibold">Method</th>
                <th className="text-left py-3 px-4 font-semibold">Parameters</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">toast.success()</td>
                <td className="py-3 px-4 font-mono text-sm">message, duration?</td>
                <td className="py-3 px-4">Show success toast</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">toast.error()</td>
                <td className="py-3 px-4 font-mono text-sm">message, duration?</td>
                <td className="py-3 px-4">Show error toast</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">toast.warning()</td>
                <td className="py-3 px-4 font-mono text-sm">message, duration?</td>
                <td className="py-3 px-4">Show warning toast</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">toast.info()</td>
                <td className="py-3 px-4 font-mono text-sm">message, duration?</td>
                <td className="py-3 px-4">Show info toast</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">toast.show()</td>
                <td className="py-3 px-4 font-mono text-sm">config</td>
                <td className="py-3 px-4">Show custom toast</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Toast Config</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 px-4 font-semibold">Property</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">message</td>
                <td className="py-3 px-4 font-mono">string | ReactNode</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Toast content (required)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">type</td>
                <td className="py-3 px-4 font-mono">'success' | 'error' | 'warning' | 'info'</td>
                <td className="py-3 px-4 font-mono">'info'</td>
                <td className="py-3 px-4">Toast type</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">duration</td>
                <td className="py-3 px-4 font-mono">number</td>
                <td className="py-3 px-4 font-mono">4000</td>
                <td className="py-3 px-4">Duration in milliseconds</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">position</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">'top-right'</td>
                <td className="py-3 px-4">Toast position</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onClose</td>
                <td className="py-3 px-4 font-mono">() =&gt; void</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Close callback</td>
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
