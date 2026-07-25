export type Project = {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  
  export const projects: Project[] = [
    {
      title: "Community Map System",
      description:
        "An interactive map application where users can add location pins and attach messages to each location.",
      technologies: [
        "React",
        "TypeScript",
        "Leaflet",
        "Tailwind CSS",
        "Supabase",
      ],
      image: "/images/community-map.webp",
    },
    {
      title: "Business Enquiry System",
      description:
        "A responsive enquiry system that collects customer information and organizes submissions for easier follow-up.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Forms",
      ],
      image: "/images/enquiry-system.webp",
    },
    {
      title: "Marketing Analytics Dashboard",
      description:
        "A dashboard that presents campaign performance, leads, website traffic and social media results.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Data Visualization",
      ],
      image: "/images/marketing-dashboard.webp",
    },
  ];