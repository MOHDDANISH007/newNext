import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammad Danish | Fullstack Developer.",
  description: "Fullstack developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
