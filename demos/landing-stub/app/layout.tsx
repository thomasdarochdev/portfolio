import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing stub — Thomas Daroch",
  description:
    "Squelette public Next.js (App Router) pour preuve de stack landing freelance. Pas un site client fictif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
