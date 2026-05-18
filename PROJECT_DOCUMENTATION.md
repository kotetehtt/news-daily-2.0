# News Daily 2.0 项目完整资料

## 项目概述

News Daily 2.0 是一个基于 Next.js 14 的新闻聚合网站，定时从多个来源抓取新闻，展示在6个分类中：
- AI人工智能 (ai)
- 3D砂型打印 (sand)
- 砂型铸造 (casting)
- B2B营销 (b2b)
- 国际要闻 (world)
- 制造业动态 (mfg)

## 技术栈

| 类别 | 技术 |
|------|------|
| 前端框架 | Next.js 14 (App Router) |
| 部署平台 | Vercel |
| 代码托管 | GitHub |
| CI/CD | GitHub Actions |
| 新闻来源 | BBC RSS, NewsAPI.org (可选), 内置备用药数据 |
| 编程语言 | TypeScript (前端), Python (爬虫) |

## 目录结构

```
news-daily-2.0/
├── app/
│   ├── layout.tsx          # 根布局（Header + Footer）
│   ├── page.tsx             # 首页（Hero + 分类列表）
│   ├── news/[slug]/page.tsx # 文章详情页（SSG静态生成）
│   └── globals.css          # 全局样式
├── lib/
│   └── data.ts              # 新闻数据 + getNewsData()
├── scripts/
│   └── gen.py               # Python新闻爬虫脚本
└── .github/workflows/
    └── daily-update.yml     # 每日自动更新工作流
```

## 核心文件说明

### 1. lib/data.ts
新闻数据存储文件，包含：
- `NewsItem` 接口：id, tag, title, summary, source, time, link, image
- `NewsData` 接口：date, update_time, banner[], sections{ai, sand, casting, b2b, world, mfg}
- `getNewsData()` 函数：返回新闻数据
- **缺少**：`slugify()` 和 `findNewsItemBySlug()` 函数（但 page.tsx 引用了它们）

### 2. scripts/gen.py
Python爬虫脚本，流程：
1. 加载 `get_verified_news()` 备用药数据（18条中文文章，都有真实图片链接）
2. 尝试抓取 BBC RSS（只保留有图片的文章）
3. 去重
4. 生成 lib/data.ts 文件

### 3. .github/workflows/daily-update.yml
每日自动执行：
1. Checkout代码
2. Setup Python 3.11
3. 安装 requests, feedparser
4. 运行 `python scripts/gen.py`
5. 提交更改到GitHub
6. 部署到Vercel

## 文章链接问题分析

### 问题现象
用户点击文章后，进去的网页内容/图片与标题不匹配。

### 可能原因

#### 原因1：缺少 slugify 和 findNewsItemBySlug 函数
`app/page.tsx` 和 `app/news/[slug]/page.tsx` 都引用了 `slugify` 和 `findNewsItemBySlug`：
```typescript
import { getNewsData, slugify, getCategoryInfo } from '@/lib/data';
```

但 `lib/data.ts` 只导出了 `getNewsData()`，没有导出这两个函数。这会导致：
- 构建时可能报错，或
- 运行时的slug生成逻辑错误，导致文章匹配失败

#### 原因2：slugify 逻辑可能不一致
如果 slugify 函数存在但逻辑不匹配，生成的URL和实际文章URL会不一致。

### 解决建议

在 `lib/data.ts` 中添加缺失的函数：

```typescript
export function slugify(item: NewsItem): string {
  // 将标题转换为URL-safe的slug
  const id = item.id; // 例如 "ai-001"
  return id; // 直接使用ID作为slug
}

export function findNewsItemBySlug(slug: string): NewsItem | null {
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
  // 直接通过ID查找
  return allItems.find(item => item.id === slug) || null;
}
```

## 文章图片问题分析

### 问题现象
网站显示的图片与文章内容关联度不大。

### 原因分析
当前使用的是 Unsplash 的通用图片，而非原文图片。原因：

1. **BBC RSS** 的图片是从 `<media:content>` 或 `<enclosure>` 提取，但很多文章没有图片
2. **备用药数据** 使用了与分类相关的 Unsplash 图片（而非真实文章图片）
3. **没有使用 NewsAPI**：NewsAPI 可以获取原文图片，但需要 API Key

### 解决方案

1. **获取 NewsAPI Key**（免费100次/天）：
   - 注册 https://newsapi.org
   - 设置环境变量 `NEWS_API_KEY`
   - 修改 gen.py 使用 NewsAPI 获取真实文章图片

2. **或者**：使用与文章内容更相关的中文新闻源（需要额外开发）

## 部署流程

### Vercel 部署
1. GitHub push 触发 GitHub Actions
2. Actions 运行 `pip install requests feedparser && python scripts/gen.py`
3. 更新 lib/data.ts
4. git add → git commit → git push
5. Vercel 检测到新commit，自动重新部署

### GitHub Actions 配置
需要设置以下 Secrets：
- `VERCEL_TOKEN`: Vercel访问令牌
- `VERCEL_ORG_ID`: Vercel组织ID
- `VERCEL_PROJECT_ID`: Vercel项目ID

## 当前数据状态

最新生成的 lib/data.ts（2026-05-15 15:11:50）：
- Banner: 3篇文章（OpenAI GPT-5, 人形机器人, 3D砂型打印机）
- AI: 3篇文章
- 3D打印: 2篇文章
- 铸造: 3篇文章
- B2B: 2篇文章
- 国际: 3篇文章
- 制造: 2篇文章

所有文章都有真实 Unsplash 图片链接。

## 验证方法

1. 本地运行：`cd news-daily-2.0 && npm run dev`
2. 检查文章链接：`/news/ai-001` 应该显示 "OpenAI发布GPT-5"
3. 检查图片：文章图片应该是与内容相关的图片

## 待修复项

1. [ ] 在 lib/data.ts 添加 `slugify()` 和 `findNewsItemBySlug()` 函数
2. [ ] 获取 NewsAPI Key 以获取真实文章图片
3. [ ] 验证所有文章链接都能正确打开
4. [ ] 确认 "阅读全文" 链接与文章标题匹配

## 联系方式

GitHub Repo: https://github.com/kotetehtt/news-daily-2.0
Vercel部署: https://news-daily-20.vercel.app