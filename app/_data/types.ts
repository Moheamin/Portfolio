export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact?: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  githubUrl?: string;
  figmaUrl?: string;
  downloadUrl?: string;
  isFinished: boolean;
  ar?: {
    title?: string;
    description?: string;
    problem?: string;
    solution?: string;
    impact?: string;
  };
}
