export interface ClientConfig {
  name: string;
  logo: string;
  primaryColor: string;
  tagline: string;

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

  // About section starts here
  about: {
  title: string;
  subtitle: string;
  description: string;
  image: string; // main about/team image

  // Story section fields
  mainImage?: string;         // Story section image
  mainImageAlt?: string;      // Alt text for story image
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