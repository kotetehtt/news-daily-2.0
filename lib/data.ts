// Auto-generated news data at 2026-05-28 04:49:28
// DO NOT EDIT MANUALLY

export interface NewsItem {
  id: string;
  tag: string;
  title: string;
  content: string;
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
  date: '2026年05月28日',
  update_time: '2026-05-28 04:49:28',
  banner: [
      {
            "id": "ai-001",
            "tag": "AI人工智能",
            "title": "OpenAI发布GPT-5，性能超越人类专家水平",
            "content": "OpenAI宣布GPT-5语言模型正式发布，该模型在多项基准测试中超越人类专家水平，推理能力提升300%。GPT-5采用新型稀疏注意力机制，训练效率提升40%。作为最新一代大语言模型，GPT-5在代码生成、数学推理和创意写作等方面展现出前所未有的能力。OpenAI表示，GPT-5已经在多个行业开始落地应用，包括医疗诊断、法律文档分析和金融预测等领域。\n\n据悉，GPT-5使用了超过10万亿参数的训练数据，训练时间长达数月。OpenAI CEO萨姆·奥特曼表示，GPT-5不仅在学术基准测试中表现优异，更重要的是它在真实世界任务中的实用性。\n\nGPT-5的主要更新包括：支持多模态输入、实时互联网搜索、长达100页文档的理解能力，以及更自然的多轮对话体验。",
            "source": "OpenAI",
            "time": "今日",
            "link": "https://openai.com/index/gpt-5",
            "image": "https://openai.com/public/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgpt-5-hero.3a5c3a4e.png&w=1920&q=80",
            "category": "ai"
      },
      {
            "id": "mfg-001",
            "tag": "制造业动态",
            "title": "人形机器人量产成本降至5万美元",
            "content": "特斯拉Optimus、Figure 01等人形机器人进入量产阶段，成本持续下降，计划2027年实现大规模商用。人形机器人正在从实验室走向工厂和家庭。\n\n特斯拉Optimus预计量产成本将从最初的20万美元降至5万美元左右，这将使人形机器人进入商业可行区间。Figure 01则专注于物流和制造场景，已在宝马工厂进行测试。\n\n分析师预测，到2030年人形机器人市场规模将达到300亿美元，年出货量超过10万台。主要应用场景包括：汽车总装、电子制造、物流搬运和家庭服务。",
            "source": "科技日报",
            "time": "今日",
            "link": "https://www.stdaily.com/index.html",
            "image": "",
            "category": "mfg"
      },
      {
            "id": "sand-001",
            "tag": "3D砂型打印",
            "title": "国产9米级3D砂型打印机正式量产",
            "content": "国产9米级3D砂型打印机正式量产，打破国外技术垄断，大型铸件交付周期缩短80%，成本降低50%。这台设备由国内某知名3D打印设备制造商自主研发，是目前国内最大的砂型3D打印机。\n\n该设备采用了先进的激光烧结技术，可以快速打印出大型砂芯和砂型。相比传统铸造工艺，3D打印砂型具有精度高、表面光洁度好、可以打印复杂结构等优点。\n\n设备量产后，将主要用于汽车发动机缸体、飞机发动机叶片等大型复杂铸件的快速制造。这将大幅缩短新产品开发周期，降低开模成本。",
            "source": "3D科学谷",
            "time": "今日",
            "link": "https://www.3dsciencevalley.com/3d-sand-printing/largest-3d-sand-printer",
            "image": "",
            "category": "sand"
      }
],
  sections: {
    ai: [
      {
            "id": "ai-002",
            "tag": "AI人工智能",
            "title": "谷歌Gemini 2.0实现多模态突破",
            "content": "谷歌DeepMind发布Gemini 2.0，新增原生视频理解和3D场景解析能力，可处理长达2小时的视频内容，支持100种语言。Gemini 2.0是谷歌迄今为止最强大的多模态AI模型，能够理解和生成文本、图像、音频和视频内容。\n\nGemini 2.0的核心突破在于其原生视频理解能力。它可以直接分析视频内容，提取关键信息，理解视频中的场景、人物动作和语音内容。这项技术可应用于视频搜索、视频内容分析和自动化视频编辑等领域。\n\n此外，Gemini 2.0还具备强大的3D场景解析能力，可以从2D图像或视频中重建3D场景，为AR/VR应用提供支持。",
            "source": "Google DeepMind",
            "time": "今日",
            "link": "https://deepmind.google/gemini",
            "image": "",
            "category": "ai"
      },
      {
            "id": "ai-003",
            "tag": "AI人工智能",
            "title": "英伟达Blackwell Ultra GPU发布",
            "content": "英伟达发布新一代Blackwell Ultra GPU，AI训练速度提升5倍，能耗降低40%。H200继任者将支持10万亿参数模型训练，标志着AI计算进入新阶段。\n\nBlackwell Ultra采用全新的架构设计，拥有超过2000亿个晶体管，内存带宽达到每秒PB级别。这使得它能够高效处理大规模AI模型的训练和推理任务。\n\n英伟达CEO黄仁勋表示，Blackwell Ultra将彻底改变AI产业格局，使得训练一个万亿参数模型的成本降低到原来的十分之一。",
            "source": "NVIDIA",
            "time": "今日",
            "link": "https://nvidia.com/gtc",
            "image": "",
            "category": "ai"
      },
      {
            "id": "ai-004",
            "tag": "AI人工智能",
            "title": "Anthropic Claude 4发布，编程能力超GPT-5",
            "content": "Anthropic发布Claude 4，在代码生成测试中超越GPT-5，支持20万token上下文窗口，可一次性处理整本书籍。Claude 4是Anthropic最新一代的大语言模型，专为复杂推理和长文本理解优化。\n\nClaude 4的编程能力得到了显著提升，在多个代码生成基准测试中超越了GPT-5。它能够理解整个代码库的上下文，帮助开发者完成代码补全、bug修复和代码重构等任务。\n\n20万token的上下文窗口意味着Claude 4可以一次性处理约15万字的内容，相当于一整本《战争与和平》。这使得它在处理长文档分析和多轮对话方面具有显著优势。",
            "source": "Anthropic",
            "time": "今日",
            "link": "https://anthropic.com/claude",
            "image": "",
            "category": "ai"
      },
      {
            "id": "ai-632221",
            "tag": "AI人工智能",
            "title": "Google worker charged with using internal data to make $1.2m on bets",
            "content": "The longtime Google employee was charged in New York for allegedly breaking insider trading laws.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/c052yv259jvo",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/5c42/live/ad6ddc90-5a39-11f1-b445-b9f1ca9c9352.jpg",
            "category": "ai"
      },
      {
            "id": "ai-98829e",
            "tag": "AI人工智能",
            "title": "The rise of the fruit that tastes like custard",
            "content": "Custard apple plants are prized for their hardiness but exporting their delicate fruit is difficult.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/ce8pmrp0m47o",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/3190/live/90f2c990-4ac1-11f1-b55d-0f258dce1735.jpg",
            "category": "ai"
      },
      {
            "id": "ai-681930",
            "tag": "AI人工智能",
            "title": "Porn company fined £600,000 by Ofcom over age check failings",
            "content": "Ofcom said Youngtek Solutions Ltd did not have checks between July and September 2025, but has since brought in verification.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/clypxw6penno",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/9566/live/4e891cb0-59b4-11f1-8ac0-d5b819ddbb8d.jpg",
            "category": "ai"
      }
],
    sand: [
      {
            "id": "sand-002",
            "tag": "3D砂型打印",
            "title": "AI优化3D打印参数，良品率达99%",
            "content": "基于深度学习的打印参数优化系统投入使用，砂芯良品率从85%提升至99%，每年节省材料成本超千万元。该系统由国内某科技公司开发，能够自动优化打印参数，减少打印失败率。\n\n系统通过分析历史打印数据，学习不同模型的最佳打印参数，包括激光功率、扫描速度、层厚等。当遇到新模型时，系统可以自动推荐最佳参数组合，大幅减少试错时间。\n\n该技术的应用将推动3D打印在航空航天、汽车、轨道交通等对精度要求高的行业的广泛应用。",
            "source": "3D打印技术参考",
            "time": "今日",
            "link": "https://3dprint.com/category/3d-printing-software/ai-optimization/",
            "image": "",
            "category": "sand"
      },
      {
            "id": "sand-003",
            "tag": "3D砂型打印",
            "title": "Voxeljet推出新一代高速3D砂型打印机",
            "content": "德国Voxeljet发布VX1600-HS高速机型，打印速度提升3倍，专为汽车发动机缸体大批量生产设计。该设备是Voxeljet针对大规模工业生产推出的旗舰产品。\n\nVX1600-HS采用了全新的高速扫描系统和优化后的粉末管理技术，打印速度达到每小时200升，较上一代产品提升3倍。同时精度保持不变，最小层厚可达0.2毫米。\n\n该设备特别适合大批量生产汽车发动机缸体、变速箱壳体等复杂零部件，可显著降低单件生产成本。",
            "source": "Voxeljet",
            "time": "今日",
            "link": "https://www.voxeljet.com/products/vx-series/",
            "image": "",
            "category": "sand"
      }
],
    casting: [
      {
            "id": "casting-001",
            "tag": "砂型铸造",
            "title": "特斯拉一体化压铸技术新突破",
            "content": "特斯拉最新一体化压铸技术实现60%零部件一体化成型，车身重量减少30%，生产效率提升4倍。该技术是特斯拉Cybertruck生产的关键创新之一。\n\n一体化压铸技术使用超大型压铸机，将原本需要数十个零件焊接而成的车身结构一次性压铸成型。这大大减少了零件数量和组装工序，提高了生产效率和产品质量一致性。\n\n特斯拉表示，一体化压铸技术可以将车身制造成本降低40%，同时减少生产线的占地面积。这项技术正在被越来越多的汽车制造商采用。",
            "source": "汽车制造",
            "time": "今日",
            "link": "https://www.automotive-casting.com/gigapress",
            "image": "",
            "category": "casting"
      },
      {
            "id": "casting-002",
            "tag": "砂型铸造",
            "title": "绿色铸造工艺推广加速",
            "content": "环保型粘结剂市场占有率突破30%，有机废气排放减少60%以上，铸造行业向低碳转型加速。新型环保粘结剂可完全替代传统有机粘结剂，从根本上解决铸造过程的VOC排放问题。\n\n近年来，随着环保政策趋严，铸造行业加快了绿色转型步伐。多家铸造设备制造商推出了配套环保粘结剂的新一代砂处理设备，可以实现旧砂的循环利用，进一步降低资源消耗和固废排放。\n\n行业协会预计，到2028年环保型粘结剂的市场占有率将超过50%，成为铸造行业的主流选择。",
            "source": "铸造杂志",
            "time": "今日",
            "link": "https://www.foundrymag.com/sustainable-casting",
            "image": "",
            "category": "casting"
      },
      {
            "id": "casting-003",
            "tag": "砂型铸造",
            "title": "中国铸造业一季度出口增长25%",
            "content": "中国铸造业一季度出口额达128亿美元，同比增长25%，东南亚和中东市场成为新增长点。中国铸造产品以其高性价比在国际市场上竞争力不断提升。\n\n一季度数据显示，东南亚市场增长尤为迅速，增幅超过40%。这主要得益于该地区基础设施建设和制造业快速发展对铸造零部件的需求增加。中东市场也表现出强劲增长势头，主要集中在石油设备和建筑五金领域。\n\n业内人士分析，中国铸造业出口增长主要受益于两方面：一是国内企业技术水平和产品质量不断提升；二是国际供应链重构为中国企业提供了更多进入全球市场的机会。",
            "source": "中国铸造协会",
            "time": "今日",
            "link": "https://www.foundry.org.cn/news",
            "image": "",
            "category": "casting"
      }
],
    b2b: [
      {
            "id": "b2b-001",
            "tag": "B2B营销",
            "title": "工业品B2B电商平台交易规模突破万亿",
            "content": "2024年工业品B2B电商交易同比增长35%，平台化采购成为主流趋势，数字化供应链管理需求激增。工业品电商正在深刻改变传统工业采购模式。\n\n平台化采购的优势在于：透明的价格发现机制、丰富的供应商选择、便捷的订单跟踪和售后服务。越来越多的企业将采购从线下转移到线上，尤其是中小企业采购的线上化率明显提升。\n\n数字化供应链管理平台通过整合需求预测、库存优化、物流调度等功能，帮助企业降低库存成本15-30%，提高订单履约率20%以上。",
            "source": "电商报",
            "time": "今日",
            "link": "https://www.b2b.com/industry-news",
            "image": "",
            "category": "b2b"
      },
      {
            "id": "b2b-002",
            "tag": "B2B营销",
            "title": "AI驱动的B2B营销自动化平台获融资",
            "content": "基于大语言模型的B2B营销自动化平台获5000万美元B轮融资，可自动生成个性化营销内容。该平台利用AI技术帮助B2B企业自动化营销流程，显著提高营销效率。\n\n平台的核心功能包括：智能内容生成、客户画像分析、营销触达时机优化和转化率预测。通过机器学习算法，平台能够分析客户行为数据，预测最佳营销策略。\n\n本轮融资由国际知名风投机构领投，资金将用于产品研发和市场拓展。该平台目前已服务超过500家B2B企业，客户涵盖软件、制造、物流等多个行业。",
            "source": "TechCrunch",
            "time": "今日",
            "link": "https://techcrunch.com/category/enterprise/",
            "image": "",
            "category": "b2b"
      },
      {
            "id": "b2b-e454cb",
            "tag": "B2B营销",
            "title": "One in six young people will not be in work or training in five years without action, report warns",
            "content": "A major review examining the causes of rising youth unemployment says getting on the career ladder is now \"out of reach\" for many.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/cy026x9jpd0o",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/1fe3/live/cd580120-59b7-11f1-a709-a756a39103f6.jpg",
            "category": "b2b"
      },
      {
            "id": "b2b-20b4bd",
            "tag": "B2B营销",
            "title": "An unhealthy focus on sex - Married at First Sight UK insiders on show's 'toxic' culture",
            "content": "Fresh revelations come after two women told the BBC they had been raped on the Channel 4 reality show.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/cn7p1dg6j41o",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/03a1/live/51a23700-59c9-11f1-b682-cf91850925ea.png",
            "category": "b2b"
      },
      {
            "id": "b2b-bcc63d",
            "tag": "B2B营销",
            "title": "Oil prices jump after US launches new attacks on Iran",
            "content": "The strikes come despite a ceasefire between Tehran and Washington as the two countries hold peace talks.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/cp3p62xddq4o",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/9241/live/6fc5faf0-5a2d-11f1-b118-2f2910cff054.jpg",
            "category": "b2b"
      },
      {
            "id": "b2b-053cb7",
            "tag": "B2B营销",
            "title": "Why Fifa is being investigated over World Cup ticket prices",
            "content": "New York and New Jersey are looking into the association after fans have reportedly been \"misled\" over ticket sales and seat locations.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/videos/cx2164ldp0ko",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/7c5a/live/1bc4f3c0-5a28-11f1-89a3-d1f559421220.jpg",
            "category": "b2b"
      }
],
    world: [
      {
            "id": "world-001",
            "tag": "国际要闻",
            "title": "全球制造业PMI连续三个月回升",
            "content": "摩根大通数据显示全球制造业PMI达52.4，连续三个月处于扩张区间，美国和中国制造业复苏强劲。制造业PMI是反映制造业整体经济运行状况的重要先行指标。\n\n数据显示，制造业复苏的主要驱动力包括：消费品需求增长、库存周期切换和供应链瓶颈缓解。新订单指数和新出口订单指数均出现明显回升，表明全球制造业需求正在恢复。\n\n分地区来看，美国制造业PMI达到54.2，创近一年新高；中国制造业PMI达到52.6，继续保持扩张态势。欧洲制造业整体仍处于收缩区间，但降幅明显收窄。",
            "source": "Reuters",
            "time": "今日",
            "link": "https://www.reuters.com/markets/",
            "image": "",
            "category": "world"
      },
      {
            "id": "world-002",
            "tag": "国际要闻",
            "title": "德国工业4.0工厂突破千家",
            "content": "德国制造业数字化转型加速，1023家工业4.0示范工厂建成使用，智能制造标准输出全球。德国工业4.0战略实施十年来取得显著成效。\n\n这些示范工厂展示了智能制造的各种应用场景，包括：柔性生产线、数字孪生技术、预测性维护和实时质量控制。通过这些技术的应用，工厂生产效率平均提升25%，能源消耗降低15%。\n\n德国还将工业4.0标准输出到全球，目前已有超过50个国家采用了德国的智能制造标准体系，这为德国制造业供应商打开了新的市场空间。",
            "source": "Handelsblatt",
            "time": "今日",
            "link": "https://www.handelsblatt.com/technik/",
            "image": "",
            "category": "world"
      },
      {
            "id": "world-003",
            "tag": "国际要闻",
            "title": "全球芯片市场规模达6000亿美元",
            "content": "全球半导体市场规模突破6000亿美元，AI芯片需求暴涨，韩国和台湾晶圆代工厂满负荷运转。AI应用的爆发式增长推动了芯片需求的激增。\n\nAI芯片是增长最快的细分市场，年增长率超过80%。数据中心对高性能计算芯片的需求成为主要驱动力。同时，边缘AI芯片在智能手机、汽车和物联网设备中的应用也在快速增长。\n\n韩国和台湾的晶圆代工厂目前产能利用率接近100%，订单排期已到2027年。全球芯片短缺尚未完全缓解，高端芯片的供应依然紧张。",
            "source": "Bloomberg",
            "time": "今日",
            "link": "https://www.bloomberg.com/technology",
            "image": "",
            "category": "world"
      },
      {
            "id": "wor-4e235b",
            "tag": "国际要闻",
            "title": "US strikes Iran targets for second time in three days",
            "content": "The hostilities come during a fragile ceasefire between the US and Iran, and protracted negotiations to end the three-month war.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/c98r2qy5809o",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/99fb/live/5a9b9af0-5a40-11f1-a295-ab4de21b4525.jpg",
            "category": "world"
      },
      {
            "id": "wor-e3e55a",
            "tag": "国际要闻",
            "title": "Israel issues evacuation order for swathes of southern Lebanon",
            "content": "The military says areas south of the Zahrani River are now \"combat zones\" as it threatens Hezbollah with fresh strikes.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/cj3pgrpmlklo",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/5ca5/live/c0cb97e0-59ef-11f1-8b8c-6d33e1d5abb6.jpg",
            "category": "world"
      },
      {
            "id": "wor-e30d59",
            "tag": "国际要闻",
            "title": "Jill Biden says she thought husband was having a stroke during 2024 debate",
            "content": "The former US first lady told CBS News that she was frightened by Joe Biden's performance against Donald Trump.",
            "source": "BBC News",
            "time": "今日",
            "link": "https://www.bbc.com/news/articles/c99l270vy3no",
            "image": "https://ichef.bbci.co.uk/news/1024/branded_news/4f04/live/8d909940-5a0b-11f1-8958-3b1169652509.jpg",
            "category": "world"
      }
],
    mfg: [
      {
            "id": "mfg-002",
            "tag": "制造业动态",
            "title": "5G+工业互联网赋能智能制造",
            "content": "我国工业5G专网超5000个，覆盖航空航天、汽车、船舶等重点行业，协同研发效率提升40%。5G技术正在加速制造业数字化转型。\n\n工业5G专网为工厂提供了高带宽、低延迟、高可靠的无线连接能力，使得设备互联、数据采集和实时控制成为可能。基于5G网络的数字孪生、远程控制和AR辅助维修等应用正在快速推广。\n\n航空航天行业利用5G网络实现飞机装配过程中的实时数据传输和质量控制，将产品一次合格率提高了30%。汽车行业通过5G网络实现了整车流水线的柔性化改造。",
            "source": "人民邮电报",
            "time": "今日",
            "link": "http://www.ythzxb.com/",
            "image": "",
            "category": "mfg"
      },
      {
            "id": "mfg-003",
            "tag": "制造业动态",
            "title": "工业机器人密度中国跃居全球第三",
            "content": "中国工业机器人密度达每万人322台，跃居全球第三，2024年新增装机量突破20万台。中国制造业自动化程度快速提升。\n\n工业机器人密度是衡量制造业自动化水平的重要指标。中国从十年前的全球第25位上升至第三位，仅次于韩国和新加坡。这一变化反映了中国制造业转型升级的显著成效。\n\n新增装机主要集中在汽车、电子和金属加工行业。国产工业机器人品牌市场占有率从10%提升至35%，核心零部件国产化率超过50%。",
            "source": "人民日报",
            "time": "今日",
            "link": "http://paper.people.com.cn/rmrb/",
            "image": "",
            "category": "mfg"
      }
],
  },
};

export function getNewsData(): NewsData {
  return newsData;
}

export function slugify(item: NewsItem): string {
  return item.id;
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
  return allItems.find(item => item.id === slug) || null;
}
