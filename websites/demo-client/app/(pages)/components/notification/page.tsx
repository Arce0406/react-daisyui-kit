'use client';

import Link from 'next/link';
import {
  Notification,
  NotificationContainer,
  NotificationProvider,
} from '@featherstudio/react-daisyui-kit';

export default function NotificationPage() {
  const showSuccessNotification = () => {
    Notification.success({
      message: 'Operation completed successfully!',
    });
  };

  const showErrorNotification = () => {
    Notification.error({
      title: 'Operation Failed',
      message: 'Please check your network connection and try again.',
    });
  };

  const showWarningNotification = () => {
    Notification.warning({
      title: 'Confirm Deletion',
      message: 'This action cannot be undone. Are you sure you want to delete?',
      actions: [
        {
          label: 'Confirm',
          onClick: () => {
            console.log('Item deleted');
          },
          className: 'btn-error',
        },
        {
          label: 'Cancel',
          onClick: () => {
            console.log('Action canceled');
          },
        },
      ],
      duration: 0,
    });
  };

  const showInfoNotification = () => {
    Notification.info({
      message: 'The system will undergo maintenance in 5 minutes.',
    });
  };

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Notification</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Notification Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Modal-based notification system with Ant Design-inspired API. Perfect for important messages requiring user attention.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <NotificationProvider>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-success" onClick={showSuccessNotification}>
                Show Success Notification
              </button>
              <button className="btn btn-error" onClick={showErrorNotification}>
                Show Error Notification
              </button>
              <button className="btn btn-warning" onClick={showWarningNotification}>
                Show Warning Notification (With Actions)
              </button>
              <button className="btn btn-info" onClick={showInfoNotification}>
                Show Info Notification
              </button>
            </div>
            <NotificationContainer />
          </NotificationProvider>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Setup Provider</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Wrap your application with <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">NotificationProvider</code> and add <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">NotificationContainer</code>:
            </p>
            <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
              <pre className="text-gray-100 font-mono text-sm">
{`import { NotificationProvider, NotificationContainer } 
  from '@featherstudio/react-daisyui-kit';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NotificationProvider>
          {children}
          <NotificationContainer />
        </NotificationProvider>
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
{`import { Notification } from '@featherstudio/react-daisyui-kit';

// Success notification
Notification.success({
  message: 'Operation completed successfully!'
});

// Error notification
Notification.error({
  title: 'Operation Failed',
  message: 'Please check your network connection and try again.'
});

// Warning notification
Notification.warning({
  message: 'You have unsaved changes.'
});

// Info notification
Notification.info({
  message: 'The system will undergo maintenance in 5 minutes.'
});`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. With Action Buttons</h3>
            <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
              <pre className="text-gray-100 font-mono text-sm">
{`Notification.warning({
  title: 'Confirm Deletion',
  message: 'This action cannot be undone. Are you sure you want to delete?',
  actions: [
    {
      label: 'Confirm',
      onClick: () => {
        // Delete logic here
        Notification.success({ message: 'Deleted successfully.' });
      },
      className: 'btn-error'
    },
    {
      label: 'Cancel',
      onClick: () => {
        Notification.info({ message: 'Action canceled.' });
      }
    }
  ],
  duration: 0 // Won't auto-close
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
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ant Design API</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Familiar API design similar to Ant Design notification.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Modal-Based Display</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Uses DaisyUI Modal for centered, prominent display.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Action Buttons</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Support custom action buttons for user interaction.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Close Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Optional auto-close with configurable duration.
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
                <td className="py-3 px-4">Notification content (required)</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">title</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Notification title</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">duration</td>
                <td className="py-3 px-4 font-mono">number</td>
                <td className="py-3 px-4 font-mono">0</td>
                <td className="py-3 px-4">Duration in ms. 0 = no auto-close</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">actions</td>
                <td className="py-3 px-4 font-mono">NotificationAction[]</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Action buttons array</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">closable</td>
                <td className="py-3 px-4 font-mono">boolean</td>
                <td className="py-3 px-4 font-mono">true</td>
                <td className="py-3 px-4">Show close button</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onClose</td>
                <td className="py-3 px-4 font-mono">() =&gt; void</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Close callback function</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Action Button Config</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 font-semibold">Property</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">label</td>
                  <td className="py-3 px-4 font-mono">string</td>
                  <td className="py-3 px-4">Button text label</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onClick</td>
                  <td className="py-3 px-4 font-mono">() =&gt; void</td>
                  <td className="py-3 px-4">Click event handler</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">className</td>
                  <td className="py-3 px-4 font-mono">string</td>
                  <td className="py-3 px-4">Button CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
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
