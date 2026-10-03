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
        "src": "assets/hardware/home-gateway-studio-v2.webp",
        "alt": "家庭网关外观方案的白色盒体渲染图",
        "caption": "家庭网关 · 外观方案 渲染",
        "kind": "方案渲染",
        "original": "assets/hardware/home-gateway.png",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/hardware/cm5-gateway-studio-v2.webp",
        "alt": "带 Zigbee 的 CM5 家庭网关外观方案渲染图",
        "caption": "CM5 + Zigbee 外观方案 · 渲染",
        "kind": "方案渲染",
        "original": "assets/hardware/cm5-gateway-zigbee.png",
        "width": 1672,
        "height": 941
      }
    ],
    "question": "连接家庭设备的统一入口",
    "context": "比较基础版与 Zigbee 版的接口布局、家庭摆放和维护方式。",
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
    "outcome": "完成两种网关外观方案。",
    "status": "外观方案与样机工作记录",
    "evidenceNote": ""
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
        "src": "assets/hardware/voice-touch-terminal-studio-v2.webp",
        "alt": "家庭语音触控终端概念渲染：白色面板、黑色屏幕与橙色按钮",
        "caption": "外观方案 · 方案渲染",
        "kind": "方案渲染",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/hardware/voice-touch-terminal-86.png",
        "alt": "家庭语音触控终端早期外观方案的原始渲染图",
        "caption": "早期外观方案",
        "kind": "原始方案",
        "width": 900,
        "height": 700
      }
    ],
    "question": "把语音与触控整合为家庭控制终端",
    "context": "负责需求定义、MCU / 显示 / 通信选型，推进样机集成与小批量导入。",
    "constraints": [
      "语音与触控需要共同服务于家庭设备控制场景",
      "整机方案要同时考虑 MCU、显示、通信与成本约束",
      "样机集成需要为后续的小批量生产导入留出路径"
    ],
    "decisions": [
      [
        "从家庭场景定义能力",
        "明确控制入口与设备反馈。"
      ],
      [
        "整机选型与方案收敛",
        "权衡 MCU、显示、通信和 BOM。"
      ],
      [
        "从样机推进到导入",
        "跟进集成问题，推进小批量导入。"
      ]
    ],
    "outcome": "完成整机方案、样机集成与小批量导入。",
    "status": "整机方案 / 样机集成 / 小批量导入",
    "evidenceNote": ""
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
    "dataLens": [
      "产品问题 / 功能是否被理解并持续使用",
      "观察路径 / 触达 → 开启 → 设置偏好 → 留存",
      "判断用途 / 定位入口、解释与持续使用环节"
    ],
    "question": "从功能触达到持续使用",
    "context": "区分入口访问、主动开启与持续使用，定位护眼功能的体验断点。",
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
    ],
    "status": "分析方法展示",
    "evidenceNote": "模拟数据 · 展示分析方法",
    "outcome": "形成触达、转化与留存分析结构。"
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
    "dataLens": [
      "产品问题 / 自动调节何时偏离用户预期",
      "观察路径 / 环境光 → 屏幕亮度 → 手动干预",
      "判断用途 / 识别场景并为策略优化提供线索"
    ],
    "question": "找到自动调节偏离预期的场景",
    "context": "结合环境光、屏幕亮度和手动调整，定位策略偏差。",
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
    ],
    "status": "分析方法展示",
    "evidenceNote": "模拟数据 · 展示分析方法",
    "outcome": "形成使用模式、光照响应与干预分析结构。"
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
    "dataLens": [
      "产品问题 / 一次异常体验是怎样发生的",
      "观察路径 / 总体变化 → 设备片段 → 事件链",
      "判断用途 / 支持问题复现与跨事件定位"
    ],
    "question": "还原一次异常体验的过程",
    "context": "在统一时间轴上关联设备状态、应用、亮度与系统事件。",
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
    ],
    "status": "分析方法展示",
    "evidenceNote": "模拟数据 · 展示分析方法",
    "outcome": "形成从总体趋势下钻到事件片段的分析路径。"
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
        "caption": "城市轴线与场馆鸟瞰 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/dezhou-aerial.webp",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/architecture/dezhou-spatial-analysis-v2.webp",
        "alt": "六组展厅围合公共中心及城市入口的空间关系图",
        "caption": "城市轴线、展厅单元与公共中心 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/dezhou-concept-axis.webp",
        "width": 1672,
        "height": 940
      },
      {
        "src": "assets/architecture/dezhou-routes-analysis-v2.webp",
        "alt": "公共入口经中心大厅分配到六组展厅的流线关系图",
        "caption": "公共到达与展厅外围动线 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/dezhou-circulation.webp",
        "width": 1672,
        "height": 941
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
        "caption": "公共大厅 · 人行尺度 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/dezhou-interior.webp",
        "width": 2106,
        "height": 747
      }
    ],
    "architectureSections": [
      {
        "label": "01 / 场地",
        "title": "先看场馆如何接入城市",
        "images": [
          1
        ]
      },
      {
        "label": "02 / 组织",
        "title": "从中心大厅理解展厅与流线",
        "images": [
          2,
          3
        ]
      },
      {
        "label": "03 / 体验",
        "title": "从展厅跨度走向公共大厅",
        "images": [
          4,
          5
        ]
      }
    ],
    "question": "让会展空间连接城市",
    "context": "沿城市轴线组织展厅与中心大厅，分开公共到达与展览流线。",
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
    ],
    "status": "建筑概念方案",
    "evidenceNote": ""
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
        "caption": "方案一 · 场馆与屋顶公共空间 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/zhengzhou-aerial.webp",
        "width": 1491,
        "height": 1055
      },
      {
        "src": "assets/architecture/zhengzhou-site-analysis-v2.webp",
        "alt": "郑州高新区会展中心场地周边条件分析",
        "caption": "场地边界与周边城市资源 · 分析示意",
        "layout": "diagram",
        "original": "assets/architecture/zhengzhou-site.webp",
        "kind": "分析示意",
        "width": 1491,
        "height": 1055
      },
      {
        "src": "assets/architecture/zhengzhou-massing-analysis-v2.webp",
        "alt": "会展功能落位、体量塑形与城市互动的三步分析图",
        "caption": "功能落位、空间塑形与城市互动 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/zhengzhou-massing.webp",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/architecture/zhengzhou-program-analysis-v2.webp",
        "alt": "展览、公共大厅、会议与酒店的功能关系图",
        "caption": "复合功能围绕公共大厅组织 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/zhengzhou-program.webp",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/architecture/zhengzhou-masterplan.webp",
        "alt": "郑州高新区会展中心方案一总平面图",
        "caption": "总平面 · 入口与总体布局",
        "layout": "wide",
        "width": 1800,
        "height": 1273
      },
      {
        "src": "assets/architecture/zhengzhou-landscape-analysis-v2.webp",
        "alt": "场地边界与周边绿地之间的方向性连接示意",
        "caption": "场地与周边绿地的连接 · 分析示意",
        "layout": "diagram",
        "original": "assets/architecture/zhengzhou-landscape.webp",
        "kind": "分析示意",
        "width": 1491,
        "height": 1055
      },
      {
        "src": "assets/architecture/zhengzhou-street-redraw.webp",
        "alt": "郑州高新区会展中心日间沿街透视",
        "caption": "沿街视角 · 建筑与行人尺度 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/zhengzhou-street.webp",
        "width": 1491,
        "height": 1055
      }
    ],
    "architectureSections": [
      {
        "label": "01 / 判断",
        "title": "用地与会展需求一起决定体量",
        "images": [
          1
        ]
      },
      {
        "label": "02 / 推演",
        "title": "功能组合推动形态生成",
        "images": [
          2,
          3,
          4
        ]
      },
      {
        "label": "03 / 呈现",
        "title": "让城市界面与屋顶公共空间可见",
        "images": [
          5,
          6
        ]
      }
    ],
    "question": "在紧凑用地中组织复合功能",
    "context": "以公共大厅连接展览、会议和酒店，兼顾城市入口与街道尺度。",
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
    ],
    "status": "建筑概念方案",
    "evidenceNote": ""
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
        "caption": "公共中庭 · 天运楼框景 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/longchang-courtyard.webp",
        "width": 1491,
        "height": 1055
      },
      {
        "src": "assets/architecture/longchang-axis-analysis-v2.webp",
        "alt": "天运楼、石牌坊与公共中庭之间的轴线关系",
        "caption": "历史轴线进入公共中庭 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/longchang-axis.webp",
        "width": 1671,
        "height": 941
      },
      {
        "src": "assets/architecture/longchang-massing-analysis-v2.webp",
        "alt": "建筑拆分为六个单元围合中庭的过程",
        "caption": "六个单元围合中庭 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/longchang-massing.webp",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/architecture/longchang-program-analysis-v2.webp",
        "alt": "公共中庭与两侧功能空间的联系",
        "caption": "中庭连接两侧功能 · 分析示意",
        "layout": "diagram",
        "kind": "分析示意",
        "original": "assets/architecture/longchang-program.webp",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/architecture/longchang-aerial-redraw.webp",
        "alt": "重坊叠韵方案建筑与城市肌理的鸟瞰",
        "caption": "鸟瞰 · 建筑与历史轴线 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/longchang-aerial.webp",
        "width": 1672,
        "height": 941
      },
      {
        "src": "assets/architecture/longchang-street-redraw.webp",
        "alt": "重坊叠韵方案的沿街立面",
        "caption": "沿街视角 · 街道尺度 · 方案效果图",
        "layout": "wide",
        "kind": "方案效果图",
        "original": "assets/architecture/longchang-street.webp",
        "width": 1774,
        "height": 887
      }
    ],
    "architectureSections": [
      {
        "label": "01 / 文脉",
        "title": "历史轴线成为方案的起点",
        "images": [
          1
        ]
      },
      {
        "label": "02 / 生成",
        "title": "拆分体量，形成公共中庭",
        "images": [
          2,
          3
        ]
      },
      {
        "label": "03 / 感受",
        "title": "在鸟瞰与街景之间看建筑尺度",
        "images": [
          4,
          5
        ]
      }
    ],
    "question": "让历史轴线进入公共中庭",
    "context": "六个建筑单元围合中庭，以框景和顶部采光回应天运楼与石牌坊。",
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
    ],
    "status": "建筑概念方案",
    "evidenceNote": ""
  },
  {
    "slug": "spatial-storage",
    "category": "research",
    "categoryLabel": "独立产品",
    "index": "06",
    "title": "Spatial Storage 空间收纳",
    "subtitle": "把家庭物品清单与房间空间连接起来",
    "summary": "用可搜索的收纳路径连接 2D 布局和 3D 房间，从找到物品到定位所在家具。",
    "role": "个人项目 · 产品定义与 Web 开发",
    "period": "数字产品",
    "featured": true,
    "featuredOrder": 3,
    "media": [
      {
        "src": "assets/spatial-storage-home-3d-v2.webp",
        "alt": "新版 Spatial Storage 的家庭样例 3D 场景、搜索栏和视图工具条",
        "caption": "新版家庭样例 · 3D 空间总览",
        "kind": "应用截图",
        "width": 1600,
        "height": 1000
      },
      {
        "src": "assets/spatial-storage-home-2d-v2.webp",
        "alt": "家庭样例的二维平面与右侧收纳内容面板",
        "caption": "2D 布局 · 空间对象与收纳内容并置",
        "kind": "应用截图",
        "width": 1600,
        "height": 1000
      },
      {
        "src": "assets/spatial-storage-search-mobile-v2.webp",
        "alt": "手机视口中搜索 Batteries 并显示完整收纳路径和2D、3D定位按钮",
        "caption": "搜索物品 · 收纳路径与空间定位入口",
        "kind": "应用截图",
        "layout": "portrait",
        "width": 529,
        "height": 827
      },
      {
        "src": "assets/spatial-storage-locate-mobile-v2.webp",
        "alt": "手机视口中定位到书柜第三层的电池并显示物品位置说明",
        "caption": "定位所在层板 · 柜内摆放位置为示意",
        "kind": "应用截图",
        "layout": "portrait",
        "width": 529,
        "height": 827
      }
    ],
    "question": "从搜索物品到定位空间",
    "context": "以收纳树管理物品，通过 2D / 3D 视图定位所在家具与层板。",
    "constraints": [
      "收纳层级与空间位置需要各自清晰",
      "查找物品应优先于复杂的建模操作",
      "用户需要自主保存与迁移数据"
    ],
    "decisions": [
      [
        "搜索与定位",
        "按名称、备注和标签查找，定位到家具与层板。"
      ],
      [
        "布局编辑",
        "2D / 3D 共用网格、贴墙和碰撞约束。"
      ],
      [
        "本地保存",
        "IndexedDB 持久化，JSON 导入与导出。"
      ]
    ],
    "outcome": "本地 MVP：收纳管理、搜索定位、空间编辑、JSON 导入导出。",
    "status": "本地 Web MVP · 2026.10 更新",
    "evidenceNote": "本地 MVP · 家庭样例"
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

window.PORTFOLIO_WORK_RECORDS = [
  {
    "title": "网关样机与板卡",
    "media": [
      {
        "src": "assets/work/gateway-enclosures.webp",
        "alt": "两种颜色的网关外壳及对应板卡",
        "caption": "外壳与板卡",
        "layout": "photo",
        "kind": "实物照片",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "assets/work/gateway-ports.webp",
        "alt": "灰色和绿色外壳的接口侧面",
        "caption": "外壳与接口",
        "layout": "photo",
        "width": 1276,
        "height": 958
      },
      {
        "src": "assets/work/gateway-components.webp",
        "alt": "拆分展示的网关外壳与电路板",
        "caption": "结构与板卡拆分",
        "layout": "photo",
        "kind": "实物照片",
        "width": 1200,
        "height": 1600
      },
      {
        "src": "assets/work/gateway-assembly.webp",
        "alt": "网关内部板卡堆叠与支撑柱装配",
        "caption": "装配结构",
        "layout": "photo",
        "kind": "实物照片",
        "width": 960,
        "height": 1280
      },
      {
        "src": "assets/work/gateway-open-board.webp",
        "alt": "打开外壳的网关板卡、散热与连接线",
        "caption": "开壳观察",
        "layout": "photo",
        "kind": "实物照片",
        "width": 1200,
        "height": 1600
      },
      {
        "src": "assets/work/control-board.webp",
        "alt": "工作归档中的控制板细节",
        "caption": "板卡细节",
        "layout": "photo",
        "width": 1200,
        "height": 1600
      }
    ]
  },
  {
    "title": "移动平台",
    "media": [
      {
        "src": "assets/work/mobile-platform.webp",
        "alt": "移动平台 · 整机",
        "caption": "移动平台 · 整机",
        "layout": "photo",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "assets/work/mobile-platform-rear.webp",
        "alt": "移动平台 · 背面模块",
        "caption": "移动平台 · 背面模块",
        "layout": "photo",
        "width": 1600,
        "height": 1200
      },
      {
        "src": "assets/work/mobile-platform-workbench.webp",
        "alt": "工作台 · 接线与装配",
        "caption": "工作台 · 接线与装配",
        "layout": "photo",
        "width": 1200,
        "height": 1600
      }
    ]
  }
];
