export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="section flex min-h-[62vh] flex-col justify-center py-16 md:py-20">
        <div
          data-aos="fade-up"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          2 Spots Left
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 max-w-4xl text-4xl font-semibold capitalize leading-[1.05] tracking-tight md:text-7xl"
        >
          We&apos;re not a digital marketing agency.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 max-w-2xl text-xl text-muted md:text-2xl"
        >
          We fix growth problems. We don&apos;t sell growth packages.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-semibold text-paper transition-transform hover:-translate-y-0.5"
          >
            2 Spots Left →
          </a>
          <a
            href="#diagnostic"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-black/5"
          >
            See how we work
          </a>
        </div>
      </div>
    </section>
  );
}
