import Footer from "@/app/_components/_layout/Footer";
import Navbar from "@/app/_components/_layout/Navbar";
import { inter } from "@/app/_lib/action";
import { ReactNode } from "react";
import { Metadata } from "next";
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
    "Front-End Developer specializing in modern, high-performance web applications. Crafting scalable, lightning-fast user experiences with thoughtful architecture and clean UI design.",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[var(--backgroundColor)] font-inter text-[var(--fontColor)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
