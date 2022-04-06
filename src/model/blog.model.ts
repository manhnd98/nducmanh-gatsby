export interface BlogInterface {
  data: {
    blog: {
      posts: {
        frontmatter: {
          title: string;
          date: string;
          author: string;
        };
        excerpt: string;
        id: string;
      }[];
    };
  };
}
