export type Project = {
  slug: string;
  title: string;
  industry: string;
  suburb: string;
  size: string;
  summary: string;
  details: string[];
};

// Portfolio is intentionally empty until real Cherry Refrigeration project
// case studies are supplied. Fabricated portfolio entries were removed.
export const projects: Project[] = [];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
