const aiHelps = [
  "Research and audience insights",
  "First drafts of creatives and copy",
  "Reporting and performance tracking",
  "Image and video generation for quick concepts",
];

const alwaysHuman = [
  "Understanding your business and its actual problem",
  "Strategy — what to spend on, where, and why",
  "Final creative calls — what actually goes live",
  "The conversation with you, every step",
];

export default function AiHonestly() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="section">
        <p className="eyebrow" data-aos="fade-up">AI, Honestly</p>
        <h2 className="h-display mt-4" data-aos="fade-up">
          We use AI. We don&apos;t let it think for you.
        </h2>
        <p className="sub" data-aos="fade-up">
          Tools move fast. Judgment still comes from us.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div
            className="rounded-3xl border-2 border-ink bg-ink p-8 text-paper"
            data-aos="fade-up"
          >
            <h3 className="text-lg font-semibold">
              Where AI helps us move faster
            </h3>
            <ul className="mt-6 space-y-4">
              {aiHelps.map((item) => (
                <li key={item} className="flex gap-3 text-white/80">
                  <span className="mt-1 text-mint">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl border border-black/10 p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg font-semibold">Where it&apos;s always human</h3>
            <ul className="mt-6 space-y-4">
              {alwaysHuman.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-1 text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
