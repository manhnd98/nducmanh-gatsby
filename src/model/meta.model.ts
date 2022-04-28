interface ISocial {
  name: "Twitter" | "Github";
  url: string;
}

export interface ISiteMetadata {
  author: string;
  defaultDescription: string;
  siteUrl: string;
  defaultTitle: string;
  defaultImage: string;
  site: ISocial[];

  titleTemplate: string;
}
