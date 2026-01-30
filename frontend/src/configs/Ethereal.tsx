import {
  faShieldAlt,
  faCrown,
  faStopwatch,
  faHandshake,
  faAward,
  faStar,
  faClock,
  faSpa,
  faScissors,
  faHandSparkles,
  faPalette,
  faUserTie,
  faBrush,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import type { ClientConfig } from "../types/Config";

const EtherealVistaConfig: ClientConfig = {
  name: "Ethereal Vista",
  logo: "EtherealVista/ethereal-vista-logo.png",
  primaryColor: "#800000", // Maroon
  primaryColorLight: "#F5F5DC", // Beige
  secondaryColor: "#F5F5DC", // Beige
  tagline: "Elevating Beauty with Elegance and Precision",
  fontFamily: "Roboto, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
  currencySymbol: "£",
  isBooking: true,

  // Header
  header: {
    title: "Our Service Gallery",
    subtitle: "Experience Luxury Beauty Treatments",
  },

  // Call to action
  cta: {
    title: "Ready for a transformative beauty experience?",
    subtitle: "Book your appointment today and discover the Ethereal Vista difference.",
    buttonText: "Book Appointment",
    link: "/contact",
  },

  // Features
  features: [
    {
      icon: faShieldAlt,
      title: "Sanitized & Safe Environment",
      description: "Impeccable hygiene standards ensuring your health and safety.",
    },
    {
      icon: faCrown,
      title: "Luxury Experience",
      description: "Premium treatments in an elegant, relaxing atmosphere.",
    },
    {
      icon: faStopwatch,
      title: "Punctual Service",
      description: "Respect for your time with timely appointments.",
    },
    {
      icon: faHandshake,
      title: "Trusted Professionals",
      description: "Expert stylists with years of experience and training.",
    },
    {
      icon: faAward,
      title: "Award-Winning Techniques",
      description: "Latest trends and proven methods for stunning results.",
    },
    {
      icon: faStar,
      title: "Client Satisfaction",
      description: "Your happiness and confidence are our ultimate rewards.",
    },
  ],

  // About section
  about: {
    title: "About Ethereal Vista",
    subtitle: "Where beauty meets tranquility",
    description:
      "Welcome to Ethereal Vista, where we transform beauty routines into luxurious experiences. Our salon combines expert craftsmanship with serene ambiance to elevate your self-care journey.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",

    // Story section
    mainImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
    mainImageAlt: "Ethereal Vista Beauty Salon Interior",
    storyTitle: "Our Vision",
    story1:
      "Founded on the principle that everyone deserves to feel beautiful, Ethereal Vista was created as a sanctuary for self-care and transformation.",
    story2: "We believe in the power of personalized beauty treatments to boost confidence and enhance natural elegance.",
    story3:
      "Our team continuously trains in the latest techniques and trends, ensuring we offer cutting-edge services while maintaining classic sophistication.",
    story4:
      "We've curated a selection of premium, cruelty-free products that nourish and enhance your natural beauty, suitable for all skin and hair types.",
    story5: "Our bespoke approach means every service is tailored to your individual style, preferences, and lifestyle needs.",
    story6: "We invite you to visit for a complimentary consultation to discuss your beauty aspirations.",

    // Values
    values: [
      {
        icon: faSpa,
        title: "Relaxing Atmosphere",
        description: "A serene environment designed to help you unwind and rejuvenate during your visit.",
      },
      {
        icon: faScissors,
        title: "Precision Styling",
        description: "Meticulous attention to detail in every haircut, style, and beauty treatment.",
      },
      {
        icon: faClock,
        title: "Timely Appointments",
        description: "Efficient service that respects your schedule without compromising quality.",
      },
      {
        icon: faHeart,
        title: "Client-Centered Care",
        description: "Your comfort, satisfaction, and beauty goals are our highest priority.",
      },
    ],

    // Founder section
    founderImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1669&auto=format&fit=crop",
    founderTitle: "Our Lead Stylist",
    founderName: "Louis's Babe",
    founderRole: "Creative Director & Master Stylist",
    founderBio1: "With over 15 years in the beauty industry, Louis's Babe brings a wealth of expertise and passion to Ethereal Vista.",
    founderBio2:
      "Her work has been featured in several beauty publications, and she regularly attends international beauty expos to stay ahead of trends.",
    founderBio3: "Louis's Babe leads our team with a commitment to excellence and personalized care, ensuring every client leaves feeling extraordinary.",
  },

  // Contact Info
  phoneOffice: "020 8123 4567",
  phoneMobile: "07890 123456",
  email: "info@etherealvista.com",
  address: "123 Luxury Lane, Mayfair, London W1K 4AB",
  openHours1: "Tuesday - Friday: 9:00 AM - 7:00 PM",
  openHours2: "Saturday: 10:00 AM - 6:00 PM",
  openHours3: "Sunday & Monday: Closed",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.674675487647!2d-0.1560005236843851!3d51.50732227181092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760533287e9d6f%3A0x9b4e82b42e2e0b7a!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1749422216188!5m2!1sen!2suk",

  // Hero
  hero: {
    title: "Ethereal Vista Beauty Salon",
    subtitle: "Elevating Beauty with Elegance and Precision",
    backgroundImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
  },

  // Services
  serviceDescription: "We offer a comprehensive range of beauty services designed to enhance your natural elegance and boost your confidence.",
  serviceCTATitle: "Ready to Experience Premium Beauty Care?",
  serviceCTADescription: "Book your appointment today and let our expert stylists help you achieve the look you've always desired.",
  services: [
    {
      title: "Hair Styling & Grooming",
      icon: faScissors,
      description: "Expert haircuts, styling, and treatments tailored to enhance your features and suit your lifestyle.",
    },
    {
      title: "Manicure Services",
      icon: faHandSparkles,
      description: "Luxurious nail care including shaping, polishing, and nail art with premium products.",
    },
    {
      title: "Pedicure Services",
      icon: faSpa,
      description: "Revitalizing foot care and treatments that leave your feet feeling refreshed and beautifully groomed.",
    },
    {
      title: "Hair Coloring",
      icon: faPalette,
      description: "Custom color formulations and professional application for vibrant, healthy-looking hair.",
    },
    {
      title: "Professional Styling",
      icon: faUserTie,
      description: "Special occasion styling and grooming services for events and important moments.",
    },
    {
      title: "Beauty Treatments",
      icon: faBrush,
      description: "Additional beauty services including waxing, facial treatments, and professional makeup.",
    },
  ],

  // Projects (Portfolio)
  projects: [
    {
      id: 1,
      title: "Elegant Evening Makeover",
      description: "Complete hair styling and manicure for a sophisticated evening look.",
      category: "Special Occasion",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1740&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Classic French Manicure",
      description: "Timeless nail art with modern precision and premium polish.",
      category: "Nail Art",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
      ],
    },
    {
      id: 3,
      title: "Professional Haircut & Style",
      description: "Precision haircut and blow-dry for everyday elegance and manageability.",
      category: "Hair Styling",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1669&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
      ],
    },
    {
      id: 4,
      title: "Premium Beauty Products",
      description: "Our curated collection of luxury skincare and haircare products.",
      category: "Products",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1770&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1740&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
      ],
    },
  ],

  featuredTitle: "Why choose Ethereal Vista for your beauty needs?",
  featuredSubTitle: "Expert craftsmanship meets luxurious care in our serene salon environment.",

  favicon: "EtherealVista/ethereal-vista-logo.png",
  companyNo: "98765432",
};

export default EtherealVistaConfig;