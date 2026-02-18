import Link from "next/link";

const ORDERS = [
  {
    id: "#ORD-94210",
    date: "Oct 12, 2023",
    status: "Delivered",
    total: 1249.0,
  },
  {
    id: "#ORD-83921",
    date: "Oct 05, 2023",
    status: "Processing",
    total: 499.0,
  },
  {
    id: "#ORD-77212",
    date: "Sep 28, 2023",
    status: "Cancelled",
    total: 89.0,
  },
];

export default function AccountPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {/* user mini */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-100" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    Alexander Pierce
                  </p>
                  <span className="mt-1 inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                    Premium Member
                  </span>
                </div>
              </div>

              {/* nav */}
              <nav className="mt-6 space-y-2">
                <SideLink href="/account" active icon="grid">
                  Dashboard
                </SideLink>
                <SideLink href="/account/orders" icon="bag">
                  Orders
                </SideLink>
                <SideLink href="/account" activeStrong icon="user">
                  Profile Details
                </SideLink>
                <SideLink href="/account/addresses" icon="pin">
                  Addresses
                </SideLink>
                <SideLink href="/account/payments" icon="card">
                  Payment Methods
                </SideLink>
                <SideLink href="/account/security" icon="shield">
                  Security
                </SideLink>

                <div className="my-4 border-t" />

                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-50">
                    <LogoutIcon />
                  </span>
                  Logout
                </button>
              </nav>

              <button
                type="button"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:opacity-95"
              >
                Upgrade Plan
              </button>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="lg:col-span-9">
            {/* header */}
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                Account Profile
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage your personal information, security settings, and view
                your complete purchase history.
              </p>
            </div>

            {/* profile card */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full border-4 border-blue-600/30 bg-slate-100" />
                    <span className="absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                      <CheckIcon />
                    </span>
                  </div>

                  <div>
                    <p className="text-xl font-semibold text-slate-900">
                      Alexander Pierce
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      alexander.pierce@premiumstore.com
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                        ✓
                      </span>
                      <span>Member since Jan 2022</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-100 px-5 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                >
                  <PencilIcon />
                  Edit Profile
                </button>
              </div>
            </section>

            {/* cards row */}
            <section className="mt-8 grid gap-6 md:grid-cols-2">
              {/* personal details */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    i
                  </span>
                  <h2 className="text-base font-semibold text-slate-900">
                    Personal Details
                  </h2>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-slate-400">
                      PHONE NUMBER
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      +1 (555) 012-3456
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-slate-400">
                      LOCATION
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      New York, United States
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-slate-400">
                      LANGUAGE
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      English (US)
                    </p>
                  </div>
                </div>
              </div>

              {/* membership status */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    🏆
                  </span>
                  <h2 className="text-base font-semibold text-slate-900">
                    Membership Status
                  </h2>
                </div>

                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/40 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-blue-700">
                      Premium Tier
                    </p>
                    <span className="rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white">
                      ACTIVE
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-700">
                    You have saved{" "}
                    <span className="font-semibold text-blue-700">$420</span>{" "}
                    this year with free shipping and member-only deals.
                  </p>
                </div>

                <Link
                  href="/account/benefits"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
                >
                  View Benefits <span aria-hidden="true">›</span>
                </Link>
              </div>
            </section>

            {/* recent orders table */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between p-6">
                <h2 className="text-base font-semibold text-slate-900">
                  Recent Orders
                </h2>

                <Link
                  href="/account/orders"
                  className="text-sm font-semibold text-blue-600 hover:opacity-80"
                >
                  View All Orders
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-t">
                  <thead>
                    <tr className="bg-slate-50 text-left text-xs font-semibold tracking-wider text-slate-500">
                      <th className="px-6 py-4">ORDER ID</th>
                      <th className="px-6 py-4">DATE</th>
                      <th className="px-6 py-4">STATUS</th>
                      <th className="px-6 py-4">TOTAL</th>
                      <th className="px-6 py-4 text-right">ACTION</th>
                    </tr>
                  </thead>

                  <tbody>
                    {ORDERS.map((o) => (
                      <tr key={o.id} className="border-t">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                          {o.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {o.date}
                        </td>
                        <td className="px-6 py-4">
                          <StatusPill status={o.status} />
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                          ${o.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href={`/account/orders/${o.id.replace("#", "")}`}
                            className="text-sm font-semibold text-blue-600 hover:opacity-80"
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <p className="mt-10 text-center text-xs text-slate-400">
              © 2024 PremiumStore E-commerce. All rights reserved.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- helpers (same file, no split) ---------------- */

function SideLink({
  href,
  children,
  active,
  activeStrong,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  activeStrong?: boolean;
  icon: "grid" | "bag" | "user" | "pin" | "card" | "shield";
}) {
  const isActive = Boolean(activeStrong || active);
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold",
        isActive
          ? "bg-slate-50 text-blue-600"
          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-9 w-9 items-center justify-center rounded-xl",
          isActive ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-700",
        ].join(" ")}
      >
        {icon === "grid" && <GridIcon />}
        {icon === "bag" && <BagIcon />}
        {icon === "user" && <UserIcon />}
        {icon === "pin" && <PinIcon />}
        {icon === "card" && <CardIcon />}
        {icon === "shield" && <ShieldIcon />}
      </span>
      <span className="flex-1">{children}</span>
      {/* left active indicator like in design */}
      {activeStrong && (
        <span className="ml-auto h-6 w-1 rounded-full bg-blue-600" />
      )}
    </Link>
  );
}

function StatusPill({ status }: { status: string }) {
  const cls =
    status === "Delivered"
      ? "bg-green-100 text-green-700"
      : status === "Processing"
      ? "bg-blue-100 text-blue-700"
      : "bg-slate-200 text-slate-700";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        cls,
      ].join(" ")}
    >
      {status}
    </span>
  );
}

/* ---------------- icons ---------------- */

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

function BagIcon() {
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
      <path d="M6 7h12l-1 14H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
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

function ShieldIcon() {
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
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function PencilIcon() {
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
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-blue-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
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
