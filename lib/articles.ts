import { type Article, allArticles } from "@/.content-collections/generated";

export const fetchPublishedArticles = () => {
  return allArticles.filter((article) => article.isPublished);
};

export const fetchArticleBySlug = (filename: Article["_meta"]["path"]) => {
  return allArticles.find((article) => {
    return article.isPublished && article._meta.path === filename;
  });
};
