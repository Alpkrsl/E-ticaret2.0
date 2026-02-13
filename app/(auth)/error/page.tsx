"use client";

import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Top bar */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <ShieldLogo />
            </span>
            PremiumStore
          </Link>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <Link href="/help" className="hover:text-slate-900">
              Help
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600">
            <ErrorIcon />
          </div>

          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
            Verification failed
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
            We couldn’t verify your code. This may happen if the code is incorrect or expired.
          </p>

          {/* Tips box */}
          <div className="mt-7 rounded-xl bg-slate-50 p-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Try this
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                Resend a new code and try again
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                Make sure you entered all 6 digits
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                Check your device time is correct
              </li>
            </ul>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 space-y-3">
            <Link
              href="/auth/verify"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Try again
              <ArrowRightIcon />
            </Link>

            <Link
              href="/auth/login"
              className="inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Back to Login
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Need help?{" "}
            <Link href="/help" className="font-semibold text-blue-600 hover:underline">
              Contact support
            </Link>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-400">
        <div className="flex items-center justify-center gap-6">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <p className="mt-2">© 2024 PremiumStore Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ---------------- icons ---------------- */

function ShieldLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}
