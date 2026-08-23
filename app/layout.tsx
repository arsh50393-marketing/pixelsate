import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixelsate — We fix growth problems.",
  description:
    "We're not a digital marketing agency. We fix growth problems — we don't sell growth packages. Only 5 clients at a time.",
  openGraph: {
    title: "Pixelsate — We fix growth problems.",
    description:
      "We fix growth problems. We don't sell growth packages. Only 5 clients at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
