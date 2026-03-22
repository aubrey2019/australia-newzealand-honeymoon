// ==========================================
//  澳新蜜月之旅 · 15天行程数据
//  2026.04.18 — 05.02
//  严格对照行程规划文档
// ==========================================

const TRIP_DATA = {
  title: "澳新蜜月之旅",
  subtitle: "悉尼 · 南岛自驾 · 奥克兰",
  dateRange: "2026.04.18 — 05.02",
  totalDays: 15,
  countries: 2,
  cities: "10+",
  drivingKm: "1200+",

  // ── 每日行程 ──
  days: [
    // ===== DAY 1 · 4/18 周六 =====
    {
      day: 1,
      date: "04.18",
      weekday: "周六",
      title: "启程 · 上海飞悉尼",
      location: "上海 → 吉隆坡(转机) → 悉尼",
      country: "australia",
      theme: "travel",
      color: "#FF6B35",
      image: "images/sydney_opera_house.webp",
      stay: "悉尼 Sydney",
      coords: { lat: -33.8688, lng: 151.2093 },
      route: null,
      transport: {
        mode: "flight",
        detail: "亚航D7331 浦东→吉隆坡 01:35-07:15 | 转机 → 悉尼 09:15-19:35"
      },
      highlights: [
        "亚航D7331 浦东T2出发，经吉隆坡转机抵达悉尼",
        "吉隆坡转机约2小时（Plan B预留10h中转）",
        "傍晚到达悉尼，入住环形码头附近酒店",
        "如天色尚可，环形码头夜景速拍"
      ],
      tips: "💡 马来西亚120h过境免签 | 提前办好澳洲ETA签证 | 三孔斜插转换头",
      budget: "机票约 ¥3000-5000/人"
    },

    // ===== DAY 2 · 4/19 周日 =====
    {
      day: 2,
      date: "04.19",
      weekday: "周日",
      title: "悉尼经典景点巡礼",
      location: "悉尼",
      country: "australia",
      theme: "sightseeing",
      color: "#00B4D8",
      image: "images/sydney_harbour_bridge.webp",
      stay: "悉尼 Sydney",
      coords: { lat: -33.8568, lng: 151.2153 },
      route: [
        { lat: -33.8568, lng: 151.2153, name: "悉尼歌剧院" },
        { lat: -33.8599, lng: 151.2093, name: "皇家植物园" },
        { lat: -33.8602, lng: 151.2114, name: "麦考利夫人座椅" },
        { lat: -33.8523, lng: 151.2108, name: "岩石区 / 天文台山" },
        { lat: -33.8523, lng: 151.2108, name: "海港大桥步行" },
        { lat: -33.8676, lng: 151.2013, name: "达令港" }
      ],
      highlights: [
        "悉尼歌剧院 — 建筑导览 Architecture Tour（A$42/人，有中文，需预约）",
        "皇家植物园 → 麦考利夫人座椅 — 拍经典三件套",
        "岩石区 → 天文台山 ★ — 制高点俯瞰海港全景（免费，朋友强推）",
        "海港大桥步行（桥面人行道免费）",
        "日落渡轮 ★ 推荐！ — Opal卡刷卡，船上看海港金光"
      ],
      food: "🍽️ 午餐：The Glenmore / Opera Bar（人均A$30-50）| 晚餐：达令港区域（人均A$40-60）",
      tips: "💡 周日Opal卡全天公交封顶$2.8 | 歌剧院导览提前官网预约 | 天文台山人少且美",
      budget: "歌剧院导览 A$42/人 | 公交全天 A$2.8"
    },

    // ===== DAY 3 · 4/20 周一 =====
    {
      day: 3,
      date: "04.20",
      weekday: "周一",
      title: "美术馆 · 家人聚餐",
      location: "悉尼",
      country: "australia",
      theme: "sightseeing",
      color: "#2EC4B6",
      image: "images/sydney_bondi_beach.webp",
      stay: "悉尼 Sydney",
      coords: { lat: -33.8690, lng: 151.2178 },
      route: [
        { lat: -33.8690, lng: 151.2178, name: "新南威尔士美术馆" },
        { lat: -33.8688, lng: 151.2093, name: "与家人聚餐" },
        { lat: -33.8915, lng: 151.2767, name: "邦迪海滩（如时间允许）" }
      ],
      highlights: [
        "新南威尔士州美术馆 — 免费，新馆+旧馆建议2-3小时",
        "中午/下午与家人聚餐（预留2-3小时）",
        "⚠️ 白兔美术馆周一闭馆！如想去需改至其他日",
        "傍晚如聚餐结束早 → 邦迪海滩看海散步（面朝东南，无海上日落）"
      ],
      food: "🍽️ 与家人聚餐（地点待定）",
      tips: "💡 美术馆10am-5pm周一也开放 | 邦迪到库吉步道前半段（Bondi→Bronte 3km 1h）可选",
      budget: "美术馆免费 | 聚餐费用另计"
    },

    // ===== DAY 4 · 4/21 周二 =====
    {
      day: 4,
      date: "04.21",
      weekday: "周二",
      title: "悉尼自由活动 · 飞基督城",
      location: "悉尼 → 基督城",
      country: "newzealand",
      theme: "travel",
      color: "#6C63FF",
      image: "images/sydney_fish_market.webp",
      stay: "基督城 Christchurch（机场附近）",
      coords: { lat: -43.5321, lng: 172.6362 },
      route: null,
      transport: {
        mode: "flight",
        detail: "新西兰航空 NZ224 悉尼→基督城 18:10-23:20（3h10m）"
      },
      highlights: [
        "上午自由活动：鱼市场吃海鲜早午餐（人均A$30-50）",
        "可选：天文台山 / 白兔美术馆（周二开放）/ 邦迪步道",
        "下午15:00前往机场",
        "NZ224 18:10起飞，23:20到达基督城"
      ],
      food: "🍽️ 鱼市场 Sydney Fish Market — 生蚝+龙虾+三文鱼（人均A$30-50）",
      tips: "💡 到达基督城较晚，住机场附近次日取车方便",
      budget: "鱼市场 A$30-50/人 | 机票已含"
    },

    // ===== DAY 5 · 4/22 周三 =====
    {
      day: 5,
      date: "04.22",
      weekday: "周三",
      title: "南岛首日 · 基督城→达尼丁",
      location: "基督城 → 奥马鲁 → 达尼丁",
      country: "newzealand",
      theme: "driving",
      color: "#F77F00",
      image: "images/dunedin_railway.webp",
      stay: "达尼丁 Dunedin",
      coords: { lat: -45.8788, lng: 170.5028 },
      route: [
        { lat: -43.5321, lng: 172.6362, name: "基督城（取车）", dist: "" },
        { lat: -44.3920, lng: 171.2459, name: "提马鲁 Timaru", dist: "160km · 2h" },
        { lat: -45.0945, lng: 170.9684, name: "奥马鲁 Oamaru", dist: "85km · 1h" },
        { lat: -45.8788, lng: 170.5028, name: "达尼丁 Dunedin", dist: "118km · 1.5h" }
      ],
      driveInfo: { totalKm: "约340km", totalTime: "约4-4.5h" },
      highlights: [
        "基督城机场取车 → 纸板教堂 + 追忆桥（免费）",
        "SH1一路南下，途经提马鲁午餐",
        "奥马鲁维多利亚历史街区 — 蒸汽朋克风格",
        "🐧 蓝企鹅归巢 — 约NZ$40/人，需预约（⚠️完全禁止拍摄！）"
      ],
      food: "🍽️ 午餐：提马鲁/奥马鲁途中小镇cafe（人均NZ$15-25）| 晚餐：达尼丁（人均NZ$25-40）",
      tips: "💡 新西兰靠左行驶右舵车！ | 蓝企鹅归巢完全禁拍 | 灵活方案：摩拉基巨石（天气好+退潮时值得绕路）",
      budget: "租车 NZ$80-150/天 | 企鹅 NZ$40/人"
    },

    // ===== DAY 6 · 4/23 周四 =====
    {
      day: 6,
      date: "04.23",
      weekday: "周四",
      title: "达尼丁游览 · 蒂阿瑙萤火虫洞",
      location: "达尼丁 → 蒂阿瑙",
      country: "newzealand",
      theme: "driving",
      color: "#118AB2",
      image: "images/te_anau_glowworm.webp",
      stay: "蒂阿瑙 Te Anau",
      coords: { lat: -45.4146, lng: 167.7180 },
      route: [
        { lat: -45.8788, lng: 170.5028, name: "达尼丁 Dunedin", dist: "" },
        { lat: -45.4146, lng: 167.7180, name: "蒂阿瑙 Te Anau", dist: "288km · 4h" }
      ],
      driveInfo: { totalKm: "约288km", totalTime: "约4h" },
      highlights: [
        "达尼丁火车站 — 苏格兰文艺复兴风格，新西兰最上镜建筑",
        "鲍德温街 Baldwin Street — 世界最陡街道（免费）",
        "八角广场 The Octagon 及周边",
        "✨ 蒂阿瑙萤火虫洞 — NZ$145/人，游船+洞穴2h15m（⚠️洞内禁拍）"
      ],
      food: "🍽️ 午餐：达尼丁市区（人均NZ$20-35）| 晚餐：Redcliff Cafe / Fat Duck（人均NZ$30-45）",
      tips: "💡 萤火虫洞务必提前预约realnz.com | 洞内恒温8-12°C带保暖衣物 | 不去米尔福德峡湾",
      budget: "萤火虫洞 NZ$145/人 | 油费约NZ$50"
    },

    // ===== DAY 7 · 4/24 周五 =====
    {
      day: 7,
      date: "04.24",
      weekday: "周五",
      title: "蒂阿瑙 → 皇后镇 · 天空缆车",
      location: "蒂阿瑙 → 皇后镇",
      country: "newzealand",
      theme: "adventure",
      color: "#E63946",
      image: "images/queenstown_skyline.webp",
      stay: "皇后镇 Queenstown",
      coords: { lat: -45.0312, lng: 168.6626 },
      route: [
        { lat: -45.4146, lng: 167.7180, name: "蒂阿瑙 Te Anau", dist: "" },
        { lat: -45.3200, lng: 168.1500, name: "金斯顿 Kingston", dist: "75km · 1h" },
        { lat: -45.0312, lng: 168.6626, name: "皇后镇 Queenstown", dist: "96km · 1h" }
      ],
      driveInfo: { totalKm: "约171km", totalTime: "约2h" },
      highlights: [
        "蒂阿瑙湖晨景拍照",
        "途经金斯顿小镇（瓦卡蒂普湖南端）",
        "瓦卡蒂普湖畔漫步 + 皇后镇花园",
        "🚡 天空缆车 Skyline — 山顶看日落金山！（缆车+自助晚餐 NZ$80-100/人）"
      ],
      food: "🍔 大脸汉堡 Bullseye 眼肉汉堡 ★（NZ$20-25，电话预约自提避排队）| 🍽️ Skyline山顶自助晚餐",
      tips: "💡 建议下午4-5点上缆车蹲日落 | 皇后镇停车紧张注意找车位 | TSS蒸汽船纯坐也舒服",
      budget: "缆车+晚餐 NZ$80-100/人 | Bullseye NZ$20-25"
    },

    // ===== DAY 8 · 4/25 周六 =====
    {
      day: 8,
      date: "04.25",
      weekday: "周六",
      title: "💍 婚纱照拍摄日",
      location: "皇后镇 · 格林诺奇 · 箭镇",
      country: "newzealand",
      theme: "adventure",
      color: "#D4A373",
      image: "images/glenorchy_wedding.webp",
      stay: "皇后镇 Queenstown",
      coords: { lat: -44.8489, lng: 168.3794 },
      route: [
        { lat: -45.0312, lng: 168.6626, name: "皇后镇（妆造）", dist: "" },
        { lat: -44.8489, lng: 168.3794, name: "格林诺奇 Glenorchy", dist: "45min" },
        { lat: -44.9419, lng: 168.8222, name: "箭镇 Arrowtown（返程）", dist: "1h15min" },
        { lat: -45.0312, lng: 168.6626, name: "皇后镇", dist: "20min" }
      ],
      highlights: [
        "💄 上午妆造准备（约9:00开始，2-3小时）",
        "📸 格林诺奇/天堂之路 — 魔戒取景地，草甸+雪山（核心拍摄14:30-16:30）",
        "⚠️ 最佳机位需步行30min！轻装到达再换婚纱",
        "🍂 箭镇 — 4月底秋色最美，黄金光线拍秋色（17:00-17:30）"
      ],
      food: "🍽️ 格林诺奇Café午餐 | 🍷 晚餐：Rata 皇后镇西餐（人均NZ$50-80，建议预约）",
      tips: "💡 天气不好改室内备选 | 格林诺奇路况注意 | 带背包装婚纱+换鞋+补妆用品",
      budget: "餐饮约 NZ$100-150/两人"
    },

    // ===== DAY 9 · 4/26 周日 =====
    {
      day: 9,
      date: "04.26",
      weekday: "周日",
      title: "皇冠山脉 · 瓦纳卡孤独之树",
      location: "皇后镇 → 瓦纳卡",
      country: "newzealand",
      theme: "driving",
      color: "#8338EC",
      image: "images/wanaka_tree.webp",
      stay: "瓦纳卡 Wanaka",
      coords: { lat: -44.6933, lng: 169.1321 },
      route: [
        { lat: -45.0312, lng: 168.6626, name: "皇后镇 Queenstown", dist: "" },
        { lat: -45.0200, lng: 168.7400, name: "卡瓦劳大桥（蹦极发源地）", dist: "15min" },
        { lat: -44.9800, lng: 168.9600, name: "皇冠山脉 Crown Range 观景台", dist: "30min" },
        { lat: -44.6933, lng: 169.1321, name: "瓦纳卡 Wanaka", dist: "30min" }
      ],
      driveInfo: { totalKm: "约70km", totalTime: "约1h" },
      highlights: [
        "卡瓦劳大桥 — 蹦极发源地，停车拍照（免费）",
        "🛤️ 皇冠山脉公路 — NZ最高公路，Crown Range Lookout必停！",
        "That Wanaka Tree — 湖中孤独之树，日落最出片 ★",
        "Iron Mountain步道（1.5h轻松环线，免费）或瓦纳卡小镇漫步"
      ],
      food: "🍽️ 午餐：Kika / Federal Diner（人均NZ$25-40）| 晚餐：Big Fig / Bistro Gentil（人均NZ$40-60）",
      tips: "💡 皇冠山脉弯道多限速65/75/85 | 孤独之树日落前1h到 | 附近还有一棵\"神树\"别错过",
      budget: "卡瓦劳大桥免费 | 餐饮约NZ$80-120/两人"
    },

    // ===== DAY 10 · 4/27 周一 =====
    {
      day: 10,
      date: "04.27",
      weekday: "周一",
      title: "库克山 · 胡克谷步道",
      location: "瓦纳卡 → 库克山 → 特威泽尔",
      country: "newzealand",
      theme: "adventure",
      color: "#06D6A0",
      image: "images/hooker_valley.webp",
      stay: "特威泽尔 Twizel",
      coords: { lat: -43.7340, lng: 170.0960 },
      route: [
        { lat: -44.6933, lng: 169.1321, name: "瓦纳卡 Wanaka", dist: "" },
        { lat: -44.5800, lng: 169.6600, name: "林迪斯山口 Lindis Pass", dist: "60km · 50min" },
        { lat: -44.1700, lng: 170.1000, name: "普卡基湖 Lake Pukaki", dist: "80km · 1h" },
        { lat: -43.7340, lng: 170.0960, name: "库克山 Mt Cook（胡克谷步道）", dist: "60km · 50min" },
        { lat: -44.2650, lng: 170.0980, name: "特威泽尔 Twizel", dist: "55km · 40min" }
      ],
      driveInfo: { totalKm: "约270km", totalTime: "约3.5h（不含步道）" },
      highlights: [
        "🏜️ 林迪斯山口 — 金色丘陵起伏，壮阔公路风光",
        "💎 普卡基湖 — 牛奶蓝冰川湖 + 彼得观景台看库克山全景",
        "🍣 湖边冰川三文鱼 Mt Cook Alpine Salmon（NZ$15-25，小红书必吃！）",
        "🥾 胡克谷步道 Hooker Valley — 往返3h，三座吊桥，终点冰川湖+库克山 ★★★"
      ],
      food: "🍣 冰川三文鱼刺身（人均NZ$15-25）| 🍽️ 晚餐：Twizel Jasmine Thai / Poppies Cafe（人均NZ$25-40）",
      tips: "💡 不住库克山村（太贵NZ$400+），住Twizel性价比极高 | 步道吊桥上风大握紧相机 | 晚上Twizel光污染低可观星",
      budget: "步道免费 | 三文鱼 NZ$15-25/人"
    },

    // ===== DAY 11 · 4/28 周二 =====
    {
      day: 11,
      date: "04.28",
      weekday: "周二",
      title: "特卡波 · 还车 · 基督城",
      location: "特威泽尔 → 特卡波 → 基督城",
      country: "newzealand",
      theme: "driving",
      color: "#1B4965",
      image: "images/lake_tekapo.webp",
      stay: "基督城 Christchurch",
      coords: { lat: -43.5321, lng: 172.6362 },
      route: [
        { lat: -44.2650, lng: 170.0980, name: "特威泽尔 Twizel", dist: "" },
        { lat: -44.0047, lng: 170.4772, name: "特卡波 Lake Tekapo", dist: "60km · 45min" },
        { lat: -43.7900, lng: 171.2400, name: "杰拉尔丁 Geraldine", dist: "110km · 1.5h" },
        { lat: -43.5321, lng: 172.6362, name: "基督城（还车）", dist: "117km · 1.5h" }
      ],
      driveInfo: { totalKm: "约287km", totalTime: "约3.5-4h" },
      highlights: [
        "⛪ 好牧羊人教堂 — 清晨人少拍照最佳（免费）",
        "☕ Astro Cafe 打卡（需上山，景色绝佳）",
        "🥧 杰拉尔丁小镇 — Barker's Foodstore 吃派和烘焙品",
        "🚋 基督城有轨电车 ★ — NZ$35/人全天票，坐一圈把City逛完"
      ],
      food: "🥧 午餐：杰拉尔丁 Barker's（人均NZ$15-25）| 🍽️ 晚餐：Fiddlesticks / King of Snake（人均NZ$35-55）",
      tips: "💡 还车前加满油！ | 好牧羊人教堂值得早起 | 新摄政街彩色西班牙风建筑必看 | 悬浮房子艺术装置有趣",
      budget: "叮叮车 NZ$35/人 | 油费最后一箱约NZ$40"
    },

    // ===== DAY 12 · 4/29 周三 =====
    {
      day: 12,
      date: "04.29",
      weekday: "周三",
      title: "基督城漫游 · 飞奥克兰",
      location: "基督城 → 奥克兰",
      country: "newzealand",
      theme: "travel",
      color: "#457B9D",
      image: "images/chch_tram.webp",
      stay: "奥克兰 Auckland",
      coords: { lat: -36.8485, lng: 174.7633 },
      route: null,
      transport: {
        mode: "flight",
        detail: "捷星 JQ240 基督城→奥克兰 18:55-20:20（1h25m）"
      },
      highlights: [
        "🍂 哈格利公园 Hagley Park — 秋色林荫大道（免费）",
        "🌺 植物园 Botanic Gardens — 免费漫步",
        "🪑 185把白椅子纪念装置 — 地震纪念（免费）",
        "✈️ 捷星JQ240 18:55→20:20 飞奥克兰（⚠️廉航无免费托运！）"
      ],
      food: "🍽️ 午餐：基督城市区（人均NZ$20-35）| 晚餐：到奥克兰后简餐",
      tips: "💡 捷星无免费托运行李，提前购买行李额度 | 可骑共享单车游览雅芳河沿岸",
      budget: "行李额度需另购 | 哈格利公园+植物园免费"
    },

    // ===== DAY 13 · 4/30 周四 =====
    {
      day: 13,
      date: "04.30",
      weekday: "周四",
      title: "奥克兰 · 天空塔 · 使命湾",
      location: "奥克兰",
      country: "newzealand",
      theme: "sightseeing",
      color: "#E07A5F",
      image: "images/auckland_sky_tower.webp",
      stay: "奥克兰 Auckland",
      coords: { lat: -36.8485, lng: 174.7633 },
      route: [
        { lat: -36.8485, lng: 174.7633, name: "天空塔 Sky Tower" },
        { lat: -36.8440, lng: 174.7580, name: "皇后街 Queen Street" },
        { lat: -36.8432, lng: 174.7570, name: "奥克兰美术馆（免费）" },
        { lat: -36.8400, lng: 174.7550, name: "维亚达特港 Viaduct Harbour" },
        { lat: -36.8325, lng: 174.7850, name: "使命湾 Mission Bay 日落" }
      ],
      highlights: [
        "🗼 天空塔 Sky Tower — 观景台360°全景（NZ$32/人）",
        "⛵ 维亚达特港 — 帆船+城市天际线（免费漫步）",
        "🏖️ 使命湾 — 海滩+朗基托托岛日落 ★",
        "🌋 或伊甸山 Mt Eden — 360°城市全景日落（免费，朋友推荐！）"
      ],
      food: "🍽️ 午餐：Depot Eatery（人均NZ$25-40）| 🦞 晚餐：维亚达特港海鲜（人均NZ$45-70）",
      tips: "💡 使命湾 vs 伊甸山日落二选一（天气好两个都去）| AT HOP卡坐公交",
      budget: "天空塔 NZ$32/人 | 伊甸山免费"
    },

    // ===== DAY 14 · 5/1 周五 =====
    {
      day: 14,
      date: "05.01",
      weekday: "周五",
      title: "德文波特 · 维多利亚山日落",
      location: "奥克兰 · 德文波特",
      country: "newzealand",
      theme: "sightseeing",
      color: "#BC6C25",
      image: "images/auckland_devonport.webp",
      stay: "奥克兰 Auckland",
      coords: { lat: -36.8313, lng: 174.7946 },
      route: [
        { lat: -36.8485, lng: 174.7633, name: "奥克兰市中心（渡轮码头）" },
        { lat: -36.8313, lng: 174.7946, name: "德文波特 Devonport（渡轮12min）" },
        { lat: -36.8280, lng: 174.7940, name: "维多利亚山 Mt Victoria" },
        { lat: -36.8260, lng: 174.8060, name: "北角 North Head" },
        { lat: -36.8341, lng: 174.7575, name: "奥克兰博物馆" },
        { lat: -36.8280, lng: 174.7940, name: "维多利亚山日落+夜景 ★★★" }
      ],
      highlights: [
        "⛴️ 渡轮去德文波特（12min，AT HOP卡）",
        "⛰️ 维多利亚山 — 远眺天空塔+海港全景（免费）",
        "🏰 北角 North Head — 历史隧道+海岸风景（免费）",
        "🏛️ 奥克兰博物馆 — 毛利文化展（NZ$28/人）",
        "⛰️ 维多利亚山日落+夜景 ★★★ — 最后一晚完美收官（朋友强推！）"
      ],
      food: "🍽️ 午餐：Vic Road Kitchen（人均NZ$20-35）| 🍷 晚餐：庞森比路 Sidart / SPQR（人均NZ$50-80）",
      tips: "💡 末班渡轮约晚10点 | 维多利亚山山顶风大多穿一件 | 日落约5:30pm建议5:00前到",
      budget: "博物馆 NZ$28/人 | 渡轮 AT HOP卡"
    },

    // ===== DAY 15 · 5/2 周六 =====
    {
      day: 15,
      date: "05.02",
      weekday: "周六",
      title: "归程 · 回家",
      location: "奥克兰 → 上海",
      country: "newzealand",
      theme: "travel",
      color: "#073B4C",
      image: "images/auckland_mt_eden.webp",
      stay: "✈️ 回家",
      coords: { lat: -36.8485, lng: 174.7633 },
      route: null,
      transport: {
        mode: "flight",
        detail: "东方航空 MU746 奥克兰→上海浦东 09:45-18:10（12h25m）"
      },
      highlights: [
        "早上收拾行李退房",
        "建议6:30-7:00前往机场（国际航班提前3h）",
        "MU746 09:45起飞，18:10到达上海浦东T1",
        "新西兰机场可办理退税 | 带着满满回忆回家 🏠"
      ],
      tips: "💡 提前3h到机场 | 新西兰不能带肉蛋奶入境中国 | 退税手续在机场办理",
      budget: "回程机票已含"
    }
  ],

  // ── 旅行贴士 ──
  tips: [
    {
      icon: "✈️",
      title: "签证与入境",
      items: [
        "澳洲ETA电子签，在线申请5-10个工作日",
        "新西兰NZeTA（App NZ$17 + IVL NZ$35），72h出结果",
        "入境NZ须在线填NZTD旅客申报表",
        "新西兰海关极严格，食品/种子/肉类禁止携带"
      ]
    },
    {
      icon: "🚗",
      title: "自驾须知",
      items: [
        "新西兰靠左行驶（右舵车）",
        "中国驾照 + NZTA认可翻译件（可淘宝办）",
        "基督城机场取还车，推荐SUV/四驱",
        "皇冠山脉弯多限速严格，山路谨慎"
      ]
    },
    {
      icon: "💰",
      title: "预算参考",
      items: [
        "悉尼住宿 A$200-350/晚 | 南岛 NZ$120-400/晚",
        "租车含油约 NZ$100-180/天",
        "景点门票合计约 NZ$500/两人",
        "每日餐饮约 NZ$80-150/两人"
      ]
    },
    {
      icon: "🌤️",
      title: "天气穿搭",
      items: [
        "悉尼4月约15-22°C，薄外套",
        "南岛山区约5-15°C，库克山更冷",
        "冲锋衣+保暖内层+轻薄羽绒服必带",
        "NZ自然景点超级吃天气，重要行程排早上"
      ]
    },
    {
      icon: "📱",
      title: "通讯网络",
      items: [
        "推荐Vodafone澳新通用卡或eSIM（Airalo）",
        "南岛偏远地区信号弱",
        "务必提前下载Google Maps离线地图",
        "悉尼Opal卡 / 奥克兰AT HOP卡"
      ]
    },
    {
      icon: "📸",
      title: "摄影要点",
      items: [
        "三脚架+蓝牙遥控快门（婚纱照自拍必备）",
        "CPL偏振镜 — 消水面反光拍蓝湖",
        "ND减光镜 — 长曝丝绸湖面",
        "企鹅归巢+萤火虫洞完全禁拍！"
      ]
    }
  ],

  // ── 额外图片映射 ──
  extraImages: {
    hero: "images/hero_bg.webp",
    crownRange: "images/crown_range.webp",
    lakePukaki: "images/lake_pukaki.webp",
    lindisPass: "images/lindis_pass.webp",
    fishMarket: "images/sydney_fish_market.webp",
    artGallery: "images/sydney_art_gallery.webp",
    botanicGarden: "images/sydney_botanic_garden.webp",
    darlingHarbour: "images/sydney_darling_harbour.webp",
    nzAutumn: "images/nz_autumn.webp",
    nzRoad: "images/nz_road.webp"
  }
};
