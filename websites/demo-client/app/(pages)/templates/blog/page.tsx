'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Input, Tabs, type TabItem } from '@featherstudio/react-daisyui-kit';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'product' | 'engineering' | 'design' | 'culture';
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Designing Forms That Feel Fast',
    excerpt: 'How we combined Fieldset, Form, and Input patterns to reduce completion time by 21%.',
    category: 'design',
    author: 'Iris Chen',
    date: '2026-03-10',
    readTime: '6 min read',
    tags: ['ux', 'forms', 'conversion'],
  },
  {
    id: 'post-2',
    title: 'Shipping a Typed DataTable at Scale',
    excerpt: 'Lessons from adopting DataTable across five internal products with strict TypeScript contracts.',
    category: 'engineering',
    author: 'Evan Lin',
    date: '2026-03-08',
    readTime: '8 min read',
    tags: ['typescript', 'datatable', 'architecture'],
  },
  {
    id: 'post-3',
    title: 'What Changed in our Spring UI Kit Release',
    excerpt: 'A practical summary of component updates, migration notes, and roadmap highlights.',
    category: 'product',
    author: 'Mina Huang',
    date: '2026-03-05',
    readTime: '5 min read',
    tags: ['release', 'roadmap'],
  },
  {
    id: 'post-4',
    title: 'Rituals That Keep a Frontend Team Aligned',
    excerpt: 'Meeting patterns and async workflows that made cross-team collaboration smoother.',
    category: 'culture',
    author: 'Daniel Wu',
    date: '2026-03-02',
    readTime: '7 min read',
    tags: ['teamwork', 'process'],
  },
];

const categoryTabs: TabItem[] = [
  { id: 'all', label: 'All', content: 'Browse the latest posts across every category.' },
  { id: 'product', label: 'Product', content: 'Launch updates and roadmap stories.' },
  { id: 'engineering', label: 'Engineering', content: 'Implementation deep dives and architecture notes.' },
  { id: 'design', label: 'Design', content: 'Interface decisions, usability, and visual systems.' },
  { id: 'culture', label: 'Culture', content: 'How teams ship together and improve execution.' },
];

export default function BlogTemplatePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [keyword, setKeyword] = useState<string>('');

  const visiblePosts = useMemo(() => {
    return posts.filter((post) => {
      const inCategory = activeCategory === 'all' || post.category === activeCategory;
      const inKeyword =
        keyword.trim().length === 0 ||
        post.title.toLowerCase().includes(keyword.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(keyword.toLowerCase()) ||
        post.tags.join(' ').toLowerCase().includes(keyword.toLowerCase());

      return inCategory && inKeyword;
    });
  }, [activeCategory, keyword]);

  const featured = visiblePosts[0];
  const restPosts = visiblePosts.slice(1);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 p-8 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-3">Template / Blog</p>
        <h2 className="text-3xl sm:text-5xl font-black max-w-3xl leading-tight">
          Build a content hub with searchable posts and category-based navigation.
        </h2>
        <p className="text-slate-300 mt-4 max-w-2xl text-sm sm:text-base">
          This template pairs DaisyUI styling with kit controls to create a clean publication
          experience for product updates, technical writing, and team stories.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-5">
        <Input
          value={keyword}
          onChange={(value) => setKeyword(String(value))}
          placeholder="Search by title, excerpt, or tags"
          allowClear
        />
        <Tabs
          items={categoryTabs}
          activeTab={activeCategory}
          onTabChange={setActiveCategory}
          variant="bordered"
        />
      </section>

      {featured ? (
        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 lg:p-8">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              <span className="badge badge-primary badge-sm mb-3">Featured</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.tags.map((tag) => (
                  <span key={tag} className="badge badge-ghost badge-sm">#{tag}</span>
                ))}
              </div>
              <button type="button" className="btn btn-primary btn-sm">Read article</button>
            </div>
            <div className="lg:col-span-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Meta</p>
              <dl className="space-y-3 mt-3 text-sm">
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Author</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{featured.author}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Published</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{featured.date}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Reading time</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{featured.readTime}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      ) : (
        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No matching posts</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Try a different keyword or switch categories.</p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setKeyword('');
              setActiveCategory('all');
            }}
          >
            Reset filters
          </button>
        </section>
      )}

      {restPosts.length > 0 && (
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {restPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5"
            >
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">{post.category}</p>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">{post.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {post.author} · {post.date} · {post.readTime}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge badge-outline badge-xs">#{tag}</span>
                ))}
              </div>
              <Link href="/templates" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                Open detail view
              </Link>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
