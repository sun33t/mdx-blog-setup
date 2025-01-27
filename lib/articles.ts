import { type Article, allArticles } from "@/.content-collections/generated";

export const fetchPublishedArticles = () => {
  return allArticles.filter((article) => article.isPublished);
};

export const fetchArticleBySlug = (slug: Article["_meta"]["path"]) => {
  return allArticles.find((article) => {
    return article.isPublished && article.slug === slug;
  });
};
