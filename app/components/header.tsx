"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "@/app/store/cartStore";

export default function Header() {
  const items = useCartStore((s) => s.items);

  const totalQty = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
            {/* Simple bag/store icon */}
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
              <path d="M6 7h12l-1 14H7L6 7Z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-slate-900">
            PremiumStore
          </span>
        </Link>

        {/* Middle: Nav */}
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/shop" className="hover:text-slate-900">
            Shop
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Search (UI only) */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100"
            aria-label="Cart"
          >
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-slate-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6h15l-2 9H7L6 6Z" />
                <path d="M6 6l-1-2H2" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>

              {/* Badge (only if > 0) */}
              {totalQty > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-semibold text-white">
                  {totalQty}
                </span>
              )}
            </div>
          </Link>

          {/* Account (UI only) */}
          <Link
            href="/account"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100"
            aria-label="Account"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-700"
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
          </Link>
        </div>
      </div>
    </header>
  );
}
