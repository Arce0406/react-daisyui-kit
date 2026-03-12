import Link from 'next/link';

const templates = [
  {
    title: 'Login Template',
    description: 'Sign-in and authentication page layout with form states and feedback.',
    href: '/templates/login',
  },
  {
    title: 'Blog Template',
    description: 'Content-first listing and article summary layout for blogs and media pages.',
    href: '/templates/blog',
  },
  {
    title: 'Dashboard Template',
    description: 'Data-centric admin layout for stats, actions, and table-driven workflows.',
    href: '/templates/dashboard',
  },
];

export default function TemplatesOverviewPage() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Link
          key={template.href}
          href={template.href}
          className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {template.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {template.description}
          </p>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
            Open template <span className="ml-1">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
