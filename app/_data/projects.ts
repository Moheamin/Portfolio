import { Project } from "./types";

export const projects: Project[] = [
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
      "React Router",
      "React Hook Form",
      "React Context API",
      "React Hot Toast ",
      "Framer Motion",
    ],
    isFinished: false,
    imageUrl: "/orphanageManagmentSystem.png",
    link: "/#projects",
    githubUrl: "https://github.com/Moheamin/Orphan-Management-System.git",
    figmaUrl:
      "https://www.figma.com/design/ufogIJL2xzAWN0107jlfeR/Orphan-Management-System?node-id=1-55356&t=PNQwniU4zV4jqvuu-1",
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
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "Next-Theme",
    ],
    isFinished: false,
    imageUrl: "/multivendorStore.png",
    link: "/#projects",
    githubUrl: "https://github.com/Moheamin/Multi-Vendor-Store.git",
    figmaUrl:
      "https://www.figma.com/make/pdtkla92kXEF09U67useFP/Design-Multi-Vendor-Marketplace-UI?t=zAZIk4vKnjgh3JgD-1",
  },
];
