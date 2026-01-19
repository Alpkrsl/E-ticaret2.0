"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  title: string;
  collectionLabel: string;
  price: number;
  oldPrice?: number;
  rating: number; // 0-5
  reviews: number;
  description: string;
  inStockText: string;
  images: string[];
};

const PRODUCT: Product = {
  title: "Minimalist Leather Chronograph",
  collectionLabel: "EXCLUSIVE COLLECTION",
  price: 349,
  oldPrice: 425,
  rating: 5,
  reviews: 128,
  description:
    "A masterclass in restraint. This handcrafted timepiece features a surgical-grade stainless steel case, sapphire crystal glass, and a premium Italian tanned leather strap. Perfect for the modern professional.",
  inStockText: "In Stock & Ready to Ship",
  images: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=1200&q=80",
  ],
};

export default function ProductDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  const savePercent = useMemo(() => {
    if (!PRODUCT.oldPrice) return null;
    const diff = PRODUCT.oldPrice - PRODUCT.price;
    const pct = Math.round((diff / PRODUCT.oldPrice) * 100);
    return pct;
  }, []);

  const handleAddToCart = () => {
    // Demo behavior for now (no global cart state yet)
    alert(`Added ${qty} item(s) to cart`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-slate-900">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{PRODUCT.title}</span>
        </div>

        {/* Main layout */}
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* LEFT: Images */}
          <div>
            {/* Main image */}
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={PRODUCT.images[activeImage]}
                alt={PRODUCT.title}
                width={900}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3">
              {PRODUCT.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={[
                    "h-20 w-20 overflow-hidden rounded-lg border bg-slate-100",
                    activeImage === i
                      ? "border-blue-600 ring-2 ring-blue-600/20"
                      : "border-slate-200 hover:border-slate-300",
                  ].join(" ")}
                  aria-label={`Open image ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${PRODUCT.title} thumbnail ${i + 1}`}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product summary */}
          <div>
            <p className="text-xs tracking-widest text-blue-600">
              {PRODUCT.collectionLabel}
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
              {PRODUCT.title}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill={idx < PRODUCT.rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3 7 7 .6-5.3 4.4 1.7 6.6L12 17.8 5.6 20.9l1.7-6.6L2 9.6 9 9l3-7Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-500">
                ({PRODUCT.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end gap-3">
              <span className="text-2xl font-semibold text-slate-900">
                ${PRODUCT.price.toFixed(2)}
              </span>

              {PRODUCT.oldPrice && (
                <>
                  <span className="text-sm text-slate-400 line-through">
                    ${PRODUCT.oldPrice.toFixed(2)}
                  </span>
                  {savePercent !== null && (
                    <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700">
                      SAVE {savePercent}%
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-slate-600">
              {PRODUCT.description}
            </p>

            {/* Stock */}
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-700">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-600" />
              <span>{PRODUCT.inStockText}</span>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex h-11 items-center overflow-hidden rounded-md border border-slate-200">
                <button
                  type="button"
                  className="h-full w-10 text-slate-700 hover:bg-slate-50"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <div className="w-12 text-center text-sm font-semibold text-slate-900">
                  {qty}
                </div>
                <button
                  type="button"
                  className="h-full w-10 text-slate-700 hover:bg-slate-50"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:opacity-95"
              >
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
                  <path d="M6 6h15l-2 9H7L6 6Z" />
                  <path d="M6 6l-1-2H2" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>
                Add to Cart
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
                  🚚
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Free Delivery
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    On all orders over $150
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
                  🔒
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Secure Payment
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    100% encrypted checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next days: tabs + specs + related products */}
      </div>
    </div>
  );
}
