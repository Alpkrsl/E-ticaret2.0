"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [pwd, setPwd] = useState("");

  const strength = useMemo(() => getStrength(pwd), [pwd]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">


      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Join PremiumStore to enjoy exclusive benefits and faster checkout.
          </p>

          <form className="mt-7 space-y-5">
            {/* Full name */}
            <Field
              label="Full Name"
              placeholder="John Doe"
              leftIcon={<UserIcon />}
            />

            {/* Email */}
            <Field
              label="Email Address"
              placeholder="name@example.com"
              leftIcon={<MailIcon />}
              type="email"
            />

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <LockIcon />
                </span>

                <input
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-slate-200 px-10 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle password visibility"
                >
                  <EyeIcon />
                </button>
              </div>

              {/* Strength bar */}
              <div className="mt-3">
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={[
                        "h-1.5 flex-1 rounded-full",
                        i < strength.level ? strength.bar : "bg-slate-200",
                      ].join(" ")}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Strength:{" "}
                  <span className="font-semibold text-slate-700">
                    {strength.label}
                  </span>
                </p>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200"
              />
              <span>
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* CTA */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="my-2 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">OR SIGN UP WITH</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-slate-200 py-2.5 text-sm hover:bg-slate-50"
              >
                <span className="text-xs">G</span> Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-slate-200 py-2.5 text-sm hover:bg-slate-50"
              >
                <span></span> Apple
              </button>
            </div>

            <p className="pt-2 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </main>

      {/* Trust badges */}
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-10 px-6 pb-10 text-xs text-slate-500">
        <Badge icon={<ShieldMiniIcon />} text="SECURE DATA" />
        <Badge icon={<TruckMiniIcon />} text="FAST SHIPPING" />
        <Badge icon={<SupportMiniIcon />} text="24/7 SUPPORT" />
      </div>

    </div>
  );
}

/* ---------------- helpers ---------------- */

function Field({
  label,
  placeholder,
  leftIcon,
  type = "text",
}: {
  label: string;
  placeholder: string;
  leftIcon: React.ReactNode;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="relative mt-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {leftIcon}
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-slate-200 px-10 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>
    </div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-blue-600">{icon}</span>
      <span className="font-semibold tracking-widest">{text}</span>
    </div>
  );
}

function getStrength(pwd: string) {
  // Basit UI ölçümü (gerçek validasyon değil)
  let score = 0;
  if (pwd.length >= 6) score++;
  if (pwd.length >= 10) score++;
  if (/[A-Z]/.test(pwd) || /[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const level = Math.min(score, 4);

  if (level <= 1) return { level: 1, label: "Weak", bar: "bg-red-500" };
  if (level === 2) return { level: 2, label: "Okay", bar: "bg-yellow-500" };
  if (level === 3) return { level: 3, label: "Good", bar: "bg-green-500" };
  return { level: 4, label: "Strong", bar: "bg-green-600" };
}

/* ---------------- icons ---------------- */

function UserIcon() {
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
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="8" r="4" />
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

function LockIcon() {
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
      <path d="M7 11h10v10H7z" />
      <path d="M9 11V8a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

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

function ShieldMiniIcon() {
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

function TruckMiniIcon() {
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
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7V10Z" />
      <circle cx="7" cy="19" r="1" />
      <circle cx="18" cy="19" r="1" />
    </svg>
  );
}

function SupportMiniIcon() {
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
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
      <path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z" />
      <path d="M12 18v2" />
    </svg>
  );
}
