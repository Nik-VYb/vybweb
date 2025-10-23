export const dynamic = 'force-static';
export const runtime = 'edge';
export const revalidate = 60;

export default function ArticlesIndex() {
  // Temporary static view while we wire Edge-safe data
  const rows: { slug: string; title?: string }[] = [];

  return (
    <main className="prose mx-auto p-6">
      <h1>Latest Articles</h1>
      {rows.length === 0 ? (
        <p>No articles to show yet. (Data API wiring in progress.)</p>
      ) : (
        <ul>
          {rows.map((r) => (
            <li key={r.slug}>
              <a href={`/articles/${r.slug}`}>{r.title || r.slug}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
