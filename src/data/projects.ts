// data/projects.ts

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Sleep Tracker",
    description: "A minimal sleep tracking app to help you log your sleep patterns and stay mindful of your rest.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    github: "https://github.com/Valley-15/sleep-tracker-next",
    demo: "https://sleep-tracker-next-z2kp.vercel.app/",
  },
  {
    title: "LinkLoom",
    description: "LinkLoom is a beautifully crafted full-stack bookmark manager that lets you organize your digital discoveries with tags, notes, and filters. Inspired by the idea of weaving your thoughts into a meaningful archive, LinkLoom helps developers and curious minds manage learning resources, tutorials, articles, and tools — all in one place.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    github: "https://github.com/Valley-15/LinkLoom-weave-your-thoughts",
    demo: "https://link-loom-weave-your-thoughts.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio to showcase my projects, skills, and journey as a developer. Built with Next.js and a focus on clean design, accessibility, and performance.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Valley-15/casino-royale",
    demo: "https://casino-royale-eight.vercel.app/",
  },
];
