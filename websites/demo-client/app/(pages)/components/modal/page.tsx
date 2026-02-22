'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { Modal, type ModalRef, ModalTriggerButton } from '@featherstudio/react-daisyui-kit';

export default function ModalPage() {
  const modalRef = useRef<ModalRef>(null);
  const [result, setResult] = useState<string>('');

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Modal</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">Modal Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A modal dialog component built on native HTML dialog element, featuring ref-based control and customizable actions.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <div className="space-y-4">
            <ModalTriggerButton id="demo-modal">
              Open Modal
            </ModalTriggerButton>

            <Modal
              ref={modalRef}
              id="demo-modal"
              title="Demo Modal"
              onOk={() => {
                setResult('You clicked Confirm!');
                modalRef.current?.close();
              }}
              onClose={() => {
                setResult('Modal closed');
                modalRef.current?.close();
              }}
              okText="Confirm"
              closeText="Cancel"
            >
              <div className="py-4">
                <p>This is a Modal component from react-daisyui-kit.</p>
                <p>Click the buttons below to trigger onOk or onClose callbacks.</p>
              </div>
            </Modal>

            {result && (
              <div className="alert alert-info">
                <span>{result}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            {`import { useRef } from 'react';
import Modal, { ModalRef, ModalTriggerButton } from '@react-daisyui-kit/components/Modal';

export default function App() {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <ModalTriggerButton id="my-modal">
        Open Modal
      </ModalTriggerButton>
      <Modal
        ref={modalRef}
        id="my-modal"
        title="Modal Title"
        okText="Confirm"
        closeText="Cancel"
        onOk={() => {
          console.log('OK clicked');
          modalRef.current?.close();
        }}
        onClose={() => {
          console.log('Modal closed');
        }}
      >
        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
}`}
          </pre>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">HTML Dialog Element</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Built on native HTML &lt;dialog&gt; element for true modality.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ref-based Control</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Use ref with ModalRef to programmatically open/close the modal.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable Actions</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Configure confirm and cancel buttons with custom text and callbacks.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Sizes</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Support for XS to 7XL sizes to fit any content requirements.</p>
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
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">id</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Unique identifier for the modal</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">title</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Modal title</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="py-3 px-4 font-mono">ReactNode</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Modal content</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onOk</td>
                <td className="py-3 px-4 font-mono">function</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Callback when confirm button is clicked</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">okText</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">'確定'</td>
                <td className="py-3 px-4">Confirm button text</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">onClose</td>
                <td className="py-3 px-4 font-mono">function</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Callback when modal is closed</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">closeText</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">'取消'</td>
                <td className="py-3 px-4">Cancel button text</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">size</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">'md'</td>
                <td className="py-3 px-4">Modal size (xs, sm, md, lg, xl, 2xl, etc.)</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">loading</td>
                <td className="py-3 px-4 font-mono">boolean</td>
                <td className="py-3 px-4 font-mono">false</td>
                <td className="py-3 px-4">Disable buttons when loading</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ModalRef</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A ref interface that provides methods to control the modal programmatically. Passed to Modal via the <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">ref</code> prop.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Method</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">open()</td>
                <td className="py-3 px-4">Programmatically open the modal (equivalent to calling showModal())</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">close()</td>
                <td className="py-3 px-4">Programmatically close the modal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto mt-4">
          <pre className="text-gray-100 font-mono text-sm">
{`const modalRef = useRef<ModalRef>(null);

// Open the modal
modalRef.current?.open();

// Close the modal
modalRef.current?.close();`}
          </pre>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ModalTriggerButton</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A button component that triggers the modal to open. It connects to a Modal via the shared <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm">id</code> prop.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">Props</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2"><th className="text-left py-3 px-4 font-semibold">Prop</th><th className="text-left py-3 px-4 font-semibold">Type</th><th className="text-left py-3 px-4 font-semibold">Description</th></tr></thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">id</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4">Must match the Modal's id to connect them</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="py-3 px-4 font-mono">ReactNode</td>
                <td className="py-3 px-4">Button label or content</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 mt-6">Usage</h3>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`<ModalTriggerButton id="my-modal">
  Open Modal
</ModalTriggerButton>

<Modal id="my-modal" title="Title">
  Content
</Modal>`}
          </pre>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/components" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 transition-colors">
          <span>←</span> Back to Components
        </Link>
      </section>
    </div>
  );
}
