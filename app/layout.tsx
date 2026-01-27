import Footer from "@/app/_components/_layout/Footer";
import Navbar from "@/app/_components/_layout/Navbar";
import { inter } from "@/app/_lib/action";
import { ReactNode } from "react";
import { Metadata } from "next";
import type { Viewport } from "next";
import "./styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Mohayman Rayed Hamed",
    template: "%s | Mohayman Rayed Hamed",
  },
  description:
    "Front-End Developer specializing in modern, high-performance web applications...",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "UI/UX Design",
  ], // Add this!
  authors: [{ name: "Mohayman Rayed Hamed" }],
  creator: "Mohayman Rayed Hamed",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[var(--backgroundColor)] font-inter text-[var(--fontColor)]">
        <Navbar />

        <main className="w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
