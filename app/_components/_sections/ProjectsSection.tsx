"use client";

import { ArrowUpRight, Github, Figma, Hammer } from "lucide-react";
import ImageWithFallback from "@/app/_components/_image/ImageWithFallback";
import Link from "next/link";
import toast from "react-hot-toast";
import { projects } from "@/app/_data/projects";
import { Project } from "@/app/_data/types";

export function ProjectsSection() {
  /**
   * Handles the click event for the Live Demo link.
   * If the project is unfinished, it prevents navigation and shows an elegant toast.
   */
  const handleLiveDemoClick = (e: React.MouseEvent, project: Project) => {
    if (!project.isFinished) {
      e.preventDefault();
      toast.dismiss();
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible
                ? "animate-in fade-in slide-in-from-bottom-4"
                : "animate-out fade-out"
            } max-w-md w-full bg-[#121212] border border-[var(--fontColor2)]/20 shadow-2xl rounded-2xl pointer-events-auto flex ring-1 ring-white/10 duration-300`}
          >
            <div className="flex-1 w-0 p-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Hammer className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-semibold text-[var(--fontColor)]">
                    Work in Progress
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--fontColor2)]/80">
                    The live version of{" "}
                    <span className="text-[var(--fontColor)] font-medium">
                      {project.title}
                    </span>{" "}
                    is currently being polished for production.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-[var(--fontColor2)]/10">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-2xl p-4 flex items-center justify-center text-xs font-bold tracking-widest uppercase text-[var(--fontColor2)] hover:text-[var(--fontColor)] transition-colors focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        ),
        { duration: 4000 },
      );
    }
  };

  return (
    <section
      id="projects"
      className="py-40 px-8 lg:px-16 border-t border-[var(--fontColor2)]/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          <div className="lg:w-1/4">
            <div className="text-[11px] tracking-widest uppercase text-[var(--fontColor2)] sticky top-32">
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
              {/* Project Image Section */}
              <div className="group relative aspect-[16/9] overflow-hidden bg-secondary rounded-xl">
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover grayscale opacity-50 blur-sm 
                   transition-all duration-700 ease-out transform-gpu
                   group-hover:scale-105 group-hover:grayscale-0 group-hover:blur-none group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10" />
                {!project.isFinished && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--fontColor)]/70 transition-all duration-500 group-hover:scale-90 group-hover:opacity-0">
                      soon...
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content Section */}
              <div className="p-8 lg:p-10">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-8 gap-6">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[var(--fontColor2)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Elegant Action Pills */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--fontColor2)]/5 border border-[var(--fontColor2)]/15 hover:border-[var(--contrastC)]/30 hover:bg-[var(--contrastColor)]/10 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4 text-[var(--fontColor2)] group-hover/btn:text-[var(--fontColor)] transition-colors" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--fontColor2)] group-hover/btn:text-[var(--fontColor)]">
                          Code
                        </span>
                      </Link>
                    )}
                    {project.figmaUrl && (
                      <Link
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--fontColor2)]/5 border border-[var(--fontColor2)]/15 hover:border-[#A259FF]/40 hover:bg-[#A259FF]/10 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Figma className="w-4 h-4 text-[var(--fontColor2)] group-hover/btn:text-[#A259FF] transition-colors" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--fontColor2)] group-hover/btn:text-[#A259FF]">
                          Design
                        </span>
                      </Link>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        onClick={(e) => handleLiveDemoClick(e, project)}
                        target={project.isFinished ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`group/live relative flex items-center gap-2.5 px-6 py-2.5 rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                          !project.isFinished ? "cursor-default" : ""
                        }`}
                      >
                        <div className="absolute inset-0 bg-[var(--fontColor2)] opacity-[0.05] group-hover/live:opacity-[0.12] transition-opacity duration-500" />
                        <div className="absolute inset-0 border border-[var(--fontColor2)]/40 group-hover/live:border-[var(--fontColor2)]/40 rounded-full transition-colors duration-500" />

                        {project.isFinished && (
                          <div className="absolute inset-0 translate-x-[-100%] group-hover/live:translate-x-[100%] bg-gradient-to-r from-transparent via-[var(--fontColor)]/5 to-transparent transition-transform duration-1000 ease-in-out" />
                        )}

                        <span className="relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--fontColor2)] group-hover/live:text-[var(--fontColor)] transition-colors duration-300">
                          {project.isFinished ? "Live Demo" : "Coming Soon"}
                        </span>

                        <div className="relative z-10 flex items-center justify-center">
                          <ArrowUpRight
                            className={`w-3.5 h-3.5 text-[var(--fontColor2)] group-hover/live:text-[var(--fontColor)] transition-all duration-300 ${project.isFinished ? "group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" : "opacity-50"}`}
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-[var(--fontColor2)]/15">
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--fontColor2)]/60 mb-3 font-bold">
                      The Challenge
                    </div>
                    <p className="text-sm text-[var(--fontColor2)]/80 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--fontColor2)]/60 mb-3 font-bold">
                      The Solution
                    </div>
                    <p className="text-sm text-[var(--fontColor2)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Impact Section */}
                {project.impact && (
                  <div className="mb-8 pb-8 border-b border-[var(--fontColor2)]/15">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--fontColor2)]/60 mb-3 font-bold">
                      Impact
                    </div>
                    <p className="text-base text-[var(--fontColor2)] leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-[10px] font-medium text-[var(--fontColor2)]/70 border border-[var(--fontColor2)]/10 bg-[var(--fontColor2)]/5 group-hover:border-accent/20 transition-colors duration-300 rounded-md"
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
