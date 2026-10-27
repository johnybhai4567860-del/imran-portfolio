// Content loader utility - loads data from JSON/Markdown files
// In production, these would be fetched from the CMS or built into the bundle

import skillsData from '../content/skills.json';
import experienceData from '../content/experience.json';
import aboutData from '../content/about.json';
import contactData from '../content/contact.json';
import moreWorkData from '../content/moreWork.json';

// For markdown files, we'll use a simple approach - import them as raw strings
// In a real setup with a CMS, these would come from the CMS API

export const content = {
  skills: skillsData.categories,
  experiences: experienceData.experiences,
  about: aboutData,
  contact: contactData,
  moreWork: moreWorkData.moreWork,
};

// For case studies (markdown files), we'll keep them in a separate file
// that can be updated by the CMS. For now, we'll export the data directly.
export const caseStudies = [
  {
    id: "solovisuals",
    title: "SoloVisuals",
    subtitle: "WordPress Website for a Digital Marketing Agency",
    status: "Live",
    context: "A website for my own digital marketing services, built to present what I offer and make it easy for visitors to get in touch.",
    objective: "Explain services such as SEO, website development, social media marketing, branding and content clearly, with a working contact path.",
    role: "I built and manage the whole site: structure, page customization, SEO setup and hosting.",
    process: [
      "Built on WordPress with the Astra theme and Elementor Pro",
      "Planned the page structure and service pages",
      "Configured Yoast SEO: focus keyphrases, meta titles, descriptions and clean slugs with redirects",
      "Set up the contact form with reCAPTCHA and email notification, and verified Google Search Console"
    ],
    deliverables: ["Live website", "Service page structure", "SEO configuration", "Working contact form"],
    outcome: "Live at solovisuals.in. Page content is still being built out.",
    evidence: [{ label: "solovisuals.in", href: "https://solovisuals.in" }],
    tags: ["WordPress", "Elementor Pro", "Astra", "Yoast SEO", "cPanel"]
  },
  {
    id: "vridova",
    title: "Vridova / VDMI Content & Video",
    subtitle: "Scriptwriting, Shoots and Content Ideas for Reels",
    status: "Ongoing",
    context: "Content work for the Vridova and VDMI social accounts, covering digital marketing, AI tools and institute promotion.",
    objective: "Plan short-form content that feels natural to watch and clearly promotes or educates.",
    role: "Topic research, scriptwriting, shoot preparation, video recording and A-roll.",
    process: [
      "Researched topics around digital marketing, AI tools and browser extensions",
      "Wrote conversational and promotional Reels scripts",
      "Prepared shoots and recorded A-roll",
      "Followed trends to find content ideas"
    ],
    deliverables: [
      "Conversational script for an institute-promotion Reel (Sep 2024)",
      "Capsule Extension video: topic, script, shoot and A-roll (Oct 2024)",
      "Content ideas on Hermes Agent and Floto Extension, with two shooting scripts (Oct 2024)"
    ],
    evidence: [{ label: "@vdmionline on Instagram", href: "https://www.instagram.com/vdmionline" }],
    tags: ["Scriptwriting", "Reels", "Video Shooting", "A-roll", "AI Tools"]
  },
  {
    id: "hanumatniketan",
    title: "Hanumatniketan Keyword Research",
    subtitle: "SEO Research Project",
    status: "Delivered",
    context: "Keyword research for the Hanumatniketan website.",
    objective: "Find the search terms worth targeting for the site.",
    role: "I did the research and organized it myself.",
    process: [
      "Researched about 100 relevant keywords",
      "Organized them in a spreadsheet",
      "Shared the research for project use"
    ],
    deliverables: ["Keyword research spreadsheet (about 100 keywords)"],
    evidence: [],
    tags: ["Keyword Research", "SEO", "Spreadsheets"]
  },
  {
    id: "creovation",
    title: "Creovation",
    subtitle: "Content System & Creative Direction",
    status: "Concept",
    context: "A creative direction that combines digital marketing, AI and content creation for creators.",
    objective: "Make educational content on AI tools and digital marketing, run through one repeatable content system.",
    role: "Concept, content planning and workflow design.",
    process: [
      "Developed the concept \"Why Your Reels Get Views But No Followers\"",
      "Outlined a content workflow: Calendar, Idea Bank, Production, Assets, Published, Research and Analytics"
    ],
    deliverables: ["Content concepts", "Content workflow structure"],
    outcome: "Concept and planning stage.",
    evidence: [],
    tags: ["Content Strategy", "Branding", "AI Tools", "Content Planning"]
  }
];

export default content;