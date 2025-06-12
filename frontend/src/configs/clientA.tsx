import { faShieldAlt, faCrown, faStopwatch, faHandshake, faAward, faStar } from "@fortawesome/free-solid-svg-icons";
import type { ClientConfig } from "../types/Config";

const clientAConfig: ClientConfig = {
  name: "Client A",
  logo: "/clientA-logo.png",
  primaryColor: "#1e90ff",
  primaryColorLight: "#FFD700",
  tagline: "Book your sessions in seconds!",

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
  ]
};

export default clientAConfig;
