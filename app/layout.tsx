import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qarğa Dili Generatoru",
  description:
    "Qarğa dili hər saitdən sonra seçilmiş hecaya əlavə edən əyləncəli bir dil oyunudur.",
  metadataBase: new URL("https://qargadili.vercel.app"),
  keywords: ["Qarğa dili", "Azərbaycan", "dil oyunu", "generator", "əyləncə"],
  authors: [{ name: "Farid Rashidov", url: "https://github.com/imrashidov" }],
  creator: "Farid Rashidov",
  publisher: "Farid Rashidov",
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://qargadili.vercel.app",
    title: "Qarğa Dili Generatoru",
    description: "Əyləncəli dil oyunu olan Qarğa Dilini generasiya edin.",
    siteName: "Qarğa Dili Generatoru",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qarğa Dili Generatoru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qarğa Dili Generatoru",
    description: "Əyləncəli dil oyunu olan Qarğa Dilini generasiya edin.",
    images: ["/images/og-image.png"],
    creator: "@imrashidov",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#4F46E5",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <head>
        <meta name="apple-mobile-web-app-title" content="Qarğa Dili" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#4F46E5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
