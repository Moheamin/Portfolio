"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import ImageWithFallback from "@/app/_components/_image/ImageWithFallback";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 lg:px-16 pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] mb-10">
              Front-End Developer
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-10 leading-[0.95]">
              Mohayman
              <br />
              Rayed Hamed
            </h1>
            <p className="text-xl md:text-2xl text-[var(--fontColor)]/90 mb-8 max-w-xl leading-relaxed">
              I craft web experiences that are built to last. Using the pinnacle
              of modern frontend technology, I create scalable, lightning-fast
              solutions where thoughtful architecture meets product-driven
              design—all driven by a commitment to excellence and a love for
              seamless user interfaces.
            </p>
            <p className="text-base text-[var(--fontColor2)] mb-14 max-w-lg leading-relaxed">
              I leverage cutting-edge web frameworks to turn product vision into
              seamless, high-performance systems. I pour my heart into every
              detail, creating robust foundations that empower users and stand
              the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--fontColor)] text-[var(--backgroundColor)] hover:bg-[var(--contrastColor)] transition-all duration-300"
              >
                View Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 px-8 py-4 border border-[var(--border)] text-[var(--fontColor)] hover:border-[var(--contrastColor)] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>

          {/* Photo */}
          {/* Photo */}
          <div className="order-1 lg:order-2">
            {/* Added 'group' here to trigger the hover */}
            <div className="group relative aspect-[3/4] max-w-md mx-auto lg:ml-auto overflow-hidden">
              <ImageWithFallback
                src="/myself.png"
                alt="Mohayman Rayed Hamed"
                // Added group-hover and !important to force the override
                priority
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
