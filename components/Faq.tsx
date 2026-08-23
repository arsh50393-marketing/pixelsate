"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is ad spend separate from the monthly retainer?",
    a: "Yes, completely. Ads run on your own card, on the platform directly — so every rupee spent is visible to you, always.",
  },
  {
    q: "How long does it take to get results?",
    a: "Depends what we're solving for. Once we know exactly what you're going after, we'll tell you a real timeline — not a guess.",
  },
  {
    q: "Which platforms do you run ads on?",
    a: "Whichever one actually solves your problem. Meta, Google, Snapchat — the platform follows the strategy, not the other way around.",
  },
  {
    q: "Can you manage social media too?",
    a: "Yes — but like everything else we do, it starts with understanding what your business actually needs first.",
  },
  {
    q: "Can you help with shoots?",
    a: "Yes, based on what the plan actually calls for.",
  },
  {
    q: "Can you help with leads?",
    a: "Yes — it's one of the things we do most.",
  },
  {
    q: "Can you help with SEO?",
    a: "SEO's fading. We'll steer you toward GEO instead — and yes, we handle that too.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <p className="eyebrow" data-aos="fade-up">FAQ</p>
      <h2 className="h-display mt-4" data-aos="fade-up">A few things people ask.</h2>

      <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} data-aos="fade-up">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium md:text-xl">{f.q}</span>
                <span
                  className={`text-2xl text-accent transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] pb-6 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl text-lg text-muted">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
