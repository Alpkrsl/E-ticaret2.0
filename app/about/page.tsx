import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#f7f5f2]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-20 text-center">
        <p className="text-xs tracking-widest text-slate-500">
          EST. 2019
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
          About PremiumStore
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          Defining the standard of modern living through curated excellence.
          We believe in objects that tell a story of quality, craft, and
          architectural precision.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
            alt="Premium interior"
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>
       {/* OUR STORY (Day 2) */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left text */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Our Story</h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              PremiumStore was born from a desire to blend architectural
              precision with everyday functionality. Our heritage is rooted in
              the belief that luxury is found in the details and the quality of
              materials used.
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Every piece in our collection is hand-selected and vetted by our
              team of curators. We don’t just sell products; we offer a refined
              perspective on modern living that transcends temporary trends.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <span className="h-px w-10 bg-slate-300" />
              <span className="italic text-slate-500">The Founders</span>
            </div>
          </div>

          {/* Right image */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
              alt="Premium materials"
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
