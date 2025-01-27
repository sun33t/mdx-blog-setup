import { PageContainer } from "@/components/page-container";

export async function generateStaticParams() {
  return [];
}

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: ArticlePageProps) {
  const slug = (await params).slug;

  return (
    <PageContainer>
      <h1>{`this is the ${slug} article page`}</h1>
    </PageContainer>
  );
}
