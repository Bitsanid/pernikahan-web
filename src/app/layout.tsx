import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NikahDigital - Undangan Pernikahan Digital",
  description:
    "Platform undangan pernikahan digital terbaik di Indonesia. Pilih dari berbagai template cantik, customize, dan bagikan undangan Anda.",
  keywords: [
    "undangan pernikahan",
    "undangan digital",
    "wedding invitation",
    "pernikahan",
    "nikah",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
