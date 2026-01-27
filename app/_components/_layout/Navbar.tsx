"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const SECTIONS = ["hero", "about", "projects", "skills", "contact"];

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const navHeight = 80;
    let lastSection = "hero";

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        let currentSection = lastSection;

        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (!el) continue;

          const rect = el.getBoundingClientRect();

          if (rect.top <= navHeight + 200) {
            currentSection = id;
          } else {
            break;
          }
        }

        if (currentSection !== lastSection) {
          lastSection = currentSection;
          setActiveSection(currentSection);

          // Update URL safely (no history spam)
          window.history.replaceState(null, "", `#${currentSection}`);
        }

        ticking = false;
      });
    };

    // Initial sync
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // iOS-safe scrolling
    el.scrollIntoView({
      block: "start",
      behavior: "auto", // DO NOT use "smooth" on iOS
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] text-[var(--fontColor)] shadow-md backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div>
            <Link
              href="#hero"
              onClick={() => scrollToSection("hero")}
              className="text-xs sm:text-base tracking-tight text-[var(--fontColor)] hover:text-[var(--contrastColor)] transition-colors duration-300"
            >
              MR
            </Link>
          </div>

          <ul className="flex gap-4 sm:gap-6 lg:gap-10">
            <li
              className={
                activeSection === "about" ? "text-[var(--contrastColor)]" : ""
              }
            >
              <Link
                href="#about"
                onClick={() => scrollToSection("about")}
                className="text-xs sm:text-base lg:text-base hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                About
              </Link>
            </li>

            <li
              className={
                activeSection === "projects"
                  ? "text-[var(--contrastColor)]"
                  : ""
              }
            >
              <Link
                href="#projects"
                onClick={() => scrollToSection("projects")}
                className="text-xs sm:text-base lg:text-base hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                Projects
              </Link>
            </li>

            <li
              className={
                activeSection === "skills" ? "text-[var(--contrastColor)]" : ""
              }
            >
              <Link
                href="#skills"
                onClick={() => scrollToSection("skills")}
                className="text-xs sm:text-base lg:text-base hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                Skills
              </Link>
            </li>
            <li
              className={
                activeSection === "contact" ? "text-[var(--contrastColor)]" : ""
              }
            >
              <Link
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className="text-xs sm:text-base lg:text-base hover:text-[var(--contrastColor)] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
