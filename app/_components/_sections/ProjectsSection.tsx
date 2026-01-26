import { ArrowUpRight } from "lucide-react";
import ImageWithFallback from "@/app/_components/_image/ImageWithFallback";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact?: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Orphanage Management System",
    description:
      "A secure, real-time ecosystem designed to streamline orphan care operations and sensitive data management of Sponsorships.",
    problem:
      "Inefficient manual tracking of resident data, leading to fragmented records and delayed administrative responses.",
    solution:
      "Architected a centralized dashboard using TypeScript and Supabase, featuring real-time synchronization, secure role-based access control, and an intuitive UI for complex data entry.",
    impact:
      "Drastic reduction in administrative overhead and improved data integrity for 100% of resident records.",
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React Query",
    ],
    imageUrl: "/orphanageManagmentSystem.png",
    link: "",
  },
  {
    title: "Multi-Vendor Marketplace Platform",
    description:
      "A scalable store-of-stores platform allowing vendors to create and manage their own shops while buyers explore and purchase from multiple dealers in one place.",
    problem:
      "Small and medium dealers lacked an easy way to launch online stores, while buyers needed a unified platform to discover trusted sellers without switching between websites.",
    solution:
      "Built a multi-vendor marketplace where users can register as buyers or dealers, create individual stores with a fixed, consistent layout, publish products, and manage transactions through role-based dashboards. Admin controls ensure verification, moderation, and platform-wide management.",
    impact:
      "Enabled multiple vendors to launch stores on a single platform, improved product discoverability, and centralized buyer–seller interactions with advanced search and filtering.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: "/multivendorStore.png",
    link: "",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-40 px-8 lg:px-16 border-t border-[var(--fontColor2)]/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          <div className="lg:w-1/4">
            <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] sticky top-32">
              Selected Work
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Projects built to solve
              <br />
              real problems.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl relative bg-card border border-[var(--fontColor2)]/15 hover:border-accent/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(0,188,212,0.1)] hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="group relative aspect-[16/9] overflow-hidden bg-secondary rounded-xl">
                {/* Image Container with Blur */}
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50 blur-sm 
                 transition-all duration-700 ease-out transform-gpu
                 group-hover:scale-110 group-hover:grayscale-0 group-hover:blur-none group-hover:opacity-100"
                  />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10" />

                {/* "Soon" Text - Now interactive */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span
                    className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--fontColor)]/70 
                     transition-all duration-500 
                     group-hover:scale-90 group-hover:opacity-0"
                  >
                    soon...
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[var(--fontColor2)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ArrowUpRight className="w-6 h-6 text-[var(--fontColor2)] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-4" />
                    </Link>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-[var(--fontColor2)]/50">
                  <div>
                    <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] mb-3">
                      Challenge
                    </div>
                    <p className="text-sm text-[var(--fontColor2)]/80 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] mb-3">
                      Solution
                    </div>
                    <p className="text-sm text-[var(--fontColor2)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {project.impact && (
                  <div className="mb-8 pb-8 border-b border-[var(--fontColor2)]">
                    <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] mb-3">
                      Impact
                    </div>
                    <p className="text-base text-[var(--fontColor2)] leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-xs text-[var(--fontColor2)]/80 border border-[var(--fontColor2)]/15 group-hover:border-accent/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
