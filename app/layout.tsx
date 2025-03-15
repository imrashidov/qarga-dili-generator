import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qarğa Dili Generator",
  description:
    "Qarğa dili hər saitdən sonra seçilmiş hecaya əlavə edən əyləncəli bir dil oyunudur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <meta name="apple-mobile-web-app-title" content="Qarğa Dili" />
      <link rel="manifest" href="/site.webmanifest" />
      <body>{children}</body>
    </html>
  );
}
