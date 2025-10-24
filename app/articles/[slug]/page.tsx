export const dynamic = 'force-static';
export const revalidate = 60;

import type { Metadata } from "next";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/[-_]+/g, " ");
  return {
    title,
    description: "Article preview. Data API wiring in progress.",
    alternates: { canonical: `/articles/${slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  return (
    <main className="prose mx-auto p-6">
      <p>
        <Link href="/articles">← Back to Articles</Link>
      </p>
      <h1>{slug.replace(/[-_]+/g, " ")}</h1>
      <p>Content not loaded yet. We’ll plug in the API next.</p>
    </main>
  );
}
