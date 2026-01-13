import Link from "next/link";

const CATEGORIES = [
  { name: "All Products", count: 124, checked: true },
  { name: "Furniture", count: 42, checked: false },
  { name: "Lighting", count: 18, checked: false },
  { name: "Textiles", count: 31, checked: false },
];

const COLORS = [
  { name: "White", className: "bg-white border" },
  { name: "Black", className: "bg-slate-900" },
  { name: "Sand", className: "bg-amber-200" },
  { name: "Stone", className: "bg-slate-300" },
  { name: "Olive", className: "bg-green-700" },
];

export default function ShopPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-slate-700">Shop All</span>
        </div>

        {/* Title */}
        <div className="mt-4">
          <h1 className="text-4xl font-medium tracking-tight text-slate-900">
            Shop All Collections
          </h1>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            {/* Categories */}
            <div>
              <h2 className="text-xs font-semibold tracking-wider text-slate-900">
                CATEGORIES
              </h2>
              <div className="mt-4 space-y-3 border-t pt-4">
                {CATEGORIES.map((c) => (
                  <label
                    key={c.name}
                    className="flex cursor-pointer items-center justify-between text-sm text-slate-700"
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        defaultChecked={c.checked}
                        className="h-4 w-4 rounded border-slate-300"
                      />
                      {c.name}
                    </span>
                    <span className="text-xs text-slate-400">{c.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mt-10">
              <h2 className="text-xs font-semibold tracking-wider text-slate-900">
                PRICE RANGE
              </h2>

              <div className="mt-4 border-t pt-4">
                {/* simple range UI (static) */}
                <div className="relative h-6">
                  <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-slate-200" />
                  <div className="absolute left-2 right-10 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-900/30" />
                  <span className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-300 bg-white" />
                  <span className="absolute right-10 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-slate-300 bg-white" />
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>$0</span>
                  <span>$1,500</span>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-10">
              <h2 className="text-xs font-semibold tracking-wider text-slate-900">
                COLORS
              </h2>

              <div className="mt-4 border-t pt-4">
                <div className="flex items-center gap-3">
                  {COLORS.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className="group"
                      aria-label={c.name}
                      title={c.name}
                    >
                      <span
                        className={[
                          "inline-flex h-6 w-6 items-center justify-center rounded-full border-slate-200",
                          c.className,
                        ].join(" ")}
                      />
                      <span className="sr-only">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main area (Day 1: header only) */}
          <main className="md:col-span-9">
            {/* Top row: showing + sort + view icons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Showing 1–12 of 124 products
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Sort: Featured
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
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50"
                  aria-label="Grid view"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50"
                  aria-label="List view"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 6h13M8 12h13M8 18h13" />
                    <path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Placeholder for product grid (we’ll build Day 2) */}
            <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
              Product grid will be added tomorrow (Day 2).
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
