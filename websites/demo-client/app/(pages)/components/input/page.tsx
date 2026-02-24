'use client';

import Link from 'next/link';
import { useState } from 'react';
import Input from '@featherstudio/react-daisyui-kit/src/components/Input';
import { FaUser, FaEnvelope, FaLock, FaSearch } from 'react-icons/fa';

export default function InputPage() {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [clearableValue, setClearableValue] = useState('');
  const [colorValue, setColorValue] = useState('');
  const [sizeValue, setSizeValue] = useState('');
  const [fileValue, setFileValue] = useState<FileList | null>(null);
  const [datalistValue, setDatalistValue] = useState('');

  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

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
          <span className="text-gray-900 dark:text-white font-medium">Input</span>
        </div>
      </section>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          Input Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A feature-rich input component that supports multiple types, autocomplete, clear button, and more. onChange directly passes the value instead of the event object.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-700">
            Form Control
          </span>
          <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full border border-green-200 dark:border-green-700">
            Compound Component
          </span>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Basic Usage</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md space-y-4">
            <Input
              type="text"
              placeholder="Enter text..."
              value={basicValue}
              onChange={(value) => setBasicValue(value as string)}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">Current value: {basicValue}</p>
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`import Input from '@featherstudio/react-daisyui-kit';
import { useState } from 'react';

const [value, setValue] = useState('');

<Input
  type="text"
  placeholder="Enter text..."
  value={value}
  onChange={(value) => setValue(value as string)}
/>`}
          </pre>
        </div>
      </section>

      {/* With Label and Field */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">With Field and Label</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md">
            <Input.Field>
              <Input.Label>Email</Input.Label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={emailValue}
                onChange={(value) => setEmailValue(value as string)}
              />
              <Input.Helper>Please enter a valid email address</Input.Helper>
            </Input.Field>
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`<Input.Field>
  <Input.Label>Email</Input.Label>
  <Input
    type="email"
    placeholder="your@email.com"
    value={emailValue}
    onChange={(value) => setEmailValue(value as string)}
  />
  <Input.Helper>Please enter a valid email address</Input.Helper>
</Input.Field>`}
          </pre>
        </div>
      </section>

      {/* Allow Clear */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Clear Button</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md">
            <Input
              allowClear
              placeholder="Clear button appears after typing"
              value={clearableValue}
              onChange={(value) => setClearableValue(value as string)}
            />
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`<Input
  allowClear
  placeholder="Clear button appears after typing"
  value={value}
  onChange={(value) => setValue(value as string)}
/>`}
          </pre>
        </div>
      </section>

      {/* Colors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Color Variants</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md space-y-4">
            <Input color="primary" placeholder="Primary" value={colorValue} onChange={(v) => setColorValue(v as string)} />
            <Input color="secondary" placeholder="Secondary" />
            <Input color="accent" placeholder="Accent" />
            <Input color="success" placeholder="Success" />
            <Input color="warning" placeholder="Warning" />
            <Input color="error" placeholder="Error" />
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`<Input color="primary" placeholder="Primary" />
<Input color="secondary" placeholder="Secondary" />
<Input color="accent" placeholder="Accent" />
<Input color="success" placeholder="Success" />
<Input color="warning" placeholder="Warning" />
<Input color="error" placeholder="Error" />`}
          </pre>
        </div>
      </section>

      {/* Sizes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sizes</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md space-y-4">
            <Input size="xs" placeholder="Extra Small" />
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium (default)" />
            <Input size="lg" placeholder="Large" />
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`<Input size="xs" placeholder="Extra Small" />
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`}
          </pre>
        </div>
      </section>

      {/* Input Group with Icons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Input with Icons (Input.Group)</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md space-y-4">
            <Input.Group>
              <FaUser className="opacity-70" />
              <Input type="text" placeholder="Username" />
            </Input.Group>

            <Input.Group>
              <FaEnvelope className="opacity-70" />
              <Input type="email" placeholder="Email" />
            </Input.Group>

            <Input.Group>
              <Input type="text" placeholder="Search" />
              <FaSearch className="opacity-70" />
            </Input.Group>

            <Input.Group>
              <FaLock className="opacity-70" />
              <Input type="password" placeholder="Password" className="border-0" />
              <kbd className="kbd kbd-sm">⌘K</kbd>
            </Input.Group>
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`import { FaUser, FaEnvelope, FaLock, FaSearch } from 'react-icons/fa';

<Input.Group>
  <FaUser className="opacity-70" />
  <Input type="text" placeholder="Username" className="border-0" />
</Input.Group>

<Input.Group>
  <Input type="text" placeholder="Search" className="border-0" />
  <FaSearch className="opacity-70" />
</Input.Group>

<Input.Group>
  <FaLock className="opacity-70" />
  <Input type="password" placeholder="Password" className="border-0" />
  <kbd className="kbd kbd-sm">⌘K</kbd>
</Input.Group>`}
          </pre>
        </div>
      </section>

      {/* Datalist (Autocomplete) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Autocomplete (Datalist)</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md">
            <Input
              placeholder="Select a fruit..."
              value={datalistValue}
              onChange={(value) => setDatalistValue(value as string)}
              datalist={{
                listId: 'fruits',
                suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
              }}
            />
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`<Input
  placeholder="Select a fruit..."
  value={value}
  onChange={(value) => setValue(value as string)}
  datalist={{
    listId: 'fruits',
    suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  }}
/>`}
          </pre>
        </div>
      </section>

      {/* File Input */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">File Upload</h2>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="max-w-md space-y-4">
            <Input
              type="file"
              onChange={(value) => {
                const files = value as FileList;
                setFileValue(files);
                console.log('Selected files:', files);
              }}
            />
            {fileValue && fileValue.length > 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Selected: {fileValue[0].name}
              </p>
            )}
          </div>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`const [fileValue, setFileValue] = useState<FileList | null>(null);

<Input
  type="file"
  onChange={(value) => {
    const files = value as FileList;
    setFileValue(files);
    console.log('Selected files:', files);
  }}
/>`}
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
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">value</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">string | FileList</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">The input value</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onChange</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">(value: string | FileList) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Callback when value changes, receives value directly instead of event</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">allowClear</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">false</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Show clear button</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">color</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'primary' | 'secondary' | 'accent' | ...</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input color</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">size</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Input size</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">ghost</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">false</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Ghost style</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">datalist</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">{'{ listId: string; suggestions: string[] }'}</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">-</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Autocomplete suggestions list</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">type</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">string</td>
                <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">'text'</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">HTML input type (支援 file 等所有類型)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sub Components */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sub Components</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono">Input.Field</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Form control wrapper using daisyUI's form-control
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono">Input.Label</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Label component, supports alt attribute for style switching
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono">Input.Group</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Combines input with icons, buttons, and other elements
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono">Input.Helper</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Helper text for additional guidance
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎯 Direct Value Passing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              onChange directly passes the value (string | FileList) without needing to extract from event object
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📁 File Upload Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically handles FileList when type="file", providing a unified API
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🧹 Clear Functionality</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built-in clear button, enabled with allowClear prop
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎨 Compound Component Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Provides flexible composition with Field, Label, Group, and Helper sub-components
            </p>
          </div>
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
