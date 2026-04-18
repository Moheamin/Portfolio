import { nav } from "./nav";
import { hero } from "./hero";
import { about } from "./about";
import { skills } from "./skills";
import { projects } from "./projects";
import { contact } from "./contact";
import { footer } from "./footer";

const ar = {
  nav,
  hero,
  about,
  skills,
  projects,
  contact,
  footer,
} as const;

export default ar;
