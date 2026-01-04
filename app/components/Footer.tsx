import Link from "next/link";

const SHOP_LINKS = [
  { label: "All Products", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Featured", href: "/featured" },
  { label: "Sale", href: "/sale" },
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "/help" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Order Status", href: "/orders" },
  { label: "Contact Us", href: "/contact" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top */}
        <div className="grid gap-10 py-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
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
              </span>
              <span className="text-sm font-semibold text-slate-900">
                PremiumStore
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Elevating your lifestyle with premium essentials crafted for the
              modern individual.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href="#" label="Twitter">
                <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4.9A3.5 3.5 0 0 0 12.9 6a10 10 0 0 1-7.3-3.7 3.5 3.5 0 0 0 1.1 4.7c-.6 0-1.2-.2-1.7-.5v.1a3.5 3.5 0 0 0 2.8 3.4c-.6.2-1.2.2-1.8.1a3.5 3.5 0 0 0 3.3 2.4A7 7 0 0 1 2 14.2 10 10 0 0 0 7.7 16c6.8 0 10.5-5.7 10.5-10.6v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
                <path d="M16 11.4a4 4 0 1 1-7.9 1.2A4 4 0 0 1 16 11.4Z" />
                <path d="M17.5 6.5h.01" />
              </SocialIcon>

              <SocialIcon href="#" label="Facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
              </SocialIcon>
            </div>
          </div>

          {/* Columns */}
          <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
            <FooterCol title="SHOP" links={SHOP_LINKS} />
            <FooterCol title="SUPPORT" links={SUPPORT_LINKS} />
            <FooterCol title="COMPANY" links={COMPANY_LINKS} />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PremiumStore. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wide">Visa</span>
            <span className="text-xs uppercase tracking-wide">Mastercard</span>
            <span className="text-xs uppercase tracking-wide">Amex</span>
            <span className="text-xs uppercase tracking-wide">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-wider text-slate-900">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100"
    >
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
        {children}
      </svg>
    </Link>
  );
}
