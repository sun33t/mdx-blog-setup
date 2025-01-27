import Link from "next/link";

import { PageContainer } from "@/components/page-container";
import { fetchPublishedArticles } from "@/lib/articles";

export default function Page() {
  const allPublishedArticles = fetchPublishedArticles();

  return (
    <PageContainer>
      <h1>This is the articles page</h1>
      <div className="mt-12">
        <ul className="space-y-4">
          {allPublishedArticles.map((article) => {
            return (
              <li key={article._meta.path}>
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </PageContainer>
  );
}
