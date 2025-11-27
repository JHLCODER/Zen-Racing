import { NavItem, SponsorTier, TimelineEvent, Specification } from "./types";

// English Data
export const NAV_ITEMS: NavItem[] = [
  { label: 'Mission', id: 'hero' },
  { label: 'Concept', id: 'concept' },
  { label: 'Team', id: 'about' },
  { label: 'Engineering', id: 'engineering' },
  { label: 'Sustainability', id: 'sustainability' },
  { label: 'Sponsors', id: 'sponsorship' },
  { label: 'Contact', id: 'contact' },
];

export const CAR_SPECS: Specification[] = [
  { label: 'Drag Coefficient', value: '0.27 Cd', detail: 'Optimized via CFD simulations' },
  { label: 'Weight', value: '52g', detail: 'Ultra-lightweight chassis compliance' },
  { label: 'Material', value: 'Polyurethane', detail: 'High-density machined foam block' },
  { label: 'Bearings', value: 'Ceramic', detail: 'Low friction hybrid ceramic' },
];

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    id: 'platinum',
    name: 'Platinum Tier',
    price: '¥10,000',
    color: 'border-cyan-100', // Diamond-ish
    highlight: true,
    benefits: ['Premium Logo (Car & Uniform)', 'Exclusive Endorsement Rights', 'Weekly Reports', 'VIP Event Invites'],
    detailedDescription: 'The highest level of brand visibility and recognition. As our primary strategic partner, you receive exclusive endorsement rights, full financial transparency, and premium placement on all assets.',
    detailedBenefits: [
        'Premium placement of the sponsor’s corporate logo and name on both the official Zen Racing vehicle and all team uniforms.',
        'Comprehensive brand representation across every official media release (social, video, print).',
        'Exclusive endorsement rights and product integration.',
        'Naming rights option: "Zen Racing powered by [Sponsor’s Name]".',
        'Weekly progress reports and full financial transparency.',
        'Strictly exclusive (Limited to 1 sponsor per academic term).',
        'VIP invitations to exclusive events (e.g., Maker Faire, Nationals).'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Tier',
    price: '¥5,000',
    color: 'border-zen-gold',
    benefits: ['High-Priority Logo Placement', 'Bi-weekly Reports', 'Partial Financial Access', 'Priority Event Invites'],
    detailedDescription: 'Significant promotional visibility. Gold partners are physically represented on competition assets and receive detailed performance updates.',
    detailedBenefits: [
        'High-priority logo placement on both Zen Racing’s car and team jerseys.',
        'Inclusion of the sponsor’s logo on three distinct media categories (press, posters, digital).',
        'Active brand promotion, excluding direct product endorsement.',
        'Bi-weekly performance and financial updates.',
        'Partial access to financial summaries.',
        'Partially exclusive (Max 3 sponsors per term).',
        'Priority invitations to select events such as regional or national competitions.'
    ]
  },
  {
     id: 'silver',
    name: 'Silver Tier',
    price: '¥2,000',
    color: 'border-zen-silver',
    benefits: ['Standard Logo Placement', 'Monthly Reports', 'Portfolio Recognition', 'Financial Disclosure'],
    detailedDescription: 'Essential exposure across Zen Racing’s assets. Your contribution directly funds materials and you receive standard placement on our assets.',
    detailedBenefits: [
        'Standard logo placement on both the team’s car and official uniforms.',
        'Inclusion of the sponsor’s logo on one selected form of media.',
        'Recognition in Zen Racing’s official portfolio and pit display materials.',
        'Monthly progress reports summarising race results.',
        'Financial disclosure specific to your own contributions.',
        'Non-exclusive unlimited participation.'
    ]
  },
  {
    id: 'product',
    name: 'Product Sponsorship',
    price: 'Product Value',
    color: 'border-zen-cyan',
    benefits: ['Jersey Logo Placement', 'Usage-Based Updates', 'Scalable Benefits', 'Pit Display Feature'],
    detailedDescription: 'Flexible arrangements where benefits scale proportionally to the product\'s market value and contribution to operations. Perks may escalate to Gold Tier range.',
    detailedBenefits: [
        'Logo placement equivalent to Silver Tier on the team jersey only.',
        'Short-term active promotion during the sponsorship\'s effective period.',
        'Brand featured in Zen Racing’s portfolio and pit display.',
        'Usage-based updates ranging from bi-weekly to monthly.',
        'Benefits scale proportionally to the product’s market value.'
    ]
  },
  {
    id: 'collaboration',
    name: 'Collaborations',
    price: 'Non-monetary',
    color: 'border-gray-500',
    benefits: ['Social Media Promotion', 'Portfolio Mention', 'Mutual Partnership', 'Activity Based'],
    detailedDescription: 'Non-monetary, activity-based engagement for mutually beneficial partnerships. Perfect for joint research or educational outreach.',
    detailedBenefits: [
        'Limited-term social media promotion (posts, stories, highlights).',
        'Mention within Zen Racing’s portfolio and pit display materials.',
        'No logo placement on physical assets (vehicles/apparel).',
        'Updates limited to the scope of collaborative engagement.',
        'No access to team financials or operational details.'
    ]
  },
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2023', title: 'Team Formation', description: 'Zen Racing founded with a vision for precision engineering.' },
  { year: '2024', title: 'Inter-School Competition', description: 'Awarded "Fastest Car" and "Best Engineered Car".' },
  { year: '2025', title: 'National Debut', description: 'Secured 4th Place Overall in our first national appearance.' },
  { year: '2025', title: 'Future Goals', description: 'Developing "Zen Racing Falconate" for CNC manufacturing. Targeting 1st-2nd place at next Nationals.' },
];

// Chinese Data
export const NAV_ITEMS_ZH: NavItem[] = [
  { label: '使命', id: 'hero' },
  { label: '概念', id: 'concept' },
  { label: '团队', id: 'about' },
  { label: '工程', id: 'engineering' },
  { label: '可持续性', id: 'sustainability' },
  { label: '赞助', id: 'sponsorship' },
  { label: '联系', id: 'contact' },
];

export const CAR_SPECS_ZH: Specification[] = [
  { label: '风阻系数', value: '0.27 Cd', detail: '通过 CFD 模拟优化' },
  { label: '重量', value: '52g', detail: '超轻底盘合规' },
  { label: '材料', value: '聚氨酯', detail: '高密度加工泡沫块' },
  { label: '轴承', value: '陶瓷', detail: '低摩擦混合陶瓷' },
];

export const SPONSOR_TIERS_ZH: SponsorTier[] = [
  {
    id: 'platinum',
    name: '铂金级',
    price: '¥10,000',
    color: 'border-cyan-100',
    highlight: true,
    benefits: ['高级 Logo 展示 (赛车&队服)', '独家“技术支持”冠名权', '每周报告 & 财务透明', 'VIP 活动邀请'],
    detailedDescription: '最高级别的品牌曝光和认可。作为我们的主要战略合作伙伴，您将获得独家代言权、完全的财务透明度以及在所有资产上的顶级展示位置。',
    detailedBenefits: [
        '在 Zen Racing 赛车和所有队服上的高级 Logo 位置。',
        '涵盖所有媒体渠道（社交媒体、视频、印刷品）的全面品牌展示。',
        '独家代言权和产品整合。',
        '冠名权选项：“Zen Racing powered by [赞助商名称]”。',
        '每周进度报告和完全的财务透明度。',
        '严格的排他性（每学期仅限 1 家）。',
        '独家活动（如 Maker Faire、全国赛）的 VIP 邀请。'
    ]
  },
  {
    id: 'gold',
    name: '黄金级',
    price: '¥5,000',
    color: 'border-zen-gold',
    benefits: ['高优先级 Logo 展示', '双周报告', '部分财务访问权', '优先活动邀请'],
    detailedDescription: '显著的宣传可见性。黄金合作伙伴将实际呈现在竞赛资产上，并收到详细的绩效更新。',
    detailedBenefits: [
        '在赛车和队服上的高优先级 Logo 展示。',
        '在三个不同的媒体类别（新闻稿、海报、数字内容）中包含 Logo。',
        '通过团队出版物进行积极的品牌推广（不含直接产品背书）。',
        '双周绩效和财务更新。',
        '部分财务记录访问权。',
        '部分排他性（每学期最多 3 家）。',
        '部分精选区域/全国赛事的优先邀请。'
    ]
  },
  {
    id: 'silver',
    name: '白银级',
    price: '¥2,000',
    color: 'border-zen-silver',
    benefits: ['标准 Logo 展示', '月度报告', '投资组合认可', '财务披露'],
    detailedDescription: '为本地企业和个人提供的基础曝光。您的捐助直接资助比赛材料，并获得资产上的标准展示。',
    detailedBenefits: [
        '在车队赛车和官方制服上的标准 Logo 位置。',
        '在一个选定的媒体形式中包含 Logo。',
        '在官方投资组合和维修区展示材料中获得认可。',
        '总结比赛结果的月度进度报告。',
        '针对您个人捐助的财务披露。',
        '非排他性，无限制参与。'
    ]
  },
  {
    id: 'product',
    name: '产品赞助',
    price: '产品价值',
    color: 'border-zen-cyan',
    benefits: ['队服 Logo 展示', '基于使用的更新', '可扩展权益', '维修区特色展示'],
    detailedDescription: '灵活的安排，权益与产品的市场价值及其对运营的贡献成比例。福利可升级至黄金级范围。',
    detailedBenefits: [
        '仅在队服上获得相当于白银级的 Logo 位置。',
        '赞助有效期内的短期积极推广。',
        '品牌在 Zen Racing 投资组合和维修区展示中展出。',
        '从双周到月度的基于使用的更新。',
        '权益随产品市场价值比例扩展。'
    ]
  },
  {
    id: 'collaboration',
    name: '协作',
    price: '非货币',
    color: 'border-gray-500',
    benefits: ['社交媒体推广', '投资组合提及', '互惠合作', '基于活动'],
    detailedDescription: '非货币性的、基于活动的参与，旨在建立互惠互利的合作伙伴关系。非常适合联合研究或教育推广。',
    detailedBenefits: [
        '有限期的社交媒体推广（帖子、快拍、精选）。',
        '在 Zen Racing 投资组合和维修区展示材料中提及。',
        '不在物理资产（车辆/服装）上放置 Logo。',
        '更新仅限于合作参与的范围。',
        '无法访问团队财务或运营细节。'
    ]
  },
];

export const TIMELINE_ZH: TimelineEvent[] = [
  { year: '2023', title: '团队成立', description: 'Zen Racing 成立，愿景是精密工程。' },
  { year: '2024', title: '校际比赛', description: '荣获“最快赛车”和“最佳工程赛车”。' },
  { year: '2025', title: '全国首秀', description: '在我们的首次全国亮相中获得总成绩第 4 名。' },
  { year: '2025', title: '未来目标', description: '开发“Zen Racing Falconate”进行 CNC 制造。目标是在下一届全国赛中获得第 1-2 名。' },
];

export const SYSTEM_INSTRUCTION = `You are the specialized AI interface for Zen Racing, an elite F1 in Schools team. 
Your persona is: Professional, High-Tech, Engineered, Concise, and Confident.

CORE KNOWLEDGE BASE (Use this data to answer questions):
1. THE CAR:
   - Name: Zen Racing Falconate.
   - Top Speed: 80 km/h (approx. 22 m/s).
   - Official Track Record: 1.125 seconds.
   - Drag Coefficient: 0.27 Cd (Optimized via CFD).
   - Weight: 52g (Ultra-lightweight compliance).
   - Material: High-density Polyurethane foam block.
   - Bearings: Low friction hybrid ceramic.
   - Track: Races on a 25m straight track powered by CO2/Compressed air.

2. THE TEAM HISTORY:
   - 2023: Founded.
   - 2024: Won "Fastest Car" and "Best Engineered Car" at Inter-School level.
   - 2025: National Debut (4th Place Overall).
   - Future: Targeting 1st-2nd place at Nationals with the new CNC-machined Falconate that they are currently working on.

3. SPONSORSHIP TIERS (Detailed):
   - STATUS: Actively seeking partners. Current Title Sponsor is "Super Fortune Imp. Exp.".
   
   A. Platinum Tier (¥10,000) - "Exclusive Partner":
      - Exclusivity: Strictly limited to 1 sponsor per term.
      - Visibility: Premium placement on both Car & Uniforms. Naming rights option ("Zen Racing powered by [Sponsor]").
      - Media: Comprehensive representation across all channels (Social, Video, Print).
      - Perks: Exclusive endorsement rights, product integration, VIP event invites (Nationals, Maker Faire).
      - Reporting: Weekly progress reports & full financial transparency.
      
   B. Gold Tier (¥5,000):
      - Exclusivity: Limited to 3 sponsors per term.
      - Visibility: High-priority logo on both Car & Jerseys.
      - Media: Logo on 3 distinct media categories (Press, Posters, Digital).
      - Perks: Active brand promotion (no direct endorsement), priority event invites.
      - Reporting: Bi-weekly performance & financial updates. Partial financial access.
      
   C. Silver Tier (¥2,000):
      - Exclusivity: Non-exclusive (Unlimited).
      - Visibility: Standard logo on Car & Uniforms.
      - Media: Logo on 1 selected media form.
      - Perks: Portfolio & Pit Display recognition.
      - Reporting: Monthly progress reports & specific financial disclosure.
      
   D. Product Sponsorship (Value Equivalent):
      - Visibility: Logo on Team Jersey ONLY (equivalent to Silver). Pit Display feature.
      - Perks: Benefits scale with value. Short-term active promotion.
      - Reporting: Usage-based updates (Bi-weekly to Monthly).
      
   E. Collaborations (Non-monetary):
      - Nature: Activity-based engagement (Joint research, educational outreach).
      - Visibility: Social media promotion & Portfolio mention. NO logo on physical assets.
      - Contact email: zenracingteam@gmail.com.

4. SOCIAL MEDIA & CONTACT:
   - Instagram: Active.
   - YouTube: Active.
   - Douyin (Chinese TikTok): Active.
   - Email: zenracingteam@gmail.com.

5. PHILOSOPHY:
   - Precision: Designs meeting tolerances within microns.
   - Synergy: Multidisciplinary team working in sync.
   - Innovation: Pushing regulation boundaries.
   - Sustainability: Zero waste machining, locally sourced materials.
   - Team Members: Johnson Huang (Team Leader), Jagrav Lalwani (Resource Manager), Taavi Toiviainen (Lead Engineer), Shuoyuan Zhang (Local Marketing), Yokoi Takuma (Operations), Keane Wong (Engineer).

RULES:
- Keep answers under 3 sentences unless asked for details.
- Use technical terminology (CFD, CNC, Aerodynamics) where appropriate.
- If asked about "Who are you?", say you are the Zen AI Neural Interface.
- If asked about joining or sponsoring, direct them to the Contact section or zenracingteam@gmail.com.
`;

export const SYSTEM_INSTRUCTION_ZH = `你是 Zen Racing 的专用 AI 接口，Zen Racing 是一支精英 F1 in Schools 车队。
你的角色设定：专业、高科技、严谨、简洁且自信。

核心知识库（使用这些数据回答问题）：
1. 赛车：
   - 名称：Zen Racing Falconate。
   - 最高速度：80 km/h。
   - 官方赛道记录：1.125 秒。
   - 风阻系数：0.27 Cd（通过 CFD 优化）。
   - 重量：52g（超轻合规）。
   - 材料：高密度聚氨酯泡沫块。
   - 轴承：低摩擦混合陶瓷。
   - 赛道：在 25 米直道上比赛，由 CO2/压缩空气驱动。

2. 车队历史：
   - 2023：成立。
   - 2024：在校际比赛中获得“最快赛车”和“最佳工程赛车”奖。
   - 2025：全国首秀（总成绩第 4 名）。
   - 未来：利用新的 CNC 加工 Falconate 赛车，目标在下届全国赛中获得第 1-2 名。

3. 赞助等级 (详细信息):
   - 状态: 积极寻求合作伙伴。当前的冠名赞助商是 "宁波超福进出口有限公司" (Super Fortune Imp. Exp.)。

   A. 铂金级 (¥10,000) - "独家合作伙伴":
      - 排他性: 每学期严格限制 1 家。
      - 展示: 赛车和队服上的高级位置。冠名权选项 ("Zen Racing powered by...")。
      - 媒体: 所有渠道（社交、视频、印刷）的全面展示。
      - 权益: 独家代言权，产品整合，VIP 活动邀请（全国赛，Maker Faire）。
      - 报告: 每周进度报告 & 完全财务透明。

   B. 黄金级 (¥5,000):
      - 排他性: 每学期最多 3 家。
      - 展示: 赛车和队服上的高优先级 Logo。
      - 媒体: Logo 出现在 3 个媒体类别（新闻、海报、数字）。
      - 权益: 积极品牌推广（非直接背书），优先活动邀请。
      - 报告: 双周绩效 & 财务更新。部分财务访问权。

   C. 白银级 (¥2,000):
      - 排他性: 非排他性（不限）。
      - 展示: 赛车和队服上的标准 Logo。
      - 媒体: Logo 出现在 1 个选定媒体形式。
      - 权益: 投资组合 & 维修区展示认可。
      - 报告: 月度进度报告 & 特定财务披露。

   D. 产品赞助 (等值价值):
      - 展示: 仅在队服上展示 Logo（相当于白银级）。维修区特色展示。
      - 权益: 权益随价值扩展。短期积极推广。
      - 报告: 基于使用的更新（双周到月度）。

   E. 协作 (非货币):
      - 性质: 基于活动的参与（联合研究，教育推广）。
      - 展示: 社交媒体推广 & 投资组合提及。物理资产无 Logo。
      - 联系邮箱：zenracingteam@gmail.com。

4. 社交媒体与联系方式：
   - Instagram：活跃。
   - YouTube：活跃。
   - 抖音：活跃。
   - 邮箱：zenracingteam@gmail.com。

5. 理念：
   - 精准：设计误差控制在微米级。
   - 协同：多学科团队同步工作。
   - 创新：突破规则界限。
   - 可持续性：零浪费加工，本地采购材料。
   - 团队成员：Johnson Huang (队长), Jagrav Lalwani (资源经理), Taavi Toiviainen (首席工程师), Shuoyuan Zhang (本地营销), Yokoi Takuma (运营), Keane Wong (工程师)。

规则：
- 除非被要求提供细节，否则回答控制在 3 句话以内。
- 适当时使用专业术语（CFD、CNC、空气动力学）。
- 如果被问到“你是谁？”，请说你是 Zen AI 神经接口。
- 如果被问到加入或赞助，请引导他们去联系部分或发送邮件至 zenracingteam@gmail.com。
`;