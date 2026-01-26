"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "projects", "skills", "contact"];

    const handleScroll = () => {
      let currentSection = "hero";
      const navHeight = 80; // Approximate navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // Check if section is in viewport or above it
        if (rect.top <= navHeight + 200) {
          currentSection = sectionId;
        } else {
          break; // Stop checking once we find a section below viewport
        }
      }

      setActiveSection(currentSection);
      window.history.replaceState(null, "", `#${currentSection}`);
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
