import type { ClientConfig } from "../types/Config";

const clientAConfig: ClientConfig = {
  name: "Client A",
  logo: "/clientA-logo.png",
  primaryColor: "#1e90ff",
  tagline: "Book your sessions in seconds!",

  // Project template config starts here
  header: {
    title: "Our Projects",
    subtitle: "Explore our portfolio of completed work."
  },
  cta: {
    title: "Have a Project in Mind?",
    subtitle: "We'd love to hear about your project. Contact us today for a free consultation.",
    buttonText: "Start Your Project",
    link: "/contact"// when the contact page is converted should be added here.
  },
  projects: [] 
};

export default clientAConfig;
