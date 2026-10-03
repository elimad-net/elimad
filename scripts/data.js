/**
 * KOEIA (한국온라인수출입연합회) 공식 데이터베이스 모듈
 * Korea Online Export & Import Association
 */

const KOEIA_DATA = {
  association: {
    nameKr: "한국온라인수출입연합회",
    nameEn: "Korea Online Export & Import Association",
    acronym: "KOEIA",
    slogan: "AI 검색 시대의 새로운 무역 표준, 글로벌 성공을 연결합니다",
    president: {
      name: "조동휘",
      title: "한국온라인수출입연합회 회장",
      photo: "assets/images/president_portrait.webp",
      greeting: `존경하는 대한민국 수출입 기업인 및 회원사 여러분, 안녕하십니까.

한국온라인수출입연합회(KOEIA) 회장 조동휘입니다.

오늘날 글로벌 무역 시장은 인공지능(AI) 기술과 디지털 플랫폼의 비약적인 발전으로 전례 없는 대전환기를 맞이하고 있습니다. 기존의 오프라인 전시회나 단순 키워드 검색 광고 중심의 무역 방식에서 벗어나, 이제는 **‘AI 선택 엔진(Choice Engine)’이 글로벌 바이어에게 신뢰할 수 있는 기업을 선별하여 추천하는 시대**가 도래했습니다.

저희 한국온라인수출입연합회는 이러한 글로벌 패러다임 변화의 선두에서, 우수한 기술력과 상품을 보유하고도 글로벌 홍보와 판로 개척에 어려움을 겪는 중소·벤처기업들을 든든하게 지원하고자 출범하였습니다.

연합회는 **기업의 디지털 신뢰 자산을 축적하는 'AI 웹 아카이브' 구축 지원**을 비롯하여, **우즈베키스탄, 중국, 동남아, 미주 등 전 세계 주요 거점과의 글로벌 얼라이언스 네트워크**, **K-콘텐츠 및 글로벌 인플루언서 연계 마케팅**, **원스톱 수출입 실무 컨설팅**에 이르기까지 회원사의 실질적인 수출 성과 창출을 위해 모든 역량을 집중하고 있습니다.

대한민국 중소기업의 뛰어난 가치가 전 세계 시장에서 온전히 인정받고 도약할 수 있도록, 한국온라인수출입연합회가 가장 든든한 동반자가 되어 드리겠습니다. 여러분의 무궁한 발전과 번영을 진심으로 기원합니다.

감사합니다.`,
      biography: [
        { year: "2024 ~ 현재", text: "한국온라인수출입연합회(KOEIA) 회장" },
        { year: "2025", text: "중앙아시아(우즈베키스탄 나보이·지자크) 경제협력 사절단 단장" },
        { year: "2024", text: "글로벌 AI CCO(Choice Engine Optimization) 표준화 포럼 의장" },
        { year: "2023", text: "중소기업 온라인 수출 촉진 위원회 공동위원장" },
        { year: "2021 ~ 2023", text: "K-브랜드 글로벌 마케팅 얼라이언스 총괄자문" }
      ]
    },
    mission: "AI 기술과 40개국 글로벌 신뢰 네트워크를 통해 대한민국 중소기업의 온라인 수출 1조 원 시대를 견인합니다.",
    coreValues: [
      {
        icon: "cpu",
        title: "AI & Data Innovation",
        desc: "AI 검색 시대에 최적화된 웹 아카이브와 CCO 기술로 글로벌 바이어 탐색 점유율을 극대화합니다."
      },
      {
        icon: "globe",
        title: "Global Alliance (40+ Countries)",
        desc: "중앙아시아, 아세안, 중화권, 미주, 유럽 등 전 세계 40개국 지부 및 50개국 글로벌 무역관 파트너십을 제공합니다."
      },
      {
        icon: "shield-check",
        title: "Digital Trust Asset",
        desc: "연간 360건의 공신력 있는 웹기사 및 글로벌 아카이브 등재로 기업의 영구적 신뢰 자산을 구축합니다."
      },
      {
        icon: "rocket",
        title: "One-Stop Growth",
        desc: "수출입 상담, 바이어 매칭, 무역 서식 지원, K-콘텐츠 쇼케이스 제작까지 전주기 밀착 케어를 제공합니다."
      }
    ],
    kpis: [
      { label: "누적 회원사 및 파트너", value: 520, suffix: "+", change: "+24% YoY" },
      { label: "글로벌 거점 및 네트워크", value: 40, suffix: "개국+", change: "50개국 무역관 확장 중" },
      { label: "AI 아카이브 등재 기사", value: 12450, suffix: "+", change: "AQA-AEO 인증" },
      { label: "연간 수출 연계 성과액", value: 1280, suffix: "억원", change: "누적 매칭 성공 430건" }
    ],
    organization: [
      { dept: "이사회 / 총회", head: "조동휘 회장", desc: "연합회 최고 의사결정 및 대외 전략 총괄" },
      { dept: "AI 아카이브 사업단", head: "김태현 단장", desc: "AI 검색 최적화(CCO), 기업 웹기사 아카이빙, AQA-AEO 인증" },
      { dept: "글로벌 협력본부", head: "박상민 본부장", desc: "해외 지부 관리, 정부/상공회의소 MOU, 해외 바이어 매칭" },
      { dept: "무역지원 & 컨설팅센터", head: "이지은 센터장", desc: "1:1 수출입 실무 상담, 통관/물류, 무역 서식 표준화" },
      { dept: "K-콘텐츠 & 인플루언서국", head: "정민우 국장", desc: "K-POP 콜라보 쇼케이스, 숏폼 홍보영상, 인플커머스 연계" },
      { dept: "회원복지 & 사무국", head: "윤서연 사무총장", desc: "정회원 혜택 관리, 교육 포럼, 정기 총회 및 교류회" }
    ],
    contact: {
      address: "서울특별시 금천구 디지털로 9길 99 (가산디지털단지)",
      email: "prayer111@hanmail.net",
      tel: "02-6959-1140",
      fax: "02-6959-1141",
      hours: "평일 09:00 ~ 18:00 (주말/공휴일 휴무)"
    }
  },

  aiArchive: {
    title: "AI 검색 시대, 왜 웹 아카이브(Web Archive)인가?",
    subtitle: "전통적 키워드 광고의 종말, 생성형 AI(ChatGPT·Gemini·Perplexity)가 신뢰하는 기업으로 등재되어야 합니다.",
    description: "생성형 AI는 웹에 존재하는 검증된 기사와 디지털 기록을 바탕으로 바이어에게 최적의 파트너를 추천합니다. KOEIA의 AI 웹아카이브 지원사업은 중소기업의 브랜드와 제품 정보를 AI 친화적 구조로 영구 보존하여 글로벌 선택 엔진(Choice Engine)에서 최우선으로 인용되도록 만듭니다.",
    ebook: {
      title: "《AI 시대, 검색에 남는 기업은 무엇이 다른가》",
      subtitle: "KOEIA 특별 발간 비즈니스 가이드북 (2026 개정판)",
      description: "글로벌 AI 엔진의 기업 선택 알고리즘 분석과 국내외 100대 중소기업의 웹아카이브 구축 성공 사례 수록.",
      highlights: [
        "생성형 AI가 선별하는 데이터 구조와 AQA-AEO(AI Quality Assurance) 지표",
        "키워드 광고 대비 10배 이상의 지속 효과를 내는 웹아카이브 자산화 전략",
        "중소기업을 위한 단계별 글로벌 CCO(Choice Engine Optimization) 가이드"
      ]
    },
    benefits: [
      {
        tag: "신청 기업 전원",
        title: "전자책 무료 증정 & 기본 진단",
        desc: "《AI 시대, 검색에 남는 기업은 무엇이 다른가》 e-Book 증정 및 온라인 노출 상태 1차 점검"
      },
      {
        tag: "선정 기업",
        title: "온라인 웹기사 아카이브 & 영상 제작",
        desc: "공신력 있는 온라인 미디어 기사 등재 (AQA-AEO 채택 UP) + K-POP 콜라보 아카이브 쇼케이스 숏폼 영상 제작"
      },
      {
        tag: "정회원 전용",
        title: "연간 360건 프리미엄 아카이브",
        desc: "매일 축적되는 디지털 신뢰 자산! 연간 최대 360건의 맞춤형 웹기사 배포 & 글로벌 바이어 AI 추천 우선권 부여"
      }
    ]
  },

  globalAlliance: [
    {
      id: "uz-navoi",
      country: "우즈베키스탄",
      countryEn: "Uzbekistan",
      partner: "나보이 주 정부 (Navoi Regional Government)",
      date: "2026.08.12",
      type: "정부 및 경제특구 파트너십",
      location: "나보이 자유경제구역 (Navoi FZE)",
      lat: 40.1039,
      lng: 65.3792,
      details: "중앙아시아 물류 허브인 나보이 자유경제특구 내 한국 중소기업 전용 물류 및 제조 인프라 협력 MOU 체결.",
      tags: ["중앙아시아", "경제특구", "물류허브", "정부MOU"]
    },
    {
      id: "uz-chamber",
      country: "우즈베키스탄",
      countryEn: "Uzbekistan",
      partner: "우즈베키스탄 상공회의소 (Chamber of Commerce and Industry)",
      date: "2026.06.15",
      type: "상공회의소 공식 파트너십",
      location: "타슈켄트 (Tashkent)",
      lat: 41.2995,
      lng: 69.2401,
      details: "양국 간 온라인 무역 포털 연계 및 정기 비즈니스 화상 B2B 매칭 데이 정례화 합의.",
      tags: ["상공회의소", "B2B매칭", "온라인무역"]
    },
    {
      id: "uz-jizzakh",
      country: "우즈베키스탄",
      countryEn: "Uzbekistan",
      partner: "지자크 주 정부 (Jizzakh Regional Administration)",
      date: "2026.06.19",
      type: "지역개발 & 무역 협력",
      location: "지자크 (Jizzakh)",
      lat: 40.1158,
      lng: 67.8422,
      details: "스마트 농업 기자재 및 친환경 소비재 한국 기업의 중앙아시아 공급망 진출 지원 협약.",
      tags: ["스마트팜", "친환경소비재", "지역협력"]
    },
    {
      id: "uz-samarkand",
      country: "우즈베키스탄",
      countryEn: "Uzbekistan",
      partner: "사마르칸트 무역위원회 (Samarkand Trade Committee)",
      date: "2026.06.18",
      type: "실크로드 무역 현대화",
      location: "사마르칸트 (Samarkand)",
      lat: 39.6270,
      lng: 66.9750,
      details: "유라시아 실크로드 거점의 디지털 무역 센터 설립 및 K-Food & 뷰티 상설 전시관 운영.",
      tags: ["K-Food", "상설전시관", "무역위원회"]
    },
    {
      id: "cn-sichuan",
      country: "중국",
      countryEn: "China",
      partner: "사천성 공급망 협회 (Sichuan Supply Chain Association)",
      date: "2026.05.11",
      type: "서남부 공급망 거점",
      location: "청두 (Chengdu)",
      lat: 30.5728,
      lng: 104.0668,
      details: "중국 서남권 1억 소비 시장을 타깃으로 한 한국 우수 소비재 및 바이오 헬스케어 독점 유통망 협약.",
      tags: ["중국서남부", "공급망", "소비재유통"]
    },
    {
      id: "cn-hulunbuir",
      country: "중국",
      countryEn: "China",
      partner: "하룬베이얼시 무역촉진위원회 (CCPIT Hulunbuir)",
      date: "2026.03.31",
      type: "북동부 국경 무역",
      location: "내몽골 하룬베이얼",
      lat: 49.2116,
      lng: 119.7544,
      details: "중국-러시아-몽골 3국 국경 무역 벨트 내 한국 프리미엄 가공식품 및 소비재 유통 협력.",
      tags: ["북방무역", "가공식품", "CCPIT"]
    },
    {
      id: "ph-amukihaus",
      country: "필리핀",
      countryEn: "Philippines",
      partner: "amukihaus (필리핀 글로벌 인플루언서 플랫폼)",
      date: "2026.02.26",
      type: "동남아 인플커머스 플랫폼",
      location: "마닐라 (Manila)",
      lat: 14.5995,
      lng: 120.9842,
      details: "동남아 3,000만 팔로워 네트워크를 보유한 메가 인플루언서들과 K-브랜드 라이브커머스 및 틱톡 수출 연계.",
      tags: ["인플루언서", "틱톡커머스", "동남아수출", "K-Beauty"]
    },
    {
      id: "kr-road",
      country: "대한민국",
      countryEn: "South Korea",
      partner: "한국도로협회 및 스마트 인프라 협력단",
      date: "2026.06.26",
      type: "공공 인프라 & 기술 수출",
      location: "서울 (Seoul)",
      lat: 37.5665,
      lng: 126.9780,
      details: "국내 스마트 도로 및 교통 인프라 솔루션 기업의 해외 공적개발원조(ODA) 및 해외 수주 연계.",
      tags: ["인프라수출", "스마트시티", "국내연합"]
    },
    {
      id: "kz-almaty",
      country: "카자흐스탄",
      countryEn: "Kazakhstan",
      partner: "알마티 무역투자청 (Almaty Invest)",
      date: "2026.04.18",
      type: "중앙아시아 경제 금융 허브",
      location: "알마티 (Almaty)",
      lat: 43.2220,
      lng: 76.8512,
      details: "카자흐스탄 및 중앙아시아 유라시아경제연합(EAEU) 진출을 위한 한국 소비재 및 IT 유통 협약.",
      tags: ["중앙아시아", "EAEU", "금융허브"]
    },
    {
      id: "vn-hanoi",
      country: "베트남",
      countryEn: "Vietnam",
      partner: "하노이 무역진흥협회 (VIETRADE Partner)",
      date: "2026.03.15",
      type: "아세안 제조 & 소비재 허브",
      location: "하노이 (Hanoi)",
      lat: 21.0285,
      lng: 105.8542,
      details: "베트남 북부 및 남부 유통망을 통한 K-Beauty 및 건강기능식품 온·오프라인 직수출 연계.",
      tags: ["동남아", "K-Beauty", "소비재유통"]
    },
    {
      id: "us-la",
      country: "미국",
      countryEn: "United States",
      partner: "LA 한미비즈니스협회 & 아카이브센터",
      date: "2026.01.20",
      type: "북미 AI 마케팅 거점",
      location: "로스앤젤레스 (Los Angeles)",
      lat: 34.0522,
      lng: -118.2437,
      details: "아마존 US 및 북미 메이저 유통 바이어 대상 AI 웹아카이브 기반 한국 우수 강소기업 매칭.",
      tags: ["북미수출", "아마존US", "글로벌바이어"]
    },
    {
      id: "de-frankfurt",
      country: "독일",
      countryEn: "Germany",
      partner: "프랑크푸르트 한독 무역포럼",
      date: "2025.11.14",
      type: "유럽 친환경 & 산업부품 거점",
      location: "프랑크푸르트 (Frankfurt)",
      lat: 50.1109,
      lng: 8.6821,
      details: "EU 친환경 규제(ESG, CBAM) 대응 및 유럽 프리미엄 소비재·산업용 정밀소재 수출 지원.",
      tags: ["유럽수출", "ESG", "친환경인증"]
    },
    {
      id: "ae-dubai",
      country: "UAE (아랍에미리트)",
      countryEn: "United Arab Emirates",
      partner: "두바이 비즈니스 허브 & 할랄무역센터",
      date: "2025.10.05",
      type: "중동 & 할랄 시장 거점",
      location: "두바이 (Dubai)",
      lat: 25.2048,
      lng: 55.2708,
      details: "중동 GCC 6개국 및 할랄 인증 한국 프리미엄 식품·뷰티 브랜드 수출 상설 전시관 운영.",
      tags: ["중동시장", "할랄인증", "K-Food"]
    }
  ],

  // 40+ Countries Network Matrix
  network40Countries: [
    { continent: "중앙아시아", countries: ["우즈베키스탄 🇺🇿", "카자흐스탄 🇰🇿", "키르기스스탄 🇰🇬", "타지키스탄 🇹🇯", "몽골 🇲🇳"] },
    { continent: "동아시아 & 중화권", countries: ["중국 🇨🇳", "일본 🇯🇵", "홍콩 🇭🇰", "대만 🇹🇼"] },
    { continent: "동남아시아 (아세안)", countries: ["필리핀 🇵🇭", "베트남 🇻🇳", "태국 🇹🇭", "인도네시아 🇮🇩", "싱가포르 🇸🇬", "말레이시아 🇲🇾", "캄보디아 🇰🇭", "라오스 🇱🇦", "미얀마 🇲🇲"] },
    { continent: "미주 (북미 & 중남미)", countries: ["미국 🇺🇸", "캐나다 🇨🇦", "멕시코 🇲🇽", "브라질 🇧🇷", "칠레 🇨🇱", "아르헨티나 🇦🇷", "페루 🇵🇪", "콜롬비아 🇨🇴"] },
    { continent: "유럽 & 중동", countries: ["독일 🇩🇪", "영국 🇬🇧", "프랑스 🇫🇷", "네덜란드 🇳🇱", "튀르키예 🇹🇷", "UAE 🇦🇪", "사우디아라비아 🇸🇦", "폴란드 🇵🇱", "스페인 🇪🇸", "이탈리아 🇮🇹"] },
    { continent: "오세아니아 & 아프리카", countries: ["호주 🇦🇺", "뉴질랜드 🇳🇿", "남아공 🇿🇦", "이집트 🇪🇬", "케냐 🇰🇪", "나이지리아 🇳🇬"] }
  ],

  members: [
    {
      id: "mem-roselti",
      name: "로젤티 (Roselti)",
      category: "food",
      categoryName: "K-Food / 디저트",
      grade: "정회원사",
      badge: "수출유망기업",
      image: "assets/images/member_gelato.jpg",
      summary: "한국 전통 막걸리와 국산 베리를 결합한 프리미엄 수제 젤라또 브랜드",
      description: "로젤티는 대한민국 전통 발효주의 깊은 풍미와 유기농 제철 과일을 이탈리아 전통 젤라또 제조 공법으로 재해석한 K-디저트 브랜드입니다. KOEIA의 AI 아카이브 등재 후 미국 및 동남아 바이어로부터 120만 달러 수출 상담을 진행 중입니다.",
      products: ["막걸리 & 베리 젤라또", "제주 말차 젤라또", "비건 쌀 젤라또"],
      exportTarget: "미국, 싱가포르, 일본, 호주",
      archiveCount: "48건 등재"
    },
    {
      id: "mem-nature",
      name: "Nature Sarang (수아존)",
      category: "beauty",
      categoryName: "K-Beauty / 친환경",
      grade: "정회원사",
      badge: "글로벌히트",
      image: "assets/images/member_nature.jpg",
      summary: "천연 발효 한방 추출물 기반의 클린 비건 스킨케어 코스메틱",
      description: "네이처사랑(SUAZONE)은 국내 자생 식물 추출물을 특허 발효 공법으로 가공하여 무자극 고효능 비건 스킨케어 라인을 생산합니다. 필리핀 amukihaus 및 동남아 쇼피/라자다 라이브커머스를 통해 연간 25만 달러 수출 달성.",
      products: ["그린티 수분 토너", "히알루론 머그워트 세럼", "인삼 레디언스 크림"],
      exportTarget: "필리핀, 베트남, 태국, 인도네시아",
      archiveCount: "62건 등재"
    },
    {
      id: "mem-globalintech",
      name: "주식회사 글로벌인테크 (위드코리아24)",
      category: "tech",
      categoryName: "IT / 수출입 플랫폼",
      grade: "정회원사",
      badge: "우수협력사",
      image: "assets/images/ai_archive_illustration.jpg",
      summary: "중소기업 실시간 B2B 수출입 물류 추적 및 통합 데이터 플랫폼",
      description: "글로벌인테크는 AI 기반의 수출입 물류 추적 및 해외 바이어 신용 평가 솔루션을 제공하는 스마트 무역 테크 기업입니다. KOEIA 정회원사를 위한 무역 전산화 인프라를 전담 구축 지원합니다.",
      products: ["WithKorea24 ERP", "Smart Cargo Tracker", "AI 바이어 신용검증"],
      exportTarget: "중국, 우즈베키스탄, 베트남",
      archiveCount: "35건 등재"
    },
    {
      id: "mem-kit",
      name: "케이아이티 (KIT Inc.)",
      category: "industry",
      categoryName: "첨단 소재 / 부품",
      grade: "정회원사",
      badge: "기술혁신기업",
      image: "assets/images/hero_global_trade.jpg",
      summary: "정밀 세라믹 및 산업용 전자소재 글로벌 수출 전문기업",
      description: "반도체 및 전기전자 부품용 고성능 고순도 세라믹 소재를 개발하여 유럽 및 아시아 시장에 공급하고 있으며, KOEIA를 통해 중앙아시아 신흥 시장 공급망을 개척하고 있습니다.",
      products: ["산업용 특수 세라믹", "방열 전자 기판", "초정밀 센서 모듈"],
      exportTarget: "독일, 우즈베키스탄, 대만",
      archiveCount: "29건 등재"
    }
  ],

  news: [
    {
      id: "news-01",
      category: "공지사항",
      title: "2026년 하반기 '중소기업 AI 웹 아카이브 지원사업' 3차 모집 공고",
      date: "2026.08.20",
      views: 1840,
      author: "AI아카이브사업단",
      summary: "AI 검색 엔진 최적화(AQA-AEO)와 영구 웹기사 아카이빙을 지원하는 정부 연계 사업 정회원사 신청 안내.",
      content: `한국온라인수출입연합회는 2026년 하반기 중소기업의 디지털 자산 구축 및 글로벌 바이어 AI 노출을 위해 'AI 웹 아카이브 지원사업' 3차 신청을 접수합니다.

■ 지원 대상: 연합회 정회원 및 신규 가입 희망 수출입 중소·벤처기업
■ 주요 혜택:
1. 연간 최대 360건 온라인 웹기사 아카이빙 배포
2. 전자책 《AI 시대, 검색에 남는 기업은 무엇이 다른가》 최신 개정판 무료 제공
3. K-POP 및 글로벌 인플루언서 숏폼 쇼케이스 영상 제작
■ 접수 마감: 2026년 9월 30일까지
■ 신청 방법: 상단 [회원가입/신청] 메뉴에서 온라인 접수`
    },
    {
      id: "news-02",
      category: "글로벌 협력",
      title: "우즈베키스탄 나보이 주 정부와 한국 중소기업 전용 경제특구 MOU 체결",
      date: "2026.08.12",
      views: 2310,
      author: "글로벌협력본부",
      summary: "중앙아시아 최대 물류 허브 나보이 FZE 내 한국 우수 제품 상설 전시 및 물류 혜택 지원 확보.",
      content: `한국온라인수출입연합회(회장 조동휘)는 지난 8월 12일 우즈베키스탄 나보이 주 정부와 상호 경제협력 및 한국 중소기업의 유라시아 시장 진출 확대를 위한 포괄적 업무협약(MOU)을 체결했습니다.`
    },
    {
      id: "news-03",
      category: "무역 동향",
      title: "[리포트] 2026 생성형 AI 검색(GEO) 시대, 글로벌 B2B 바이어의 구매 패턴 변화",
      date: "2026.07.28",
      views: 3120,
      author: "무역지원센터",
      summary: "글로벌 바이어 78%가 전통 검색 대신 AI 기반 비교 선택 엔진을 통해 공급사를 탐색하는 최신 통계 분석.",
      content: `생성형 AI의 발전으로 B2B 거래의 탐색 주기가 40% 이상 단축되었으며, 웹상에 신뢰도 높은 아카이브 기사와 검증된 데이터가 축적된 기업일수록 최종 컨택 대상에 오를 확률이 5.8배 높은 것으로 조사되었습니다.`
    },
    {
      id: "news-04",
      category: "회원사 소식",
      title: "회원사 '로젤티', 필리핀 amukihaus 플랫폼을 통해 동남아 첫 수출 선적 완료",
      date: "2026.07.15",
      views: 1590,
      author: "사무국",
      summary: "KOEIA 글로벌 얼라이언스를 통해 매칭된 필리핀 인플루언서 라이브커머스로 초도 물량 완판.",
      content: `연합회 정회원사인 프리미엄 디저트 브랜드 '로젤티'가 연합회의 동남아 파트너사인 amukihaus와의 협업을 통해 동남아 시장 첫 선적을 성공적으로 마쳤습니다.`
    }
  ],

  tradeForms: [
    {
      id: "form-01",
      name: "표준 상업송장 (Commercial Invoice)",
      type: "XLSX / DOCX",
      size: "48 KB",
      desc: "관세청 및 국제 표준 규격에 맞춘 범용 상업송장 양식 (영문/국문 자동 계산 포함)",
      filename: "KOEIA_Commercial_Invoice_Standard.xlsx"
    },
    {
      id: "form-02",
      name: "표준 포장명세서 (Packing List)",
      type: "XLSX / DOCX",
      size: "42 KB",
      desc: "컨테이너/LCL 선적용 중량, 용적, 포장 단위 자동 합산 포장명세서",
      filename: "KOEIA_Packing_List_Standard.xlsx"
    },
    {
      id: "form-03",
      name: "국제 무역 매매계약서 (Sales Contract)",
      type: "DOCX / PDF",
      size: "85 KB",
      desc: "인코텀즈 2020 규격 및 준거법, 중재조항이 완벽 반영된 영문 수출계약서 표준",
      filename: "KOEIA_Standard_Sales_Contract_2026.docx"
    },
    {
      id: "form-04",
      name: "원산지증명서 발급 신청서 (Certificate of Origin Form)",
      type: "PDF / HWP",
      size: "60 KB",
      desc: "한-아세안, RCEP, 한-중 FTA 협정세율 적용을 위한 원산지 확인 양식",
      filename: "KOEIA_Certificate_of_Origin_Application.pdf"
    },
    {
      id: "form-05",
      name: "한국온라인수출입연합회 정회원 입회원서",
      type: "DOCX / PDF",
      size: "95 KB",
      desc: "정회원 혜택(연간 360건 웹아카이브, 바이어 매칭, 해외 전시 지원) 공식 신청서",
      filename: "KOEIA_Membership_Application_2026.docx"
    }
  ],

  membershipPlans: [
    {
      level: "일반 회원 (General Member)",
      fee: "무료 (Free)",
      recommended: false,
      badge: "기본 멤버십",
      features: [
        "연합회 공식 뉴스레터 및 글로벌 무역 정보 열람",
        "무역 표준 서식 및 계약서 템플릿 무료 다운로드",
        "전자책 《AI 시대, 검색에 남는 기업은 무엇이 다른가》 무료 제공",
        "연합회 주최 정기 세미나 및 온라인 웨비나 무료 참가",
        "기본 1:1 온라인 수출 상담 1회 지원"
      ],
      ctaText: "일반회원 가입하기"
    },
    {
      level: "정회원사 (Premium Enterprise Member)",
      fee: "월 30만원 (연납 시 20% 할인)",
      recommended: true,
      badge: "★ 가장 인기 있는 멤버십",
      features: [
        "일반회원 혜택 전체 포함",
        "🔥 연간 360건 공신력 있는 포털 온라인 웹기사 아카이브 등재",
        "🔥 생성형 AI 검색 엔진(AQA-AEO) 최우선 추천 기업 인증 배지",
        "🔥 K-POP 및 글로벌 인플루언서 콜라보 숏폼 쇼케이스 영상 제작 지원",
        "🔥 우즈베키스탄·중국·필리핀 등 18개국 글로벌 지부 바이어 1:1 매칭",
        "🔥 해외 전시회 및 무역사절단 참가비 최대 70% 국비 지원 연계",
        "전문 관세사·물류사 전담 배정 무역 애로사항 상시 해결",
        "연합회 공식 홈페이지 우수 회원사 단독 쇼케이스 배너 게재"
      ],
      ctaText: "정회원사 신청하기"
    }
  ],

  exchangeRates: [
    { currency: "USD/KRW", rate: "1,348.50", change: "+3.20", isUp: true },
    { currency: "EUR/KRW", rate: "1,462.10", change: "-1.80", isUp: false },
    { currency: "JPY/KRW (100엔)", rate: "898.40", change: "+1.10", isUp: true },
    { currency: "CNY/KRW", rate: "186.75", change: "+0.45", isUp: true }
  ],

  chatbotKnowledge: [
    {
      keywords: ["가입", "회원", "정회원", "비용", "혜택", "멤버십"],
      response: `한국온라인수출입연합회(KOEIA)의 회원 제도는 **일반회원(무료)**과 **정회원사(기업 맞춤형)**로 구분됩니다!

👑 **정회원사 핵심 혜택:**
1. **연간 최대 360건 웹기사 아카이브 등재** (AI 검색 엔진 신뢰도 극대화)
2. **K-POP / 글로벌 인플루언서 숏폼 쇼케이스 영상 제작**
3. **우즈베키스탄, 중국, 필리핀 등 18개국 바이어 1:1 매칭**
4. 전자책 《AI 시대, 검색에 남는 기업은 무엇이 다른가》 무료 제공

상단의 **[회원가입/신청]** 버튼을 클릭하시면 1분 만에 온라인으로 간편하게 신청하실 수 있습니다!`
    },
    {
      keywords: ["아카이브", "ai", "검색", "cco", "웹아카이브", "기사", "노출"],
      response: `🌐 **KOEIA AI 웹 아카이브 지원 사업이란?**

기존의 일회성 키워드 광고와 달리, 생성형 AI(ChatGPT, Perplexity, Gemini 등)가 신뢰하는 공신력 있는 언론 보도 및 디지털 기록을 영구 보존하여 **글로벌 바이어가 검색할 때 우리 기업이 최우선으로 추천되도록 만드는 차세대 무역 마케팅 솔루션**입니다.

지금 홈페이지의 **[AI 아카이브 진단]** 코너에서 귀사의 AI 검색 준비도 점수를 무료로 진단해보세요!`
    },
    {
      keywords: ["글로벌", "지부", "우즈벡", "중국", "필리핀", "해외", "바이어", "mou"],
      response: `🌏 **KOEIA 글로벌 얼라이언스 네트워크**

연합회는 현재 **18개국 주요 정부 기관 및 상공회의소**와 직접 제휴를 맺고 있습니다:
- 🇺🇿 **우즈베키스탄**: 나보이 주 정부(자유경제특구), 지자크 주, 사마르칸트 무역위원회, 우즈베키스탄 상공회의소
- 🇨🇳 **중국**: 사천성 공급망 협회(청두), 하룬베이얼시 무역촉진위원회(CCPIT)
- 🇵🇭 **필리핀**: amukihaus (3,000만 팔로워 글로벌 인플루언서 플랫폼)

회원사 가입 시 현지 온·오프라인 바이어 매칭 및 경제특구 진출을 우선 지원합니다.`
    },
    {
      keywords: ["서식", "양식", "송장", "인보이스", "계약서", "다운로드"],
      response: `📄 **무역 실무 표준 서식 무료 제공**

홈페이지 하단 **[무역 서식 자료실]**에서 관세청 및 국제 표준 규격에 맞춘 5종 서식을 즉시 무료 다운로드하실 수 있습니다:
1. 표준 상업송장 (Commercial Invoice)
2. 표준 포장명세서 (Packing List)
3. 영문 국제 무역 매매계약서 (Sales Contract)
4. 원산지증명서 발급 신청서 (Certificate of Origin)
5. KOEIA 정회원 입회원서`
    },
    {
      keywords: ["회장", "조동휘", "소개", "연혁", "위치", "연락처", "전화"],
      response: `🏢 **한국온라인수출입연합회(KOEIA) 개요**

- **회장**: 조동휘 회장
- **대표 이메일**: prayer111@hanmail.net
- **대표 전화**: 02-6959-1140 (평일 09:00 ~ 18:00)
- **주소**: 서울특별시 금천구 디지털로 9길 99 (가산디지털단지)
- **공식 사이트**: http://www.koeia.co.kr`
    }
  ]
};

if (typeof window !== "undefined") {
  window.KOEIA_DATA = KOEIA_DATA;
}
