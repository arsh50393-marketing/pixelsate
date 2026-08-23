"use client";

import { useState } from "react";

type Brand = { name: string; file: string };

const brands: Brand[] = [
  { name: "Goodmeat Company", file: "/brands/4.png" },
  { name: "uEngage", file: "/brands/5.png" },
  { name: "Jojocart", file: "/brands/7.png" },
  { name: "Kingbakers", file: "/brands/6.png" },
  { name: "Yes Physio", file: "/brands/10.png" },
  { name: "Meat Thebu", file: "/brands/2.png" },
  { name: "MyKinda", file: "/brands/8.png" },
  { name: "Premier Furniture", file: "/brands/9.png" },
  { name: "Belle Graphics", file: "/brands/3.png" },
  { name: "Dosa Glory", file: "/brands/1.png" },
];

export default function Brands() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...brands, ...brands];

  return (
    <section className="section">
      <p className="eyebrow" data-aos="fade-up">Brands</p>
      <h2 className="h-display mt-3" data-aos="fade-up">
        Brands that trusted us with real budgets.
      </h2>
      <p className="sub" data-aos="fade-up">Every brand here trusted us with theirs.</p>

      <div
        data-aos="fade-up"
        className="marquee-group relative mt-8 overflow-hidden rounded-2xl border border-black/10 bg-white py-6"
      >
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <ul className="animate-marquee flex w-max items-center gap-4">
          {loop.map((b, i) => (
            <li key={`${b.name}-${i}`} aria-hidden={i >= brands.length}>
              <LogoCard brand={b} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LogoCard({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-28 w-40 items-center justify-center rounded-xl border border-black/5 bg-white p-4">
      {failed ? (
        <span className="text-center text-sm font-semibold text-muted">
          {brand.name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.file}
          alt={`${brand.name} logo`}
          className="max-h-20 w-auto max-w-full object-contain transition-transform duration-200 hover:scale-105"
          onError={() => setFailed(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}
