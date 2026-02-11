"use client";

import Link from "next/link";

export default function AuthLoadingPage() {
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
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Spinner />
          </div>

          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
            Verifying your identity
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
            Please wait a moment. We&apos;re confirming your code and securing your session.
          </p>

          {/* Skeleton status box */}
          <div className="mt-8 rounded-xl bg-slate-50 p-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Security checks
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Validating one-time code",
                "Checking account security",
                "Creating secure session",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="relative inline-flex h-5 w-5 items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-blue-200 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-600" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700">{t}</p>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                      <div className="h-2 w-1/2 animate-pulse rounded-full bg-slate-300" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom helper */}
          <p className="mt-6 text-xs text-slate-400">
            This usually takes less than 10 seconds.
          </p>

          <div className="mt-6">
            <Link
              href="/auth/verify"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700"
            >
              <ArrowLeftIcon />
              Back to Verification
            </Link>
          </div>
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

function Spinner() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 animate-spin"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="M11 19l-7-7 7-7" />
    </svg>
  );
}
