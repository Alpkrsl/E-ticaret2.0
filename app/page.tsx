import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        {/* soft background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          {/* Left: copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Premium essentials for modern living
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Discover premium products that fit your lifestyle
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Curated collections with clean design, fast delivery, and secure
              checkout. Build your daily essentials with confidence.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/shop"
                className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-semibold text-white hover:opacity-95"
              >
                Shop Now
              </Link>

              <Link
                href="/categories"
                className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Categories
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Free Shipping
              </span>
              <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Secure Payment
              </span>
              <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Easy Returns
              </span>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-slate-50 shadow-sm">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-white shadow-sm" />
                  <p className="text-sm font-semibold text-slate-900">
                    Hero Visual
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Replace with product image / collage
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 hidden w-[240px] rounded-xl border bg-white p-4 shadow-sm md:block">
              <p className="text-xs font-semibold text-slate-900">Today’s pick</p>
              <p className="mt-1 text-sm text-slate-700">
                Minimal Leather Watch
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">$129</p>
            </div>
          </div>
        </div>
      </section>

      {/* sonraki sectionlar buraya gelecek */}
    </div>
  );
}
