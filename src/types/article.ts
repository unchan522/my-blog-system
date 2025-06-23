export type Article = {
  fontMatter: {
    title: string;
    emoji: string;
    type?: string;
    topics?: string[];
    published: boolean;
    publishedAt?: string;

    embedLink: string;
    embedTitle: string;
    embedDescription?: string;
    embedImage?: string;
    embedImageAlt?: string;
    closeIconSrc?: string;
  };
  slug: string;
};

export type ArticlesProps = {
  articles: Article[];
};
