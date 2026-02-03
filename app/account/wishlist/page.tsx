import Link from "next/link";

type WishItem = {
  id: string;
  category: string;
  title: string;
  price: number;
  inStock: boolean;
  badge?: "SOLD OUT";
};

const WISHLIST: WishItem[] = [
  {
    id: "tote",
    category: "Accessories",
    title: "Signature Leather Tote",
    price: 240,
    inStock: true,
  },
  {
    id: "sweater",
    category: "Apparel",
    title: "Cashmere Blend Sweater",
    price: 180,
    inStock: false,
    badge: "SOLD OUT",
  },
  {
    id: "watch",
    category: "Timepieces",
    title: "Minimalist Watch",
    price: 350,
    inStock: true,
  },
  {
    id: "scarf",
    category: "Accessories",
    title: "Silk Scarf",
    price: 85,
    inStock: true,
  },
  {
    id: "boots",
    category: "Footwear",
    title: "Leather Chelsea Boots",
    price: 210,
    inStock: true,
  },
];

export default function WishlistPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-100" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    Alex Johnson
                  </p>
                  <p className="text-xs text-slate-500">Premium Member</p>
                </div>
              </div>

              <nav className="mt-6 space-y-2">
                <SideItem href="/account" icon="grid">
                  Dashboard
                </SideItem>
                <SideItem href="/account/orders" icon="box">
                  Order History
                </SideItem>
                <SideItem href="/account/wishlist" icon="heart" active>
                  Wishlist
                </SideItem>
                <SideItem href="/account/addresses" icon="pin">
                  Addresses
                </SideItem>
                <SideItem href="/account/payments" icon="card">
                  Payments
                </SideItem>
                <SideItem href="/account/security" icon="gear">
                  Settings
                </SideItem>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9">
            {/* Header row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                  Wishlist
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  You have{" "}
                  <span className="font-semibold text-slate-900">
                    {WISHLIST.length}
                  </span>{" "}
                  items saved in your wishlist.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white hover:opacity-95"
              >
                <CartPlusIcon />
                Add all to cart
              </button>
            </div>

            {/* Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WISHLIST.map((p) => (
                <div
                  key={p.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  {/* Image area */}
                  <div className="relative bg-slate-100">
                    <button
                      type="button"
                      className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
                      aria-label="Remove from wishlist"
                      title="Remove from wishlist"
                    >
                      <HeartFilledIcon />
                    </button>

                    {p.badge && (
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                        {p.badge}
                      </span>
                    )}

                    <div className="h-56 w-full" />
                  </div>

                  {/* Meta */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold tracking-widest text-slate-500">
                        {p.category.toUpperCase()}
                      </span>

                      <span className="text-sm font-semibold text-blue-600">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                      {p.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <span
                        className={[
                          "inline-flex h-2 w-2 rounded-full",
                          p.inStock ? "bg-green-600" : "bg-slate-400",
                        ].join(" ")}
                      />
                      <span className={p.inStock ? "text-green-600" : "text-slate-500"}>
                        {p.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={!p.inStock}
                      className={[
                        "mt-4 inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-semibold",
                        p.inStock
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed",
                      ].join(" ")}
                    >
                      {p.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Looking for something else?
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Discover our latest arrivals tailored for your style.
                  </p>
                </div>

                <Link
                  href="/shop"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                >
                  Explore New Arrivals
                </Link>
              </div>
            </section>

            <p className="mt-10 text-center text-xs text-slate-400">
              © 2023 PremiumStore. All rights reserved. Elegant shopping for the modern lifestyle.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- sidebar helper ---------------- */

function SideItem({
  href,
  children,
  active,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  icon: "grid" | "box" | "heart" | "pin" | "card" | "gear";
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold",
        active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-9 w-9 items-center justify-center rounded-xl",
          active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700",
        ].join(" ")}
      >
        {icon === "grid" && <GridIcon />}
        {icon === "box" && <BoxIcon />}
        {icon === "heart" && <HeartIcon />}
        {icon === "pin" && <PinIcon />}
        {icon === "card" && <CardIcon />}
        {icon === "gear" && <GearIcon />}
      </span>
      {children}
    </Link>
  );
}

/* ---------------- icons ---------------- */

function CartPlusIcon() {
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
      <path d="M6 6h15l-2 9H7L6 6Z" />
      <path d="M6 6l-1-2H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M12 9v4" />
      <path d="M10 11h4" />
    </svg>
  );
}

function HeartFilledIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 21s-7-4.4-9.5-8.7C.5 9 .9 5.9 3.3 4.2c2.1-1.5 4.7-1 6.2.7L12 7.6l2.5-2.7c1.5-1.7 4.1-2.2 6.2-.7 2.4 1.7 2.8 4.8.8 8.1C19 16.6 12 21 12 21Z"
        fill="currentColor"
        className="text-blue-600"
      />
    </svg>
  );
}

function GridIcon() {
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
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

function BoxIcon() {
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
      <path d="M21 8l-9 5-9-5 9-5 9 5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v10" />
    </svg>
  );
}

function HeartIcon() {
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
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

function PinIcon() {
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
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function CardIcon() {
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
      <path d="M3 7h18v10H3z" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </svg>
  );
}

function GearIcon() {
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
      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a7.8 7.8 0 0 0 .1-1l2-1.5-2-3.5-2.4.6a8.3 8.3 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a8.3 8.3 0 0 0-1.7 1L6.6 9l-2-1.5-2 3.5 2 1.5a7.8 7.8 0 0 0 .1 1l-2 1.5 2 3.5 2.4-.6c.5.4 1.1.7 1.7 1l.3 2.6h4l.3-2.6c.6-.3 1.2-.6 1.7-1l2.4.6 2-3.5-2-1.5Z" />
    </svg>
  );
}
