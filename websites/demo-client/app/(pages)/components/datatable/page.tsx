'use client';

import Link from 'next/link';
import { DataTable } from '@featherstudio/react-daisyui-kit';

interface DemoUser extends Record<string, unknown> {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER' | 'MODERATOR';
  isActive: boolean;
  createdAt: string;
}

const sampleUsers: DemoUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'ADMIN',
    isActive: true,
    createdAt: '2025-11-03'
  },
  {
    id: '2',
    name: 'Alice Chen',
    email: 'alice@example.com',
    role: 'USER',
    isActive: true,
    createdAt: '2025-10-26'
  },
  {
    id: '3',
    name: 'Brian Wang',
    email: 'brian@example.com',
    role: 'MODERATOR',
    isActive: false,
    createdAt: '2025-10-18'
  },
  {
    id: '4',
    name: 'Cynthia Lin',
    email: 'cynthia@example.com',
    role: 'USER',
    isActive: true,
    createdAt: '2025-10-11'
  },
  {
    id: '5',
    name: 'Cynthia Lin',
    email: 'cynthia@example.com',
    role: 'USER',
    isActive: true,
    createdAt: '2025-10-11'
  },
  {
    id: '6',
    name: 'Cynthia Lin',
    email: 'cynthia@example.com',
    role: 'USER',
    isActive: true,
    createdAt: '2025-10-11'
  }
];

const columns = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
    filterable: true
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
    filterable: true
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
    align: 'center' as const,
    render: (value: unknown) => {
      const role = String(value);
      const className = role === 'ADMIN'
        ? 'badge-error'
        : role === 'MODERATOR'
          ? 'badge-warning'
          : 'badge-info';

      return <span className={`badge badge-sm ${className}`}>{role}</span>;
    }
  },
  {
    key: 'isActive',
    title: 'Status',
    dataIndex: 'isActive',
    align: 'center' as const,
    sortable: true,
    render: (value: unknown) => (
      <span className={`badge badge-sm ${value ? 'badge-success' : 'badge-error'}`}>
        {value ? 'Active' : 'Inactive'}
      </span>
    )
  },
  {
    key: 'createdAt',
    title: 'Created At',
    dataIndex: 'createdAt',
    sortable: true,
    align: 'center' as const
  }
];

const summaryConfig = {
  show: true,
  fixed: true,
  columns: [
    {
      key: 'name',
      type: 'custom' as const,
      render: () => <strong>Total</strong>
    },
    {
      key: 'isActive',
      type: 'custom' as const,
      render: (data: DemoUser[]) => {
        const activeCount = data.filter((item) => item.isActive).length;
        return `${activeCount}/${data.length} Active`;
      }
    },
    {
      key: 'createdAt',
      type: 'count' as const,
      suffix: ' rows'
    }
  ]
};

export default function DataTablePage() {
  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link><span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">DataTable</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">DataTable Component</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          A comprehensive data table component with sorting, filtering, pagination, and responsive design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Preview</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <DataTable
            columns={columns}
            dataSource={sampleUsers}
            summary={summaryConfig}
            pagination={{
              current: 1,
              pageSize: 5,
              pageSizeOptions: [5, 10, 20],
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: true
            }}
            onRow={(record) => ({
              onClick: () => console.log('row clicked:', record),
              className: 'hover:bg-base-200'
            })}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Usage</h2>
        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
{`import { DataTable } from '@featherstudio/react-daisyui-kit';

export default function App() {
  const columns = [
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'email', title: 'Email', dataIndex: 'email', filterable: true },
  ];

  const data = [
    { name: 'John', email: 'john@example.com' },
  ];

  return (
    <DataTable
      columns={columns}
      dataSource={data}
      pagination={{
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
      }}
    />
  );
}`}
          </pre>
        </div>

        <div className="bg-gray-900 dark:bg-black p-6 rounded-lg overflow-x-auto mt-6">
          <pre className="text-gray-100 font-mono text-sm">
{`const summary = {
  show: true,
  fixed: true,
  columns: [
    { key: 'name', type: 'custom', render: () => <strong>Total</strong> },
    {
      key: 'isActive',
      type: 'custom',
      render: (data) =>
        data.filter((item) => item.isActive).length + '/' + data.length + ' Active'
    },
    { key: 'createdAt', type: 'count', suffix: ' rows' },
  ],
};

<DataTable
  columns={columns}
  dataSource={data}
  summary={summary}
  pagination={{ current: 1, pageSize: 10 }}
/>;`}
          </pre>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sorting</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Enable sorting per column with <code>sortable: true</code>.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pagination</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built-in page size switcher and quick jumper via <code>pagination</code> config.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Filtering</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Per-column filtering via <code>filterable: true</code>.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Summary Row</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Supports sum, avg, count and custom summary renderers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr></thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">columns</td>
                <td className="py-3 px-4 font-mono">Column[]</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Column configuration</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">dataSource</td>
                <td className="py-3 px-4 font-mono">Record&lt;string, unknown&gt;[]</td>
                <td className="py-3 px-4 font-mono">-</td>
                <td className="py-3 px-4">Table data</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">pagination</td>
                <td className="py-3 px-4 font-mono">PaginationConfig | false</td>
                <td className="py-3 px-4 font-mono">{`{ current: 1, pageSize: 10, ... }`}</td>
                <td className="py-3 px-4">Pagination behavior configuration</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">summary</td>
                <td className="py-3 px-4 font-mono">SummaryConfig</td>
                <td className="py-3 px-4 font-mono">undefined</td>
                <td className="py-3 px-4">Show summary row with sum/avg/count/custom</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-3 px-4 font-mono text-blue-600 dark:text-blue-400">emptyText</td>
                <td className="py-3 px-4 font-mono">string</td>
                <td className="py-3 px-4 font-mono">暫無資料</td>
                <td className="py-3 px-4">Text displayed when there is no data</td>
              </tr>
            </tbody>
          </table>
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
