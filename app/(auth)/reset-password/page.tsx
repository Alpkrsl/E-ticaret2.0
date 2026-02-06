"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function ResetPasswordPage() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");

  const strength = useMemo(() => getStrength(pwd), [pwd]);
  const ruleOk = pwd.length >= 8 && /\d/.test(pwd);
  const matchOk = confirm.length > 0 && pwd === confirm;

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
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-slate-900">
            Reset your password
          </h1>
          <p className="mt-2 text-center text-sm text-slate-500">
            Please choose a strong password to protect your{" "}
            <span className="text-slate-700">PremiumStore</span> account.
          </p>

          <form className="mt-8 space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                New Password
              </label>

              <div className="relative mt-1">
                <input
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  type={showNew ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <button
                  type="button"
                  onClick={() => setShowNew((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle new password visibility"
                >
                  <EyeIcon />
                </button>
              </div>

              {/* Strength row */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <p className="text-slate-600">
                  Password Strength:{" "}
                  <span className="font-semibold text-blue-600">
                    {strength.label}
                  </span>
                </p>
                <p className="text-slate-500">{strength.percent}%</p>
              </div>

              {/* Progress */}
              <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                <div
                  className={[
                    "h-2 rounded-full transition-all",
                    strength.bar,
                  ].join(" ")}
                  style={{ width: `${strength.percent}%` }}
                />
              </div>

              {/* Rule */}
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span
                  className={[
                    "inline-flex h-5 w-5 items-center justify-center rounded-full",
                    ruleOk ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-400",
                  ].join(" ")}
                >
                  <CheckIcon />
                </span>
                <p className={ruleOk ? "text-slate-600" : "text-slate-500"}>
                  At least 8 characters, include a number
                </p>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Confirm New Password
              </label>

              <div className="relative mt-1">
                <input
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className={[
                    "w-full rounded-md border px-3 py-2.5 pr-10 text-sm outline-none focus:ring-2",
                    matchOk
                      ? "border-green-200 focus:border-green-500 focus:ring-green-100"
                      : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
                  ].join(" ")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle confirm password visibility"
                >
                  <EyeIcon />
                </button>
              </div>

              {confirm.length > 0 && !matchOk && (
                <p className="mt-2 text-xs text-red-500">
                  Passwords do not match.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Update password
            </button>
          </form>

          <div className="mt-6 border-t pt-5">
            <Link
              href="/auth/login"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <ArrowLeftIcon />
              Back to Login
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-5 text-center text-xs text-slate-400">
        © 2024 PremiumStore. All rights reserved.
        <div className="mt-1 flex items-center justify-center gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* ---------------- strength ---------------- */

function getStrength(pwd: string) {
  let score = 0;

  if (pwd.length >= 8) score += 1;
  if (pwd.length >= 12) score += 1;
  if (/\d/.test(pwd)) score += 1;
  if (/[A-Z]/.test(pwd)) score += 1;
  if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

  const normalized = Math.min(score, 5);

  const percentMap = [0, 25, 45, 65, 85, 100];
  const percent = percentMap[normalized];

  if (percent <= 25) return { label: "Weak", percent, bar: "bg-red-500" };
  if (percent <= 65) return { label: "Good", percent, bar: "bg-yellow-500" };
  if (percent <= 85) return { label: "Strong", percent, bar: "bg-blue-600" };
  return { label: "Very Strong", percent, bar: "bg-green-600" };
}

/* ---------------- icons ---------------- */

function EyeIcon() {
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
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
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

function CheckIcon() {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
