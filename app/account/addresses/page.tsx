import Link from "next/link";

type Address = {
  id: string;
  label: string; // Home / Work / Vacation House
  isDefault?: boolean;
  name: string;
  lines: string[];
  phone: string;
};

const ADDRESSES: Address[] = [
  {
    id: "home",
    label: "Home",
    isDefault: true,
    name: "Jane Doe",
    lines: ["123 Maple Avenue, Suite 4", "Los Angeles, CA 90001", "United States"],
    phone: "+1 (555) 012-3456",
  },
  {
    id: "work",
    label: "Work",
    isDefault: false,
    name: "Jane Doe",
    lines: ["456 Corporate Plaza, Level 12", "San Francisco, CA 94105", "United States"],
    phone: "+1 (555) 987-6543",
  },
  {
    id: "vacation",
    label: "Vacation House",
    isDefault: false,
    name: "Jane Doe",
    lines: ["789 Coastal Highway", "Malibu, CA 90265", "United States"],
    phone: "+1 (555) 246-8135",
  },
];

export default function AddressesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  Premium Account
                </h2>
                <p className="mt-1 text-sm text-slate-500">jane.doe@example.com</p>
              </div>

              <nav className="mt-6 space-y-2">
                <SideItem href="/account/orders" icon="box">
                  Orders
                </SideItem>

                <SideItem href="/account" icon="user">
                  Profile
                </SideItem>

                <SideItem href="/account/addresses" icon="pin" active>
                  Address Book
                </SideItem>

                <SideItem href="/account/payments" icon="card">
                  Payment Methods
                </SideItem>

                <SideItem href="/account/security" icon="shield">
                  Security
                </SideItem>
              </nav>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="lg:col-span-9">
            {/* Breadcrumb */}
            <div className="text-xs text-slate-500">
              <Link href="/account" className="hover:text-slate-900">
                Account
              </Link>
              <span className="mx-2">›</span>
              <span className="font-semibold text-blue-600">Address Book</span>
            </div>

            {/* Header */}
            <div className="mt-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                Address Book
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Manage your shipping addresses and choose a default for faster checkout.
              </p>
            </div>

            {/* Grid */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Add New Address card */}
              <button
                type="button"
                className="group flex min-h-55 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center hover:border-slate-400"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <PlusIcon />
                </span>
                <p className="mt-4 text-base font-semibold text-slate-900">
                  Add New Address
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Create a new shipping or billing address.
                </p>
              </button>

              {/* Address cards */}
              {ADDRESSES.map((a) => (
                <div
                  key={a.id}
                  className={[
                    "rounded-2xl border bg-white p-6 shadow-sm",
                    a.isDefault
                      ? "border-blue-600 ring-2 ring-blue-600/10"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {a.label}
                      </h2>

                      {a.isDefault && (
                        <span className="mt-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold tracking-widest text-blue-700">
                          DEFAULT
                        </span>
                      )}
                    </div>

                    {/* default check */}
                    {a.isDefault && (
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                        <CheckIcon />
                      </span>
                    )}
                  </div>

                  <div className="mt-4 text-sm text-slate-700">
                    <p className="font-semibold">{a.name}</p>
                    <div className="mt-2 space-y-1 text-slate-600">
                      {a.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-slate-600">
                      <PhoneIcon />
                      <span>{a.phone}</span>
                    </div>
                  </div>

                  <div className="mt-6 border-t pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="text-sm font-semibold text-blue-600 hover:opacity-80"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-sm font-semibold text-slate-500 hover:text-slate-900"
                      >
                        Delete
                      </button>
                    </div>

                    {!a.isDefault && (
                      <button
                        type="button"
                        className="text-sm font-semibold text-blue-600 hover:opacity-80"
                      >
                        Set as Default
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Help banner */}
            <section className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-blue-700">
                    <HelpIcon />
                  </span>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Need assistance?
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      If you’re having trouble managing your addresses or need to update
                      an active order’s shipping info, our team is here to help.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:opacity-95"
                >
                  Contact Support
                </button>
              </div>
            </section>

            {/* Footer line */}
            <footer className="mt-14 border-t pt-8 text-xs text-slate-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>PremiumStore © 2023</p>
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

/* ---------------- helpers & icons ---------------- */

function SideItem({
  href,
  children,
  active,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  icon: "box" | "user" | "pin" | "card" | "shield";
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
        {icon === "box" && <BoxIcon />}
        {icon === "user" && <UserIcon />}
        {icon === "pin" && <PinIcon />}
        {icon === "card" && <CardIcon />}
        {icon === "shield" && <ShieldIcon />}
      </span>
      {children}
    </Link>
  );
}

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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 3.2 10.8 19.8 19.8 0 0 1 .1 2.2 2 2 0 0 1 2.1 0h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L6 7a16 16 0 0 0 11 11l.6-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function HelpIcon() {
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
      <path d="M12 18h.01" />
      <path d="M9.1 9a3 3 0 1 1 5.8 1c-.7 1-1.9 1.2-2.4 2.5" />
      <circle cx="12" cy="12" r="10" />
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
