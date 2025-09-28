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

const LecienConfig: ClientConfig = {
  name: "Lechien London",
  logo: "Lecien/lechien-logo.png",
  primaryColor: "black",
  primaryColorLight: "white",
  secondaryColor: "white",
  tagline: "Award Winning Styling By Cheryl Howard",
  fontFamily: "Roboto, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
  currencySymbol: "£",

  // Header
  header: {
    title: "Our Projects",
    subtitle: "Award Winning Styling By Cheryl Howard",
  },

  // Call to action
  cta: {
    title: "Need a grooming appointment for your furry friend?",
    subtitle:
      "We’d love to pamper your pet. Book a session with our expert groomers today.",
    buttonText: "Book Now",
    link: "/contact",
  },

  // Features
  features: [
    {
      icon: faShieldAlt,
      title: "Gentle Care Guaranteed",
      description: "Safe, hygienic, and stress-free grooming for your pet.",
    },
    {
      icon: faCrown,
      title: "Luxury Pampering",
      description: "Treat your furry friend to a premium grooming experience.",
    },
    {
      icon: faStopwatch,
      title: "On-Time Appointments",
      description: "Punctual service so your pet is groomed without delays.",
    },
    {
      icon: faHandshake,
      title: "Trusted Care",
      description: "A friendly and dependable team your pet can trust.",
    },
    {
      icon: faAward,
      title: "Professional Standards",
      description: "Expert groomers delivering consistent, quality results.",
    },
    {
      icon: faStar,
      title: "Happy Pets, Happy Owners",
      description: "Your pet’s happiness and your satisfaction come first.",
    },
  ],

  // About section
  about: {
    title: "About Us",
    subtitle: "Who we are and what we do.",
    description:
      "Welcome to Le Chien, We are a Multi Award Winning Dog Grooming Salon with over 23 years experience of caring for your beloved pampered dogs",
    image: "/images/about-team.jpg",

    // Story section
    mainImage: "Lecien/lechien-logo.png",
    mainImageAlt: "Le Chien Team",
    storyTitle: "Our Story",
    story1:
      "Cheryl Howard Opened Le Chien in 2005 and has been grooming dogs to a High standard since 1997 when she started her dog grooming career.",
    story2:
      "Cheryl and her Team Regularly Competes in dog grooming competitions across the UK and Europe winning at some of the most prestigious events.",
    story3:
      "In 2018 Cheryl was selected to join Groom Team England representing the United Kingdom at the Bi-annual International World Grooming tournament. She was Later Selected again in 2020 making it her 2nd term on the Team.",
    story4:
      "Our Team of highly experienced stylists will ensure your Dogs visit is a happy and enjoyable experience. We offer bespoke styling to cater for all Breeds in a style that best suits you and your dogs lifestyle",
    story5:
      "At Le Chien we have a great range of high end quality Products to suit every dogs coat and skin type and only use the best natural and Holistic products on the market to ensure we get the best results whilst caring for your dog.",
    story6:
      "We Welcome all prospected Custom to Visit the salon for a free Consultation to discuss your grooming needs.",

    // Values
    values: [
      {
        icon: faPaw,
        title: "Gentle Care",
        description:
          "We treat every dog with kindness, patience, and respect to make grooming a positive experience.",
      },
      {
        icon: faBath,
        title: "Professional Grooming",
        description:
          "From baths to haircuts, our grooming services keep your dog looking and feeling their best.",
      },
      {
        icon: faClock,
        title: "On-Time Appointments",
        description:
          "We value your time and stick to our schedules so you and your pet are never left waiting.",
      },
      {
        icon: faHeart,
        title: "Happy, Healthy Pets",
        description:
          "Our ultimate goal is a wagging tail — ensuring your furry friend leaves looking fresh and feeling loved.",
      },
    ],

    // Founder section
    founderImage: "Lecien/leChien.jpg",
    founderTitle: "Meet The Founder",
    founderName: "Cheryl Howard",
    founderRole: "Founder & CEO",
    founderBio1:
      "Cheryl Howard has been a professional dog groomer since 1997, bringing over 23 years of expertise to Le Chien, which she founded in 2005.",
    founderBio2:
      "Cheryl and her team regularly compete and win at prestigious UK and European grooming competitions, showcasing their exceptional skills.",
    founderBio3:
      "Selected twice for Groom Team England, Cheryl leads with passion and dedication, ensuring every dog receives personalized, high-quality care.",
  },

  // Contact Info
  phoneOffice: "020 8544 2500",
  phoneMobile: "(+44) 20 8544 2500",
  email: "lechienlondon@gmail.com",
  address: "Hanson lane, Arena station, London",
  openHours1: "Monday - Friday: 8:00 AM - 4:30 PM",
  openHours2: "Saturday: Closed",
  openHours3: "Sunday: Closed",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8832781725673!2d-0.22423112337504625!3d51.58870257183188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610cf8629b6f3%3A0x4802d5cd36a9a63!2s137%20Brent%20St%2C%20London%20NW4%204DJ!5e0!3m2!1sen!2suk!4v1747849113481!5m2!1sen!2suk",

  // Hero
  hero: {
    title: "Le Chien London",
    subtitle: "Award Winning Styling By Cheryl Howard",
    backgroundImage: "Lecien/leChien.jpg",
  },

  // Services
  serviceDescription:
    "We provide a full range of professional dog grooming services, ensuring your furry friend looks, feels, and smells their best.",
  serviceCTATitle: "Ready to Pamper Your Pup?",
  serviceCTADescription:
    "Book a grooming session today and give your furry friend the care they deserve. From baths to stylish trims, we’ll have them looking and feeling their best.",
  services: [
    {
      title: "Full Grooming",
      icon: faCut,
      description:
        "A complete grooming package including bath, haircut, brushing, and styling to keep your dog looking fresh and clean.",
    },
    {
      title: "Bath & Blow Dry",
      icon: faShower,
      description:
        "Gentle shampoo and conditioning followed by a blow dry, leaving your dog’s coat soft, shiny, and smelling great.",
    },
    {
      title: "Nail Trimming",
      icon: faPaw,
      description:
        "Safe and precise nail trimming to ensure your dog’s comfort and prevent overgrowth or splitting.",
    },
    {
      title: "Ear Cleaning",
      icon: faEarListen,
      description:
        "Careful ear cleaning to remove wax and dirt, helping to prevent infections and discomfort.",
    },
    {
      title: "Teeth Cleaning",
      icon: faTooth,
      description:
        "Gentle brushing and tartar removal to promote healthy teeth and fresh breath.",
    },
    {
      title: "Puppy Introduction Groom",
      icon: faBaby,
      description:
        "A short, gentle grooming session to introduce puppies to the grooming process in a calm and friendly way.",
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Luxury Dog Spa Day",
      description:
        "A full pampering session with gentle wash, blow-dry, and coat conditioning for a silky shine.",
      category: "Grooming",
      image: "Lecien/dog1.png",
      gallery: ["Lecien/dog2.png", "Lecien/dog3.png", "Lecien/dog4.png"],
    },
    {
      id: 2,
      title: "Puppy’s First Groom",
      description:
        "A stress-free introduction to grooming with a warm bath, soft brushing, and nail trim for young pups.",
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

  featuredTitle: "Why choose Le Chien for your pet’s grooming?",
  featuredSubTitle:
    "Your pet’s comfort and style are our top priority, with gentle care and professional grooming every time.",

  favicon: "Lecien/lechien-logo.png",
};

export default LecienConfig;
