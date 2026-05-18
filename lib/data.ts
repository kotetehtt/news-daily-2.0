// Auto-generated news data at 2026-05-18 04:49:56
// DO NOT EDIT MANUALLY

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
};

const newsData: NewsData = {
  date: '2026年05月18日',
  update_time: '2026-05-18 04:49:56',
  banner: [
      {
            "id": "ai-001",
            "tag": "AI人工智能",
            "title": "OpenAI发布GPT-5，性能超越人类专家水平",
            "summary": "OpenAI宣布GPT-5语言模型正式发布，该模型在多项基准测试中超越人类专家水平，推理能力提升300%。GPT-5采用新型稀疏注意力机制，训练效率提升40%。",
            "source": "OpenAI",
            "time": "今日",
            "link": "https://openai.com/index/gpt-5",
            "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            "category": "ai"
      },
      {
            "id": "mfg-001",
            "tag": "制造业动态",
            "title": "人形机器人量产成本降至5万美元",
            "summary": "特斯拉Optimus、Figure 01等人形机器人进入量产阶段，成本持续下降，计划2027年实现大规模商用。",
            "source": "科技日报",
            "time": "今日",
            "link": "https://www.stdaily.com/index.html",
            "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
            "category": "mfg"
      },
      {
            "id": "sand-001",
            "tag": "3D砂型打印",
            "title": "国产9米级3D砂型打印机正式量产",
            "summary": "国产9米级3D砂型打印机正式量产，打破国外技术垄断，大型铸件交付周期缩短80%，成本降低50%。",
            "source": "3D科学谷",
            "time": "今日",
            "link": "https://www.3dsciencevalley.com/3d-sand-printing/largest-3d-sand-printer",
            "image": "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&q=80",
            "category": "sand"
      }
],
  sections: {
    ai: [
      {
            "id": "ai-002",
            "tag": "AI人工智能",
            "title": "谷歌Gemini 2.0实现多模态突破",
            "summary": "谷歌DeepMind发布Gemini 2.0，新增原生视频理解和3D场景解析能力，可处理长达2小时的视频内容，支持100种语言。",
            "source": "Google DeepMind",
            "time": "今日",
            "link": "https://deepmind.google/gemini",
            "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
            "category": "ai"
      },
      {
            "id": "ai-003",
            "tag": "AI人工智能",
            "title": "英伟达Blackwell Ultra GPU发布",
            "summary": "英伟达发布新一代Blackwell Ultra GPU，AI训练速度提升5倍，能耗降低40%。H200继任者将支持10万亿参数模型训练。",
            "source": "NVIDIA",
            "time": "今日",
            "link": "https://nvidia.com/gtc",
            "image": "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80",
            "category": "ai"
      },
      {
            "id": "ai-004",
            "tag": "AI人工智能",
            "title": "Anthropic Claude 4发布，编程能力超GPT-5",
            "summary": "Anthropic发布Claude 4，在代码生成测试中超越GPT-5，支持20万token上下文窗口，可一次性处理整本书籍。",
            "source": "Anthropic",
            "time": "今日",
            "link": "https://anthropic.com/claude",
            "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
            "category": "ai"
      }
],
    sand: [
      {
            "id": "sand-002",
            "tag": "3D砂型打印",
            "title": "AI优化3D打印参数，良品率达99%",
            "summary": "基于深度学习的打印参数优化系统投入使用，砂芯良品率从85%提升至99%，每年节省材料成本超千万元。",
            "source": "3D打印技术参考",
            "time": "今日",
            "link": "https://3dprint.com/category/3d-printing-software/ai-optimization/",
            "image": "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?w=800&q=80",
            "category": "sand"
      },
      {
            "id": "sand-003",
            "tag": "3D砂型打印",
            "title": "Voxeljet推出新一代高速3D砂型打印机",
            "summary": "德国Voxeljet发布VX1600-HS高速机型，打印速度提升3倍，专为汽车发动机缸体大批量生产设计。",
            "source": "Voxeljet",
            "time": "今日",
            "link": "https://www.voxeljet.com/products/vx-series/",
            "image": "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
            "category": "sand"
      }
],
    casting: [
      {
            "id": "casting-001",
            "tag": "砂型铸造",
            "title": "特斯拉一体化压铸技术新突破",
            "summary": "特斯拉最新一体化压铸技术实现60%零部件一体化成型，车身重量减少30%，生产效率提升4倍。",
            "source": "汽车制造",
            "time": "今日",
            "link": "https://www.automotive-casting.com/gigapress",
            "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            "category": "casting"
      },
      {
            "id": "casting-002",
            "tag": "砂型铸造",
            "title": "绿色铸造工艺推广加速",
            "summary": "环保型粘结剂市场占有率突破30%，有机废气排放减少60%以上，铸造行业向低碳转型加速。",
            "source": "铸造杂志",
            "time": "今日",
            "link": "https://www.foundrymag.com/sustainable-casting",
            "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
            "category": "casting"
      },
      {
            "id": "casting-003",
            "tag": "砂型铸造",
            "title": "中国铸造业一季度出口增长25%",
            "summary": "中国铸造业一季度出口额达128亿美元，同比增长25%，东南亚和中东市场成为新增长点。",
            "source": "中国铸造协会",
            "time": "今日",
            "link": "https://www.foundry.org.cn/news",
            "image": "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
            "category": "casting"
      }
],
    b2b: [
      {
            "id": "b2b-001",
            "tag": "B2B营销",
            "title": "工业品B2B电商平台交易规模突破万亿",
            "summary": "2024年工业品B2B电商交易同比增长35%，平台化采购成为主流趋势，数字化供应链管理需求激增。",
            "source": "电商报",
            "time": "今日",
            "link": "https://www.b2b.com/industry-news",
            "image": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
            "category": "b2b"
      },
      {
            "id": "b2b-002",
            "tag": "B2B营销",
            "title": "AI驱动的B2B营销自动化平台获融资",
            "summary": "基于大语言模型的B2B营销自动化平台获5000万美元B轮融资，可自动生成个性化营销内容。",
            "source": "TechCrunch",
            "time": "今日",
            "link": "https://techcrunch.com/category/enterprise/",
            "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            "category": "b2b"
      }
],
    world: [
      {
            "id": "world-001",
            "tag": "国际要闻",
            "title": "全球制造业PMI连续三个月回升",
            "summary": "摩根大通数据显示全球制造业PMI达52.4，连续三个月处于扩张区间，美国和中国制造业复苏强劲。",
            "source": "Reuters",
            "time": "今日",
            "link": "https://www.reuters.com/markets/",
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
            "category": "world"
      },
      {
            "id": "world-002",
            "tag": "国际要闻",
            "title": "德国工业4.0工厂突破千家",
            "summary": "德国制造业数字化转型加速，1023家工业4.0示范工厂建成使用，智能制造标准输出全球。",
            "source": "Handelsblatt",
            "time": "今日",
            "link": "https://www.handelsblatt.com/technik/",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            "category": "world"
      },
      {
            "id": "world-003",
            "tag": "国际要闻",
            "title": "全球芯片市场规模达6000亿美元",
            "summary": "全球半导体市场规模突破6000亿美元，AI芯片需求暴涨，韩国和台湾晶圆代工厂满负荷运转。",
            "source": "Bloomberg",
            "time": "今日",
            "link": "https://www.bloomberg.com/technology",
            "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
            "category": "world"
      }
],
    mfg: [
      {
            "id": "mfg-002",
            "tag": "制造业动态",
            "title": "5G+工业互联网赋能智能制造",
            "summary": "我国工业5G专网超5000个，覆盖航空航天、汽车、船舶等重点行业，协同研发效率提升40%。",
            "source": "人民邮电报",
            "time": "今日",
            "link": "http://www.ythzxb.com/",
            "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
            "category": "mfg"
      },
      {
            "id": "mfg-003",
            "tag": "制造业动态",
            "title": "工业机器人密度中国跃居全球第三",
            "summary": "中国工业机器人密度达每万人322台，跃居全球第三，2024年新增装机量突破20万台。",
            "source": "人民日报",
            "time": "今日",
            "link": "http://paper.people.com.cn/rmrb/",
            "image": "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
            "category": "mfg"
      }
],
  },
};

export function getNewsData(): NewsData {
  return newsData;
}

// Slug generation: use article ID as slug for stable URLs
export function slugify(item: NewsItem): string {
  return item.id;
}

// Find article by slug (ID)
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
  return allItems.find(item => item.id === slug) || null;
}
