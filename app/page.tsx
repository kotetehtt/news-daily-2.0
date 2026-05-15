import { getNewsData, slugify, getCategoryInfo } from '@/lib/data';

export default function HomePage() {
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

  return (
    <>
      {/* Date Banner */}
      <div style={{ textAlign: 'center', padding: '16px', color: '#6B7280', fontSize: '0.9rem' }}>
        {data.date} · {data.sections.ai.length + data.sections.sand.length + data.sections.casting.length + data.sections.b2b.length + data.sections.world.length + data.sections.mfg.length} 条资讯
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        {data.banner[0] && (
          <a href={`/news/${slugify(data.banner[0])}`} className="hero-card">
            <img src={data.banner[0].image} alt={data.banner[0].title} />
            <div className="hero-card-content">
              <span className="hero-card-tag">{data.banner[0].tag}</span>
              <h1 className="hero-card-title">{data.banner[0].title}</h1>
              <div className="hero-card-meta">
                <span>{data.banner[0].source}</span>
                <span>·</span>
                <span>{data.banner[0].time}</span>
              </div>
            </div>
          </a>
        )}
        <div className="hero-list">
          {data.banner.slice(1).map(item => (
            <a key={item.id} href={`/news/${slugify(item)}`} className="hero-item">
              <img src={item.image} alt={item.title} />
              <div className="hero-item-content">
                <span className="hero-item-tag">{item.tag}</span>
                <span className="hero-item-title">{item.title}</span>
                <span className="hero-item-meta">{item.source} · {item.time}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <div className="content-grid">
        <div className="content-main">
          {/* AI Section */}
          <section className="category-section" id="ai">
            <div className="category-header">
              <h2 className="category-title">
                <span>🤖</span>
                {getCategoryInfo('ai').name}
              </h2>
              <a href="#" className="category-more">查看更多 →</a>
            </div>
            <div className="news-grid">
              {data.sections.ai.map(item => (
                <a key={item.id} href={`/news/${slugify(item)}`} className="news-card">
                  <img src={item.image} alt={item.title} />
                  <div className="news-card-content">
                    <span className="news-card-tag">{item.tag}</span>
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-footer">
                      <span>{item.source} · {item.time}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 3D Printing Section */}
          <section className="category-section" id="sand">
            <div className="category-header">
              <h2 className="category-title">
                <span>🏗️</span>
                {getCategoryInfo('sand').name}
              </h2>
              <a href="#" className="category-more">查看更多 →</a>
            </div>
            <div className="news-grid">
              {data.sections.sand.map(item => (
                <a key={item.id} href={`/news/${slugify(item)}`} className="news-card">
                  <img src={item.image} alt={item.title} />
                  <div className="news-card-content">
                    <span className="news-card-tag">{item.tag}</span>
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-footer">
                      <span>{item.source} · {item.time}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Casting Section */}
          <section className="category-section" id="casting">
            <div className="category-header">
              <h2 className="category-title">
                <span>⚙️</span>
                {getCategoryInfo('casting').name}
              </h2>
              <a href="#" className="category-more">查看更多 →</a>
            </div>
            <div className="news-grid">
              {data.sections.casting.map(item => (
                <a key={item.id} href={`/news/${slugify(item)}`} className="news-card">
                  <img src={item.image} alt={item.title} />
                  <div className="news-card-content">
                    <span className="news-card-tag">{item.tag}</span>
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-footer">
                      <span>{item.source} · {item.time}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* World Section */}
          <section className="world-section" id="world">
            <div className="category-header">
              <h2 className="category-title">
                <span>🌍</span>
                {getCategoryInfo('world').name}
              </h2>
              <a href="#" className="category-more">查看更多 →</a>
            </div>
            <div className="world-grid">
              {data.sections.world.map(item => (
                <a key={item.id} href={`/news/${slugify(item)}`} className="world-card">
                  <img src={item.image} alt={item.title} />
                  <div className="world-card-content">
                    <span className="world-card-tag">{item.tag}</span>
                    <h3 className="world-card-title">{item.title}</h3>
                    <span className="world-card-meta">{item.source} · {item.time}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* B2B Section */}
          <section className="category-section" id="b2b">
            <div className="category-header">
              <h2 className="category-title">
                <span>📈</span>
                {getCategoryInfo('b2b').name}
              </h2>
              <a href="#" className="category-more">查看更多 →</a>
            </div>
            <div className="news-grid">
              {data.sections.b2b.map(item => (
                <a key={item.id} href={`/news/${slugify(item)}`} className="news-card">
                  <img src={item.image} alt={item.title} />
                  <div className="news-card-content">
                    <span className="news-card-tag">{item.tag}</span>
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-footer">
                      <span>{item.source} · {item.time}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Manufacturing Section */}
          <section className="category-section" id="mfg">
            <div className="category-header">
              <h2 className="category-title">
                <span>🏭</span>
                {getCategoryInfo('mfg').name}
              </h2>
              <a href="#" className="category-more">查看更多 →</a>
            </div>
            <div className="news-grid">
              {data.sections.mfg.map(item => (
                <a key={item.id} href={`/news/${slugify(item)}`} className="news-card">
                  <img src={item.image} alt={item.title} />
                  <div className="news-card-content">
                    <span className="news-card-tag">{item.tag}</span>
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-footer">
                      <span>{item.source} · {item.time}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">🔥 热门文章</h3>
            {allItems.slice(0, 5).map((item, idx) => (
              <a key={item.id} href={`/news/${slugify(item)}`} className="sidebar-item">
                <span className="sidebar-item-num">{idx + 1}</span>
                <span className="sidebar-item-title">{item.title}</span>
              </a>
            ))}
          </div>
          <div className="sidebar-section">
            <h3 className="sidebar-title">📌 最新资讯</h3>
            {allItems.slice(5, 10).map((item, idx) => (
              <a key={item.id} href={`/news/${slugify(item)}`} className="sidebar-item">
                <span className="sidebar-item-num">{idx + 6}</span>
                <span className="sidebar-item-title">{item.title}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}