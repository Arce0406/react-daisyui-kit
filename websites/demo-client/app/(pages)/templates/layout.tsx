'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const templateTabs = [
  { label: 'Overview', href: '/templates' },
  { label: 'Login', href: '/templates/login' },
  { label: 'Blog', href: '/templates/blog' },
  { label: 'Dashboard', href: '/templates/dashboard' },
];

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Templates
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
          Explore ready-to-use page templates built with React DaisyUI Kit and DaisyUI.
        </p>

        <div className="tabs tabs-boxed w-full md:w-auto bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
          {templateTabs.map((tab) => {
            const isActive = pathname === tab.href;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`tab px-5 ${isActive ? 'tab-active bg-blue-600! text-white!' : 'text-gray-700 dark:text-gray-300'}`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </section>
    </div>
  );
}
