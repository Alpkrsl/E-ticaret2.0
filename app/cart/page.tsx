import Link from "next/link";

const ITEMS = [
  {
    id: "tote",
    title: "Premium Leather Tote",
    meta: "Color: Tan | Size: One Size",
    price: 245,
  },
  {
    id: "sweater",
    title: "Minimalist Wool Sweater",
    meta: "Color: Charcoal | Size: M",
    price: 120,
  },
  {
    id: "scarf",
    title: "Artisan Silk Scarf",
    meta: "Color: Midnight Blue | Size: One Size",
    price: 85,
  },
];

export default function CartPage() {
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
            You have <span className="font-semibold text-slate-900">3 items</span>{" "}
            in your shopping bag.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* LEFT: items */}
          <div className="lg:col-span-8 space-y-6">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-5">
                  {/* Image placeholder */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100" />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                      </div>

                      <p className="text-lg font-semibold text-slate-900">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      {/* qty (static for Day 1) */}
                      <div className="inline-flex h-10 items-center overflow-hidden rounded-md border border-slate-200">
                        <button
                          type="button"
                          className="h-full w-10 text-slate-700 hover:bg-slate-50"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <div className="w-12 text-center text-sm font-semibold text-slate-900">
                          1
                        </div>
                        <button
                          type="button"
                          className="h-full w-10 text-slate-700 hover:bg-slate-50"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* remove (static for Day 1) */}
                      <button
                        type="button"
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

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
            >
              <span aria-hidden="true">←</span> Continue Shopping
            </Link>
          </div>

          {/* RIGHT: Order summary */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Order Summary
              </h2>

              {/* Promo code */}
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
                  <span className="font-semibold text-slate-900">$450.00</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Tax</span>
                  <span className="font-semibold text-slate-900">$36.00</span>
                </div>
              </div>

              <div className="mt-6 border-t pt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">Total</span>
                <span className="text-2xl font-semibold text-blue-600">
                  $486.00
                </span>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-blue-600 text-sm font-semibold text-white hover:opacity-95"
              >
                Checkout Now
                <span aria-hidden="true">→</span>
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
