'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Checkbox,
  Form,
  Input,
  Notification,
  NotificationContainer,
  NotificationProvider,
  PasswordInput,
  type FormValues,
} from '@featherstudio/react-daisyui-kit';

export default function LoginTemplatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (values: FormValues) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const email = String(values.email ?? '');
    const password = String(values.password ?? '');

    if (email === 'demo@reactkit.dev' && password === 'demo1234') {
      Notification.success({
        title: 'Sign in successful',
        message: 'Welcome back. You can now continue to your dashboard.',
      });
    } else {
      Notification.error({
        title: 'Sign in failed',
        message: 'Invalid credentials. Use demo@reactkit.dev / demo1234 to test.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <NotificationProvider>
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-linear-to-br from-blue-600 via-cyan-500 to-emerald-500 p-8 lg:p-10 text-white min-h-145 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-100/90 mb-4">Template / Login</p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
              Secure access with a polished sign in flow.
            </h2>
            <p className="text-blue-50/90 text-sm sm:text-base max-w-xl">
              This template combines DaisyUI styles with kit form controls, validation,
              and notification feedback so teams can bootstrap authentication UI faster.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="rounded-lg bg-white/15 border border-white/30 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wide text-blue-100">Validation</p>
              <p className="font-bold text-lg mt-1">Form rules</p>
            </div>
            <div className="rounded-lg bg-white/15 border border-white/30 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wide text-blue-100">Feedback</p>
              <p className="font-bold text-lg mt-1">Notification API</p>
            </div>
            <div className="rounded-lg bg-white/15 border border-white/30 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wide text-blue-100">Reusable</p>
              <p className="font-bold text-lg mt-1">Drop-in section</p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Sign in</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Try demo credentials: demo@reactkit.dev / demo1234
          </p>

          <Form onFinish={handleLogin} initialValues={{ rememberMe: true }}>
            <Form.Item
              name="email"
              label="Email"
              required
              rules={[
                {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email.',
                },
              ]}
            >
              <Input type="email" placeholder="you@company.com" allowClear />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              required
              rules={[
                {
                  min: 8,
                  message: 'Password must be at least 8 characters.',
                },
              ]}
            >
              <PasswordInput placeholder="Enter your password" />
            </Form.Item>

            <Form.Item name="rememberMe">
              <Checkbox label="Remember this device for 30 days" />
            </Form.Item>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full mt-2"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </Form>

          <div className="divider text-xs text-gray-500 dark:text-gray-400">or continue with</div>

          <div className="grid sm:grid-cols-2 gap-3">
            <button type="button" className="btn btn-outline">Google</button>
            <button type="button" className="btn btn-outline">GitHub</button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center">
            Need an account?{' '}
            <Link
              href="/templates"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Back to templates
            </Link>
          </p>
        </section>
      </div>

      <NotificationContainer />
    </NotificationProvider>
  );
}
