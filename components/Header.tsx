import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white shadow-sm shadow-black/[0.03]">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <a href="/" aria-label="Pixelsate — home" className="flex items-center">
          <Image
            src="/logo/pixelsate-logo.png"
            alt="Pixelsate — Small Pixels Big Impact"
            width={1267}
            height={355}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <a
          href="/#lead-form"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
        >
          2 Spots Left <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
