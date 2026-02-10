import Link from 'next/link';

interface Component {
  name: string;
  description: string;
  icon: string;
  slug: string;
}

const components: Component[] = [
  {
    name: 'Button',
    description: 'Interactive button component with multiple variants and sizes',
    icon: '🔘',
    slug: 'button',
  },
  {
    name: 'Input',
    description: 'Text input field with validation and styling support',
    icon: '⌨️',
    slug: 'input',
  },
  {
    name: 'Select',
    description: 'Dropdown select component for choosing from options',
    icon: '📋',
    slug: 'select',
  },
  {
    name: 'Checkbox',
    description: 'Checkbox component for boolean selections',
    icon: '☑️',
    slug: 'checkbox',
  },
  {
    name: 'RadioGroup',
    description: 'Radio button group for single selection from multiple options',
    icon: '◉',
    slug: 'radio-group',
  },
  {
    name: 'TextArea',
    description: 'Multi-line text input for longer content',
    icon: '📝',
    slug: 'textarea',
  },
  {
    name: 'NumberInput',
    description: 'Numeric input field with increment/decrement controls',
    icon: '🔢',
    slug: 'number-input',
  },
  {
    name: 'PasswordInput',
    description: 'Secure password input with visibility toggle',
    icon: '🔐',
    slug: 'password-input',
  },
  {
    name: 'ThousandSeparatorInput',
    description: 'Number input with automatic thousand separator formatting',
    icon: '💰',
    slug: 'thousand-separator-input',
  },
  {
    name: 'ComboInput',
    description: 'Combo box combining input and dropdown selection',
    icon: '🔍',
    slug: 'combo-input',
  },
  {
    name: 'DataTable',
    description: 'Comprehensive data table with sorting and pagination',
    icon: '📊',
    slug: 'datatable',
  },
  {
    name: 'Form',
    description: 'Complete form management system with validation',
    icon: '📄',
    slug: 'form',
  },
  {
    name: 'Modal',
    description: 'Modal dialog component for important user interactions',
    icon: '🪟',
    slug: 'modal',
  },
  {
    name: 'Toast',
    description: 'Non-intrusive notification messages',
    icon: '🔔',
    slug: 'toast',
  },
  {
    name: 'Notification',
    description: 'Prominent notification component with dismiss action',
    icon: '📢',
    slug: 'notification',
  },
  {
    name: 'Loading',
    description: 'Loading spinner component for async operations',
    icon: '⏳',
    slug: 'loading',
  },
  {
    name: 'Tabs',
    description: 'Tabbed interface for organizing content',
    icon: '📑',
    slug: 'tabs',
  },
  {
    name: 'Dropdowns',
    description: 'Dropdown menu component with various positioning options',
    icon: '▼',
    slug: 'dropdowns',
  },
  {
    name: 'Fieldset',
    description: 'Grouped form field component with legend',
    icon: '📦',
    slug: 'fieldset',
  },
  {
    name: 'PageLink',
    description: 'Navigation link component for page routing',
    icon: '🔗',
    slug: 'page-link',
  },
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Components
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore our collection of 20+ beautifully designed React components. Each component is fully
          customizable and built with TypeScript support.
        </p>
      </section>

      {/* Components Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Link
              key={component.name}
              href={`/components/${component.slug}`}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{component.icon}</span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                  Component
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {component.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {component.description}
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                View Details
                <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Ready to use these components?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Install React DaisyUI Kit via npm or yarn and start building amazing UIs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.npmjs.com/package/@featherstudio/react-daisyui-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View on NPM
          </a>
          <a
            href="https://github.com/Arce0406/react-daisyui-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          >
            GitHub Repository
          </a>
        </div>
      </section>
    </div>
  );
}
