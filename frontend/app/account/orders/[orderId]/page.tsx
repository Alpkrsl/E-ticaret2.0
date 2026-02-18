import Link from "next/link";

type Step = { title: string; date: string; active?: boolean };
type Item = {
  id: string;
  name: string;
  meta: string;
  qty: number;
  unitPrice: number;
  imageBg?: string;
};

const ORDER = {
  id: "PS-98234",
  placedOn: "October 10, 2023",
  status: "DELIVERED",
  steps: [
    { title: "Order Placed", date: "Oct 10, 09:30 AM", active: true },
    { title: "Processing", date: "Oct 11, 02:15 PM", active: true },
    { title: "Shipped", date: "Oct 12, 11:00 AM", active: true },
    { title: "Delivered", date: "Oct 14, 04:30 PM", active: true },
  ] as Step[],
  deliveryMethod: "Standard Delivery",
  items: [
    {
      id: "aero",
      name: "AeroSonic Pro X1",
      meta: "Color: Midnight Black | SKU: AS-PRX1-BK",
      qty: 1,
      unitPrice: 250,
      imageBg: "bg-slate-100",
    },
    {
      id: "wallet",
      name: "Vanguard Leather Wallet",
      meta: "Color: Cognac Brown | SKU: VN-WL-CG",
      qty: 1,
      unitPrice: 85,
      imageBg: "bg-amber-100",
    },
  ] as Item[],
  summary: {
    subtotal: 335.0,
    shipping: 15.0,
    tax: 28.45,
    discountLabel: "Discount (NEWUSER20)",
    discount: -20.0,
    total: 358.45,
  },
  shippingAddress: {
    name: "Alex Thompson",
    line1: "1248 Vista Ridge Dr.",
    line2: "Suite 300, Silicon Valley",
    city: "California, 94025",
    phone: "+1 (555) 123-4567",
  },
  payment: {
    brand: "VISA",
    last4: "4242",
    expiry: "08/26",
    note: "Billing address matches shipping address.",
  },
};

export default function OrderDetailPage({
  params,
}: {
  params: { orderId: string };
}) {
  const orderId = params.orderId || ORDER.id;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Back */}
        <Link
          href="/account/orders"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
        >
          ← Back to Orders
        </Link>

        {/* Header row */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Order #{orderId}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>Placed on {ORDER.placedOn}</span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {ORDER.status}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <DownloadIcon /> Invoice
            </button>

            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white hover:opacity-95"
            >
              <RefreshIcon /> Reorder
            </button>
          </div>
        </div>

        {/* Tracking Status */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            Tracking Status
          </h2>

          <div className="mt-6">
            {/* line */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-5 h-0.5 bg-blue-200" />
              <div className="grid grid-cols-4 gap-4">
                {ORDER.steps.map((s, idx) => (
                  <div key={s.title} className="text-center">
                    <div className="relative mx-auto h-10 w-10">
                      <div className="absolute inset-0 rounded-full bg-blue-600/10" />
                      <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                        {idx === 0 && <CheckSmallIcon />}
                        {idx === 1 && <GearIcon />}
                        {idx === 2 && <TruckIcon />}
                        {idx === 3 && <BoxIcon />}
                      </div>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-blue-600">
                      {s.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{s.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Items Ordered */}
          <section className="lg:col-span-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-5">
              <h2 className="text-base font-semibold text-slate-900">
                Items Ordered ({ORDER.items.length})
              </h2>
              <p className="text-sm text-slate-500">{ORDER.deliveryMethod}</p>
            </div>

            <div className="overflow-x-auto border-t">
              <table className="w-full min-w-190">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-semibold tracking-wider text-slate-500">
                    <th className="px-6 py-4">PRODUCT</th>
                    <th className="px-6 py-4">QUANTITY</th>
                    <th className="px-6 py-4">UNIT PRICE</th>
                    <th className="px-6 py-4 text-right">TOTAL</th>
                  </tr>
                </thead>

                <tbody>
                  {ORDER.items.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div
                            className={[
                              "h-14 w-14 rounded-xl border border-slate-200",
                              item.imageBg ?? "bg-slate-100",
                            ].join(" ")}
                          />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {item.meta}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-700">
                        {item.qty}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-700">
                        ${item.unitPrice.toFixed(2)}
                      </td>

                      <td className="px-6 py-5 text-right text-sm font-semibold text-slate-900">
                        ${(item.unitPrice * item.qty).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-5 space-y-3 text-sm">
                <Row label="Subtotal" value={`$${ORDER.summary.subtotal.toFixed(2)}`} />
                <Row label="Shipping" value={`$${ORDER.summary.shipping.toFixed(2)}`} />
                <Row label="Estimated Tax" value={`$${ORDER.summary.tax.toFixed(2)}`} />
                <Row
                  label={ORDER.summary.discountLabel}
                  value={`${ORDER.summary.discount.toFixed(2)}`}
                  valueClass="text-green-700"
                />
              </div>

              <div className="mt-5 border-t pt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-900">Total</span>
                <span className="text-2xl font-semibold text-blue-600">
                  ${ORDER.summary.total.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:opacity-95"
              >
                Track Package
              </button>

              <button
                type="button"
                className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-md bg-slate-100 text-sm font-semibold text-slate-900 hover:bg-slate-200"
              >
                Buy Again
              </button>
            </div>

            {/* Shipping Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <PinIcon />
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  Shipping Address
                </h3>
              </div>

              <div className="mt-4 text-sm text-slate-700">
                <p className="font-semibold">{ORDER.shippingAddress.name}</p>
                <p className="mt-2 text-slate-600">{ORDER.shippingAddress.line1}</p>
                <p className="text-slate-600">{ORDER.shippingAddress.line2}</p>
                <p className="text-slate-600">{ORDER.shippingAddress.city}</p>
                <p className="mt-2 text-slate-600">{ORDER.shippingAddress.phone}</p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <CardIcon />
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  Payment Method
                </h3>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 items-center rounded-md bg-blue-600 px-2 text-xs font-semibold text-white">
                    {ORDER.payment.brand}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">
                      Visa ending in {ORDER.payment.last4}
                    </p>
                    <p className="text-xs text-slate-500">
                      Expiry {ORDER.payment.expiry}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {ORDER.payment.note}
                </p>
              </div>
            </div>

            {/* Help box */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Need Help?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                If you have any issues with your order or questions about return
                policies, our team is here 24/7.
              </p>

              <div className="mt-4 space-y-2">
                <Link
                  href="/support/chat"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
                >
                  <ChatIcon /> Chat with Support
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:opacity-80"
                >
                  <HelpIcon /> Visit Help Center
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-14 border-t pt-8 text-xs text-slate-400 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 PremiumStore. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-600">
              Terms of Service
            </Link>
            <Link href="/returns" className="hover:text-slate-600">
              Returns & Refunds
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function Row({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between text-slate-600">
      <span>{label}</span>
      <span className={["font-semibold text-slate-900", valueClass].join(" ")}>
        {value}
      </span>
    </div>
  );
}

/* ---------------- icons ---------------- */

function DownloadIcon() {
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
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function RefreshIcon() {
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
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}

function CheckSmallIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
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

function TruckIcon() {
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
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7V10Z" />
      <circle cx="7" cy="19" r="1" />
      <circle cx="18" cy="19" r="1" />
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

function ChatIcon() {
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
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </svg>
  );
}

function HelpIcon() {
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
      <path d="M12 18h.01" />
      <path d="M9.1 9a3 3 0 1 1 5.8 1c-.7 1-1.9 1.2-2.4 2.5" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
