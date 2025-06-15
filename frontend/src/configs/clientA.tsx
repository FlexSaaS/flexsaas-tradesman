import { faShieldAlt, faCrown, faStopwatch, faHandshake, faAward, faStar } from "@fortawesome/free-solid-svg-icons";
import type { ClientConfig } from "../types/Config";

const clientAConfig: ClientConfig = {
  name: "Client A",
  logo: "/clientA-logo.png",
  primaryColor: "#1e90ff",
  primaryColorLight: "#FFD700",
  secondaryColor: "#2c3e50",
  tagline: "Book your sessions in seconds!",
  fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
  // Project template config starts here
  header: {
    title: "Our Projects",
    subtitle: "Explore our portfolio of completed work."
  },
  cta: {
    title: "Have a Project in Mind?",
    subtitle: "We'd love to hear about your project. Contact us today for a free consultation.",
    buttonText: "Contact Us",
    link: "/contact" // when the contact page is converted should be added here.
  },

  projects: [{
    id: 1,
    title: "Modern Kitchen Renovation",
    description: "A full kitchen remodel with custom cabinetry and lighting.",
    category: "Renovation",
    image: "/images/projects/kitchen-main.jpg",
    gallery: [
      "/images/projects/kitchen-1.jpg",
      "/images/projects/kitchen-2.jpg",
      "/images/projects/kitchen-3.jpg"
    ]
  },
  {
    id: 2,
    title: "Luxury Bathroom Upgrade",
    description: "Spa-inspired bathroom with walk-in shower and heated floors.",
    category: "Bathroom",
    image: "/images/projects/bathroom-main.jpg",
    gallery: [
      "/images/projects/bathroom-1.jpg",
      "/images/projects/bathroom-2.jpg"
    ]
  },
  {
    id: 3,
    title: "Custom office Design",
    description: "A modern office space with ergonomic furniture and collaborative areas.",
    category: "Custom Build",
    image: "/images/projects/office-main.jpg",
    gallery: [
      "/images/projects/kitchen-1.jpg",
      "/images/projects/kitchen-2.jpg",
      "/images/projects/kitchen-3.jpg"
    ]
  },

  ],
  features: [
    {
      icon:  faShieldAlt ,
      title: "Quality Guaranteed",
      description: "Premium materials and expert craftsmanship in every project"
    },
    {
      icon:  faCrown ,
      title: "Luxury Finish",
      description: "Exceptional attention to detail for a premium result"
    },
    {
      icon:  faStopwatch ,
      title: "Timely Delivery",
      description: "Meeting deadlines with precision and efficiency"
    },
    {
      icon:  faHandshake ,
      title: "Reliability",
      description: "Consistent quality and dependable service"
    },
    {
      icon:  faAward ,
      title: "Trust",
      description: "Building lasting relationships with our clients"
    },
    {
      icon:  faStar ,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority"
    }
  ],
  about: {
    title: "About Us",
    subtitle: "Who we are and what we do.",
    description: "Client A is a leading provider of ...",
    image: "/images/about-team.jpg",

    // Story section fields
    // Story section fields
    mainImage: "/images/about-story.jpg", // or your story image path
    mainImageAlt: "Construction Team",
    storyTitle: "Our Story",
    story1: "Founded in 2016 by Mr Lucian Picior, Client A has grown from a small local contractor to one of the region's most trusted construction companies.",
    story2: "With a team of highly skilled professionals and a commitment to using the latest construction technologies, we've successfully completed hundreds of projects.",
    story3: "Our mission is simple: to transform our clients' visions into reality while exceeding expectations in quality, safety, and service.",

    // Founder section fields
    founderImage: "/images/founder.jpg", // or your founder image path
    founderName: "Lucian Picior",
    founderRole: "Founder & CEO",
    founderBio1: "With over 15 years of experience in the construction industry, Lucian Picior has established himself as a visionary leader.",
    founderBio2: "In 2016, driven by his passion for excellence, Lucian founded Client A. Under his leadership, the company has grown from handling small residential projects to managing complex commercial developments.",
    founderBio3: "Lucian's hands-on approach and dedication to client satisfaction have been instrumental in building Client A's reputation.",

    // Optional SEO fields
    // seoTitle: "About Client A - Expert Construction Company",
    // seoDescription: "Learn about Client A, a trusted construction company with 9+ years experience in house extensions, renovations & new builds.",
    // seoKeywords: "about Client A, construction company, experienced builders, construction history",
    // seoUrl: "https://yourdomain.com/about"
  }
}
;

export default clientAConfig;
