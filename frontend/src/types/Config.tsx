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

}
