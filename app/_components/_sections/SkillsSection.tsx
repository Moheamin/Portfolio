const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "React Native"],
  },
  {
    category: "State & Data",
    skills: ["Redux Toolkit", "React Query", "React Router", "Context API"],
  },
  {
    category: "Styling & Design",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX Craft"],
  },
  {
    category: "Backend & Data",
    skills: ["Supabase", "Firebase", "PostgreSQL", "MySQL"],
  },
  {
    category: "Systems & Workflow",
    skills: ["Git/GitHub", "Bash", "Windows OS", "Hardware Architecture"],
  },
  {
    category: "Engineering Core",
    skills: ["Python", "Java", "C++", "C#", "Assembly"],
  },
  {
    category: "Approach",
    skills: [
      "System Design",
      "Scalability",
      "Performance Optimization",
      "Clean Code",
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-40 px-8 lg:px-16 border-t border-[var(--fontColor2)]/15"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/4">
            <div className="text-xs tracking-widest uppercase text-[var(--fontColor2)] sticky top-32">
              Capabilities
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-20 leading-tight">
              Core technical
              <br />
              expertise.
            </h2>
            <div className="grid sm:grid-cols-4 gap-x-20 gap-y-16">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-sm tracking-widest text-[var(--fontColor2)] mb-6 uppercase">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-lg text-[var(--fontColor)]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
