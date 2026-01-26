"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "@/app/store/cartStore";

export default function CartPage() {
  const { items, removeItem, increaseQty, decreaseQty, clear } = useCartStore();

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal >= 100 && subtotal > 0 ? 0 : subtotal === 0 ? 0 : 12;
    const tax = subtotal === 0 ? 0 : Math.round(subtotal * 0.08);
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
  }, [items]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Shopping Cart</span>
        </div>

        {/* Title */}
        <div className="mt-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Your Cart
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            You have{" "}
            <span className="font-semibold text-slate-900">
              {items.reduce((acc, i) => acc + i.qty, 0)}
            </span>{" "}
            item(s) in your shopping bag.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* LEFT: items */}
          <div className="lg:col-span-8 space-y-6">
            {/* Empty state */}
            {items.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
                <p className="text-lg font-semibold text-slate-900">
                  Your cart is empty
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Browse products and add something you love.
                </p>
                <Link
                  href="/shop"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
                >
                  Go to Shop <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}

            {/* Items */}
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-5">
                  {/* Image placeholder (sonra gerçek image koyarız) */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100" />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        {/* ✅ meta artık tipte var */}
                        {item.meta && (
                          <p className="mt-1 text-sm text-slate-500">
                            {item.meta}
                          </p>
                        )}
                      </div>

                      <p className="text-lg font-semibold text-slate-900">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      {/* qty */}
                      <div className="inline-flex h-10 items-center overflow-hidden rounded-md border border-slate-200">
                        <button
                          type="button"
                          onClick={() => decreaseQty(item.id)}
                          className="h-full w-10 text-slate-700 hover:bg-slate-50"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <div className="w-12 text-center text-sm font-semibold text-slate-900">
                          {item.qty}
                        </div>

                        <button
                          type="button"
                          onClick={() => increaseQty(item.id)}
                          className="h-full w-10 text-slate-700 hover:bg-slate-50"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* remove */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"
                      >
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
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="M7 6l1 14h8l1-14" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {items.length > 0 && (
              <div className="flex items-center justify-between">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
                >
                  <span aria-hidden="true">←</span> Continue Shopping
                </Link>

                <button
                  type="button"
                  onClick={clear}
                  className="text-sm font-semibold text-slate-500 hover:text-slate-900"
                >
                  Clear cart
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Order summary */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Order Summary
              </h2>

              {/* Promo code (UI only today) */}
              <div className="mt-6">
                <p className="text-xs font-semibold tracking-wider text-slate-500">
                  PROMO CODE
                </p>
                <div className="mt-3 flex gap-2">
                  <input
                    placeholder="Enter code"
                    className="h-11 flex-1 rounded-md border border-slate-200 px-4 text-sm outline-none focus:border-slate-400"
                  />
                  <button
                    type="button"
                    className="h-11 rounded-md bg-blue-50 px-5 text-sm font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t pt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ${totals.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-slate-900">
                    {totals.shipping === 0 ? "FREE" : `$${totals.shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-600">
                  <span>Tax</span>
                  <span className="font-semibold text-slate-900">
                    ${totals.tax.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t pt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">Total</span>
                <span className="text-2xl font-semibold text-blue-600">
                  ${totals.total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                disabled={items.length === 0}
                className={[
                  "mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md text-sm font-semibold text-white",
                  items.length === 0
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-blue-600 hover:opacity-95",
                ].join(" ")}
              >
                Checkout Now <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Trust cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  🛡️
                </div>
                <p className="mt-3 text-xs font-semibold tracking-widest text-slate-700">
                  SECURE PAYMENT
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  🚚
                </div>
                <p className="mt-3 text-xs font-semibold tracking-widest text-slate-700">
                  FREE DELIVERY
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Taxes calculated at checkout. Free shipping on orders over $100.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
