// Auto-generated news data - DO NOT EDIT MANUALLY
// Generated at 2026-05-15 13:52:52

export interface NewsItem {
  id: string;
  tag: string;
  title: string;
  summary: string;
  source: string;
  time: string;
  link: string;
  image: string;
}

export interface NewsData {
  date: string;
  update_time: string;
  banner: NewsItem[];
  sections: {
    ai: NewsItem[];
    sand: NewsItem[];
    casting: NewsItem[];
    b2b: NewsItem[];
    world: NewsItem[];
    mfg: NewsItem[];
  };
}

const newsData: NewsData = {
  date: '2026年05月15日',
  update_time: '2026-05-15 13:52:52',
  banner: [],
  sections: {
    ai: [],
    sand: [],
    casting: [],
    b2b: [],
    world: [],
    mfg: [],
  },
};

export function getNewsData(): NewsData {
  return newsData;
}
