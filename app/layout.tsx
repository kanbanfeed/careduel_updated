import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareDuel – AI Prompt Packs",
  description:
    "British-engineered AI prompt packs for wealth, productivity, and business. Instant download. High-performance results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#0B1C2C]">
        {children}
      </body>
    </html>
  );
}