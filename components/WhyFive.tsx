export default function WhyFive() {
  const filled = 3;
  const total = 5;

  return (
    <section className="section">
      <p className="eyebrow" data-aos="fade-up">Why 5 Clients</p>
      <h2 className="h-display mt-4" data-aos="fade-up">
        We could take on more clients. We choose not to.
      </h2>
      <p className="sub" data-aos="fade-up">
        More clients means less of us. We&apos;re not okay with that.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-6 text-lg leading-relaxed" data-aos="fade-right">
          <p className="text-muted">
            We&apos;ve got the systems, the process, and the results to handle
            more. We just don&apos;t want to spread thin.
          </p>
          <p>
            A growth partner managing 40 accounts isn&apos;t a partner.
            They&apos;re a dashboard.
          </p>
          <p>Every client gets less of us the more clients we add.</p>
          <p>
            So instead of growing our list, we cap it — and grow your business
            harder.
          </p>
        </div>

        <div
          className="rounded-3xl border border-black/10 bg-white p-8"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            Slot tracker
          </p>
          <div className="mt-6 flex gap-3">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`h-16 flex-1 rounded-xl border ${
                  i < filled
                    ? "border-transparent bg-ink"
                    : "border-dashed border-accent/50 bg-accent/5"
                }`}
              />
            ))}
          </div>
          <p className="mt-6 text-lg font-medium">
            {filled} / {total} filled ·{" "}
            <span className="text-accent">
              {total - filled} spots open this quarter
            </span>
          </p>
          <a
            href="#lead-form"
            className="group mt-8 flex w-full items-center justify-between gap-3 rounded-2xl bg-accent px-6 py-4 text-white transition-transform hover:-translate-y-0.5"
          >
            <span className="flex flex-col text-left leading-tight">
              <span className="text-xl font-bold tracking-tight sm:text-2xl">
                Talk to us
              </span>
              <span className="mt-0.5 text-xs font-medium text-mint">
                before the next one&apos;s gone.
              </span>
            </span>
            <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
