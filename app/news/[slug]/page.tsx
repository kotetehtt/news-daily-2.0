import { notFound } from 'next/navigation';
import Link from 'next/link';
import { findNewsItemBySlug, getNewsData, slugify } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const data = getNewsData();
  const allItems = [
    ...data.banner,
    ...data.sections.ai,
    ...data.sections.sand,
    ...data.sections.casting,
    ...data.sections.b2b,
    ...data.sections.world,
    ...data.sections.mfg,
  ];
  return allItems.map(item => ({ slug: slugify(item) }));
}

export default function NewsArticlePage({ params }: Props) {
  const item = findNewsItemBySlug(params.slug);

  if (!item) {
    notFound();
    return null;
  }

  const data = getNewsData();
  const allItems = [
    ...data.banner,
    ...data.sections.ai,
    ...data.sections.sand,
    ...data.sections.casting,
    ...data.sections.b2b,
    ...data.sections.world,
    ...data.sections.mfg,
  ];
  const relatedItems = allItems
    .filter(i => i.id !== item.id)
    .slice(0, 4);

  return (
    <article className="article-page">
      <Link href="/" className="back-link">
        ← 返回首页
      </Link>

      <header className="article-header">
        <span className="article-tag">{item.tag}</span>
        <h1 className="article-title">{item.title}</h1>
        <div className="article-meta">
          <span>{item.source}</span>
          <span>·</span>
          <span>{item.time}</span>
        </div>
      </header>

      {item.image && (
        <img src={item.image} alt={item.title} className="article-image" />
      )}

      <div className="article-content">
        {item.content.split('\n').map((paragraph, index) => (
          paragraph.trim() ? <p key={index}>{paragraph}</p> : null
        ))}
      </div>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="article-source"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        阅读原文
      </a>

      {relatedItems.length > 0 && (
        <section className="related-section">
          <h3 className="related-title">相关推荐</h3>
          <div className="related-grid">
            {relatedItems.map(related => (
              <a key={related.id} href={`/news/${slugify(related)}`} className="news-card">
                <img src={related.image} alt={related.title} />
                <div className="news-card-content">
                  <span className="news-card-tag">{related.tag}</span>
                  <h4 className="news-card-title">{related.title}</h4>
                  <div className="news-card-footer">
                    <span>{related.source} · {related.time}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}