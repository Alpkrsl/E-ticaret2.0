"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function VerifyPage() {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // 01:59 countdown (119s)
  const [secondsLeft, setSecondsLeft] = useState(119);

  useEffect(() => {
    const t = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const mm = useMemo(() => String(Math.floor(secondsLeft / 60)).padStart(2, "0"), [secondsLeft]);
  const ss = useMemo(() => String(secondsLeft % 60).padStart(2, "0"), [secondsLeft]);

  const otpValue = code.join("");
  const isComplete = otpValue.length === 6 && code.every((c) => c !== "");

  function focusIndex(i: number) {
    inputsRef.current[i]?.focus();
    inputsRef.current[i]?.select();
  }

  function onChangeAt(i: number, raw: string) {
    // allow only digits
    const v = raw.replace(/\D/g, "");
    if (!v) {
      setCode((prev) => {
        const next = [...prev];
        next[i] = "";
        return next;
      });
      return;
    }

    // if user typed/pasted multiple digits into one box
    const digits = v.split("").slice(0, 6 - i);

    setCode((prev) => {
      const next = [...prev];
      for (let k = 0; k < digits.length; k++) {
        next[i + k] = digits[k];
      }
      return next;
    });

    const nextIndex = Math.min(i + digits.length, 5);
    focusIndex(nextIndex);
  }

  function onKeyDownAt(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (code[i]) {
        // clear current
        setCode((prev) => {
          const next = [...prev];
          next[i] = "";
          return next;
        });
        return;
      }
      // move to previous if current empty
      if (i > 0) focusIndex(i - 1);
    }

    if (e.key === "ArrowLeft" && i > 0) focusIndex(i - 1);
    if (e.key === "ArrowRight" && i < 5) focusIndex(i + 1);
  }

  function onPaste(e: React.ClipboardEvent<HTMLInputElement>, i: number) {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!text) return;
    onChangeAt(i, text);
  }

  function resend() {
    // UI only — gerçek API sonradan bağlanır
    setSecondsLeft(119);
    setCode(Array(6).fill(""));
    focusIndex(0);
  }

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
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <LockIcon />
          </div>

          <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-slate-900">
            Security Verification
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-center text-sm text-slate-500">
            Enter the 6-digit code we sent to your mobile number ending in{" "}
            <span className="font-semibold text-slate-700">•••• 1234</span>
          </p>

          {/* OTP inputs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {code.map((val, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputsRef.current[i] = el;
                }}
                value={val}
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6} // allow paste multi-digit
                onChange={(e) => onChangeAt(i, e.target.value)}
                onKeyDown={(e) => onKeyDownAt(i, e)}
                onPaste={(e) => onPaste(e, i)}
                className="h-14 w-14 rounded-xl border border-slate-200 bg-slate-50 text-center text-lg font-semibold text-slate-900 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                aria-label={`Digit ${i + 1}`}
              />
            ))}
          </div>

          {/* Timer box */}
          <div className="mt-6 rounded-xl bg-slate-50 px-4 py-4">
            <div className="flex items-center justify-center gap-3 text-sm text-slate-600">
              <ClockIcon />
              <span>Expires in:</span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-flex h-8 w-10 items-center justify-center rounded-md border border-slate-200 bg-white font-semibold text-blue-600">
                  {mm}
                </span>
                <span className="text-slate-400">:</span>
                <span className="inline-flex h-8 w-10 items-center justify-center rounded-md border border-slate-200 bg-white font-semibold text-blue-600">
                  {ss}
                </span>
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            disabled={!isComplete}
            className={[
              "mt-6 inline-flex w-full items-center justify-center gap-3 rounded-md py-3 text-sm font-semibold transition",
              isComplete
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed bg-slate-200 text-slate-500",
            ].join(" ")}
          >
            Verify Identity
            <ArrowRightIcon />
          </button>

          {/* Resend */}
          <p className="mt-4 text-center text-sm text-slate-500">
            Didn&apos;t receive a code?{" "}
            <button
              type="button"
              onClick={resend}
              className="font-semibold text-blue-600 hover:underline"
            >
              Resend Code
            </button>
          </p>

          <div className="my-7 h-px bg-slate-200" />

          <button
            type="button"
            className="mx-auto flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <InfoIcon />
            Try another verification method
          </button>

          <div className="mt-6">
            <Link
              href="/auth/login"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700"
            >
              <ArrowLeftIcon />
              Back to Login
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

function LockIcon() {
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

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
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

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </svg>
  );
}
