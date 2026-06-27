// Global site configuration. Edit these values to make the site yours.

export const site = {
  name: "Kevin Singleton",
  role: "3D Artist · Technical Designer · AI Tooling",
  tagline:
    "I build worlds, pipelines, and the tools in between — from Unreal Engine environments to AI-assisted asset generation.",
  email: "ksinstudio@gmail.com",
  location: "Available worldwide · Remote",
  // Social / external links. Leave a value empty ("") to hide that link.
  socials: {
    instagram: "https://instagram.com/kevinxart",
    twitter: "https://twitter.com/ksin_art",
    artstation: "",
    linkedin: "",
    youtube: "",
    github: "",
  },
} as const;

export type SocialKey = keyof typeof site.socials;
