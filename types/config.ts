export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    twitter: string;
  };
};

export type RoutesConfig = {
  title: string;
  path: string;
};
