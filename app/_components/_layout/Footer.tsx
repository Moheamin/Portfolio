"use client";

import type { Translations } from "@/app/translations";

interface FooterProps {
  t: Record<string, string>;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-[var(--fontColor2)]/15 py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm text-[var(--fontColor2)]">{t.copy}</div>
      </div>
    </footer>
  );
}
