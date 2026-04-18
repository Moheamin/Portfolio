"use client";

import type { Translations } from "@/app/translations";

interface AboutSectionProps {
  t: Record<string, string>;
}

export function AboutSection({ t }: AboutSectionProps) {
  const a = t;

  return (
    <section
      id="about"
      className="py-40 px-8 lg:px-16 border-t border-(--fontColor2)/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/4">
            <div className="text-[10px] tracking-widest uppercase text-(--fontColor2) sticky top-32">
              {a.sideLabel}
            </div>
          </div>
          <div className="lg:w-3/4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 leading-tight">
              {a.heading1}
              <br />
              {a.heading2}
            </h2>
            <div className="space-y-8 text-lg text-(--fontColor2) leading-relaxed">
              <p>
                {a.p1_pre} <span className="text-(--fontColor)">{a.p1_h1}</span>{" "}
                {a.p1_mid} <span className="text-(--fontColor)">{a.p1_h2}</span>{" "}
                {a.p1_suf}
              </p>
              <p>
                {a.p2_pre} <span className="text-(--fontColor)">{a.p2_h1}</span>
                , <span className="text-(--fontColor)">{a.p2_h2}</span>,{" "}
                <span className="text-(--fontColor)">{a.p2_h3}</span>,{" "}
                {/* prettier-ignore */}
                {"and "}
                <span className="text-(--fontColor)">{a.p2_h4}</span>
                {a.p2_mid} <span className="text-(--fontColor)">{a.p2_h5}</span>{" "}
                {a.p2_suf}
              </p>
              <p>{a.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
