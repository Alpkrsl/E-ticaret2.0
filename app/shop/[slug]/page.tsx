import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
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
          <span className="text-slate-700">
            Minimalist Leather Chronograph
          </span>
        </div>

        {/* Main layout */}
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* LEFT: Images */}
          <div>
            {/* Main image */}
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
                alt="Minimalist Leather Chronograph"
                width={800}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 w-20 cursor-pointer overflow-hidden rounded-lg border bg-slate-100"
                >
                  <div className="h-full w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product summary (Day 1 – skeleton) */}
          <div>
            <p className="text-xs tracking-widest text-blue-600">
              EXCLUSIVE COLLECTION
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
              Minimalist Leather Chronograph
            </h1>

            {/* Rating placeholder */}
            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              ⭐⭐⭐⭐⭐ <span>(128 reviews)</span>
            </div>

            {/* Price placeholder */}
            <div className="mt-6 h-10 w-40 rounded-md bg-slate-100" />

            {/* Description placeholder */}
            <div className="mt-6 space-y-3">
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-5/6 rounded bg-slate-100" />
              <div className="h-3 w-4/6 rounded bg-slate-100" />
            </div>

            {/* CTA placeholder */}
            <div className="mt-8 h-11 w-48 rounded-md bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
