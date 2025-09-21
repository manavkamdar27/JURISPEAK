import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import DisclaimerModal from "@/components/DisclaimerModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JURISPEAK Advocates & Consultants | Legal Excellence in Mumbai",
  description: "Premier legal services in Mumbai. Expert advocates and consultants specializing in corporate law, civil litigation, family law, and more. Contact us for a free consultation.",
  keywords: [
    "law firm Mumbai",
    "legal services India",
    "advocates Mumbai",
    "corporate law",
    "civil litigation",
    "family law",
    "legal consultation",
    "JURISPEAK",
    "Dinesh Rane"
  ],
  authors: [{ name: "JURISPEAK Advocates & Consultants" }],
  creator: "JURISPEAK Advocates & Consultants",
  publisher: "JURISPEAK Advocates & Consultants",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jurispeak.co.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JURISPEAK Advocates & Consultants | Legal Excellence in Mumbai",
    description: "Premier legal services in Mumbai. Expert advocates and consultants specializing in corporate law, civil litigation, family law, and more.",
    url: "https://jurispeak.co.in",
    siteName: "JURISPEAK Advocates & Consultants",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JURISPEAK Advocates & Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JURISPEAK Advocates & Consultants | Legal Excellence in Mumbai",
    description: "Premier legal services in Mumbai. Expert advocates and consultants specializing in corporate law, civil litigation, family law, and more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B1C2C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <DisclaimerModal />
        {children}
      </body>
    </html>
  );
}
