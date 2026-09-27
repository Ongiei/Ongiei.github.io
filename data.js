window.PORTFOLIO_PROJECTS = [
  {
    "slug": "cm5-home-gateway",
    "category": "hardware",
    "categoryLabel": "智能硬件",
    "index": "02",
    "title": "CM5 家庭网关",
    "subtitle": "面向家庭设备联动的网关产品形态",
    "summary": "从家庭设备接入、安装与维护出发，比较家庭网关的两种产品形态。",
    "period": "硬件产品设计",
    "featured": false,
    "media": [
      {
        "src": "assets/hardware/home-gateway.png",
        "alt": "家庭网关外观方案的白色盒体渲染图",
        "caption": "家庭网关 · 外观方案渲染图"
      },
      {
        "src": "assets/hardware/cm5-gateway-zigbee.png",
        "alt": "带 Zigbee 的 CM5 家庭网关外观方案渲染图",
        "caption": "CM5 + Zigbee 版本 · 外观方案渲染图"
      }
    ],
    "question": "如何为家庭中的多类设备建立清晰的连接入口？",
    "context": "CM5 家庭网关包含基础外观方案与 Zigbee 版本。项目从设备接入、家庭摆放和日常维护出发，讨论网关作为家庭连接中枢的产品形态。",
    "constraints": [
      "同时考虑多类设备的接入方式",
      "外观与接口布局适应家庭安装环境",
      "设备状态应便于查看与维护"
    ],
    "decisions": [
      [
        "以家庭场景确定形态",
        "让网关以克制的体量融入室内环境。"
      ],
      [
        "把版本差异放到同一视角",
        "并列展示两种方案，突出产品系列中的延续与变化。"
      ]
    ],
    "outcome": "外观图呈现了家庭网关与 CM5 + Zigbee 版本的产品形态。"
  },
  {
    "slug": "voice-touch-terminal",
    "category": "hardware",
    "categoryLabel": "智能硬件",
    "index": "01",
    "title": "家庭语音触控终端",
    "subtitle": "从使用场景到整机方案的 0→1 产品实践",
    "summary": "从需求定义、器件选型到样机集成与小批量导入，推动家庭语音触控终端落地。",
    "period": "0→1 硬件产品",
    "role": "整机产品规划与推进",
    "featured": true,
    "featuredOrder": 1,
    "visualType": "terminal",
    "media": [
      {
        "src": "assets/hardware/voice-touch-terminal-86.png",
        "alt": "家庭语音触控终端的早期外观方案草图，展示屏幕与面板布局",
        "caption": "早期外观方案草图 · 终端面板与屏幕布局"
      }
    ],
    "question": "如何把家庭场景中的语音与触控需求，定义为可集成、可交付的终端产品？",
    "context": "这是一项从需求定义开始的整机产品实践。我负责梳理家庭使用场景与终端能力，形成产品方案，并推进 MCU、显示、通信等选型与样机集成，进入小批量生产导入。",
    "constraints": [
      "语音与触控需要共同服务于家庭设备控制场景",
      "整机方案要同时考虑 MCU、显示、通信与成本约束",
      "样机集成需要为后续的小批量生产导入留出路径"
    ],
    "decisions": [
      [
        "从家庭场景定义能力",
        "先确定用户如何发起控制、如何确认设备响应，再把需求转成终端能力与交互边界。"
      ],
      [
        "整机选型与方案收敛",
        "围绕 MCU、显示、通信方式及 BOM 进行方案权衡，让功能目标与实现条件对应。"
      ],
      [
        "从样机推进到导入",
        "协调样机集成与问题收敛，推动方案进入小批量生产导入。"
      ]
    ],
    "productStory": [
      { "label": "01 / 产品定义", "title": "从家庭场景识别控制需求", "text": "把用户触发、设备反馈与日常使用路径转化为终端需要具备的能力，确定语音和触控各自承担的交互任务。" },
      { "label": "02 / 系统方案", "title": "让能力与硬件条件对齐", "text": "在 MCU、显示、通信与 BOM 之间做整机方案权衡，并把选择带入样机集成。" },
      { "label": "03 / 交付推进", "title": "从可演示样机走向可导入方案", "text": "跟进集成问题与方案调整，使终端进入小批量生产导入。" }
    ],
    "outcome": "完成家庭语音触控终端的整机产品方案，推进样机集成与小批量生产导入。"
  },
  {
    "slug": "eye-care-dashboard",
    "category": "data",
    "categoryLabel": "数据分析看板",
    "index": "03",
    "title": "护眼功能数据看板",
    "subtitle": "从功能触达到持续使用的分析结构",
    "summary": "从触达、开启到持续使用，寻找护眼功能体验和产品迭代的判断依据。",
    "period": "数据分析",
    "featured": true,
    "featuredOrder": 2,
    "dataLens": ["产品问题 / 功能是否被理解并持续使用", "观察路径 / 触达 → 开启 → 设置偏好 → 留存", "判断用途 / 定位入口、解释与持续使用环节"],
    "question": "怎样理解护眼功能从被看见到持续使用的全过程？",
    "context": "在 OPPO 显示体验方向，护眼功能需要区分‘用户看到入口’‘主动开启’与‘持续使用’。看板沿页面访问、功能交互、开启状态、设置偏好与后续保持展开，为入口优化、功能解释和后续验证提供问题定位路径。",
    "constraints": [
      "区分触达、开启与实际生效的口径",
      "不同功能的观察窗口与支持设备范围需要一致",
      "留存分析需要以首次开启时间建立队列"
    ],
    "decisions": [
      [
        "先看入口，再看转化",
        "将页面访问与同次会话内的功能行为分开呈现。"
      ],
      [
        "分开观察开启与保持",
        "避免把周期内曾开启理解为期末仍在使用。"
      ],
      [
        "把设置偏好纳入使用深度",
        "用定时配置与提醒触发理解功能如何融入日常。"
      ]
    ]
  },
  {
    "slug": "auto-backlight-dashboard",
    "category": "data",
    "categoryLabel": "数据分析看板",
    "index": "04",
    "title": "自动背光分析看板",
    "subtitle": "从环境光到屏幕亮度与手动干预",
    "summary": "将模式时长、环境光、亮度分布与手动调整放回使用场景。",
    "period": "数据分析",
    "featured": false,
    "dataLens": ["产品问题 / 自动调节何时偏离用户预期", "观察路径 / 环境光 → 屏幕亮度 → 手动干预", "判断用途 / 识别场景并为策略优化提供线索"],
    "question": "自动调节在什么场景下需要用户再次干预？",
    "context": "自动背光的产品问题是：系统调节与用户预期在哪些场景出现偏差？看板从自动与手动模式的使用结构开始，再观察环境光和屏幕亮度的关系，并沿拖动事件追问前台应用与时间背景，为策略优化与问题复现提供线索。",
    "constraints": [
      "环境光与屏幕亮度使用不同单位",
      "手动调整需要对应发生时的使用场景",
      "趋势与分布需要相互解释"
    ],
    "decisions": [
      [
        "先区分使用模式",
        "把自动与手动时长作为分析入口。"
      ],
      [
        "将光线与亮度并置",
        "用双变量视角观察自动调节的响应。"
      ],
      [
        "把调整行为放回现场",
        "结合时间、应用与调整前后亮度理解干预。"
      ]
    ]
  },
  {
    "slug": "device-timeline",
    "category": "data",
    "categoryLabel": "数据分析看板",
    "index": "05",
    "title": "设备行为时间轴看板",
    "subtitle": "把分散事件组织成可追问的分析链路",
    "summary": "用统一时间轴串联屏幕、应用、亮度、手势与系统状态。",
    "period": "数据分析",
    "featured": false,
    "dataLens": ["产品问题 / 一次异常体验是怎样发生的", "观察路径 / 总体变化 → 设备片段 → 事件链", "判断用途 / 支持问题复现与跨事件定位"],
    "question": "跨越多条事件链的使用问题，怎样回到具体发生的过程？",
    "context": "当整体指标出现波动时，产品判断还需要回到用户的具体使用过程。时间轴将设备状态、前台应用、亮度变化与系统事件放在同一坐标中，支持跨事件链定位和问题复现。",
    "constraints": [
      "不同事件的时间口径需要对齐",
      "总体趋势要能下钻到单次使用片段",
      "事件密度与具体行为需要分层呈现"
    ],
    "decisions": [
      [
        "先对齐事件",
        "以统一时间刻度连接不同来源的行为。"
      ],
      [
        "从概览进入片段",
        "先看事件分布，再进入值得追问的时段。"
      ],
      [
        "保留上下文",
        "把异常前后的状态变化放在一起阅读。"
      ]
    ]
  },
  {
    "slug": "dezhou-exhibition-center",
    "category": "architecture",
    "categoryLabel": "建筑设计",
    "index": "07",
    "title": "德州国际会展中心",
    "subtitle": "以城市轴线和展厅单元组织大型公共空间",
    "summary": "从城市关系、场馆组合与内部流线推演概念方案。",
    "period": "2022",
    "featured": true,
    "featuredOrder": 4,
    "media": [
      {
        "src": "assets/architecture/dezhou-aerial-redraw.webp",
        "alt": "德州国际会展中心放射状场馆与城市水面关系鸟瞰",
        "caption": "城市轴线与场馆鸟瞰",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/dezhou-spatial-analysis-redraw.webp",
        "alt": "六组展厅围合公共中心及城市入口的空间关系图",
        "caption": "城市轴线、展厅单元与公共中心",
        "layout": "diagram"
      },
      {
        "src": "assets/architecture/dezhou-routes-analysis-redraw.webp",
        "alt": "公共入口经中心大厅分配到六组展厅的流线关系图",
        "caption": "公共到达与展厅外围动线",
        "layout": "diagram"
      },
      {
        "images": [
          "assets/architecture/dezhou-page-23.webp",
          "assets/architecture/dezhou-page-24.webp"
        ],
        "alt": "德州会展中心展厅内不同活动的平面图",
        "caption": "展厅平面 · 两页连读",
        "layout": "spread-plan"
      },
      {
        "images": [
          "assets/architecture/dezhou-page-25.webp",
          "assets/architecture/dezhou-page-26.webp"
        ],
        "alt": "德州会展中心展厅室内的两个连续视角",
        "caption": "展厅内部 · 两个连续视角",
        "layout": "spread-room"
      },
      {
        "src": "assets/architecture/dezhou-interior-redraw.webp",
        "alt": "德州会展中心木质顶棚下的公共大厅",
        "caption": "公共大厅 · 人行尺度",
        "layout": "wide"
      }
    ],
    "architectureSections": [
      {
        "label": "01 / 场地",
        "title": "先看场馆如何接入城市。",
        "text": "城市轴线和公共入口进入建筑中心，展厅单元围绕这一核心展开。",
        "images": [
          1
        ]
      },
      {
        "label": "02 / 组织",
        "title": "从中心大厅理解展厅与流线。",
        "text": "中心大厅承担到达与分配；展厅平面进一步展示空间在不同活动中的适配方式。",
        "images": [
          2,
          3
        ]
      },
      {
        "label": "03 / 体验",
        "title": "从展厅跨度走向公共大厅。",
        "text": "连续的展厅视角呈现大跨空间，公共大厅补足人在建筑中的尺度与氛围。",
        "images": [
          4,
          5
        ]
      }
    ],
    "question": "大尺度会展设施，如何连接城市入口、展厅组织与公众体验？",
    "context": "方案从城市轴线出发，将展馆单元、中央公共空间与到达流线组织在一起，并用鸟瞰、平面与室内视角说明空间体验。",
    "constraints": [
      "回应城市轴线和周边公共空间",
      "建立展厅单元与中央大厅之间的清晰关系",
      "兼顾参观、布展与配套动线"
    ],
    "decisions": [
      [
        "先确定城市接入方式",
        "由城市轴线和公共入口推导建筑的到达关系。"
      ],
      [
        "用展厅单元组织总体布局",
        "让中心大厅成为展厅之间的空间枢纽。"
      ],
      [
        "以图纸和空间视角相互校验",
        "平面解释使用逻辑，效果图呈现尺度与氛围。"
      ]
    ]
  },
  {
    "slug": "zhengzhou-exhibition-center",
    "category": "architecture",
    "categoryLabel": "建筑设计",
    "index": "08",
    "title": "郑州高新区会展中心",
    "subtitle": "紧凑用地上的会展复合体构想",
    "summary": "结合区位、会展需求与用地约束，呈现会展复合方案。",
    "period": "2023",
    "featured": false,
    "media": [
      {
        "src": "assets/architecture/zhengzhou-aerial-redraw.webp",
        "alt": "郑州高新区会展中心方案一日景鸟瞰",
        "caption": "方案一 · 场馆与屋顶公共空间",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/zhengzhou-site.webp",
        "alt": "郑州高新区会展中心场地周边条件分析",
        "caption": "场地边界与周边城市资源",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/zhengzhou-massing-analysis-redraw.webp",
        "alt": "会展功能落位、体量塑形与城市互动的三步分析图",
        "caption": "功能落位、空间塑形与城市互动",
        "layout": "diagram"
      },
      {
        "src": "assets/architecture/zhengzhou-program-analysis-redraw.webp",
        "alt": "展览、公共大厅、会议与酒店的功能关系图",
        "caption": "复合功能围绕公共大厅组织",
        "layout": "diagram"
      },
      {
        "src": "assets/architecture/zhengzhou-masterplan.webp",
        "alt": "郑州高新区会展中心方案一总平面图",
        "caption": "总平面 · 入口与总体布局",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/zhengzhou-landscape.webp",
        "alt": "郑州高新区会展中心屋顶绿化分析图",
        "caption": "屋顶与城市绿地的连接",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/zhengzhou-street-redraw.webp",
        "alt": "郑州高新区会展中心日间沿街透视",
        "caption": "沿街视角 · 建筑与行人尺度",
        "layout": "wide"
      }
    ],
    "architectureSections": [
      {
        "label": "01 / 判断",
        "title": "用地与会展需求一起决定体量。",
        "text": "区位、周边业态和展览需求共同约束场地中的建筑规模。",
        "images": [
          1
        ]
      },
      {
        "label": "02 / 推演",
        "title": "功能组合推动形态生成。",
        "text": "展览、会议、酒店与公共空间在紧凑地块中组合；一张总图用于核对入口和总体布局。",
        "images": [
          2,
          3,
          4
        ]
      },
      {
        "label": "03 / 呈现",
        "title": "让城市界面与屋顶公共空间可见。",
        "text": "绿地系统和沿街视角补充鸟瞰，呈现建筑与周边城市空间的关系。",
        "images": [
          5,
          6
        ]
      }
    ],
    "question": "在有限用地中，如何兼顾展览、会议、酒店和城市公共空间？",
    "context": "方案将展览、会议、酒店及公共空间组织在紧凑地块中，通过功能分析、总体布局与街道视角呈现建筑和城市的关系。",
    "constraints": [
      "在有限地块上组合会展与配套功能",
      "分别组织公众到达与后勤物流",
      "连接屋顶、地面公共空间与周边绿地"
    ],
    "decisions": [
      [
        "从场地容量确定功能组合",
        "用展览需求与用地条件推导体量。"
      ],
      [
        "以公共大厅串联复合功能",
        "让展览、会议与配套空间形成易读的组织关系。"
      ],
      [
        "同时观察总图与街道尺度",
        "从入口、城市界面和行人体验校验总体方案。"
      ]
    ]
  },
  {
    "slug": "longchang-civic-center",
    "category": "architecture",
    "categoryLabel": "建筑设计",
    "index": "09",
    "title": "重坊叠韵",
    "subtitle": "以牌坊街和夏布意象组织公共中庭",
    "summary": "从历史轴线、体量拆分到中庭体验，呈现公共建筑设计推演。",
    "period": "概念方案",
    "featured": false,
    "media": [
      {
        "src": "assets/architecture/longchang-courtyard-redraw.webp",
        "alt": "重坊叠韵方案的公共中庭与框景",
        "caption": "公共中庭 · 天运楼框景",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/longchang-axis-analysis-redraw.webp",
        "alt": "天运楼、石牌坊与公共中庭之间的轴线关系",
        "caption": "历史轴线进入公共中庭",
        "layout": "diagram"
      },
      {
        "src": "assets/architecture/longchang-massing-analysis-redraw.webp",
        "alt": "建筑拆分为六个单元围合中庭的过程",
        "caption": "六个单元围合中庭",
        "layout": "diagram"
      },
      {
        "src": "assets/architecture/longchang-program-analysis-redraw.webp",
        "alt": "公共中庭与两侧功能空间的联系",
        "caption": "中庭连接两侧功能",
        "layout": "diagram"
      },
      {
        "src": "assets/architecture/longchang-aerial-redraw.webp",
        "alt": "重坊叠韵方案建筑与城市肌理的鸟瞰",
        "caption": "鸟瞰 · 建筑与历史轴线",
        "layout": "wide"
      },
      {
        "src": "assets/architecture/longchang-street-redraw.webp",
        "alt": "重坊叠韵方案的沿街立面",
        "caption": "沿街视角 · 街道尺度",
        "layout": "wide"
      }
    ],
    "architectureSections": [
      {
        "label": "01 / 文脉",
        "title": "历史轴线成为方案的起点。",
        "text": "天运楼与石牌坊之间的城市关系，引导中庭的朝向与空间框景。",
        "images": [
          1
        ]
      },
      {
        "label": "02 / 生成",
        "title": "拆分体量，形成公共中庭。",
        "text": "六个单元围合共享空间，中庭连接两侧的办公与服务功能。",
        "images": [
          2,
          3
        ]
      },
      {
        "label": "03 / 感受",
        "title": "在鸟瞰与街景之间看建筑尺度。",
        "text": "中庭是最有辨识度的空间体验；鸟瞰和沿街视角补充建筑与城市肌理的联系。",
        "images": [
          4,
          5
        ]
      }
    ],
    "question": "怎样把地方意象转化为可体验的空间？",
    "context": "方案沿天运楼与石牌坊的历史轴线组织场地，将建筑拆分为六个单元，并以框景和顶部采光塑造公共中庭。",
    "constraints": [
      "回应场地中的历史轴线",
      "让中庭与两侧功能形成清晰联系",
      "将地方意象落实到空间体验"
    ],
    "decisions": [
      [
        "延续历史视线关系",
        "让轴线参与场地组织和中庭朝向。"
      ],
      [
        "拆分体量形成中庭",
        "以多个单元围合共享空间。"
      ],
      [
        "用框景与采光表达在地性",
        "让牌坊空间和夏布意象进入中庭体验。"
      ]
    ]
  },
  {
    "slug": "spatial-storage",
    "category": "research",
    "categoryLabel": "独立产品",
    "index": "06",
    "title": "Spatial Storage 空间收纳",
    "subtitle": "把家庭物品清单与房间空间连接起来",
    "summary": "从“东西在哪里”出发，设计收纳树、搜索与可视化空间工作区。",
    "role": "个人项目 · 产品与 Web 原型",
    "period": "数字产品",
    "featured": true,
    "featuredOrder": 3,
    "media": [
      {
        "src": "assets/spatial-storage-overview.jpg",
        "alt": "Spatial Storage 的收纳树、二维平面与内容面板",
        "caption": "收纳树与二维空间工作区"
      },
      {
        "src": "assets/spatial-storage-3d.jpg",
        "alt": "Spatial Storage 的三维房间与家具预览",
        "caption": "三维空间总览"
      }
    ],
    "question": "物品既属于收纳层级，又位于真实空间中，怎样快速找到它？",
    "context": "项目将家、房间、家具、抽屉、收纳盒与物品组织成可搜索的层级，并在同一工作区提供二维平面与三维预览。",
    "constraints": [
      "收纳层级与空间位置需要各自清晰",
      "查找物品应优先于复杂的建模操作",
      "用户需要自主保存与迁移数据"
    ],
    "decisions": [
      [
        "先建立可搜索的收纳树",
        "用位置路径、名称、描述和标签定位物品。"
      ],
      [
        "区分逻辑归属与物理摆放",
        "收纳树中的层级变化与空间中的摆放分别编辑。"
      ],
      [
        "让数据由用户掌控",
        "采用浏览器本地存储并提供 JSON 导入与导出。"
      ]
    ],
    "outcome": "Web 原型包含项目切换、多级收纳树、搜索、模板、JSON 导入导出以及二维和三维空间工作区。"
  }
];

window.PORTFOLIO_COLLECTIONS = [
  {
    "id": "hardware",
    "label": "智能硬件",
    "description": "家庭语音触控终端与家庭网关，阅读产品定义、整机方案和设备形态。"
  },
  {
    "id": "data",
    "label": "数据分析看板",
    "description": "护眼体验、自动背光和设备行为时间轴，分别对应功能使用、环境响应与事件追踪。"
  },
  {
    "id": "architecture",
    "label": "建筑设计",
    "description": "从城市关系、功能组织到空间体验，阅读三组公共建筑方案。"
  },
  {
    "id": "research",
    "label": "独立产品",
    "description": "Spatial Storage 将收纳信息与空间视图连接成一个可操作的产品原型。"
  }
];
