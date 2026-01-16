"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

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

const PRODUCTS = [
  {
    id: 1,
    category: "Furniture",
    name: "Nordic Lounge Chair",
    price: 490,
    salePrice: null,
    badge: "NEW",
    rating: 4.8,
    reviews: 24,
    stockText: null,
  },
  {
    id: 2,
    category: "Lighting",
    name: "Orbital Pendant Lamp",
    price: 210,
    salePrice: 175,
    badge: "SALE",
    rating: 4.6,
    reviews: 18,
    stockText: null,
  },
  {
    id: 3,
    category: "Furniture",
    name: "Bespoke Ash Table",
    price: 840,
    salePrice: null,
    badge: null,
    rating: 4.7,
    reviews: 12,
    stockText: "Only 3 left",
  },
  {
    id: 4,
    category: "Textiles",
    name: "Linen Woven Throw",
    price: 120,
    salePrice: null,
    badge: null,
    rating: 4.5,
    reviews: 42,
    stockText: null,
  },
  {
    id: 5,
    category: "Accessories",
    name: "Sculptural Ceramic Vase",
    price: 85,
    salePrice: null,
    badge: null,
    rating: 4.4,
    reviews: 9,
    stockText: null,
  },
  {
    id: 6,
    category: "Lighting",
    name: "Beam Desk Light",
    price: 145,
    salePrice: null,
    badge: null,
    rating: 4.6,
    reviews: 11,
    stockText: "In stock",
  },
  {
    id: 7,
    category: "Furniture",
    name: "Velvet 3-Seater Sofa",
    price: 1290,
    salePrice: null,
    badge: "NEW",
    rating: 4.9,
    reviews: 112,
    stockText: null,
  },
  {
    id: 8,
    category: "Textiles",
    name: "Cotton Duvet Set",
    price: 230,
    salePrice: null,
    badge: null,
    rating: 4.5,
    reviews: 56,
    stockText: null,
  },
];

export default function ShopPage() {
  const [sort, setSort] = useState<"Featured" | "Price: Low" | "Price: High">(
    "Featured"
  );
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All Products",
  ]);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredAndSorted = useMemo(() => {
    let arr = [...PRODUCTS];

    // Category filter
    if (!selectedCategories.includes("All Products")) {
      arr = arr.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // Sort
    if (sort === "Price: Low") {
      arr.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    }
    if (sort === "Price: High") {
      arr.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    }

    return arr;
  }, [selectedCategories, sort]);


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
  checked={selectedCategories.includes(c.name)}
  onChange={() => {
    setVisibleCount(6); // filtre değişince başa dön
    setSelectedCategories((prev) => {
      if (c.name === "All Products") {
        return ["All Products"];
      }
      const next = prev.includes(c.name)
        ? prev.filter((x) => x !== c.name)
        : [...prev.filter((x) => x !== "All Products"), c.name];
      return next.length ? next : ["All Products"];
    });
  }}
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
                {/* Sort */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen((v) => !v)}
                    className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    aria-haspopup="menu"
                    aria-expanded={sortOpen}
                  >
                    Sort: {sort}
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

                  {sortOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2 w-44 overflow-hidden rounded-md border bg-white shadow-sm"
                      role="menu"
                    >
                      {["Featured", "Price: Low", "Price: High"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={[
                            "flex w-full items-center justify-between px-3 py-2 text-left text-xs hover:bg-slate-50",
                            sort === opt
                              ? "font-semibold text-slate-900"
                              : "text-slate-700",
                          ].join(" ")}
onClick={() => {
  setSort(opt as "Featured" | "Price: Low" | "Price: High");
  setSortOpen(false);
}}

                          role="menuitem"
                        >
                          {opt}
                          {sort === opt && <span>✓</span>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View toggle */}
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  className={[
                    "inline-flex h-9 w-9 items-center justify-center rounded-md border",
                    view === "grid"
                      ? "border-slate-300 bg-slate-50"
                      : "border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
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
                  onClick={() => setView("list")}
                  className={[
                    "inline-flex h-9 w-9 items-center justify-center rounded-md border",
                    view === "list"
                      ? "border-slate-300 bg-slate-50"
                      : "border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
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

            {/* Product Grid (Day 2) */}
            <section className="mt-8">
              <div
                className={[
                  "grid gap-8",
                  view === "grid"
                    ? "sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1",
                ].join(" ")}
              >
                {filteredAndSorted.slice(0, visibleCount).map((p) => (

                  <div key={p.id} className="group">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                      {p.badge && (
                        <span
                          className={[
                            "absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-semibold tracking-wide",
                            p.badge === "SALE"
                              ? "bg-slate-900 text-white"
                              : "bg-white text-slate-900",
                          ].join(" ")}
                        >
                          {p.badge}
                        </span>
                      )}

                      {/* image placeholder */}
                      <div className="aspect-[4/5] w-full transition group-hover:scale-[1.02]" />
                    </div>

                    {/* Meta */}
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-slate-400">
                          {p.category.toUpperCase()}
                        </p>

                        <h3 className="mt-1 text-sm font-semibold text-slate-900">
                          {p.name}
                        </h3>

                        {/* rating */}
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex items-center gap-1 text-slate-400">
                            {Array.from({ length: 5 }).map((_, idx) => {
                              const filled = p.rating >= idx + 1;
                              return (
                                <svg
                                  key={idx}
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  fill={filled ? "currentColor" : "none"}
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  aria-hidden="true"
                                >
                                  <path d="M12 2l3 7 7 .6-5.3 4.4 1.7 6.6L12 17.8 5.6 20.9l1.7-6.6L2 9.6 9 9l3-7Z" />
                                </svg>
                              );
                            })}
                          </div>
                          <span className="text-xs text-slate-500">
                            ({p.reviews})
                          </span>
                        </div>

                        {/* stock text */}
                        {p.stockText && (
                          <p
                            className={[
                              "mt-2 text-xs",
                              p.stockText.toLowerCase().includes("only")
                                ? "text-red-500"
                                : "text-green-600",
                            ].join(" ")}
                          >
                            ● {p.stockText}
                          </p>
                        )}
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        {p.salePrice ? (
                          <div className="flex flex-col items-end">
                            <span className="text-xs text-slate-400 line-through">
                              ${p.price.toFixed(2)}
                            </span>
                            <span className="text-sm font-semibold text-red-600">
                              ${p.salePrice.toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-slate-900">
                            ${p.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load more */}
<div className="mt-12 flex flex-col items-center gap-3">
  {visibleCount < filteredAndSorted.length && (
    <button
      type="button"
      onClick={() => setVisibleCount((v) => v + 6)}
      className="h-11 rounded-md bg-slate-200 px-8 text-xs font-semibold tracking-widest text-slate-700 hover:bg-slate-300"
    >
      LOAD MORE PRODUCTS
    </button>
  )}

  <p className="text-xs text-slate-400">
    Displaying {Math.min(visibleCount, filteredAndSorted.length)} of{" "}
    {filteredAndSorted.length} products
  </p>
</div>

            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
