"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
     

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600">
            <ErrorIcon />
          </div>

          <h1 className="mt-6 text-2xl font-semibold text-slate-900">
            Something went wrong
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            An unexpected error occurred. Please try again or return home.
          </p>

          {/* Dev info (prod’da otomatik gizlenir) */}
          {process.env.NODE_ENV === "development" && (
            <pre className="mt-4 max-h-32 overflow-auto rounded-md bg-slate-100 p-3 text-xs text-slate-600 text-left">
              {error.message}
            </pre>
          )}

          <div className="mt-8 space-y-3">
            <button
              onClick={() => reset()}
              className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Try again
            </button>

            <Link
              href="/"
              className="block w-full rounded-md border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Go to home
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            If the problem continues, please contact support.
          </p>
        </div>
      </main>

     
    </div>
  );
}

/* ---------- icon ---------- */

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
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6" />
      <path d="M12 17h.01" />
    </svg>
  );
}
