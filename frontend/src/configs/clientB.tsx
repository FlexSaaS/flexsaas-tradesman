import { faBuilding } from "@fortawesome/free-solid-svg-icons/faBuilding";
import type { ClientConfig } from "../types/Config";
import {
  faHammer,
  faHome,
  faPaintRoller,
  faRulerCombined,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const clientBConfig: ClientConfig = {
  name: "Client B",
  logo: "/clientB-logo.png",
  primaryColor: "#16a34a",
  primaryColorLight: "lightgreen",
  secondaryColor: "#FF6347",
  // Project template config starts here
  header: {
    title: "Completed Creations",
    subtitle: "Take a look at some of our proudest transformations.",
  },
  cta: {
    title: "Ready to Elevate Your Space?",
    subtitle:
      "Let’s collaborate on your dream renovation. Reach out to schedule your free quote.",
    buttonText: "Get in Touch",
    link: "/contact", // Adjust once contact page is ready
  },
  services: [
    {
      title: "House Extensions",
      icon: faBuilding, // FontAwesome icon name as string or import reference
      description:
        "Expand your living space with our expertly designed and built house extensions. We handle everything from planning to completion.",
    },
    {
      title: "New Builds",
      icon: faHome,
      description:
        "Create your dream home from the ground up with our comprehensive new build service, tailored to your specifications.",
    },
    {
      title: "Full Renovations",
      icon: faWrench,
      description:
        "Transform your existing property with our complete renovation service, modernizing and enhancing every aspect of your home.",
    },
    {
      title: "Loft Conversions",
      icon: faRulerCombined,
      description:
        "Maximise your home's potential with a professionally designed and executed loft conversion.",
    },
    {
      title: "Home Refurbishments",
      icon: faPaintRoller,
      description:
        "Update and refresh your living space with our comprehensive refurbishment services.",
    },
    {
      title: "Property Maintenance",
      icon: faHammer,
      description:
        "Keep your property in perfect condition with our regular maintenance and repair services.",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Eco-Friendly Kitchen Makeover",
      description:
        "A sustainable kitchen revamp with bamboo finishes and energy-saving lighting.",
      category: "Kitchen",
      image: "../sample-imgs/office-sample.jpg",
      gallery: [
        "../sample-imgs/office-sample.jpg",
        "../sample-imgs/office-sample.jpg",
        "../sample-imgs/office-sample.jpg",
      ],
    },
    {
      id: 2,
      title: "Tranquil Bathroom Retreat",
      description:
        "A calming bath redesign with natural stone, soft lighting, and rainfall shower.",
      category: "Bathroom",
      image: "../sample-imgs/office-sample.jpg",
      gallery: [
        "../sample-imgs/office-sample.jpg",
        "../sample-imgs/office-sample.jpg",
        "../sample-imgs/office-sample.jpg",
      ],
    },
    {
      id: 3,
      title: "Smart Home Office",
      description:
        "An intelligent office setup with modular workstations and acoustic paneling.",
      category: "Workspace",
      image: "../sample-imgs/office-sample.jpg",
      gallery: [
        "../sample-imgs/office-sample.jpg",
        "../sample-imgs/office-sample.jpg",
        "../sample-imgs/office-sample.jpg",
      ],
    },
  ],
  features: [],
  about: {
    title: "",
    subtitle: "",
    description: "",
    image: "",
    mainImage: undefined,
    mainImageAlt: undefined,
    storyTitle: undefined,
    story1: undefined,
    story2: undefined,
    story3: undefined,
    founderImage: undefined,
    founderName: undefined,
    founderRole: undefined,
    founderBio1: undefined,
    founderBio2: undefined,
    founderBio3: undefined,
    seoTitle: undefined,
    seoDescription: undefined,
    seoKeywords: undefined,
    seoUrl: undefined,
  },
  fontFamily: "",
  hero: {
    title: "Building Your Vision with Precision",
    backgroundImage: "/clientB-logo.png",
    subtitle:
      " Transform your space with XPro Build's expert construction services. We bring your dreams to life with quality craftsmanship and attention to detail.",
  },
  tagline: "",
  phoneOffice: "",
  phoneMobile: "",
  email: "",
  address: "",
  openHours1: "",
  openHours2: "",
  openHours3: "",
  location: "",
  featuredTitle: "",
  featuredSubTitle: "",
  favicon: "",
  companyNo: "",
};

export default clientBConfig;
