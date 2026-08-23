import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Pixelsate",
  description:
    "How Pixelsate collects, uses, and protects the information you share via pixelsate.in.",
};

export default function PrivacyPolicy() {
  return (
    <main id="top">
      <Header />

      <article className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted">
          Effective date: 23 August 2026
        </p>
        <p className="mt-1 text-muted">
          Applies to pixelsate.in and all forms, calls, and communications
          connected to it.
        </p>

        <div className="mt-10 space-y-10">
          <Section title="1. Overview">
            <p>
              Pixelsate (&ldquo;Pixelsate,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) runs a growth and
              performance-marketing practice based in India. This policy
              explains what personal information we collect when you visit
              pixelsate.in, fill out our lead form, or otherwise get in touch —
              and what we do with it.
            </p>
            <p>
              We take on five clients at a time, which means every conversation
              with us is a real one. We treat the information you share with the
              same care: we collect only what we need to understand your
              business, and we don&apos;t sell it to anyone.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <h3 className="text-lg font-semibold">
              Information you give us directly
            </h3>
            <p>
              When you submit our lead form, book a call, or email us, we may
              collect:
            </p>
            <List
              items={[
                "Your name, email address, and phone number",
                "Your business name, location, and website (if provided)",
                "Your most active social profile (Instagram, Facebook, or LinkedIn)",
                "Your answers to our qualifying questions — for example, your investment readiness and the biggest challenge holding your business back",
                "Any other details you choose to share with us in emails, calls, or messages",
              ]}
            />

            <h3 className="mt-6 text-lg font-semibold">
              Information collected automatically
            </h3>
            <p>
              When you browse pixelsate.in, our website and its analytics or
              advertising tools may automatically collect:
            </p>
            <List
              items={[
                "IP address, browser type, device type, and operating system",
                "Pages viewed, time on site, referring URL, and general interaction data (e.g., clicks, scroll depth)",
                "Approximate location inferred from your IP address",
              ]}
            />

            <h3 className="mt-6 text-lg font-semibold">
              Information from third parties
            </h3>
            <p>
              If you reach us through a Meta or Google ad, click a link from
              LinkedIn, or interact with our brand on another platform, that
              platform may pass along limited information about the referral
              (such as the ad or campaign that led you here) as part of its own
              advertising tools.
            </p>
          </Section>

          <Section title="3. How we use it">
            <p>We use the information we collect to:</p>
            <List
              items={[
                "Understand your business before we get on a call — this is the whole point of our diagnostic approach",
                "Respond to your enquiry, follow up, and schedule calls",
                "Run and measure our own marketing, including our website and ad campaigns",
                "Improve our site, our lead form, and how we explain what we do",
                "Meet legal, accounting, or contractual obligations, such as invoicing a client",
              ]}
            />
            <p>
              We don&apos;t use your information to train third-party AI models,
              and we don&apos;t sell or rent your personal data to anyone. Full
              stop.
            </p>
          </Section>

          <Section title="4. Who we share it with">
            <div className="overflow-hidden rounded-xl border border-black/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink text-paper">
                  <tr>
                    <th className="p-4 font-semibold">Who</th>
                    <th className="p-4 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {[
                    [
                      "Form and website tooling (e.g., our website host, form provider)",
                      "To operate pixelsate.in and process your submission",
                    ],
                    [
                      "Advertising platforms (Meta, Google)",
                      "To run and measure our own ad campaigns, and to fulfil client campaigns you've hired us for",
                    ],
                    [
                      "Analytics providers",
                      "To understand how visitors use our site",
                    ],
                    [
                      "Communication tools (e.g., email, calendar, phone/WhatsApp)",
                      "To follow up on your enquiry and schedule calls",
                    ],
                    [
                      "Professional advisors (accountants, lawyers)",
                      "Where required for our own compliance",
                    ],
                    [
                      "Authorities",
                      "Where required by law, court order, or to protect our legal rights",
                    ],
                  ].map(([who, why]) => (
                    <tr key={who} className="align-top">
                      <td className="p-4 font-medium">{who}</td>
                      <td className="p-4 text-muted">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              If we&apos;re ever engaged to run advertising on your behalf, your
              ad account data is managed on the platform directly, under your own
              account — not funnelled through us. That&apos;s a deliberate part
              of how we work.
            </p>
          </Section>

          <Section title="5. Cookies & tracking">
            <p>
              Our website may use cookies and similar technologies (such as
              pixels from Meta or Google) to remember your preferences, measure
              traffic, and understand which ads bring people to our site. You can
              disable cookies in your browser settings, though some parts of the
              site may not work as well without them.
            </p>
          </Section>

          <Section title="6. How long we keep it">
            <p>
              We keep lead-form and enquiry data for as long as it&apos;s useful
              to our relationship with you, and for a reasonable period afterward
              in case you get back in touch. If you become a client, we retain
              records for as long as needed to deliver our services and meet
              accounting and legal requirements. You can ask us to delete your
              information sooner — see Section 8.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We use reasonable technical and organisational measures — such as
              restricted access and secure tools — to protect the information you
              share with us. No method of transmission or storage is completely
              secure, so while we work to protect your data, we can&apos;t
              guarantee absolute security.
            </p>
          </Section>

          <Section title="8. Your rights & choices">
            <p>
              Depending on where you&apos;re based, you may have the right to:
            </p>
            <List
              items={[
                "Ask what personal information we hold about you",
                "Ask us to correct inaccurate information",
                "Ask us to delete your information",
                "Withdraw consent for marketing communications at any time",
                "Object to or restrict certain uses of your data",
              ]}
            />
            <p>
              If you&apos;re located in India, these rights are provided under
              the Digital Personal Data Protection Act, 2023. If you&apos;re
              located in the EU/UK, similar rights are provided under the
              GDPR/UK GDPR. To exercise any of these, just email us — see
              Section 12.
            </p>
          </Section>

          <Section title="9. Children's privacy">
            <p>
              Pixelsate is a business-to-business service. Our site and services
              are not directed at children, and we don&apos;t knowingly collect
              personal information from anyone under 18. If you believe a child
              has provided us with personal information, contact us and we&apos;ll
              remove it.
            </p>
          </Section>

          <Section title="10. International visitors">
            <p>
              We&apos;re based in India, and the information we collect is
              generally processed here. If you&apos;re contacting us from outside
              India, your information will be transferred to and processed in
              India, where data protection laws may differ from those in your own
              country.
            </p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>
              We may update this policy from time to time as our practice, tools,
              or legal obligations change. We&apos;ll update the effective date at
              the top of this page when we do. If changes are significant,
              we&apos;ll make a reasonable effort to let you know.
            </p>
          </Section>

          <Section title="12. Contact us">
            <p>
              Questions about this policy, or want us to update or delete your
              information? Reach out and we&apos;ll sort it directly — no ticket
              number, no bot.
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:himanshu@pixelsate.in"
                className="font-medium text-accent underline underline-offset-2"
              >
                himanshu@pixelsate.in
              </a>
              <br />
              Website:{" "}
              <a
                href="https://pixelsate.in"
                className="font-medium text-accent underline underline-offset-2"
              >
                pixelsate.in
              </a>
            </p>
          </Section>
        </div>

        <p className="mt-12 border-t border-black/10 pt-6 text-sm text-muted">
          Pixelsate — We fix growth problems. © 2026 Pixelsate. All rights
          reserved.
        </p>
      </article>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-4 leading-relaxed text-ink/90">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
