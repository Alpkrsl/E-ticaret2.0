import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  Account
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Manage your settings
                </p>
              </div>

              <nav className="mt-6 space-y-2">
                <SideItem href="/account" icon="user">
                  Profile
                </SideItem>
                <SideItem href="/account/orders" icon="box">
                  Orders
                </SideItem>
                <SideItem href="/account/security" icon="shield" active>
                  Security
                </SideItem>
                <SideItem href="/account/payments" icon="card">
                  Payments
                </SideItem>
                <SideItem href="/account/addresses" icon="pin">
                  Addresses
                </SideItem>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Security Settings
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Protect your account with modern security standards.
            </p>

            {/* Change Password */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b px-6 py-5">
                <h2 className="text-base font-semibold text-slate-900">
                  Change Password
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  It&apos;s a good idea to use a unique password that you don&apos;t use elsewhere.
                </p>
              </div>

              <div className="grid gap-6 px-6 py-6 md:grid-cols-2">
                <div className="space-y-4">
                  <Field label="Current Password" placeholder="Enter current password" />
                  <Field label="New Password" placeholder="Enter new password" />

                  {/* Strength */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between text-[10px] font-semibold tracking-widest text-slate-400">
                      <span>STRENGTH</span>
                      <span className="text-blue-600">STRONG</span>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-blue-600" />
                      <div className="h-1.5 flex-1 rounded-full bg-blue-600" />
                      <div className="h-1.5 flex-1 rounded-full bg-blue-600" />
                      <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
                    </div>
                  </div>

                  <Field label="Confirm New Password" placeholder="Confirm new password" />
                </div>

                <div className="flex items-end justify-end">
                  <button
                    type="button"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:opacity-95"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </section>

            {/* Two-Factor Authentication */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-4 border-b px-6 py-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-slate-900">
                      Two-Factor Authentication
                    </h2>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-semibold tracking-widest text-green-700">
                      RECOMMENDED
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    Add an extra layer of security to your account by requiring more than just a password to log in.
                  </p>
                </div>

                {/* Toggle (static UI) */}
                <Toggle on />
              </div>

              <div className="grid gap-6 px-6 py-6 md:grid-cols-2 md:items-center">
                {/* QR placeholder */}
                <div className="flex items-center gap-5">
                  <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-400">
                    QR
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Configured with Google Authenticator
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Last updated: Oct 12, 2023
                    </p>
                    <Link
                      href="/account/security"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
                    >
                      Manage setup <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Active Sessions */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b px-6 py-5">
                <h2 className="text-base font-semibold text-slate-900">
                  Active Sessions
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Devices currently logged into your account.
                </p>
              </div>

              <div className="divide-y">
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                      <LaptopIcon />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-slate-900">
                          MacBook Pro 14&quot;
                        </p>
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-blue-700">
                          CURRENT
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        Chrome • London, UK • Active now
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500">This device</p>
                </div>

                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        iPhone 15 Pro
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        PremiumStore App • London, UK • 2 hours ago
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-sm font-semibold text-red-600 hover:opacity-80"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </section>

            {/* Security Notifications */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b px-6 py-5">
                <h2 className="text-base font-semibold text-slate-900">
                  Security Notifications
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose how you want to be notified about security events.
                </p>
              </div>

              <div className="px-6 py-6 space-y-6">
                <NotificationRow
                  title="New Login Alerts"
                  desc="Get notified when a new device logs into your account."
                  on
                />
                <NotificationRow
                  title="Password Change Alerts"
                  desc="Get notified whenever your password is changed."
                  on
                />
              </div>
            </section>

            {/* Danger Zone */}
            <div className="mt-10">
              <p className="text-xs font-semibold tracking-widest text-red-500">
                DANGER ZONE
              </p>

              <section className="mt-3 rounded-2xl border border-red-200 bg-red-50/40 p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Sign out of all devices
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        This will end all your sessions except for the current one.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-red-200 bg-white px-4 text-sm font-semibold text-red-600 hover:bg-red-50"
                    >
                      Sign Out All
                    </button>
                  </div>

                  <div className="border-t border-red-200/60 pt-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Delete Account
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Permanently delete your account and all associated data.
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-4 text-sm font-semibold text-white hover:opacity-95"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <input
        type="password"
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-md border border-slate-200 px-4 text-sm outline-none focus:border-slate-400"
      />
    </div>
  );
}

function Toggle({ on }: { on?: boolean }) {
  return (
    <div
      className={[
        "relative h-7 w-12 rounded-full transition",
        on ? "bg-blue-600" : "bg-slate-200",
      ].join(" ")}
      aria-label="Toggle"
    >
      <span
        className={[
          "absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition",
          on ? "left-6" : "left-1",
        ].join(" ")}
      />
    </div>
  );
}

function NotificationRow({
  title,
  desc,
  on,
}: {
  title: string;
  desc: string;
  on?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
      <Toggle on={on} />
    </div>
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
  icon: "user" | "box" | "shield" | "card" | "pin";
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
        {icon === "shield" && <ShieldIcon />}
        {icon === "card" && <CardIcon />}
        {icon === "pin" && <PinIcon />}
      </span>
      {children}
    </Link>
  );
}

/* ---------------- icons ---------------- */

function LaptopIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h16v10H4z" />
      <path d="M2 19h20" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2h8v20H8z" />
      <path d="M12 18h.01" />
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
