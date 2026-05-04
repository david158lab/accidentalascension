import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SITE_TITLE = "Accidental Ascension — What does it mean to be human?";
const SITE_DESCRIPTION =
  "A podcast and platform exploring what it means to be human. Lived experience, practical steps, and honest conversation about healing, growth, and becoming.";
const SITE_URL = "https://accidentalascension.com.au";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Accidental Ascension",
    images: [
      {
        url: "/images/logo-lockup.png",
        width: 1200,
        height: 630,
        alt: "Accidental Ascension — What does it mean to be human?",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo-lockup.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David",
  url: SITE_URL,
  sameAs: [
    "https://www.youtube.com/@accidental_ascension",
    "https://www.instagram.com/accidental_ascension",
    "https://www.facebook.com/accidental_ascension",
    "https://www.tiktok.com/@accidental_ascension",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Accidental Ascension",
  inLanguage: "en-AU",
};

const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Accidental Ascension",
  url: "https://open.spotify.com/show/4ZoMVtOU0uqQ4akeouwbvf",
  description: SITE_DESCRIPTION,
  webFeed: SITE_URL,
  author: {
    "@type": "Person",
    name: "David",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${poppins.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('aa-theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, podcastSchema]),
          }}
        />
      </head>
      <body className="min-h-dvh bg-off-white dark:bg-charcoal text-charcoal dark:text-off-white transition-colors duration-500">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
