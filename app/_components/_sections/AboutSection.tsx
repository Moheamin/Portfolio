export function AboutSection() {
  return (
    <section
      id="about"
      className="py-40 px-8 lg:px-16 border-t border-[var(--fontColor2)]/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/4">
            <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] sticky top-32">
              About
            </div>
          </div>
          <div className="lg:w-3/4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-12 leading-tight">
              Engineering with pation,
              <br />
              building for permanence.
            </h2>
            <div className="space-y-8 text-lg text-[var(--fontColor2)] leading-relaxed">
              <p>
                A Computer Engineer from the University of Baghdad, I approach
                development through the lens of systems thinking and structural
                integrity. My work is rooted in understanding how
                high-performance architectures—from{" "}
                <span className="text-[var(--fontColor)]">
                  complex web ecosystems
                </span>{" "}
                to{" "}
                <span className="text-[var(--fontColor)]">
                  cross-platform mobile apps
                </span>{" "}
                can be engineered to solve real-world problems.
              </p>
              <p>
                Having mastered a foundation ranging from low-level Assembly to
                high-level system design, I now specialize in architecting
                modern solutions using{" "}
                <span className="text-[var(--fontColor)]">React</span>,{" "}
                <span className="text-[var(--fontColor)]">React Native</span>,
                <span className="text-[var(--fontColor)]">Nextjs</span>, and{" "}
                <span className="text-[var(--fontColor)]">TypeScript</span>. By
                integrating{" "}
                <span className="text-[var(--fontColor)]">
                  Supabase backends
                </span>{" "}
                with precision-crafted UI/UX, I transform product visions into
                scalable, lightning-fast realities that are built to stand the
                test of time.
              </p>
              <p>
                I believe that the best engineering decisions are the ones that
                make future work easier. Whether I'm refining a mobile interface
                or optimizing a backend schema, I pour a passion for technical
                excellence into every detail—creating robust foundations that
                empower users and endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
