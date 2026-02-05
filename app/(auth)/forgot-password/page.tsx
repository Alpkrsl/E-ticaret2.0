"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Top nav */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            PremiumStore
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <Link href="/shop" className="hover:text-slate-900">
              Shop
            </Link>
            <Link href="/categories" className="hover:text-slate-900">
              Categories
            </Link>
            <Link href="/support" className="hover:text-slate-900">
              Support
            </Link>
          </nav>

          <Link
            href="/auth/login"
            className="inline-flex h-10 items-center justify-center rounded-md border border-blue-600 bg-white px-5 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <LockMiniIcon />
          </div>

          <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-slate-900">
            Forgot Password?
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-center text-sm text-slate-500">
            Enter the email address associated with your account and we&apos;ll
            send you a link to reset your password.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <MailIcon />
                </span>

                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-md border border-slate-200 px-10 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 border-t pt-5">
            <Link
              href="/auth/login"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <ArrowLeftIcon />
              Back to Sign In
            </Link>
          </div>
        </div>
      </main>

      {/* Small note */}
      <div className="pb-10 text-center text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <ShieldIcon />
          Secure encrypted connection for your privacy
        </span>
      </div>

      {/* Footer */}
      <footer className="py-5 text-center text-xs text-slate-400">
        © 2024 PremiumStore E-Commerce. All rights reserved.
      </footer>
    </div>
  );
}

/* ---------------- icons ---------------- */

function LockMiniIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 11h10v10H7z" />
      <path d="M9 11V8a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}
