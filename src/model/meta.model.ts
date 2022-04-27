interface ISocial {
  name: "Twitter" | "Github";
  url: string;
}

export interface ISiteMetadata {
  author: string;
  description: string;
  siteUrl: string;
  title: string;
  site: ISocial[];
}
