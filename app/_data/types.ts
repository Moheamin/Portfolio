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
  isFinished: boolean;
}
