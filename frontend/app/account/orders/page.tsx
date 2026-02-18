import Link from "next/link";

const ORDERS = [
  { id: "#PS-89234", date: "Oct 24, 2023", status: "Delivered", total: 499.0 },
  { id: "#PS-89110", date: "Oct 18, 2023", status: "Processing", total: 1240.5 },
  { id: "#PS-88742", date: "Sep 29, 2023", status: "Shipped", total: 89.99 },
  { id: "#PS-88510", date: "Sep 12, 2023", status: "Delivered", total: 256.0 },
  { id: "#PS-88200", date: "Aug 30, 2023", status: "Cancelled", total: 45.0 },
];

export default function OrdersPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/account" className="hover:text-slate-900">
            Account
          </Link>
          <span className="mx-2">›</span>
          <span className="text-blue-600 font-semibold">Orders History</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  My Account
                </h2>
                <p className="mt-1 text-sm text-slate-500">Alex Johnson</p>
              </div>

              <nav className="mt-6 space-y-2">
                <SideItem href="/account" icon="user">
                  Profile Info
                </SideItem>

                <SideItem href="/account/orders" icon="box" active>
                  My Orders
                </SideItem>

                <SideItem href="/account/wishlist" icon="heart">
                  Wishlist
                </SideItem>

                <SideItem href="/account/addresses" icon="pin">
                  Addresses
                </SideItem>

                <SideItem href="/account/payments" icon="card">
                  Payment Methods
                </SideItem>

                <div className="my-4 border-t" />

                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-50">
                    <LogoutIcon />
                  </span>
                  Sign Out
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Orders History
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              View and manage your recent purchases and tracking details.
            </p>

            {/* Filters row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <FilterSelect label="Status" value="All" />
                <FilterSelect label="Date" value="Last 6 Months" />
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Sort by:</span>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:opacity-80"
                >
                  Newest First
                  <ChevronDown />
                </button>
              </div>
            </div>

            {/* Table card */}
            <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-180">
                  <thead>
                    <tr className="bg-slate-50 text-left text-xs font-semibold tracking-wider text-slate-500">
                      <th className="px-6 py-4">ORDER ID</th>
                      <th className="px-6 py-4">DATE</th>
                      <th className="px-6 py-4">STATUS</th>
                      <th className="px-6 py-4">TOTAL</th>
                      <th className="px-6 py-4">ACTION</th>
                    </tr>
                  </thead>

                  <tbody>
                    {ORDERS.map((o) => (
                      <tr key={o.id} className="border-t">
                        <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                          {o.id}
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-600">
                          {o.date}
                        </td>
                        <td className="px-6 py-5">
                          <StatusPill status={o.status} />
                        </td>
                        <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                          ${o.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-5">
                          <Link
                            href={`/account/orders/${o.id.replace("#", "")}`}
                            className="text-sm font-semibold text-blue-600 hover:opacity-80"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Load more */}
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="h-11 rounded-md border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Load More Orders
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- small helpers (same file) ---------------- */

function FilterSelect({ label, value }: { label: string; value: string }) {
  return (
    <button
      type="button"
      className="inline-flex h-11 items-center gap-3 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      aria-label={`${label} filter`}
    >
      <span className="text-slate-500">{label}:</span>
      <span>{value}</span>
      <ChevronDown />
    </button>
  );
}

function StatusPill({ status }: { status: string }) {
  const cls =
    status === "Delivered"
      ? "bg-green-100 text-green-700"
      : status === "Processing"
      ? "bg-blue-100 text-blue-700"
      : status === "Shipped"
      ? "bg-orange-100 text-orange-700"
      : "bg-slate-200 text-slate-700";

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        cls,
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-current opacity-60" />
      {status}
    </span>
  );
}

/* ---------------- icons ---------------- */

function ChevronDown() {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function SideItem({
  href,
  children,
  active,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  icon: "user" | "box" | "heart" | "pin" | "card";
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold",
        active
          ? "bg-blue-600 text-white"
          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-9 w-9 items-center justify-center rounded-xl",
          active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-700",
        ].join(" ")}
      >
        {icon === "user" && <UserIcon />}
        {icon === "box" && <BoxIcon />}
        {icon === "heart" && <HeartIcon />}
        {icon === "pin" && <PinIcon />}
        {icon === "card" && <CardIcon />}
      </span>
      {children}
    </Link>
  );
}

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

function LogoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M21 3v18" />
    </svg>
  );
}
