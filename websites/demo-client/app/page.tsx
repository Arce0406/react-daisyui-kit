import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            React DaisyUI Kit
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            A beautiful and customizable React component library built with DaisyUI and Tailwind CSS. 
            Perfect for building modern, responsive web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/components"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explore Components
            </Link>
            <a
              href="https://github.com/Arce0406/react-daisyui-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Choose React DaisyUI Kit?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🎨 Beautiful Components</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Carefully crafted components with DaisyUI, featuring a modern and clean design.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">⚡ Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple and intuitive API. Just import and use in your React projects.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🛠 Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built on Tailwind CSS, making it easy to customize colors, styles, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</p>
            <p className="text-gray-600 dark:text-gray-400">Components</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</p>
            <p className="text-gray-600 dark:text-gray-400">TypeScript</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">MIT</p>
            <p className="text-gray-600 dark:text-gray-400">License</p>
          </div>
        </div>
      </section>
    </div>
  );
}
