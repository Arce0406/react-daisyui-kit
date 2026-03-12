'use client';

import { useMemo, useRef, useState } from 'react';
import {
  DataTable,
  Dropdowns,
  Modal,
  ModalTriggerButton,
  Tabs,
  ToastContainer,
  ToastProvider,
  toast,
  type DropdownItem,
  type ModalRef,
  type TabItem,
} from '@featherstudio/react-daisyui-kit';

interface OrderRow extends Record<string, unknown> {
  id: string;
  customer: string;
  plan: 'Starter' | 'Growth' | 'Enterprise';
  amount: number;
  status: 'Paid' | 'Pending' | 'Refunded';
  createdAt: string;
}

const overviewTabs: TabItem[] = [
  { id: 'today', label: 'Today', content: 'Realtime performance snapshot for today.' },
  { id: 'week', label: 'This Week', content: 'Weekly trend of revenue and active users.' },
  { id: 'month', label: 'This Month', content: 'Monthly benchmark for growth and retention.' },
];

const orders: OrderRow[] = [
  { id: 'ORD-1008', customer: 'Lumi Labs', plan: 'Enterprise', amount: 4200, status: 'Paid', createdAt: '2026-03-12' },
  { id: 'ORD-1007', customer: 'North Peak', plan: 'Growth', amount: 880, status: 'Pending', createdAt: '2026-03-12' },
  { id: 'ORD-1006', customer: 'Atlas Digital', plan: 'Starter', amount: 199, status: 'Refunded', createdAt: '2026-03-11' },
  { id: 'ORD-1005', customer: 'Green Pixel', plan: 'Growth', amount: 880, status: 'Paid', createdAt: '2026-03-11' },
  { id: 'ORD-1004', customer: 'Scale Forge', plan: 'Starter', amount: 199, status: 'Paid', createdAt: '2026-03-10' },
  { id: 'ORD-1003', customer: 'Brightline', plan: 'Enterprise', amount: 4200, status: 'Pending', createdAt: '2026-03-09' },
];

const tableColumns = [
  {
    key: 'id',
    title: 'Order ID',
    dataIndex: 'id',
    sortable: true,
  },
  {
    key: 'customer',
    title: 'Customer',
    dataIndex: 'customer',
    sortable: true,
    filterable: true,
  },
  {
    key: 'plan',
    title: 'Plan',
    dataIndex: 'plan',
    align: 'center' as const,
    render: (value: unknown) => {
      const plan = String(value);
      const style = plan === 'Enterprise' ? 'badge-primary' : plan === 'Growth' ? 'badge-info' : 'badge-ghost';

      return <span className={`badge badge-sm ${style}`}>{plan}</span>;
    },
  },
  {
    key: 'amount',
    title: 'Amount',
    dataIndex: 'amount',
    sortable: true,
    align: 'right' as const,
    render: (value: unknown) => `$${Number(value).toLocaleString('en-US')}`,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    align: 'center' as const,
    sortable: true,
    render: (value: unknown) => {
      const status = String(value);
      const style = status === 'Paid' ? 'badge-success' : status === 'Pending' ? 'badge-warning' : 'badge-error';

      return <span className={`badge badge-sm ${style}`}>{status}</span>;
    },
  },
  {
    key: 'createdAt',
    title: 'Created At',
    dataIndex: 'createdAt',
    sortable: true,
    align: 'center' as const,
  },
];

export default function DashboardTemplatePage() {
  const [activeTab, setActiveTab] = useState<string>('today');
  const modalRef = useRef<ModalRef>(null);

  const actionItems = useMemo<DropdownItem[]>(
    () => [
      { key: 'export-csv', label: 'Export CSV' },
      { key: 'export-json', label: 'Export JSON' },
      { divider: true },
      { key: 'archive', label: 'Archive Reports' },
      { key: 'delete', label: 'Delete All Pending', danger: true },
    ],
    []
  );

  const handleQuickAction = (key: string) => {
    if (key === 'delete') {
      toast.warning('Draft pending orders are queued for deletion review.');
      return;
    }

    toast.success(`Action completed: ${key}`);
  };

  return (
    <ToastProvider>
      <div className="space-y-8">
        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 sm:p-8">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-2">Template / Dashboard</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">Revenue Operations</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
                Admin dashboard template for SaaS teams with analytics cards, order table,
                quick actions, and reporting workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Dropdowns
                items={actionItems}
                onSelect={handleQuickAction}
                trigger={<button className="btn btn-outline" type="button">Quick Actions</button>}
              />

              <ModalTriggerButton id="create-report">Create report</ModalTriggerButton>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <article className="rounded-xl border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800 p-5">
            <p className="text-sm text-emerald-700 dark:text-emerald-300">MRR</p>
            <p className="text-3xl font-black text-emerald-900 dark:text-emerald-200 mt-1">$248,320</p>
            <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80 mt-2">+8.4% vs last month</p>
          </article>
          <article className="rounded-xl border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 p-5">
            <p className="text-sm text-blue-700 dark:text-blue-300">Active Accounts</p>
            <p className="text-3xl font-black text-blue-900 dark:text-blue-200 mt-1">1,284</p>
            <p className="text-xs text-blue-700/80 dark:text-blue-300/80 mt-2">+32 new this week</p>
          </article>
          <article className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-700 dark:text-amber-300">Pending Orders</p>
            <p className="text-3xl font-black text-amber-900 dark:text-amber-200 mt-1">17</p>
            <p className="text-xs text-amber-700/80 dark:text-amber-300/80 mt-2">Need manual verification</p>
          </article>
          <article className="rounded-xl border border-violet-200 bg-violet-50 dark:bg-violet-900/20 dark:border-violet-800 p-5">
            <p className="text-sm text-violet-700 dark:text-violet-300">Churn Risk</p>
            <p className="text-3xl font-black text-violet-900 dark:text-violet-200 mt-1">4.2%</p>
            <p className="text-xs text-violet-700/80 dark:text-violet-300/80 mt-2">Below quarterly target</p>
          </article>
        </section>

        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
          <div className="mb-4">
            <Tabs items={overviewTabs} activeTab={activeTab} onTabChange={setActiveTab} variant="boxed" />
          </div>
          <DataTable
            columns={tableColumns}
            dataSource={orders}
            pagination={{
              current: 1,
              pageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: [5, 10, 20],
              showTotal: true,
            }}
            onRow={(record) => ({
              className: 'hover:bg-base-200 cursor-pointer',
              onClick: () => toast.info(`Selected ${String(record.id)}`),
            })}
          />
        </section>

        <Modal
          ref={modalRef}
          id="create-report"
          title="Create Monthly Report"
          okText="Generate"
          closeText="Cancel"
          onOk={() => {
            toast.success('Report generation started. You will receive a notification shortly.');
            modalRef.current?.close();
          }}
          onClose={() => modalRef.current?.close()}
        >
          <div className="space-y-3 py-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Build a consolidated report including MRR trends, churn risk, and account activity.
            </p>
            <label className="label cursor-pointer justify-start gap-3">
              <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
              <span className="label-text">Include cohort retention metrics</span>
            </label>
            <label className="label cursor-pointer justify-start gap-3">
              <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
              <span className="label-text">Send PDF to finance@reactkit.dev</span>
            </label>
          </div>
        </Modal>
      </div>

      <ToastContainer />
    </ToastProvider>
  );
}
