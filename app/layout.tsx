import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '市场中心 Daily Insights - 每日科技资讯',
  description: '聚焦AI人工智能、3D打印、砂型铸造、B2B营销等领域的每日资讯',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="header">
          <div className="header-inner">
            <a href="/" className="logo">市场中心 Daily Insights</a>
            <nav className="nav">
              <a href="#ai">AI</a>
              <a href="#sand">3D打印</a>
              <a href="#casting">铸造</a>
              <a href="#b2b">B2B</a>
              <a href="#world">国际</a>
              <a href="#mfg">制造</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-section">
              <h4>关于我们</h4>
              <a href="#">关于我们</a>
              <a href="#">联系方式</a>
            </div>
            <div className="footer-section">
              <h4>分类</h4>
              <a href="#ai">AI人工智能</a>
              <a href="#sand">3D砂型打印</a>
              <a href="#casting">砂型铸造</a>
            </div>
            <div className="footer-section">
              <h4>最新资讯</h4>
              <a href="#mfg">制造业动态</a>
              <a href="#world">全球财经</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 市场中心 Daily Insights. All rights reserved.</span>
            <span>每日 08:30 自动更新</span>
          </div>
        </footer>
      </body>
    </html>
  );
}