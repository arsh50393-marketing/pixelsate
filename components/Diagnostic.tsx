"use client";

import { useState } from "react";

type QA = { q: string; why: string };

const items: QA[] = [
  {
    q: "What does growth actually mean for you — more sales, more leads, more visibility?",
    why: "“Growth” means something different for every business. We define it before we chase it.",
  },
  {
    q: "What's really holding it back right now?",
    why: "The real bottleneck is rarely the obvious one. We find it before spending a rupee.",
  },
  {
    q: "What's a customer actually worth to you, once they convert?",
    why: "Without knowing what a customer is worth, no budget or ROAS target makes sense.",
  },
  {
    q: "Who's converting today — and is that who you want converting?",
    why: "Sometimes the wrong audience is buying. Fixing who converts changes everything.",
  },
  {
    q: "What's working without any push, and what's not moving no matter what you try?",
    why: "Your organic winners and stubborn losers tell us exactly where the leverage is.",
  },
  {
    q: "What makes you different from everyone else chasing the same customer?",
    why: "If we can't say why you, neither can your customer. That's where positioning starts.",
  },
];

export default function Diagnostic() {
  const [active, setActive] = useState(0);
  const current = items[active];

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + items.length) % items.length);

  return (
    <section id="diagnostic" className="section">
      <p className="eyebrow" data-aos="fade-up">
        The Diagnostic
      </p>
      <h2 className="h-display mt-4" data-aos="fade-up">
        We ask &ldquo;why&rdquo; before we quote &ldquo;how much.&rdquo;
      </h2>
      <p className="sub" data-aos="fade-up">
        Not a checklist. Just how we start understanding your business — tap a
        question to see why it matters.
      </p>

      <div
        className="mt-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:gap-6"
        data-aos="fade-up"
      >
        {/* Left: clickable question list */}
        <ul className="flex flex-col gap-2">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-expanded={isActive}
                  className={`group flex w-full items-start gap-4 border px-4 py-4 text-left transition-all ${
                    isActive
                      ? "rounded-t-xl border-ink bg-ink text-paper shadow-lg shadow-ink/10 md:rounded-xl"
                      : "rounded-xl border-black/10 bg-white text-ink hover:border-ink/40 hover:bg-black/[0.02]"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-mint text-ink"
                        : "bg-black/5 text-muted group-hover:bg-black/10"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="pt-0.5 text-[15px] font-medium leading-snug">
                    {item.q}
                  </span>
                </button>

                {/* Mobile-only inline detail (accordion) */}
                {isActive && (
                  <div className="animate-fade-swap rounded-b-xl border border-t-0 border-ink bg-ink px-4 pb-5 pt-1 text-paper md:hidden">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mint">
                        Why we ask
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                        {item.why}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right: featured conversation panel (desktop only) */}
        <div className="relative hidden flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 text-paper md:flex md:p-10">
          {/* faint decorative quote mark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-8 select-none text-[10rem] font-serif leading-none text-white/5"
          >
            &rdquo;
          </span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">
              Question 0{active + 1} / 0{items.length}
            </p>

            {/* key forces a re-mount so the fade replays on change */}
            <div key={active} className="animate-fade-swap">
              <p className="mt-5 text-2xl font-semibold leading-snug md:text-[28px]">
                {current.q}
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Why we ask
                </p>
                <p className="mt-2 text-lg leading-relaxed text-white/80">
                  {current.why}
                </p>
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to question ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-mint" : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous question"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-lg transition-colors hover:bg-white/10"
              >
                ←
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next question"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-lg transition-colors hover:bg-white/10"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
