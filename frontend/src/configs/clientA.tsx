import {
  faShieldAlt,
  faCrown,
  faStopwatch,
  faHandshake,
  faAward,
  faStar,
  faUsers,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import type { ClientConfig } from "../types/Config";

const clientAConfig: ClientConfig = {
  name: "Client A",
  logo: "/clientA-logo.png",
  primaryColor: "#1e90ff",
  primaryColorLight: "#00ffc3",
  secondaryColor: "#2c3e50",
  tagline: "Book your sessions in seconds!",
  fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
  currencySymbol: "₵",
  // Project template config starts here
  header: {
    title: "Our Projects",
    subtitle: "Explore our portfolio of completed work.",
  },
  cta: {
    title: "Have a Project in Mind?",
    subtitle:
      "We'd love to hear about your project. Contact us today for a free consultation.",
    buttonText: "Contact Us",
    link: "/contact", // when the contact page is converted should be added here.
  },

  // projects: [
  //   {
  //     id: 1,
  //     title: "Modern Kitchen Renovation",
  //     description: "A full kitchen remodel with custom cabinetry and lighting.",
  //     category: "Renovation",
  //     image: "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
  //     gallery: [
  //       "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
  //       "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754319596/sample.jpg",
  //       "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Luxury Bathroom Upgrade",
  //     description: "Spa-inspired bathroom with walk-in shower and heated floors.",
  //     category: "Bathroom",
  //     image: "../sample-imgs/office-sample.jpg",
  //     gallery: ["../sample-imgs/office-sample.jpg", "../sample-imgs/office-sample.jpg", "../sample-imgs/office-sample.jpg"],
  //   },
  //   {
  //     id: 3,
  //     title: "Custom office Design",
  //     description: "A modern office space with ergonomic furniture and collaborative areas.",
  //     category: "Custom Build",
  //     image: "../sample-imgs/office-sample.jpg",
  //     gallery: ["../sample-imgs/office-sample.jpg", "../sample-imgs/office-sample.jpg", "../sample-imgs/office-sample.jpg"],
  //   },
  // ],
  features: [
    {
      icon: faShieldAlt,
      title: "Quality Guaranteed",
      description:
        "Premium materials and expert craftsmanship in every project",
    },
    {
      icon: faCrown,
      title: "Luxury Finish",
      description: "Exceptional attention to detail for a premium result",
    },
    {
      icon: faStopwatch,
      title: "Timely Delivery",
      description: "Meeting deadlines with precision and efficiency",
    },
    {
      icon: faHandshake,
      title: "Reliability",
      description: "Consistent quality and dependable service",
    },
    {
      icon: faAward,
      title: "Trust",
      description: "Building lasting relationships with our clients",
    },
    {
      icon: faStar,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority",
    },
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
    story1:
      "Founded in 2016 by Mr Lucian Picior, Client A has grown from a small local contractor to one of the region's most trusted construction companies.",
    story2:
      "With a team of highly skilled professionals and a commitment to using the latest construction technologies, we've successfully completed hundreds of projects.",
    story3:
      "Our mission is simple: to transform our clients' visions into reality while exceeding expectations in quality, safety, and service.",

    // Values section
    values: [
      {
        icon: faShieldAlt,
        title: "Quality",
        description:
          "We never compromise on quality, using only the finest materials and proven construction methods.",
      },
      {
        icon: faUsers,
        title: "Trust",
        description:
          "Building lasting relationships with our clients through transparency and reliability.",
      },
      {
        icon: faClock,
        title: "Timeliness",
        description:
          "We respect deadlines and deliver projects on schedule without compromising quality.",
      },
      {
        icon: faThumbsUp,
        title: "Customer Satisfaction",
        description:
          "Your satisfaction is our ultimate goal, and we go above and beyond to achieve it.",
      },
    ],

    // Founder section fields
    founderImage: "/images/founder.jpg", // or your founder image path
    founderTitle: "Meet The Founder",
    founderName: "Lucian Picior",
    founderRole: "Founder & CEO",
    founderBio1:
      "With over 15 years of experience in the construction industry, Lucian Picior has established himself as a visionary leader.",
    founderBio2:
      "In 2016, driven by his passion for excellence, Lucian founded Client A. Under his leadership, the company has grown from handling small residential projects to managing complex commercial developments.",
    founderBio3:
      "Lucian's hands-on approach and dedication to client satisfaction have been instrumental in building Client A's reputation.",
    // Optional SEO fields
    // seoTitle: "About Client A - Expert Construction Company",
    // seoDescription: "Learn about Client A, a trusted construction company with 9+ years experience in house extensions, renovations & new builds.",
    // seoKeywords: "about Client A, construction company, experienced builders, construction history",
    // seoUrl: "https://yourdomain.com/about"
  },
  phoneOffice: "020 8457 2921",
  phoneMobile: "(+44) 07778970161",
  email: "xprobuild4@gmail.com",
  address: "137-139 Brent Street, London England, NW4 4DJ",
  openHours1: "Monday - Friday: 8:00 AM - 6:00 PM",
  openHours2: "Saturday: 9:00 AM - 4:00 PM",
  openHours3: "Sunday: Closed",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8832781725673!2d-0.22423112337504625!3d51.58870257183188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610cf8629b6f3%3A0x4802d5cd36a9a63!2s137%20Brent%20St%2C%20London%20NW4%204DJ!5e0!3m2!1sen!2suk!4v1747849113481!5m2!1sen!2suk",
  hero: {
    title: "Building Your Vision with Precision",
    subtitle:
      " Transform your space with XPro Build's expert construction services. We bring your dreams to life with quality craftsmanship and attention to detail.",
    backgroundImage: "/clientA-logo.png",
  },
  featuredItems: {
    title: "Best Sellers",
    subtitle: "Top-rated tools at unbeatable prices",
    products: [
      {
        id: 1,
        name: "Premium Cordless Drill Kit",
        image:
          "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
        price: 129.99,
        originalPrice: 179.99,
        stock: 42,
        priceRange: {
          min: 89.99,
          max: 229.99,
        },
        rating: 4.8,
      },
      {
        id: 2,
        name: "Heavy-Duty Wheelbarrow",
        image:
          "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
        price: 89.5,
        originalPrice: 119.99,
        stock: 15,
        priceRange: {
          min: 59.99,
          max: 159.99,
        },
        rating: 4.5,
      },
      {
        id: 3,
        name: "Professional Tool Set (142pc)",
        image:
          "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
        price: 249.99,
        originalPrice: 349.99,
        stock: 8,
        priceRange: {
          min: 199.99,
          max: 499.99,
        },
        rating: 4.9,
      },
      {
        id: 4,
        name: "Safety Helmet with Visor",
        image:
          "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
        price: 24.99,
        originalPrice: 34.99,
        stock: 0, // Out of stock
        priceRange: {
          min: 19.99,
          max: 49.99,
        },
        rating: 4.3,
      },
      {
        id: 5,
        name: "Laser Distance Measurer",
        image:
          "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
        price: 59.99,
        originalPrice: 79.99,
        stock: 23,
        priceRange: {
          min: 39.99,
          max: 129.99,
        },
        rating: 4.7,
      },
    ],
  },

  filterGroup: [
    {
      title: "Material",
      options: [
        { name: "Mild Steel", count: 1140, selected: false },
        { name: "Cast Iron", count: 13, selected: false },
        { name: "Malleable Iron", count: 348, selected: false },
      ],
      type: "checkbox",
    },
    {
      title: "Material Finish",
      options: [
        { name: "Raw Steel", count: 780, selected: false },
        { name: "Galvanised", count: 466, selected: false },
      ],
      type: "checkbox",
    },
  ],
  products: [
    {
      id: "1",
      code: "GP16",
      name: "Gate Pin To Weld 16mm",
      price: 1.2,
      vatPrice: 1.46,
      stock: 100,
      description: "Galvanised steel gate pin",
      material: "Steel",
      finish: "Galvanised",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Galvanised Steel" },
        { key: "Diameter", value: "16mm" },
        { key: "Length", value: "100mm" },
      ],
    },
    {
      id: "2",
      code: "GP12",
      name: "Gate Pin To Weld 12mm",
      price: 0.8,
      vatPrice: 0.96,
      stock: 250,
      description: "Raw steel gate pin",
      material: "Steel",
      finish: "Raw Steel",
      size: "12mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Raw Steel" },
        { key: "Diameter", value: "12mm" },
        { key: "Length", value: "100mm" },
      ],
    },
    {
      id: "3",
      code: "ADJM124",
      name: "Adjustable Zinc Plated Eye Bolt 100mm",
      price: 0.95,
      vatPrice: 1.14,
      stock: 80,
      description: "Zinc plated eye bolt for gate fitting",
      material: "Mild Steel",
      finish: "Zinc Plated",
      size: "12mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "12mm" },
        { key: "Length", value: "100mm" },
      ],
    },
    {
      id: "4",
      code: "GP20",
      name: "Gate Pin To Weld 20mm",
      price: 1.8,
      vatPrice: 2.16,
      stock: 45,
      description: "Heavy-duty weldable gate pin",
      material: "Cast Iron",
      finish: "Galvanised",
      size: "20mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Cast Iron" },
        { key: "Diameter", value: "20mm" },
        { key: "Length", value: "150mm" },
      ],
    },
    {
      id: "5",
      code: "ADJM166",
      name: "Adjustable Zinc Plated Eye Bolt 150mm",
      price: 1.49,
      vatPrice: 1.79,
      stock: 130,
      description: "150mm adjustable bolt with zinc finish",
      material: "Mild Steel",
      finish: "Zinc Plated",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "16mm" },
        { key: "Length", value: "150mm" },
      ],
    },
    {
      id: "6",
      code: "GE16",
      name: "Gate Eye To Weld 16mm",
      price: 0.99,
      vatPrice: 1.19,
      stock: 200,
      description: "Gate eye for hinge pin welding",
      material: "Malleable Iron",
      finish: "Galvanised",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Malleable Iron" },
        { key: "Hole Size", value: "16mm" },
        { key: "Shape", value: "Flat" },
      ],
    },
    {
      id: "7",
      code: "BRTG3435",
      name: "Galvanised Steel Tube 3.5m x 33.7mm",
      price: 14.5,
      vatPrice: 17.4,
      stock: 18,
      description: "Galvanised steel tube with 2.6mm wall",
      material: "Steel",
      finish: "Galvanised",
      size: "33.7mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Diameter", value: "33.7mm" },
        { key: "Length", value: "3.5m" },
        { key: "Wall Thickness", value: "2.6mm" },
      ],
    },
    {
      id: "8",
      code: "GP10",
      name: "Gate Pin To Weld 10mm",
      price: 0.7,
      vatPrice: 0.84,
      stock: 310,
      description: "Small size gate pin for lightweight use",
      material: "Steel",
      finish: "Raw Steel",
      size: "10mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Raw Steel" },
        { key: "Diameter", value: "10mm" },
        { key: "Length", value: "90mm" },
      ],
    },
    {
      id: "9",
      code: "ADJM164",
      name: "Adjustable Zinc Eye Bolt 100mm",
      price: 1.4,
      vatPrice: 1.68,
      stock: 50,
      description: "Zinc plated adjustable bolt for gate fitting",
      material: "Steel",
      finish: "Zinc Plated",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Steel" },
        { key: "Diameter", value: "16mm" },
        { key: "Length", value: "100mm" },
      ],
    },
    {
      id: "10",
      code: "GE20",
      name: "Gate Eye To Weld 20mm",
      price: 1.05,
      vatPrice: 1.26,
      stock: 75,
      description: "Heavy-duty gate eye for welding",
      material: "Malleable Iron",
      finish: "Raw Steel",
      size: "20mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Malleable Iron" },
        { key: "Hole Size", value: "20mm" },
        { key: "Shape", value: "Flat" },
      ],
    },
    {
      id: "11",
      code: "GP25",
      name: "Gate Pin To Weld 25mm",
      price: 2.1,
      vatPrice: 2.52,
      stock: 60,
      description: "Extra thick gate pin for large hinges",
      material: "Steel",
      finish: "Galvanised",
      size: "25mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Material", value: "Steel" },
        { key: "Diameter", value: "25mm" },
        { key: "Length", value: "120mm" },
      ],
    },
  ],
  featuredTitle: "Why Choose XPro Build?",
  featuredSubTitle: "We deliver excellence in every project",
  favicon: "",
};
export default clientAConfig;
