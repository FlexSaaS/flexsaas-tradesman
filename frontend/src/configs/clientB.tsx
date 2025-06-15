import type { ClientConfig } from "../types/Config";

const clientBConfig: ClientConfig = {
  name: "Client B",
  logo: "/clientB-logo.png",
  tagline: "Premium beauty appointments made easy.",
  fontFamily: "Montserrat",
  primaryColor: "#16a34a",
  primaryColorLight: "lightgreen",
  secondaryColor: "#FF6347",
  // Project template config starts here
  header: {
    title: "Completed Creations",
    subtitle: "Take a look at some of our proudest transformations."
  },
  cta: {
    title: "Ready to Elevate Your Space?",
    subtitle: "Let’s collaborate on your dream renovation. Reach out to schedule your free quote.",
    buttonText: "Get in Touch",
    link: "/contact" // Adjust once contact page is ready
  },
  projects: [
    {
      id: 1,
      title: "Eco-Friendly Kitchen Makeover",
      description: "A sustainable kitchen revamp with bamboo finishes and energy-saving lighting.",
      category: "Kitchen",
      image: "/images/clientB/kitchen-feature.jpg",
      gallery: [
        "/images/clientB/kitchen-1.jpg",
        "/images/clientB/kitchen-2.jpg",
        "/images/clientB/kitchen-3.jpg"
      ]
    },
    {
      id: 2,
      title: "Tranquil Bathroom Retreat",
      description: "A calming bath redesign with natural stone, soft lighting, and rainfall shower.",
      category: "Bathroom",
      image: "/images/clientB/bathroom-feature.jpg",
      gallery: [
        "/images/clientB/bathroom-1.jpg",
        "/images/clientB/bathroom-2.jpg"
      ]
    },
    {
      id: 3,
      title: "Smart Home Office",
      description: "An intelligent office setup with modular workstations and acoustic paneling.",
      category: "Workspace",
      image: "/images/clientB/office-feature.jpg",
      gallery: [
        "/images/clientB/office-1.jpg",
        "/images/clientB/office-2.jpg",
        "/images/clientB/office-3.jpg"
      ]
    }
  ],
  features: []
};

export default clientBConfig;
