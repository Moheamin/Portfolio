"use client";

import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreen = () => setIsMobile(window.innerWidth < 768);

    // Initial check
    checkScreen();

    // Re-check if window is resized
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Determine the href and click behavior
  const hrefValue = isMobile
    ? "mailto:moheamin852@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=moheamin852@gmail.com";

  return (
    <>
      <section
        id="contact"
        className="bg-[var(--backgroundColor)] text-[var(--fontColor)] py-32 px-8 lg:px-16 border-t border-[var(--fontColor2)]/15 flex flex-col items-center justify-center text-center"
      >
        <div className="max-w-7xl mx-auto ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-12 leading-tight">
              Let's Shine
              <br />
              Together
            </h2>
            <p className="text-xl text-[var(--fontColor2)] mb-16 leading-relaxed max-w-2xl mx-auto">
              I'm open to new opportunities and interesting collaborations. If
              you're working on something meaningful, let's talk.
            </p>
            <div className="space-y-8 mb-20">
              <Link
                href={hrefValue}
                target={isMobile ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className=" group inline-flex items-center gap-3 text-2xl text-[var(--fontColor)] hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                moheamin852@gmail.com
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>
            </div>
            <div className="flex justify-center gap-8">
              <Link
                href="https://github.com/Moheamin"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-[var(--fontColor2)] hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/moheaminrayed20"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-[var(--fontColor2)] hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
