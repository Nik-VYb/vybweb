export const runtime = 'edge';

import Link from "next/link";

export default function ArticlesIndex() {
  // Temporary static list (no DB yet)
  const rows: { slug: string; title?: string }[] = [];

  return (
    <main className="prose mx-auto p-6">
      <h1>Latest Articles</h1>
      {rows.length === 0 ? (
        <p>No articles yet. (Data API wiring in progress.)</p>
      ) : (
        <ul>
          {rows.map((r) => (
            <li key={r.slug}>
              <Link href={`/articles/${r.slug}`}>{r.title || r.slug}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
