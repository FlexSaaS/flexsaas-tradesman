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
  logo: "Ethereal/ethereal-logo.jpeg",
  primaryColor: "#800000", // Maroon
  primaryColorLight: "#F5F5DC", // Beige
  secondaryColor: "#F5F5DC", // Beige
  tagline: "Elevating Beauty with Elegance and Precision",
  fontFamily: "Jost",
  currencySymbol: "₵",
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
    title: "Our Mission",
    subtitle: `ETHEREAL VISTA is more than a salon — it is an experience, a ritual, and a lifestyle. 
We are a refined sanctuary designed for women who value luxury, self-care, and conscious living.
Our salon blends premium treatments with carefully selected cruelty-free and organic products, ensuring that every service nurtures both your radiance and well-being.
Ethereal Vista represents the modern woman — graceful yet powerful, conscious yet indulgent. 
She understands that beauty is not vanity; it is self-expression, confidence, and lifestyle.`,

    description:
      "Welcome to Ethereal Vista, where we transform beauty routines into luxurious experiences. Our salon combines expert craftsmanship with serene ambiance to elevate your self-care journey.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1674&auto=format&fit=crop",

    // Story section
    mainImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1669&auto=format&fit=crop",
    mainImageAlt: "Ethereal Vista Beauty Salon Interior",
    storyTitle: "Our Vision",
    story1:
      "Through expert care, premium products, and serene surroundings, we aim to make every visit a rejuvenating escape, leaving our clients glowing, confident, and inspired.",
    story2: "We believe beauty should feel indulgent yet intentional — a ritual that restores not only your glow, but your confidence.",
    story3: "With intentionality in every detail , our services are a moment of luxury, and every client feels empowered, pampered, and celebrated.",
    story4: "Redefining modern beauty by offering premium, cruelty-free, and organic treatments that nurture confidence, elegance, and wellness.",
    story5:
      "Ethereal Vista was born from a desire to create more than just a salon — but a sanctuary. A space where women could pause, breathe, and indulge in refined self-care without compromising their values.",
    story6:
      "A haven where every appointment feels like an escape into softness, elegance, and empowerment ⁃	Our aim as a business is to provide intentional, personalized beauty experiences that elevate not just appearance but the entire sense of self.",

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
    founderBio3:
      "Louis's Babe leads our team with a commitment to excellence and personalized care, ensuring every client leaves feeling extraordinary.",
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
  detailedServices: [
    {
      title: "Consultations",
      icon: faUserTie,
      description:
        "Every beauty journey begins with understanding you. Our one-on-one personalized consultations ensure your services are tailored to your style, goals, wellbeing, and lifestyle.",
      isFree: true,
      duration: "15 mins - 30 mins",
      addons: [],
    },
    {
      title: "Braiding Services",
      icon: faScissors,
      description:
        "Elevate your style with our expertly crafted braids that blend precision, creativity, and lasting beauty. Browsing through an endless list of styles like knotless, box braids, and cornrows becomes a stress-free moment in our space.",
      basePrice: 80,
      duration: "2 hours - 6 hours",
      addons: [
        {
          name: "Hair Extension Supply",
          duration: "10 mins",
          description: "Premium braid hair provided for your chosen style and desired finish.",
          price: 20,
        },
        {
          name: "Beads / Accessories Finish",
          duration: "15 mins",
          description: "Elegant accessories added to complete and elevate your braid style.",
          price: 15,
        },
      ],
    },
    {
      title: "Hair Treatments",
      icon: faSpa,
      description:
        "The assurance of healthy and dense hair starts with our bespoke treatments. Restore, rejuvenate, and revive your hair with premium organic and cruelty-free treatments designed to nourish from root to tip.",
      basePrice: 45,
      duration: "45 mins - 1 hour 30 mins",
      addons: [
        {
          name: "Scalp Detox",
          duration: "20 mins",
          description: "A purifying scalp treatment that removes buildup and refreshes the scalp.",
          price: 18,
        },
        {
          name: "Steam Therapy",
          duration: "15 mins",
          description: "Gentle steam infusion to improve product penetration and deep nourishment.",
          price: 12,
        },
      ],
    },
    {
      title: "Coloring Services",
      icon: faPalette,
      description:
        "Transform your hair and overall look with our luxury coloring services — vibrant, luminous shades created with the highest-quality, gentle formulas.",
      basePrice: 70,
      duration: "1 hour 30 mins - 3 hours",
      addons: [
        {
          name: "Toner Gloss",
          duration: "20 mins",
          description: "Enhances shine, refines tone, and leaves your color looking polished and radiant.",
          price: 20,
        },
        {
          name: "Bond Repair Treatment",
          duration: "15 mins",
          description: "Strengthens and protects the hair during or after coloring service.",
          price: 25,
        },
      ],
    },
    {
      title: "Manicure Services",
      icon: faHandSparkles,
      description:
        "Indulge your hands in luxury tailored care with our premium manicure rituals — from shaping and polishing to deep hydration and softening treatments.",
      basePrice: 30,
      duration: "45 mins - 1 hour 15 mins",
      addons: [
        {
          name: "Gel Finish",
          duration: "20 mins",
          description: "Long-lasting glossy gel finish for a sleek and elegant result.",
          price: 15,
        },
        {
          name: "Cuticle Renewal",
          duration: "15 mins",
          description: "Extra nourishing treatment to soften and restore dry cuticles.",
          price: 10,
        },
      ],
    },
    {
      title: "Pedicure Services",
      icon: faSpa,
      description:
        "Step into serenity as we pamper your feet with luxurious organic and non-harsh treatments, leaving them smooth, radiant, and perfectly polished.",
      basePrice: 35,
      duration: "45 mins - 1 hour 20 mins",
      addons: [
        {
          name: "Heel Therapy",
          duration: "15 mins",
          description: "Focused treatment for dry, cracked heels for a softer finish.",
          price: 12,
        },
        {
          name: "Gel Polish Upgrade",
          duration: "20 mins",
          description: "Chip-resistant gel color for a longer-lasting polished look.",
          price: 15,
        },
      ],
    },
    {
      title: "Hair Styling",
      icon: faBrush,
      description:
        "Experience the art of luxury styling — from everyday elegance to special occasions, each look is crafted to radiate confidence and sophistication.",
      basePrice: 50,
      duration: "45 mins - 2 hours",
      addons: [
        {
          name: "Soft Curls / Waves",
          duration: "20 mins",
          description: "Adds movement and romantic volume to your finished style.",
          price: 18,
        },
        {
          name: "Luxury Finish Serum",
          duration: "5 mins",
          description: "A premium finishing touch for shine, silkiness, and frizz control.",
          price: 8,
        },
      ],
    },
    {
      title: "Wigs and Weave Services",
      icon: faCrown,
      description: "Redefine your look with expertly installed wigs and weaves, curated for seamless, natural luxury and effortless style.",
      basePrice: 90,
      duration: "1 hour 30 mins - 4 hours",
      addons: [
        {
          name: "Custom Styling",
          duration: "30 mins",
          description: "Personalized styling to perfectly suit your face and desired finish.",
          price: 25,
        },
        {
          name: "Frontal / Closure Customization",
          duration: "30 mins",
          description: "Refining the hairline and parting for a more natural luxury finish.",
          price: 30,
        },
      ],
    },
    {
      title: "Natural Hair Services",
      icon: faHeart,
      description:
        "Celebrate your natural beauty with our premium and carefully handpicked natural hair treatments and styling — designed to nourish, define, and elevate your unique texture.",
      basePrice: 55,
      duration: "1 hour - 2 hours 30 mins",
      addons: [
        {
          name: "Twist Definition Finish",
          duration: "20 mins",
          description: "Extra detailing for more definition, hold, and texture enhancement.",
          price: 15,
        },
        {
          name: "Moisture Boost Treatment",
          duration: "15 mins",
          description: "Deep moisture infusion to improve softness and manageability.",
          price: 18,
        },
      ],
    },
    {
      title: "Relaxed Hair Services",
      icon: faStar,
      description:
        "Smooth, soft, and sleek — our premium relaxing services ensure your hair is beautifully manageable while preserving its health and shine.",
      basePrice: 60,
      duration: "1 hour 30 mins - 2 hours 30 mins",
      addons: [
        {
          name: "Protein Reconstruction",
          duration: "15 mins",
          description: "Helps reinforce and strengthen relaxed hair after chemical processing.",
          price: 20,
        },
        {
          name: "Trim Upgrade",
          duration: "15 mins",
          description: "A precision trim to keep the ends fresh, healthy, and refined.",
          price: 12,
        },
      ],
    },
    {
      title: "Cut and Styling Services",
      icon: faScissors,
      description:
        "Every cut is a statement of sophistication. From precision trims to bold transformations, our expert stylists craft hair that elevates and enhances your look.",
      basePrice: 40,
      duration: "45 mins - 1 hour 30 mins",
      addons: [
        {
          name: "Blow Dry Finish",
          duration: "20 mins",
          description: "Smooth finishing service that completes your cut with polish and movement.",
          price: 15,
        },
        {
          name: "Deep Conditioning Add-On",
          duration: "15 mins",
          description: "Restores softness and shine while improving overall manageability.",
          price: 18,
        },
      ],
    },
    {
      title: "Dry Bar Styling",
      icon: faClock,
      description:
        "Step into effortless glamour with our dry bar services — polished blowouts, soft waves, and sleek styles designed to leave you radiant, where styling is swift and less time consuming.",
      basePrice: 35,
      duration: "30 mins - 1 hour",
      addons: [
        {
          name: "Volume Boost",
          duration: "10 mins",
          description: "Adds body and fullness for a more glamorous styled finish.",
          price: 10,
        },
        {
          name: "Pin Curls Finish",
          duration: "15 mins",
          description: "Sets the style for extra hold, shape, and elegance.",
          price: 12,
        },
      ],
    },
    {
      title: "Extra Services",
      icon: faAward,
      description:
        "Complete your experience with luxurious add-ons — from scalp treatments to specialty finishes — because every detail matters in your beauty ritual.",
      basePrice: 10,
      duration: "10 mins - 30 mins",
      addons: [
        {
          name: "Scalp Massage",
          duration: "10 mins",
          description: "A relaxing scalp ritual to stimulate circulation and deepen your sense of calm.",
          price: 10,
        },
        {
          name: "Hot Towel Therapy",
          duration: "10 mins",
          description: "A soothing warm towel finish that enhances comfort and relaxation.",
          price: 8,
        },
        {
          name: "Luxury Shine Finish",
          duration: "5 mins",
          description: "A final premium finishing touch for luminous shine and polish.",
          price: 6,
        },
      ],
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

  favicon: "Ethereal/ethereal-logo.jpeg",
  companyNo: "98765432",
};

export default EtherealVistaConfig;