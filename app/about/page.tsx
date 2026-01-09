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
    </div>
  );
}
