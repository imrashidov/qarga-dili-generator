import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f2ea" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Qarğa dili generator – mətni onlayn Qarğa dilinə çevir",
    template: "%s | Qarğa Dili Generator",
  },
  description:
    "Qarğa dili kodlaşdırılmış danışıq üsuludur: hər saitdən sonra bir hece əlavə olunur ki, yalnız bu oyunu bilənlər sözü anlasın. Mətni onlayn Qarğa dilinə çevirin.",
  metadataBase: new URL("https://qargadili.vercel.app"),
  keywords: [
    "Qarğa dili",
    "Qarğa dili generator",
    "qarga dili",
    "qarga dili generator",
    "Azərbaycan dili",
    "dil oyunu",
    "şifrəli danışıq",
  ],
  authors: [{ name: "Farid Rashidov", url: "https://github.com/imrashidov" }],
  creator: "Farid Rashidov",
  publisher: "Farid Rashidov",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "education",
  alternates: {
    canonical: "/",
  },
  applicationName: "Qarğa Dili Generator",
  appleWebApp: {
    capable: true,
    title: "Qarğa Dili",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://qargadili.vercel.app/",
    title: "Qarğa Dili Generator",
    description:
      "Qarğa dili kodlaşdırılmış danışıq üsuludur: hər saitdən sonra bir hece əlavə olunur ki, yalnız bu oyunu bilənlər sözü anlasın. Mətni onlayn Qarğa dilinə çevirin.",
    siteName: "Qarğa Dili Generator",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qarğa Dili Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qarğa Dili Generator",
    description:
      "Qarğa dili kodlaşdırılmış danışıq üsuludur: hər saitdən sonra bir hece əlavə olunur ki, yalnız bu oyunu bilənlər sözü anlasın. Mətni onlayn Qarğa dilinə çevirin.",
    images: ["/images/og-image.png"],
    creator: "@imrashidov",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Qarğa Dili" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#f5f2ea" />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-15H6VFSV48"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-15H6VFSV48');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://qargadili.vercel.app/#website",
                  url: "https://qargadili.vercel.app/",
                  name: "Qarğa Dili Generator",
                  alternateName: ["Qarğa Dili", "Qarğa dili generator"],
                  description:
                    "Qarğa dili kodlaşdırılmış danışıq üsuludur: hər saitdən sonra bir hece əlavə olunur ki, yalnız bu oyunu bilənlər sözü anlasın. Mətni onlayn Qarğa dilinə çevirin.",
                  inLanguage: "az-AZ",
                },
                {
                  "@type": "WebApplication",
                  "@id": "https://qargadili.vercel.app/#app",
                  name: "Qarğa Dili Generator",
                  url: "https://qargadili.vercel.app/",
                  applicationCategory: "EntertainmentApplication",
                  operatingSystem: "Any",
                  inLanguage: "az-AZ",
                  isAccessibleForFree: true,
                  offers: { "@type": "Offer", price: "0", priceCurrency: "AZN" },
                  author: {
                    "@type": "Person",
                    name: "Farid Rashidov",
                    url: "https://github.com/imrashidov",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics debug={false} />
      </body>
    </html>
  );
}
