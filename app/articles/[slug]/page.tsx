import { notFound } from "next/navigation";

import { PageContainer } from "@/components/page-container";
import { fetchArticleBySlug, fetchPublishedArticles } from "@/lib/articles";

export async function generateStaticParams() {
  const publishedArticles = fetchPublishedArticles();
  return publishedArticles.map((article) => ({ slug: article._meta.path }));
}

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: ArticlePageProps) {
  const slug = (await params).slug;

  const articleFrontmatter = fetchArticleBySlug(slug);

  if (!articleFrontmatter) {
    notFound();
  }

  const { default: Article } = await import(
    `@/content/articles/${articleFrontmatter._meta.filePath}`
  );

  return (
    <PageContainer>
      <h1>{`this is the ${slug} article page`}</h1>
      {articleFrontmatter && (
        <div>
          <Article />
        </div>
      )}
    </PageContainer>
  );
}
