import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  icon: IconDefinition;
  description: string;
}

export interface FeatureIconConfig {
  icon: IconDefinition;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  price: number;
  originalPrice?: number;
  vatPrice: number;
  stock: number;
  type?: string;
  description: string;
  material?: string;
  finish?: string;
  size?: string;
  images: string[];
  specifications: { key: string; value: string }[];
}

interface FilterOption {
  name: string;
  count: number;
  selected: boolean;
}

export interface FilterGroup {
  title: string;
  options: FilterOption[];
  type: "checkbox" | "radio";
}

export interface FeaturedProduct {
  id: number;
  name: string;
  image: string;
  images?: string[];
  price: number;
  originalPrice: number;
  stock: number;
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
}

export interface FeaturedItems {
  products: FeaturedProduct[];
  title?: string;
  subtitle?: string;
}

export interface ClientConfig {
  isBooking: boolean;
  name: string;
  logo: string;
  primaryColor: string;
  primaryColorLight: string;
  secondaryColor: string;
  tagline: string;
  fontFamily: string;
  favicon: string;
  phoneOffice: string;
  phoneMobile: string;
  email: string;
  address: string;
  openHours1: string;
  openHours2: string;
  openHours3: string;
  location: string;
  currencySymbol?: string;
  companyNo: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;

  services?: Service[];
  serviceDescription?: string;
  serviceCTATitle?: string;
  serviceCTADescription?: string;

  //section for page header for the projects
  header: {
    title: string;
    subtitle: string;
  };

  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  //for the call-to-action
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    link: string;
  };

  // Projects array to hold project details(mainly gallery images and card display)
  // we need to come up with a faster way to render images
  projects?: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    gallery: string[];
  }[];
  // Features configuration (just the data, icons will be created dynamically)
  features: FeatureIconConfig[];

  // About section starts here
  about: {
    title: string;
    subtitle: string;
    description: string;
    image: string; // main about/team image

    // Story section fields
    mainImage?: string; // Story section image
    mainImageAlt?: string; // Alt text for story image
    storyTitle?: string;
    story1?: string;
    story2?: string;
    story3?: string;
    story4?: string;
    story5?: string;
    story6?: string;

    // Values section fields
    values?: {
      icon: IconDefinition;
      title: string;
      description: string;
    }[];

    // Founder section fields
    founderImage?: string;
    founderTitle?: string;
    founderName?: string;
    founderRole?: string;
    founderBio1?: string;
    founderBio2?: string;
    founderBio3?: string;

    // Optional SEO fields
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    seoUrl?: string;
  };

  // featured items configuration
  featuredTitle: String;
  featuredSubTitle: String;
  featuredItems?: FeaturedItems;

  // for products page
  filterGroup?: FilterGroup[];
  products?: Product[];
}
