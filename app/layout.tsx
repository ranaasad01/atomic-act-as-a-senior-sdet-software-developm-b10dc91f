import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rao Muhammad Ali | Lead Automation & Quality Engineer",
  description:
    "Senior SDET specializing in high-scale E2E frameworks, CI/CD reliability, and performance gatekeeping. Expert in Playwright, Cypress, k6, and cloud-native test infrastructure.",
  keywords: [
    "SDET",
    "QA Engineer",
    "Test Automation",
    "Playwright",
    "Cypress",
    "CI/CD",
    "Performance Testing",
    "k6",
    "JMeter",
    "Quality Engineering",
  ],
  authors: [{ name: "Rao Muhammad Ali" }],
  openGraph: {
    title: "Rao Muhammad Ali | Lead Automation & Quality Engineer",
    description:
      "Senior SDET specializing in high-scale E2E frameworks, CI/CD reliability, and performance gatekeeping.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rao Muhammad Ali | Lead Automation & Quality Engineer",
    description:
      "Senior SDET specializing in high-scale E2E frameworks, CI/CD reliability, and performance gatekeeping.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0f0f1a] text-slate-200 antialiased">{children}</body>
    </html>
  );
}