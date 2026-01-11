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
              {/* MISSION & VALUES (Day 3) */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our Mission & Values
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">
            We build long-lasting value through design integrity, quality, and
            customer trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Quality First",
              text: "We source and craft products using premium materials and strict quality standards.",
            },
            {
              title: "Customer Centric",
              text: "Every decision we make starts with the needs and experience of our customers.",
            },
            {
              title: "Timeless Design",
              text: "We believe good design should outlive trends and seasons.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS (Day 3) */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            {[
              { value: "10K+", label: "Customers" },
              { value: "500+", label: "Products" },
              { value: "5+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </section>
    </div>
  );
}
