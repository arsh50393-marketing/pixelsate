export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="section flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <p className="text-xl font-semibold">Pixelsate</p>
          <p className="mt-1 text-sm text-muted">
            We fix growth problems. We don&apos;t sell growth packages.
          </p>
        </div>
        <a
          href="/#lead-form"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
        >
          2 Spots Left →
        </a>
      </div>
      <div className="border-t border-black/5">
        <div className="section flex flex-col gap-2 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Pixelsate. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <span className="hidden md:inline">·</span>
            <span>Only 5 clients at a time. On purpose.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
