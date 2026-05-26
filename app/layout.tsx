import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "How to Install an AI OS in Your Business | Free Webinar",
  description:
    "Free webinar for SME owners to learn how to implement AI systems, automate workflows, and build an AI Operating System for their business. Join Shreeram Yadav on 10 June 2026.",
  keywords: [
    "AI webinar",
    "AI for SME",
    "business automation",
    "AI operating system",
    "workflow automation",
    "AI agents for business",
    "Wangoes Technologies",
    "Shreeram Yadav",
    "free webinar",
    "AI implementation",
  ],
  openGraph: {
    title: "How to Install an AI OS in Your Business | Free Webinar",
    description:
      "Stop running your business on willpower. Start running it on AI. Join this free 90-minute webinar for SME owners on 10 June 2026.",
    type: "website",
    locale: "en_US",
    siteName: "Wangoes Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install an AI OS in Your Business | Free Webinar",
    description:
      "Free 90-minute webinar for SME owners. Learn to build a practical AI Operating System for your business — without becoming technical.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Event structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "How to Install an AI OS in Your Business",
              description:
                "Free 90-minute webinar for SME owners to learn how to build a practical AI Operating System for their business.",
              startDate: "2026-06-10T09:00:00+01:00",
              endDate: "2026-06-10T10:30:00+01:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
              location: {
                "@type": "VirtualLocation",
                url: "https://wangoes.com/webinar",
              },
              organizer: {
                "@type": "Organization",
                name: "Wangoes Technologies",
                url: "https://wangoes.com",
              },
              performer: {
                "@type": "Person",
                name: "Shreeram Yadav",
                jobTitle: "Founder & AI Specialist",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/LimitedAvailability",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFAFA]">{children}</body>
    </html>
  );
}
