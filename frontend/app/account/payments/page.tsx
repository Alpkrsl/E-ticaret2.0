import Link from "next/link";

type Card = {
  id: string;
  brand: "VISA" | "MASTERCARD";
  last4: string;
  holder: string;
  expiry: string;
  isDefault?: boolean;
};

const CARDS: Card[] = [
  {
    id: "c1",
    brand: "VISA",
    last4: "4242",
    holder: "ALEXANDER RAYMOND",
    expiry: "12/26",
    isDefault: true,
  },
  {
    id: "c2",
    brand: "MASTERCARD",
    last4: "8891",
    holder: "ALEXANDER RAYMOND",
    expiry: "05/25",
    isDefault: false,
  },
];

export default function PaymentsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {/* user */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-100" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    Alexander Raymond
                  </p>
                  <p className="text-xs tracking-wider text-slate-400">
                    PREMIUM MEMBER
                  </p>
                </div>
              </div>

              <nav className="mt-6 space-y-2">
                <SideItem href="/account" icon="user">
                  Profile
                </SideItem>
                <SideItem href="/account/orders" icon="box">
                  Orders
                </SideItem>
                <SideItem href="/account/payments" icon="card" active>
                  Payment Methods
                </SideItem>
                <SideItem href="/account/addresses" icon="pin">
                  Addresses
                </SideItem>
                <SideItem href="/account/wishlist" icon="heart">
                  Wishlist
                </SideItem>

                <div className="my-4 border-t" />

                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <LogoutIcon />
                  </span>
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Payment Methods
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Manage your saved cards and billing preferences.
            </p>

            {/* Cards row */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className={[
                    "rounded-2xl border bg-white shadow-sm",
                    card.isDefault
                      ? "border-blue-600 ring-2 ring-blue-600/10"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      {card.isDefault ? (
                        <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold tracking-widest text-white">
                          DEFAULT
                        </span>
                      ) : (
                        <span className="h-6" />
                      )}

                      <span
                        className={[
                          "inline-flex h-9 w-12 items-center justify-center rounded-md text-xs font-semibold text-white",
                          card.brand === "VISA" ? "bg-slate-900" : "bg-slate-700",
                        ].join(" ")}
                      >
                        {card.brand === "MASTERCARD" ? "MC" : "VISA"}
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="text-slate-400">
                        <DotsRow />
                      </div>
                      <p className="mt-2 text-xl font-semibold text-slate-900">
                        {card.last4}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4 text-sm">
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-slate-400">
                          CARDHOLDER NAME
                        </p>
                        <p className="mt-1 font-semibold text-slate-900">
                          {card.holder}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-slate-400">
                          EXPIRY DATE
                        </p>
                        <p className="mt-1 font-semibold text-slate-900">
                          {card.expiry}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t px-6 py-4">
                    <div className="flex items-center gap-6 text-xs font-semibold tracking-widest">
                      <button
                        type="button"
                        className="text-blue-600 hover:opacity-80"
                      >
                        EDIT
                      </button>

                      {!card.isDefault && (
                        <button
                          type="button"
                          className="text-slate-500 hover:text-slate-900"
                        >
                          SET DEFAULT
                        </button>
                      )}

                      <button
                        type="button"
                        className="text-slate-500 hover:text-slate-900"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add new card tile */}
              <button
                type="button"
                className="group flex min-h-77 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center hover:border-slate-400"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <PlusIcon />
                </span>
                <p className="mt-4 text-base font-semibold text-slate-900">
                  Add New Card
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Securely save a new card for future purchases
                </p>
              </button>
            </div>

            {/* Security banner */}
            <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-blue-700">
                    <LockIcon />
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Your payment information is encrypted and secure.
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      We use industry-standard SSL encryption to protect your data.
                      <span className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <ShieldSmallIcon /> PCI-DSS COMPLIANT
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Manage Billing
              </button>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:opacity-95"
              >
                Add Payment Method
              </button>
            </div>

            {/* Footer line */}
            <footer className="mt-14 border-t pt-8 text-xs text-slate-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2024 PremiumStore. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-slate-600">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-slate-600">
                  Terms of Service
                </Link>
                <Link href="/help" className="hover:text-slate-600">
                  Help Center
                </Link>
              </div>
            </footer>
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
  icon: "user" | "box" | "card" | "pin" | "heart";
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
        {icon === "user" && <UserIcon />}
        {icon === "box" && <BoxIcon />}
        {icon === "card" && <CardIcon />}
        {icon === "pin" && <PinIcon />}
        {icon === "heart" && <HeartIcon />}
      </span>
      {children}
    </Link>
  );
}

/* ---------------- UI bits ---------------- */

function DotsRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="h-2 w-2 rounded-full bg-current opacity-70" />
      ))}
    </div>
  );
}

/* ---------------- icons ---------------- */

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
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
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <rect x="6" y="11" width="12" height="10" rx="2" />
    </svg>
  );
}

function ShieldSmallIcon() {
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
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function LogoutIcon() {
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
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M21 3v18" />
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
