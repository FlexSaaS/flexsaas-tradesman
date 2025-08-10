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

const clientBeakomConfig: ClientConfig = {
  name: "Beakom Enterprise",
  logo: "Beakom/beakom-logo.png",
  primaryColor: "#c30606",
  primaryColorLight: "#a01a1575",
  secondaryColor: "#000000ff",
  tagline: "Your Trusted Hardware Supplier!",
  fontFamily: "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
  currencySymbol: "₵",
  // Project template config starts here
  header: {
    title: "Our Projects",
    subtitle: "Explore our portfolio of completed work.",
  },
  cta: {
    title: "Have a specific hardware fastener in mind?",
    subtitle:
      "We'd love to hear about your needs. Contact us today for more information.",
    buttonText: "Contact Us",
    link: "/contact", // when the contact page is converted should be added here.
  },

  features: [
    {
      icon: faShieldAlt,
      title: "Quality Guaranteed",
      description: "Premium materials and tools for every project.",
    },
    {
      icon: faCrown,
      title: "Luxury Finish",
      description: "Achieve a high-end look with our premium hardware.",
    },
    {
      icon: faStopwatch,
      title: "Timely Delivery",
      description: "Meeting deadlines with precision and efficiency",
    },
    {
      icon: faHandshake,
      title: "Reliability",
      description:
        "Count on us for consistent quality and dependable products.",
    },
    {
      icon: faAward,
      title: "Trust",
      description: "Building lasting relationships with our clients.",
    },
    {
      icon: faStar,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority.",
    },
  ],
  about: {
    title: "About Us",
    subtitle: "Who we are and what we do.",
    description:
      "Beakom Enterprises is a leading provider of high-quality hardware fasteners.",
    image: "/images/about-team.jpg",

    // Story section fields
    // Story section fields
    mainImage: "Beakom/beakom-logo.png", // or your story image path
    mainImageAlt: "Beakom Team",
    storyTitle: "Our Story",
    story1:
      "Founded in 2016 by Mrs Jasmine, Beakom has become a leader in the hardware fastener industry in Ghana.",
    story2:
      "With a focus on quality and customer satisfaction, we have built a strong reputation for delivering reliable products and services.",
    story3:
      "Our mission is to provide the best hardware solutions to our clients and to be a trusted partner in their success.",

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
    founderName: "Mrs Jasmine",
    founderRole: "Founder & CEO",
    founderBio1:
      "With over 15 years of experience in the construction industry, Mrs Jasmine has established herself as a visionary leader providing innovative solutions.",
    founderBio2:
      "In 2016, driven by her passion for excellence, Mrs Jasmine founded Beakom. Under her leadership, the company has grown from handling small residential projects to managing complex commercial developments.",
    founderBio3:
      "Mrs Jasmine's hands-on approach and dedication to client satisfaction have been instrumental in building Beakom's reputation.",
    // Optional SEO fields
    // seoTitle: "About Beakom - Expert Construction Company",
    // seoDescription: "Learn about Beakom, a trusted construction company with 9+ years experience in house extensions, renovations & new builds.",
    // seoKeywords: "about Beakom, construction company, experienced builders, construction history",
    // seoUrl: "https://yourdomain.com/about"
  },
  phoneOffice: "053 135 6424",
  phoneMobile: "(+233) 53 135 6424",
  email: "Beakomenterprisegh@gmail.com",
  address: "Hanson lane, Arena station, Accra",
  openHours1: "Monday - Friday: 8:00 AM - 4:30 PM",
  openHours2: "Saturday: Closed",
  openHours3: "Sunday: Closed",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8832781725673!2d-0.22423112337504625!3d51.58870257183188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610cf8629b6f3%3A0x4802d5cd36a9a63!2s137%20Brent%20St%2C%20London%20NW4%204DJ!5e0!3m2!1sen!2suk!4v1747849113481!5m2!1sen!2suk",
  hero: {
    title: "Building Your Vision with Precision",
    subtitle:
      "Supplying you with all the hardware fasteners you need for your projects.",

    backgroundImage: "Beakom/beakom-background.png",
  },
  featuredItems: {
    title: "Best Sellers",
    subtitle: "Top-rated hardware at unbeatable prices",
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
      title: "Hardware Tool",
      options: [
        { name: "Bolts", count: 113, selected: false },
        { name: "Socket Screws", count: 140, selected: false },
        { name: "Anchors & Expansion Fixings", count: 348, selected: false },
        { name: "General Screws", count: 150, selected: false },
        { name: "Nuts", count: 200, selected: false },
        { name: "Washers", count: 100, selected: false },
        { name: "Retaining Rings & Keys", count: 50, selected: false },
        { name: "Pins & Rivets", count: 75, selected: false },
        { name: "Anchor Plugs", count: 30, selected: false },
        { name: "Other Materials", count: 30, selected: false },
      ],
      type: "checkbox",
    },
    {
      title: "Material",
      options: [
        { name: "Mild Steel", count: 140, selected: false },
        { name: "Stainless Steel", count: 113, selected: false },
        { name: "Brass", count: 80, selected: false },
        { name: "Copper", count: 50, selected: false },
        { name: "Rubber", count: 30, selected: false },
        { name: "Nylon", count: 25, selected: false },
        { name: "Cast Iron", count: 13, selected: false },
        { name: "Malleable Iron", count: 348, selected: false },
      ],
      type: "checkbox",
    },
    {
      title: "Material Finish",
      options: [
        { name: "Raw Steel", count: 780, selected: false },
        { name: "Galvanized", count: 466, selected: false },
        { name: "Zinc", count: 300, selected: false },
        { name: "HDG", count: 200, selected: false },
        { name: "Stainless", count: 150, selected: false },
        { name: "Coated", count: 100, selected: false },
      ],
      type: "checkbox",
    },
  ],
  products: [
    {
      id: "1",
      code: "HB16",
      name: "Hex Bolt 16mm (Stainless Steel)",
      price: 1.2,
      vatPrice: 1.46,
      stock: 100,
      description: "Stainless steel hex bolt with full thread",
      material: "Stainless Steel",
      finish: "Stainless",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Hex Bolt" },
        { key: "Material", value: "Stainless Steel" },
        { key: "Diameter", value: "16mm" },
        { key: "Length", value: "100mm" },
      ],
    },
    {
      id: "2",
      code: "SFB12",
      name: "Socket Button Flange Screw 12mm",
      price: 0.8,
      vatPrice: 0.96,
      stock: 250,
      description: "Galvanized socket button flange screw",
      material: "Mild Steel",
      finish: "Galvanized",
      size: "12mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Socket Button Flange Screw" },
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "12mm" },
        { key: "Length", value: "50mm" },
      ],
    },
    {
      id: "3",
      code: "WAG8",
      name: "Wedge Anchor Galvanized 8mm",
      price: 0.95,
      vatPrice: 1.14,
      stock: 80,
      description: "Galvanized wedge anchor for concrete",
      material: "Mild Steel",
      finish: "Galvanized",
      size: "8mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Wedge Anchor" },
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "8mm" },
        { key: "Length", value: "80mm" },
      ],
    },
    {
      id: "4",
      code: "HN10",
      name: "Hex Nut 10mm (Brass)",
      price: 0.25,
      vatPrice: 0.3,
      stock: 500,
      description: "Brass hex nut with standard thread",
      material: "Brass",
      finish: "Coated",
      size: "10mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Hex Nut" },
        { key: "Material", value: "Brass" },
        { key: "Size", value: "10mm" },
        { key: "Thread", value: "Standard" },
      ],
    },
    {
      id: "5",
      code: "FW16",
      name: "Flat Washer 16mm (Stainless Steel)",
      price: 0.1,
      vatPrice: 0.12,
      stock: 1000,
      description: "Stainless steel flat washer",
      material: "Stainless Steel",
      finish: "Stainless",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Flat Washer" },
        { key: "Material", value: "Stainless Steel" },
        { key: "Inner Diameter", value: "16mm" },
        { key: "Outer Diameter", value: "30mm" },
      ],
    },
    {
      id: "6",
      code: "EB10",
      name: "Eye Bolt 10mm (Galvanized)",
      price: 1.2,
      vatPrice: 1.44,
      stock: 150,
      description: "Galvanized eye bolt for lifting applications",
      material: "Mild Steel",
      finish: "Galvanized",
      size: "10mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Eye Bolt" },
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "10mm" },
        { key: "Length", value: "100mm" },
      ],
    },
    {
      id: "7",
      code: "TR12",
      name: "Threaded Rod 12mm (HDG)",
      price: 2.5,
      vatPrice: 3.0,
      stock: 75,
      description: "Hot-dip galvanized threaded rod",
      material: "Mild Steel",
      finish: "HDG",
      size: "12mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Threaded Rod" },
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "12mm" },
        { key: "Length", value: "1m" },
      ],
    },
    {
      id: "8",
      code: "SW8",
      name: "Wood Screw 8mm (Brass)",
      price: 0.15,
      vatPrice: 0.18,
      stock: 800,
      description: "Brass wood screw with sharp point",
      material: "Brass",
      finish: "Coated",
      size: "8mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Wood Screw" },
        { key: "Material", value: "Brass" },
        { key: "Diameter", value: "8mm" },
        { key: "Length", value: "50mm" },
      ],
    },
    {
      id: "9",
      code: "UB16",
      name: "U Bolt 16mm (Galvanized)",
      price: 2.8,
      vatPrice: 3.36,
      stock: 60,
      description: "Galvanized U-bolt for pipe clamping",
      material: "Mild Steel",
      finish: "Galvanized",
      size: "16mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "U Bolt" },
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "16mm" },
        { key: "Inside Width", value: "50mm" },
      ],
    },
    {
      id: "10",
      code: "LN10",
      name: "Lock Nut 10mm (Nylon Insert)",
      price: 0.4,
      vatPrice: 0.48,
      stock: 300,
      description: "Nylon insert lock nut for vibration resistance",
      material: "Mild Steel",
      finish: "Zinc",
      size: "10mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Lock Nut" },
        { key: "Material", value: "Mild Steel" },
        { key: "Size", value: "10mm" },
        { key: "Feature", value: "Nylon Insert" },
      ],
    },
    {
      id: "11",
      code: "DIA10",
      name: "Drop-in Anchor 10mm (Galvanized)",
      price: 1.2,
      vatPrice: 1.44,
      stock: 120,
      description: "Galvanized drop-in anchor for concrete",
      material: "Mild Steel",
      finish: "Galvanized",
      size: "10mm",
      images: [
        "https://res.cloudinary.com/dxwqt6yrg/image/upload/v1754320978/tai-lung-prison-captioned-bottom_vy4tmn.jpg",
      ],
      specifications: [
        { key: "Type", value: "Drop-in Anchor" },
        { key: "Material", value: "Mild Steel" },
        { key: "Diameter", value: "10mm" },
        { key: "Embedment Depth", value: "40mm" },
      ],
    },
  ],
  featuredTitle: "Why buy your hardware fasteners from Beakom?",
  featuredSubTitle:
    "Your one-stop shop for quality and reliability, providing you with the best products and services.",
  favicon: "Beakom/beakom-favicon.png",
};
export default clientBeakomConfig;
