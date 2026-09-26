window.PORTFOLIO_PROJECTS = [
  {
    slug: "voice-terminal",
    category: "hardware",
    categoryLabel: "智能硬件",
    index: "01",
    title: "家庭语音触控终端",
    subtitle: "从场景需求到可验证的 AIoT 终端",
    summary: "围绕家庭控制场景，统筹产品形态、器件、嵌入式交互与样机验证。",
    role: "产品主导 · 整机方案与交互",
    period: "2024—2025",
    visual: "device",
    featured: true,
    question: "怎样让多设备控制变得直观，同时满足安装、通信与成本约束？",
    context: "项目涉及语音触控终端、网关与设备联动。公开样板聚焦需求到验证的设计路径，具体客户、内部参数及供应链资料待脱敏。",
    constraints: ["无屏与有屏场景需要一致的控制逻辑", "终端形态需兼顾安装和运维", "软硬件方案需要经过样机与现场验证"],
    decisions: [
      ["先定义典型控制任务", "用真实使用动作组织功能和交互，再决定终端形态。"],
      ["让设备状态可追踪", "把触发、执行和反馈串成可检查的链路，便于联调与排错。"],
      ["以样机验证收敛方案", "把器件、界面和联动逻辑放在同一轮验证中。"]
    ],
    outcome: "现有简历记录该终端完成小规模量产导入。公开案例将在取得可展示材料后补充验证过程与结果证据。",
    evidence: ["产品形态与样机照片", "交互流程与界面稿", "系统架构与验证记录"]
  },
  {
    slug: "device-timeline",
    category: "data",
    categoryLabel: "数据分析",
    index: "02",
    title: "设备行为时间轴看板",
    subtitle: "把分散事件组织成可追问的分析链路",
    summary: "从设备、用户、功能和应用行为切入，设计可下钻的单用户时间轴分析方式。",
    role: "需求与分析框架 · 看板设计",
    period: "2026",
    visual: "timeline",
    featured: true,
    question: "当反馈和埋点分散在多条链路里，如何快速定位一次真实使用中的问题？",
    context: "屏显问题往往跨越设备状态、前台应用、亮度调整与系统事件。常态看板适合观察整体变化；定位单次问题时，需要把多条事件放回同一时间轴，并允许继续查看上下文。",
    constraints: ["不同数据源的字段与时间口径需要对齐", "分析路径要支持从总体表现下钻到具体事件", "单设备定位需在公开页面移除可识别信息"],
    decisions: [
      ["先梳理问题，再组织指标", "围绕产品判断建立链路，避免只堆叠数字。"],
      ["以时间轴连接事件", "帮助读者理解设备状态、功能触达和用户操作的先后关系。"],
      ["给异常保留解释入口", "把缺失埋点和版本断层作为数据质量问题明确标识。"]
    ],
    outcome: "现有简历记录看板方案通过质量会并落地。公开页展示分析结构与可交互的事件阅读方式；实际业务结果及验证记录待补。",
    evidence: ["脱敏指标字典", "一次完整的分析路径", "可公开的验证记录"]
  },
  {
    slug: "dezhou-exhibition-center",
    category: "architecture",
    categoryLabel: "建筑设计",
    index: "03",
    title: "德州国际会展中心",
    subtitle: "以城市轴线和展厅单元组织大型公共空间",
    summary: "从城市关系、场馆组合与内部流线推演概念方案。",
    role: "方案材料整理 · 个人承担部分待核实",
    period: "2022",
    visual: "architecture",
    featured: true,
    media: [
      { src: "assets/architecture/dezhou-aerial-redraw.webp", alt: "德州国际会展中心放射状场馆与城市水面关系鸟瞰", caption: "城市轴线与场馆鸟瞰", layout: "wide" },
      { src: "assets/architecture/dezhou-spatial-analysis-redraw.webp", alt: "六组展厅围合公共中心及城市入口的空间关系图", caption: "城市轴线、展厅单元与公共中心", layout: "diagram" },
      { src: "assets/architecture/dezhou-routes-analysis-redraw.webp", alt: "公共入口经中心大厅分配到六组展厅的流线关系图", caption: "公共到达与展厅外围动线", layout: "diagram" },
      { images: ["assets/architecture/dezhou-page-23.webp", "assets/architecture/dezhou-page-24.webp"], alt: "德州会展中心展厅内不同活动的平面图", caption: "展厅平面 · 两页连读", layout: "spread-plan" },
      { images: ["assets/architecture/dezhou-page-25.webp", "assets/architecture/dezhou-page-26.webp"], alt: "德州会展中心展厅室内的两个连续视角", caption: "展厅内部 · 两个连续视角", layout: "spread-room" },
      { src: "assets/architecture/dezhou-interior-redraw.webp", alt: "德州会展中心木质顶棚下的公共大厅", caption: "公共大厅 · 人行尺度", layout: "wide" }
    ],
    architectureSections: [
      { label: "01 / 场地", title: "先看场馆如何接入城市。", text: "城市轴线和公共入口进入建筑中心，展厅单元围绕这一核心展开。", images: [1] },
      { label: "02 / 组织", title: "从中心大厅理解展厅与流线。", text: "中心大厅承担到达与分配；展厅平面进一步展示空间在不同活动中的适配方式。", images: [2, 3] },
      { label: "03 / 体验", title: "从展厅跨度走向公共大厅。", text: "连续的展厅视角呈现大跨空间，公共大厅补足人在建筑中的尺度与氛围。", images: [4, 5] }
    ],
    question: "大尺度会展设施，如何在城市入口、展厅组织与公众体验之间建立清晰关系？",
    context: "概念方案从城市轴线出发，逐步展开展馆单元、功能与流线设计，并用鸟瞰和公共大厅视角检验空间体验。",
    constraints: ["场馆需要回应城市轴线和周边公共空间", "展厅单元与中央公共空间需形成易读的关系", "参观、布展和配套动线需要在概念阶段被检查"],
    analysisStatus: true,
    decisions: [["先确定城市接入方式", "场地与城市轴线分析先于建筑形态表达。"], ["用单元组织解释总体布局", "以展厅单元和中心空间的关系表达大体量建筑的内部秩序。"], ["让流线和空间表现互相校验", "分析图解释使用逻辑，效果图呈现公共空间的尺度与氛围。"]],
    outcome: "已展示概念方案的分析与表现材料。该项目的个人负责范围、方案采纳情况和公开授权仍需进一步核实。",
    evidence: ["个人承担内容与团队分工", "方案评审或采纳记录", "作品公开使用授权"]
  },
  {
    slug: "zhengzhou-exhibition-center",
    category: "architecture",
    categoryLabel: "建筑设计",
    index: "11",
    title: "郑州高新区会展中心",
    subtitle: "紧凑用地上的会展复合体构想",
    summary: "结合区位、会展需求与用地约束，呈现一种会展复合方案。",
    role: "方案材料整理 · 个人承担部分待核实",
    period: "2023",
    visual: "architecture",
    featured: false,
    media: [
      { src: "assets/architecture/zhengzhou-aerial-redraw.webp", alt: "郑州高新区会展中心方案一日景鸟瞰", caption: "方案一 · 场馆与屋顶公共空间", layout: "wide" },
      { src: "assets/architecture/zhengzhou-site.webp", alt: "郑州高新区会展中心场地周边条件分析", caption: "场地边界与周边城市资源", layout: "wide" },
      { src: "assets/architecture/zhengzhou-massing-analysis-redraw.webp", alt: "会展功能落位、体量塑形与城市互动的三步分析图", caption: "功能落位、空间塑形与城市互动", layout: "diagram" },
      { src: "assets/architecture/zhengzhou-program-analysis-redraw.webp", alt: "展览、公共大厅、会议与酒店的功能关系图", caption: "复合功能围绕公共大厅组织", layout: "diagram" },
      { src: "assets/architecture/zhengzhou-masterplan.webp", alt: "郑州高新区会展中心方案一总平面图", caption: "总平面 · 入口与总体布局", layout: "wide" },
      { src: "assets/architecture/zhengzhou-landscape.webp", alt: "郑州高新区会展中心屋顶绿化分析图", caption: "屋顶与城市绿地的连接", layout: "wide" },
      { src: "assets/architecture/zhengzhou-street-redraw.webp", alt: "郑州高新区会展中心日间沿街透视", caption: "沿街视角 · 建筑与行人尺度", layout: "wide" }
    ],
    architectureSections: [
      { label: "01 / 判断", title: "用地与会展需求一起决定体量。", text: "区位、周边业态和展览需求共同约束场地中的建筑规模。", images: [1] },
      { label: "02 / 推演", title: "功能组合推动形态生成。", text: "展览、会议、酒店与公共空间在紧凑地块中组合；一张总图用于核对入口和总体布局。", images: [2, 3, 4] },
      { label: "03 / 呈现", title: "让城市界面与屋顶公共空间可见。", text: "绿地系统和沿街视角补充鸟瞰，呈现建筑与周边城市空间的关系。", images: [5, 6] }
    ],
    question: "在有限用地中，如何兼顾展览、会议、酒店和城市公共空间？",
    context: "郑州高新区会展中心概念设计包含场地分析、功能策划和多个方案方向。本篇聚焦方案一：在紧凑地块中组合展览、会议、酒店及公共空间。",
    constraints: ["地块需容纳会展与配套功能", "多种到达方式及物流应分别组织", "屋顶与地面公共空间需要联系周边绿地"],
    analysisStatus: true,
    decisions: [["先判断展览规模与场地容量", "原方案用会展市场、用地和展厅单元推导配置；网页保留设计逻辑，不照搬过时统计表。"], ["以形态图说明多功能组合", "用空间塑形与功能落位图解释建筑体量。"], ["用总图与街景双重检查", "一张总图确认入口关系，街景补足鸟瞰中不易感知的人尺度。"]],
    outcome: "现有图像属于概念方案中的方案一。最终选型、个人负责范围和公开使用授权待核实。",
    evidence: ["个人工作范围", "最终方案选型与评审记录", "图像公开使用授权"]
  },
  {
    slug: "longchang-civic-center",
    category: "architecture",
    categoryLabel: "建筑设计",
    index: "12",
    title: "重坊叠韵",
    subtitle: "隆昌公共建筑方案 · 以牌坊街和夏布意象组织公共中庭",
    summary: "从历史轴线、体量拆分到中庭体验，呈现一组在地化设计推演。",
    role: "方案材料整理 · 个人承担部分待核实",
    period: "年份待核实",
    visual: "architecture",
    featured: false,
    media: [
      { src: "assets/architecture/longchang-courtyard-redraw.webp", alt: "重坊叠韵方案的公共中庭与框景", caption: "公共中庭 · 天运楼框景", layout: "wide" },
      { src: "assets/architecture/longchang-axis-analysis-redraw.webp", alt: "天运楼、石牌坊与公共中庭之间的轴线关系", caption: "历史轴线进入公共中庭", layout: "diagram" },
      { src: "assets/architecture/longchang-massing-analysis-redraw.webp", alt: "建筑拆分为六个单元围合中庭的过程", caption: "六个单元围合中庭", layout: "diagram" },
      { src: "assets/architecture/longchang-program-analysis-redraw.webp", alt: "公共中庭与两侧功能空间的联系", caption: "中庭连接两侧功能", layout: "diagram" },
      { src: "assets/architecture/longchang-aerial-redraw.webp", alt: "重坊叠韵方案建筑与城市肌理的鸟瞰", caption: "鸟瞰 · 建筑与历史轴线", layout: "wide" },
      { src: "assets/architecture/longchang-street-redraw.webp", alt: "重坊叠韵方案的沿街立面", caption: "沿街视角 · 街道尺度", layout: "wide" }
    ],
    architectureSections: [
      { label: "01 / 文脉", title: "历史轴线成为方案的起点。", text: "天运楼与石牌坊之间的城市关系，引导中庭的朝向与空间框景。", images: [1] },
      { label: "02 / 生成", title: "拆分体量，形成公共中庭。", text: "六个单元围合共享空间，中庭连接两侧的办公与服务功能。", images: [2, 3] },
      { label: "03 / 感受", title: "在鸟瞰与街景之间看建筑尺度。", text: "中庭是最有辨识度的空间体验；鸟瞰和沿街视角补充建筑与城市肌理的联系。", images: [4, 5] }
    ],
    question: "历史街区旁的公共建筑，怎样把地方意象转化为可体验的空间，而不止停留在立面符号？",
    context: "“重坊叠韵”沿天运楼与石牌坊的历史轴线组织场地，将建筑拆分为六个单元，并以牌坊框景和夏布意象塑造公共中庭。",
    constraints: ["建筑需要回应场地历史轴线", "公共中庭与两侧功能空间需要形成清晰关系", "地方意象要落到具体空间体验"],
    analysisStatus: true,
    decisions: [["延续天运楼与牌坊的视线关系", "让历史轴线参与场地组织和中庭朝向。"], ["化整为零形成中庭", "把单一大体量拆分为多个单元，建立层次和尺度。"], ["用框景和天窗表达在地性", "牌坊空间和夏布意象分别进入中庭形态与顶部采光构想。"]],
    outcome: "已展示方案概念、体量和空间效果。正式项目名称、年份、个人分工及公开使用授权待核实。",
    evidence: ["项目正式名称与年份", "个人负责范围", "图像公开使用授权"]
  },
  {
    slug: "agent-workflow",
    category: "workflow",
    categoryLabel: "Skill / Agent",
    index: "04",
    title: "数据分析 Agent 工作流",
    subtitle: "把字段知识与分析步骤组织成可复用流程",
    summary: "将指标口径、字段映射和查询知识整合进团队内部数据分析工具。",
    role: "流程定义 · 工具设计",
    period: "2026",
    visual: "workflow",
    featured: true,
    question: "如何减少重复解释指标、寻找字段和沟通查询口径的成本？",
    context: "现有简历记录基于公司内部 Agent 平台开发数据分析工具。这里展示的是通用工作流示意，非内部系统截图。独立创建的 Skill 将在提供实例后加入此栏目。",
    constraints: ["业务问题需要先映射到统一指标", "自动查询结果仍需人工复核", "内部提示词与数据源不可直接公开"],
    decisions: [
      ["将口径与字段分开维护", "便于定位问题来自业务定义还是数据映射。"],
      ["保留人工校验节点", "让分析结论能够回到原始定义和查询条件。"],
      ["先展示任务再展示技术", "让读者先理解工作流解决了什么问题。"]
    ],
    outcome: "当前仅以结构示意展示流程。公开演示所需的输入输出样本、评测方式和边界仍待补充。",
    evidence: ["脱敏输入与输出示例", "工作流图及失败分支", "Skill 文件、版本与复用说明"]
  },
  {
    slug: "aiot-requirements",
    category: "research",
    categoryLabel: "跨域研究",
    index: "05",
    title: "AIoT 设备需求结构化抽取",
    subtitle: "从设计文档到可复核的 BIM 数据",
    summary: "探索将非结构化设计文档中的设备需求转为结构化结果并进行人工复核。",
    role: "独立研究",
    period: "2025—2026",
    visual: "research",
    featured: false,
    question: "如何让分散在设计文档里的设备需求更完整、可追溯、可复核？",
    context: "研究结合文档解析、检索增强与人工复核。样板仅展示研究流程；实验数据与结果表需要从论文原文重新核对后再公开。",
    constraints: ["原始文档表达不统一", "输出需要匹配结构化字段", "自动抽取的结果必须允许人工检查"],
    decisions: [["定义可复核的数据结构", "让每个字段都能回到来源文档。"], ["分离抽取与校验", "便于识别遗漏、误匹配和不确定项。"]],
    outcome: "结果数值暂不在网站样板呈现，待与论文及公开权限核对。",
    evidence: ["公开文档样本", "抽取结果示例", "评测方法与误差分析"]
  },
  {
    slug: "revit-review",
    category: "workflow",
    categoryLabel: "Skill / Agent",
    index: "06",
    title: "Revit AI 合规检查流程",
    subtitle: "将规范检索、模型定位与复核连接起来",
    summary: "围绕建筑模型构件，探索规范条款检索、规则匹配与问题定位。",
    role: "独立研究",
    period: "2025—2026",
    visual: "workflow",
    featured: false,
    question: "能否把文本规范转成能在模型里被检查和复核的规则？",
    context: "研究涉及检索、规则结构化和 Revit 模型交互。样板仅呈现概念流程，不展示未经复核的性能主张。",
    constraints: ["法规文字与模型参数之间存在语义差异", "自动判断需要展示依据", "检查结果要能回到模型中的位置"],
    decisions: [["先定位依据，再运行检查", "让每一项预警带有可读的规则来源。"], ["在模型中反馈问题", "减少文字报告与空间位置之间的查找成本。"]],
    outcome: "完整案例需要补充公开演示视频、输入模型和结果核验。",
    evidence: ["流程与系统架构图", "经许可的模型演示", "人工复核与误报分析"]
  },
  {
    slug: "cm5-home-gateway",
    category: "hardware",
    categoryLabel: "智能硬件",
    index: "07",
    title: "CM5 家庭网关",
    subtitle: "面向家庭设备联动的网关产品形态",
    summary: "六方式产品目录中记录的独立网关方案，展示硬件形态与系统联动的设计方向。",
    role: "项目资料梳理 · 个人职责待核实",
    period: "六方式工作阶段",
    visual: "device",
    media: [
      { src: "assets/hardware/home-gateway.png", alt: "家庭网关外观方案的白色盒体渲染图", caption: "家庭网关 · 外观方案渲染图" },
      { src: "assets/hardware/cm5-gateway-zigbee.png", alt: "带 Zigbee 的 CM5 家庭网关外观方案渲染图", caption: "CM5 + Zigbee 版本 · 外观方案渲染图" }
    ],
    featured: false,
    question: "家庭中的多类设备，如何通过一款网关建立稳定、易维护的连接入口？",
    context: "六方式产品目录单独列有 CM5 家庭网关及 Zigbee 版本，并标记为“基本完成”。目前可确认的是项目存在与目录状态，具体硬件配置、职责和测试结果仍需从原始工程材料核实。",
    constraints: ["需明确接入的设备类型与通信方式", "设备形态需要考虑安装和维护", "完成状态不能替代联调及现场验证记录"],
    analysisStatus: true,
    decisions: [["对照两项网关记录", "目录分别记录了家庭网关与 Zigbee 版本；两者差异待补材料说明。"], ["从连接任务组织案例", "正式案例应按设备接入、状态反馈和异常处理展示方案。"]],
    outcome: "归档目录标记该网关“基本完成”；没有足够材料确认部署规模、稳定性或个人负责范围。",
    evidence: ["经许可公开的外观或样机图", "连接架构和版本差异", "联调、安装或现场验证记录"]
  },
  {
    slug: "voice-ui-prototype",
    category: "hardware",
    categoryLabel: "智能硬件",
    index: "08",
    title: "1.85 英寸语音助手交互原型",
    subtitle: "把小屏界面带入嵌入式设备",
    summary: "围绕小尺寸触控屏开展界面设计与嵌入式移植探索。",
    role: "界面与嵌入式资料梳理 · 个人职责待核实",
    period: "六方式工作阶段",
    visual: "device",
    media: [
      { src: "assets/hardware/voice-assistant-1-85.png", alt: "1.85 英寸语音助手圆形设备外观渲染图", caption: "1.85 英寸语音助手 · 外观方案渲染图" },
      { src: "assets/hardware/circle-ui-exploration.png", alt: "同期圆形屏幕交互界面的两屏探索图", caption: "同期圆屏界面探索 · 与该整机版本的对应关系待核实" }
    ],
    featured: false,
    question: "有限的屏幕空间，怎样清楚呈现语音交互的状态与反馈？",
    context: "六方式产品目录列有 1.85 英寸语音助手，状态为“基本完成”；另有 SquareLine Studio 项目和界面移植 ESP-IDF 的过程笔记。现有目录尚不足以证明这些文件属于同一最终产品版本。",
    constraints: ["小屏需要聚焦关键状态", "界面资源必须适配嵌入式运行环境", "原型与最终产品的对应关系尚待核实"],
    analysisStatus: true,
    decisions: [["梳理核心反馈状态", "正式案例将用交互流程说明语音输入、响应及异常的呈现。"], ["保留移植过程证据", "归档笔记记录了界面生成、工程集成和调试步骤。"]],
    outcome: "产品目录记录“基本完成”；实际交互效果、固件版本与测试结论待补。",
    evidence: ["经许可公开的界面图或录屏", "交互状态图", "对应工程版本与设备测试记录"]
  },
  {
    slug: "eye-care-dashboard",
    category: "data",
    categoryLabel: "数据分析",
    index: "09",
    title: "护眼功能数据看板",
    subtitle: "从功能触达到持续使用的分析结构",
    summary: "以页面访问、功能开启、设置偏好和版本差异组织护眼功能的分析示意。",
    role: "看板示意资料整理 · 个人职责与上线范围待核实",
    period: "OPPO 实习阶段",
    visual: "eye",
    featured: false,
    question: "怎样判断护眼功能是否被看见、开启，并在真实使用中持续发挥作用？",
    context: "原有看板结构覆盖模块总览、舒眠模式、护眼模式、定时与色温设置、AI 主动护眼、屏幕显示调节，以及留存和版本机型对比。页面按触达、使用深度、长期保持三层组织这些问题。",
    constraints: ["触达、开启和生效需要区分口径", "不同功能的埋点覆盖可能不同", "示意图不能直接视为已上线看板"],
    analysisStatus: true,
    decisions: [["按使用链路梳理指标", "由页面访问与转化进入功能开启、设置偏好和持续使用。"], ["记录版本对比入口", "示意结构包含不同版本与机型的使用对比。"], ["明确未确认数据", "缺少埋点或口径时先标记待确认，不以示例数值代替。"]],
    outcome: "已整理可核对的指标结构与分析路径。实际指标、上线状态和业务影响仍待核实。",
    evidence: ["经许可的指标口径", "埋点覆盖表", "一次可公开的分析路径"]
  },
  {
    slug: "auto-backlight-dashboard",
    category: "data",
    categoryLabel: "数据分析",
    index: "10",
    title: "自动背光分析看板",
    subtitle: "从环境光到屏幕亮度与手动干预",
    summary: "将环境光、亮度等级、自动模式时长与手动拖动事件组织为一条分析线索。",
    role: "分析框架与页面设计 · 原项目职责待核实",
    period: "OPPO 实习阶段",
    visual: "backlight",
    featured: false,
    question: "自动调节何时符合场景，又在什么时刻让用户主动改动亮度？",
    context: "背光分析同时涉及自动与手动使用时长、环境光和亮度的停留分布、拖动事件发生时的状态，以及前台应用。页面先看整体方式，再下钻到调整现场与应用场景。",
    constraints: ["环境光与屏幕亮度必须用不同单位解释", "手动拖动事件需要放回发生时的使用场景", "原始埋点和真实设备信息不能进入公开页面"],
    analysisStatus: true,
    decisions: [["用同一时间轴并置两条变化", "环境光和亮度采用各自坐标，表达响应关系而非简单数值比较。"], ["将主动调整作为注释", "拖动事件用于追问自动调节是否贴合场景。"], ["把分布放在趋势之后", "先看具体变化，再读不同亮度区间的停留构成。"]],
    outcome: "页面呈现从模式分布到手动干预的分析路径；真实看板的上线范围、分析结论和个人贡献待核实。",
    evidence: ["可公开的指标定义", "脱敏事件样本", "真实分析结论的公开版本"]
  },
  {
    slug: "spatial-storage",
    category: "research",
    categoryLabel: "跨域研究",
    index: "13",
    title: "Spatial Storage 空间收纳",
    subtitle: "把家庭物品清单与房间空间连接起来",
    summary: "从“东西在哪里”出发，设计收纳树、搜索与可视化空间工作区。",
    role: "个人项目 · 产品与 Web 原型",
    period: "迭代中",
    visual: "research",
    featured: false,
    statusLabel: "可运行 Web 原型",
    evidenceLabel: "当前实现",
    media: [
      { src: "assets/spatial-storage-overview.jpg", alt: "Spatial Storage 样例项目的收纳树、二维平面与内容面板", caption: "收纳树与二维空间工作区 · 样例项目" },
      { src: "assets/spatial-storage-3d.jpg", alt: "Spatial Storage 样例项目的三维房间与家具预览", caption: "三维空间总览 · 样例项目" }
    ],
    question: "一件物品既属于收纳层级，又位于真实空间中，怎样让人快速找到它？",
    context: "项目以家庭收纳管理为起点，将家、房间、家具、抽屉、收纳盒与物品组织成可搜索的层级，并在同一工作区提供轻量二维平面和三维预览。当前版本是浏览器端原型，示例界面使用项目自带样例数据。",
    constraints: ["收纳层级与二维、三维位置需要各自保持清晰", "查找物品应优先于复杂的建模操作", "没有账号与云端同步时，数据需要由用户自行导出保存"],
    decisions: [
      ["先建立可搜索的收纳树", "用位置路径、名称、描述和标签帮助用户定位物品，再扩展空间表达。"],
      ["区分逻辑归属与物理摆放", "收纳树中的移动只改变层级；空间中的对象位置由用户单独编辑。"],
      ["让数据留在浏览器", "项目使用浏览器本地存储，并提供经过结构校验的 JSON 导入与导出。"]
    ],
    outcome: "当前可运行版本包含项目切换、多级收纳树、搜索、模板、JSON 导入导出及轻量二维／三维空间工作区。数据保存在当前浏览器；跨设备同步、账号和后端服务尚未实现。",
    evidence: ["可运行的 Web 原型", "二维与三维界面截图", "项目源代码中的数据模型与导入导出实现"]
  }
];

// 一个领域可以有多篇已整理案例，也可以保留尚未整理的项目位置。
// 待补项不进入案例详情页，也不计为已完成案例。
window.PORTFOLIO_COLLECTIONS = [
  {
    id: "architecture",
    label: "建筑设计",
    description: "按项目分别呈现空间问题、设计推演、团队协作和个人贡献。",
    pending: [
      { title: "建筑学毕业设计", note: "待补设计主题、图纸和过程材料" }
    ]
  },
  {
    id: "hardware",
    label: "智能硬件",
    description: "从家庭终端、小屏交互到网关，各自呈现不同的产品任务与验证过程。",
    pending: [
      { title: "模块化电箱控制设备", note: "归档标记为大体完成、未装配测试；待核实职责与后续状态" },
      { title: "六边形控制器与传感器", note: "归档标记为基本完成；待补功能、验证与可公开素材" }
    ]
  },
  {
    id: "data",
    label: "数据分析看板",
    description: "三个方向：护眼体验、自动背光、设备行为时间轴。每篇直接呈现风格化图表与分析路径。",
    pending: []
  },
  {
    id: "workflow",
    label: "Skill / Agent 工作流",
    description: "按工具或工作流分别展示输入、输出、人工复核和复用方式。",
    pending: [
      { title: "个人创建的 Skill", note: "待补具体 Skill、示例输入输出和公开文件" }
    ]
  },
  {
    id: "research",
    label: "跨域研究",
    description: "连接空间、数据结构和数字产品的研究与原型实践。",
    pending: []
  }
];
