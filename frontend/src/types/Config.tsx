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

export interface ClientConfig {
  name: string;
  logo: string;
  primaryColor: string;
  primaryColorLight: string;
  secondaryColor: string;
  tagline: string;
  fontFamily: string;
  phoneOffice: string;
  phoneMobile: string;
  email: string;
  address: string;
  openHours1: string;
  openHours2: string;
  openHours3: string;
  location: string;

  services: Service[];

  //section for page header for the projects
  header: {
    title: string;
    subtitle: string;
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
  projects: {
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

    founderImage?: string;
    founderName?: string;
    founderRole?: string;
    founderBio1?: string;
    founderBio2?: string;
    founderBio3?: string;

    //Optional SEO fields
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    seoUrl?: string;
  };
}
