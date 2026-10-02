import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/Providers";

/* =========================================================
   FONTS
   ========================================================= */

/*
  Mona Sans is not available through next/font/google
  in this Next.js setup, so we use Manrope as the
  professional sans-serif alternative specified in the
  original project requirements.
*/

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

/* =========================================================
   SITE CONFIGURATION
   ========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://example.com";

const siteName = "Sabin Karmacharya";

const siteTitle =
  "Sabin Karmacharya | Senior Waiter & Hospitality Professional";

const siteDescription =
  "Portfolio of Sabin Karmacharya, Senior Waiter and Fine-Dining & Hospitality Professional working in Dubai.";

const profileImage = "/images/profile.jpg";

/* =========================================================
   VIEWPORT
   ========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f6f8fb",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0b1a26",
    },
  ],
};

/* =========================================================
   SEO METADATA
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Sabin Karmacharya",
    "Senior Waiter",
    "Fine Dining",
    "Hospitality Professional",
    "Waiter Dubai",
    "Hospitality Dubai",
    "Restaurant Professional",
    "Hotel Professional",
    "Hospitality Nepal",
    "Senior Waiter Dubai",
  ],

  authors: [
    {
      name: siteName,
    },
  ],

  creator: siteName,

  publisher: siteName,

  applicationName: siteName,

  category: "Hospitality Professional Portfolio",

  alternates: {
    canonical: siteUrl,
  },

  /* =======================================================
     OPEN GRAPH
     ======================================================= */

  openGraph: {
    type: "website",
    locale: "en_US",

    url: siteUrl,

    siteName,

    title: siteTitle,

    description:
      "Warm, polished and memorable guest experiences across Nepal and Dubai.",

    images: [
      {
        url: profileImage,
        width: 1200,
        height: 630,
        alt:
          "Sabin Karmacharya - Senior Waiter and Hospitality Professional",
      },
    ],
  },

  /* =======================================================
     TWITTER / SOCIAL SHARING
     ======================================================= */

  twitter: {
    card: "summary_large_image",

    title:
      "Sabin Karmacharya | Senior Waiter & Hospitality Professional",

    description:
      "Senior Waiter | Fine-Dining & Hospitality Professional working in Dubai.",

    images: [profileImage],
  },

  /* =======================================================
     ICONS
     ======================================================= */

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },

  /* =======================================================
     ROBOTS
     ======================================================= */

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
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  /* =======================================================
     JSON-LD PERSON SCHEMA
     ======================================================= */

  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Sabin Karmacharya",

    jobTitle: "Senior Waiter",

    description:
      "Senior Waiter and Fine-Dining & Hospitality Professional working in Dubai.",

    url: siteUrl,

    email: "mailto:karmacharyasabin340@gmail.com",

    telephone: "+977 9806508414",

    image: `${siteUrl}${profileImage}`,

    address: {
      "@type": "PostalAddress",
      addressLocality: "Tanahun",
      addressCountry: "NP",
    },

    knowsLanguage: [
      "English",
      "Hindi",
      "Nepali",
    ],

    sameAs: [
      "https://www.facebook.com/sabin.karmacharya.128504",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${manrope.variable}
          ${playfair.variable}
          antialiased
        `}
      >
        <Providers>
          {/* =================================================
              ACCESSIBILITY
              ================================================= */}

          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to content
          </a>

          {/* =================================================
              PERSON STRUCTURED DATA
              ================================================= */}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />

          {/* =================================================
              MAIN WEBSITE
              ================================================= */}

          {children}
        </Providers>
      </body>
    </html>
  );
}