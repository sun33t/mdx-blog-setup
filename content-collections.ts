import { defineCollection, defineConfig } from "@content-collections/core";

const articles = defineCollection({
  name: "articles",
  directory: "content/articles",
  include: "**/*.mdx",
  parser: "frontmatter-only",
  schema: (z) => ({
    title: z.string(),
    isPublished: z.boolean().default(false),
  }),
  transform: (doc) => {
    return {
      ...doc,
      slug: doc._meta.path.substring(5),
    };
  },
});

export default defineConfig({
  collections: [articles],
});
