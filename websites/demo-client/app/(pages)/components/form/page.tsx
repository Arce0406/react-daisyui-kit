'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FormPage() {
  const [formResult, setFormResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);

  const handleFormSubmit = () => {
    // Simulated form submission
    const mockData = {
      username: 'john_doe',
      email: 'john@example.com',
      age: 25,
      gender: 'male',
      country: 'tw',
      skills: ['javascript', 'typescript'],
      newsletter: true,
      bio: 'Full stack developer...',
      experience: 3
    };
    setFormResult(mockData);
    setShowResult(true);
  };

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Form</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Form Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Ant Design-inspired form system with validation, state management, and TypeScript support. Build complex forms with ease.
        </p>
      </section>

      {/* Interactive Demo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Interactive Demo</h2>
        <div className="max-w-2xl bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }} className="space-y-4">
            {/* Text Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="Enter username"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Age <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="18"
                min="1"
                max="120"
                required
              />
            </div>

            {/* Radio Group */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" value="male" className="w-4 h-4" defaultChecked />
                  <span className="text-gray-700 dark:text-gray-300">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" value="female" className="w-4 h-4" />
                  <span className="text-gray-700 dark:text-gray-300">Female</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" value="other" className="w-4 h-4" />
                  <span className="text-gray-700 dark:text-gray-300">Other</span>
                </label>
              </div>
            </div>

            {/* Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                required
              >
                <option value="">Select country...</option>
                <option value="tw">Taiwan</option>
                <option value="us">United States</option>
                <option value="jp">Japan</option>
                <option value="cn">China</option>
              </select>
            </div>

            {/* Multiple Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Skills
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="javascript" className="w-4 h-4" />
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="typescript" className="w-4 h-4" />
                  <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="react" className="w-4 h-4" />
                  <span className="text-gray-700 dark:text-gray-300">React</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" value="nodejs" className="w-4 h-4" />
                  <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                </label>
              </div>
            </div>

            {/* TextArea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Bio
              </label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="Tell us about yourself..."
                rows={3}
              />
            </div>

            {/* Single Checkbox */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Subscribe to newsletter</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <button 
                type="button" 
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Reset
              </button>
              <button 
                type="submit" 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Result Display */}
          {showResult && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-green-900 dark:text-green-200">Form Submitted Successfully!</h3>
                <button 
                  onClick={() => setShowResult(false)}
                  className="text-green-600 hover:text-green-800 dark:text-green-400"
                >
                  ×
                </button>
              </div>
              <pre className="text-sm text-green-800 dark:text-green-300 overflow-x-auto">
                {JSON.stringify(formResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ant Design API</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Familiar API design modeled after Ant Design Form.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Built-in Validation</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Comprehensive validation rules with custom validators.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">TypeScript Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full type safety for form values and validation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">State Management</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatic form state tracking and updates.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Controls</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Works with Input, Select, Checkbox, RadioGroup, etc.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dynamic Forms</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Support for dynamic form fields and arrays.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage Example</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { Form, Input, Select, Checkbox, RadioGroup } 
  from '@featherstudio/react-daisyui-kit';

export default function MyForm() {
  const handleFinish = (values) => {
    console.log('Form values:', values);
    alert(JSON.stringify(values, null, 2));
  };

  const handleValuesChange = (changedValues, allValues) => {
    console.log('Changed:', changedValues);
  };

  return (
    <Form
      onFinish={handleFinish}
      onValuesChange={handleValuesChange}
      initialValues={{ gender: 'male', age: 18 }}
    >
      <Form.Item name="username" label="Username" required
        rules={[
          { min: 3, message: 'Min 3 characters' },
          { max: 20, message: 'Max 20 characters' }
        ]}
      >
        <Input placeholder="Enter username" />
      </Form.Item>

      <Form.Item name="email" label="Email" required
        rules={[
          { 
            pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            message: 'Invalid email format'
          }
        ]}
      >
        <Input type="email" placeholder="your@email.com" />
      </Form.Item>

      <Form.Item name="age" label="Age" required>
        <NumberInput min={1} max={100} />
      </Form.Item>

      <Form.Item name="gender" label="Gender" required>
        <RadioGroup
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' }
          ]}
          direction="horizontal"
        />
      </Form.Item>

      <Form.Item name="country" label="Country" required>
        <Select
          placeholder="Select country"
          options={[
            { label: 'Taiwan', value: 'tw' },
            { label: 'USA', value: 'us' },
            { label: 'Japan', value: 'jp' }
          ]}
        />
      </Form.Item>

      <Form.Item name="bio" label="Bio">
        <TextArea placeholder="Tell us about yourself" rows={3} />
      </Form.Item>

      <Form.Item name="agree" required
        rules={[
          {
            validator: async (value) => {
              if (!value) return 'You must agree';
              return '';
            }
          }
        ]}
      >
        <Checkbox label="I agree to terms and conditions" />
      </Form.Item>

      <div className="flex gap-3">
        <button type="button" className="btn btn-ghost">
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </Form>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Validation Rules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Validation Rules</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 px-4 font-semibold">Rule</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">required</td>
                <td className="py-3 px-4 font-mono">boolean</td>
                <td className="py-3 px-4">Field is required</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">min</td>
                <td className="py-3 px-4 font-mono">number</td>
                <td className="py-3 px-4">Minimum length</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">max</td>
                <td className="py-3 px-4 font-mono">number</td>
                <td className="py-3 px-4">Maximum length</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">pattern</td>
                <td className="py-3 px-4 font-mono">RegExp</td>
                <td className="py-3 px-4">Pattern to match</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">validator</td>
                <td className="py-3 px-4 font-mono">function</td>
                <td className="py-3 px-4">Custom validation function</td>
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
