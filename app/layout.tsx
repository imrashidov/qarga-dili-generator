import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qarğa Dili Generator",
  description:
    "Qarğa dili hər saitdən sonra seçilmiş hecayı əlavə edən əyləncəli bir dil oyunudur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Qarğa Dili" />
      <link rel="manifest" href="/site.webmanifest" />
      <body>{children}</body>
    </html>
  );
}
