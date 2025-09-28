import {
  faShieldAlt,
  faCrown,
  faStopwatch,
  faHandshake,
  faAward,
  faStar,
  faClock,
  faBath,
  faBaby,
  faCut,
  faEarListen,
  faPaw,
  faShower,
  faTooth,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import type { ClientConfig } from "../types/Config";

const PawsomeGroomingConfig: ClientConfig = {
  name: "Pawsome Grooming",
  logo: "Lecien/lechien-logo.png",
  primaryColor: "black",
  primaryColorLight: "white",
  secondaryColor: "white",
  tagline: "Expert Pet Styling by Mia Thompson",
  fontFamily: "Roboto, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
  currencySymbol: "£",

  header: {
    title: "Our Projects",
    subtitle: "Expert Pet Styling by Mia Thompson",
  },

  cta: {
    title: "Looking for a grooming session for your pet?",
    subtitle:
      "Let us pamper your furry friend. Schedule a session with our experienced groomers today.",
    buttonText: "Book Now",
    link: "/contact",
  },

  features: [
    {
      icon: faShieldAlt,
      title: "Gentle Care",
      description:
        "Safe, stress-free grooming designed for your pet's comfort.",
    },
    {
      icon: faCrown,
      title: "Luxury Pampering",
      description:
        "A premium grooming experience tailored for your furry friend.",
    },
    {
      icon: faStopwatch,
      title: "On-Time Appointments",
      description:
        "We value your time, ensuring punctual grooming every visit.",
    },
    {
      icon: faHandshake,
      title: "Trusted Team",
      description: "Friendly professionals your pet can feel comfortable with.",
    },
    {
      icon: faAward,
      title: "Top-Quality Grooming",
      description:
        "Expert stylists delivering consistent, high-quality results.",
    },
    {
      icon: faStar,
      title: "Happy Pets, Happy Owners",
      description: "Your pet’s happiness and well-being are our top priority.",
    },
  ],

  about: {
    title: "About Us",
    subtitle: "Who we are and what we do.",
    description:
      "Welcome to Pawsome Grooming, a multi-award-winning pet salon with over 20 years of experience providing loving care to every furry client.",
    image: "/images/about-team.jpg",

    mainImage: "Lecien/lechien-logo.png",
    mainImageAlt: "Pawsome Grooming Team",
    storyTitle: "Our Story",
    story1:
      "Mia Thompson opened Pawsome Grooming in 2010, bringing over 20 years of grooming expertise to ensure every pet receives exceptional care.",
    story2:
      "Mia and her team regularly participate in grooming competitions across the UK and Europe, winning awards for their skill and creativity.",
    story3:
      "In 2018, Mia was selected to join Groom Team England, representing the UK in the International World Grooming Tournament, and was selected again in 2020 for her outstanding work.",
    story4:
      "Our experienced stylists ensure each visit is enjoyable, offering bespoke grooming that suits all breeds and lifestyle needs.",
    story5:
      "We provide high-quality, natural grooming products suitable for every pet’s coat and skin type, achieving the best results while prioritizing care.",
    story6:
      "Prospective clients are welcome to visit our salon for a free consultation to discuss individual grooming needs.",

    values: [
      {
        icon: faPaw,
        title: "Compassionate Care",
        description:
          "Every pet is treated with patience and kindness to make grooming a positive experience.",
      },
      {
        icon: faBath,
        title: "Professional Grooming",
        description:
          "From baths to haircuts, our grooming services keep your pet looking their best.",
      },
      {
        icon: faClock,
        title: "Punctual Appointments",
        description: "We stick to schedules so your pet is never left waiting.",
      },
      {
        icon: faHeart,
        title: "Happy, Healthy Pets",
        description:
          "Our goal is a wagging tail and a happy, healthy pet after every visit.",
      },
    ],

    founderImage: "Lecien/leChien.jpg",
    founderTitle: "Meet the Founder",
    founderName: "Mia Thompson",
    founderRole: "Founder & CEO",
    founderBio1:
      "Mia Thompson has been a professional groomer since 2003, bringing over 20 years of experience to Pawsome Grooming, founded in 2010.",
    founderBio2:
      "Mia and her team consistently win awards at UK and European grooming competitions, demonstrating their skill and creativity.",
    founderBio3:
      "Selected twice for Groom Team England, Mia leads with dedication and ensures each pet receives top-quality, personalized care.",
  },

  phoneOffice: "020 8544 2500",
  phoneMobile: "(+44) 20 8544 2500",
  email: "info@pawsomegrooming.com",
  address: "Hanson lane, Arena station, London",
  openHours1: "Monday - Friday: 8:00 AM - 4:30 PM",
  openHours2: "Saturday: Closed",
  openHours3: "Sunday: Closed",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8832781725673!2d-0.22423112337504625!3d51.58870257183188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610cf8629b6f3%3A0x4802d5cd36a9a63!2s137%20Brent%20St%2C%20London%20NW4%204DJ!5e0!3m2!1sen!2suk!4v1747849113481!5m2!1sen!2suk",

  hero: {
    title: "London Dog Grooming",
    subtitle: "Expert Pet Styling by Mia Thompson",
    backgroundImage: "Lecien/leChien.jpg",
  },

  serviceDescription:
    "We provide professional grooming services to ensure your pet looks, feels, and smells their best.",
  serviceCTATitle: "Time to Pamper Your Pet?",
  serviceCTADescription:
    "Book a grooming session today to give your furry friend the care they deserve — from baths to stylish trims, we’ll keep them looking and feeling fantastic.",

  services: [
    {
      title: "Full Grooming",
      icon: faCut,
      description:
        "Complete grooming package including bath, haircut, brushing, and styling for a fresh look.",
    },
    {
      title: "Bath & Blow Dry",
      icon: faShower,
      description:
        "Shampoo and conditioning followed by a blow dry for a soft, shiny coat.",
    },
    {
      title: "Nail Trimming",
      icon: faPaw,
      description:
        "Safe and precise nail trimming to keep your dog comfortable and healthy.",
    },
    {
      title: "Ear Cleaning",
      icon: faEarListen,
      description:
        "Gentle ear cleaning to prevent infections and maintain ear health.",
    },
    {
      title: "Teeth Cleaning",
      icon: faTooth,
      description:
        "Professional brushing and tartar removal for healthy teeth and fresh breath.",
    },
    {
      title: "Puppy Introduction Groom",
      icon: faBaby,
      description:
        "Short, gentle grooming sessions introducing puppies to the grooming process.",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Luxury Dog Spa Day",
      description:
        "Full pampering session with gentle wash, blow-dry, and coat conditioning for a silky shine.",
      category: "Grooming",
      image: "Lecien/dog1.png",
      gallery: ["Lecien/dog2.png", "Lecien/dog3.png", "Lecien/dog4.png"],
    },
    {
      id: 2,
      title: "Puppy’s First Groom",
      description:
        "Stress-free introduction with warm bath, soft brushing, and nail trim for young pups.",
      category: "Puppy Care",
      image: "Lecien/dog2.png",
      gallery: ["Lecien/dog1.png", "Lecien/dog3.png", "Lecien/dog4.png"],
    },
    {
      id: 3,
      title: "Breed-Specific Styling",
      description:
        "Expert coat trimming and styling tailored to your dog’s breed for a show-quality finish.",
      category: "Styling",
      image: "Lecien/dog4.png",
      gallery: ["Lecien/dog3.png", "Lecien/dog1.png", "Lecien/dog4.png"],
    },
  ],

  featuredTitle: "Why choose Pawsome Grooming?",
  featuredSubTitle:
    "We prioritize your pet’s comfort and style, offering gentle care and professional grooming every visit.",
  favicon: "Lecien/lechien-logo.png",
};

export default PawsomeGroomingConfig;
