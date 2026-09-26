const projects = window.PORTFOLIO_PROJECTS || [];
const collectionOrder = ["hardware", "data", "architecture", "workflow", "research"];
const collections = [...(window.PORTFOLIO_COLLECTIONS || [])].sort((a, b) => collectionOrder.indexOf(a.id) - collectionOrder.indexOf(b.id));
const page = document.body.dataset.page;

function visual(type, compact = false) {
  const caption = '<span class="visual-caption">结构示意 · 待替换真实素材</span>';
  if (type === 'device') return `<div class="visual visual-device ${compact ? 'compact' : ''}" role="img" aria-label="智能终端结构示意，待替换真实照片"><div class="device-orbit orbit-a"></div><div class="device-orbit orbit-b"></div><div class="device-body"><div class="device-screen"><span class="device-dot"></span><span class="device-temp">21°</span><span class="device-line"></span><span class="device-line short"></span></div><div class="device-base"></div></div><div class="visual-marker marker-a">01 / INPUT</div><div class="visual-marker marker-b">02 / RESPONSE</div>${caption}</div>`;
  if (type === 'data') return `<div class="visual visual-data ${compact ? 'compact' : ''}" role="img" aria-label="数据分析看板结构示意，数据为虚构"><div class="data-window"><div class="data-top"><i></i><i></i><i></i><span>ANALYSIS / EXAMPLE</span></div><div class="data-inner"><div class="data-sidebar"><span></span><span></span><span></span><span></span></div><div class="data-main"><div class="data-metrics"><b>REACH</b><b>USAGE</b><b>STATE</b></div><div class="data-chart"><div class="chart-path"></div><i class="point p1"></i><i class="point p2"></i><i class="point p3"></i><i class="point p4"></i></div><div class="data-rows"><span></span><span></span><span></span></div></div></div></div>${caption}</div>`;
  if (type === 'architecture') return `<div class="visual visual-architecture ${compact ? 'compact' : ''}" role="img" aria-label="建筑平面关系示意，不代表真实项目图纸"><div class="plan"><span class="plan-wing wing-one"></span><span class="plan-wing wing-two"></span><span class="plan-wing wing-three"></span><span class="plan-wing wing-four"></span><span class="plan-core"></span><span class="plan-path path-one"></span><span class="plan-path path-two"></span><span class="plan-dot dot-one"></span><span class="plan-dot dot-two"></span><span class="plan-dot dot-three"></span></div><span class="plan-label label-one">PUBLIC</span><span class="plan-label label-two">SERVICE</span><span class="plan-label label-three">FLOW</span>${caption}</div>`;
  if (type === 'workflow') return `<div class="visual visual-workflow ${compact ? 'compact' : ''}" role="img" aria-label="Agent 工作流结构示意，待替换真实流程"><div class="flow-rail"><div class="flow-node"><small>INPUT</small><b>问题</b></div><span class="flow-link"></span><div class="flow-node"><small>MAP</small><b>口径</b></div><span class="flow-link"></span><div class="flow-node strong"><small>AGENT</small><b>执行</b></div><span class="flow-link"></span><div class="flow-node"><small>CHECK</small><b>复核</b></div></div><div class="flow-branch"><span>异常 → 返回人工判断</span></div>${caption}</div>`;
  return `<div class="visual visual-research ${compact ? 'compact' : ''}" role="img" aria-label="文档解析与数据结构示意，待替换真实研究材料"><div class="paper-sheet"><span></span><span></span><span></span><span></span><span></span></div><div class="research-arrow">→</div><div class="json-sheet"><b>{</b><span>"device": ...</span><span>"location": ...</span><span>"evidence": ...</span><b>}</b></div>${caption}</div>`;
}

function projectVisual(project, compact = false) {
  if (window.LIEFLAT_PORTFOLIO?.has(project.slug)) return window.LIEFLAT_PORTFOLIO.preview(project);
  if (project.media?.length) {
    const item = project.media[0];
    return `<figure class="visual visual-photo ${compact ? 'compact' : ''}"><img src="${item.src}" alt="${item.alt}" loading="${compact ? 'lazy' : 'eager'}" /><figcaption class="visual-caption">${item.caption}</figcaption></figure>`;
  }
  return visual(project.visual, compact);
}

function featuredRow(project, position) {
  return `<a class="feature-row row-${position}" href="project.html?slug=${project.slug}"><div class="feature-meta"><span>${project.index} / ${project.categoryLabel}</span><span>${project.period}</span></div><div class="feature-copy"><h3>${project.title}</h3><p>${project.summary}</p><span class="feature-role">${project.role}</span></div><div class="feature-visual">${projectVisual(project, true)}</div><span class="row-arrow" aria-hidden="true">↗</span></a>`;
}

function workRow(project) {
  return `<a class="work-row" href="project.html?slug=${project.slug}"><span class="work-index">${project.index}</span><div class="work-row-text"><span class="small-label">项目 / ${project.period}</span><h3>${project.title}</h3><p>${project.subtitle}</p></div><div class="work-preview">${projectVisual(project, true)}</div><span class="work-arrow" aria-hidden="true">↗</span></a>`;
}

function collectionSection(collection) {
  const known = projects.filter(project => project.category === collection.id);
  if (collection.id === 'data') {
    const order = ['eye-care-dashboard', 'auto-backlight-dashboard', 'device-timeline'];
    known.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  }
  const pending = collection.pending.map(slot => `<div class="pending-row"><span class="pending-symbol" aria-hidden="true">＋</span><div><span class="small-label">待补项目位置</span><h3>${slot.title}</h3><p>${slot.note}</p></div><span class="pending-status">尚无案例详情</span></div>`).join('');
  return `<section class="collection-section" id="category-${collection.id}" aria-labelledby="heading-${collection.id}"><div class="collection-heading"><div><span class="small-label">领域 / ${collection.id.toUpperCase()}</span><h2 id="heading-${collection.id}">${collection.label}</h2><p>${collection.description}</p></div><div class="collection-count"><strong>${String(known.length).padStart(2, '0')}</strong><span>篇案例样板<br />${collection.pending.length} 个待补位置</span></div></div><div class="collection-items">${known.map(workRow).join('')}${pending}</div></section>`;
}

function domainLink(collection) {
  const known = projects.filter(project => project.category === collection.id).length;
  return `<a class="domain-link" href="work.html?category=${collection.id}"><div><span class="small-label">${String(known).padStart(2, '0')} 篇案例样板 · ${collection.pending.length} 个待补位置</span><h3>${collection.label}</h3></div><span aria-hidden="true">↗</span></a>`;
}

function architectureStory(project) {
  if (!project.architectureSections) return '';
  const chapters = project.architectureSections.map((chapter, index) => `<section class="architecture-chapter" aria-labelledby="architecture-chapter-${index}"><div class="architecture-chapter-copy"><p class="small-label">${chapter.label}</p><h3 id="architecture-chapter-${index}">${chapter.title}</h3><p>${chapter.text}</p></div><div class="architecture-chapter-images">${chapter.images.map(imageIndex => { const item = project.media[imageIndex]; const media = item.images ? `<div class="architecture-spread">${item.images.map((src, page) => `<img src="${src}" alt="${item.alt}（${page + 1}）" loading="lazy" />`).join('')}</div>` : `<img src="${item.src}" alt="${item.alt}" loading="lazy" />`; return `<figure class="architecture-figure ${item.layout || 'wide'}">${media}<figcaption>${item.caption}</figcaption></figure>`; }).join('')}</div></section>`).join('');
  return `<div class="architecture-story section-shell" aria-label="方案图像与分析"><div class="architecture-story-heading"><p class="small-label">方案图册</p><h2>从场地判断到空间表现</h2><p>以关键分析图和空间视角，阅读方案形成的过程。</p></div>${chapters}</div>`;
}

function renderProject(project) {
  document.title = `${project.title} · 弓弼飞`;
  const constraints = project.constraints.map((item, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${item}</li>`).join('');
  const decisions = project.decisions.map(([title, description], i) => `<div class="decision"><span>${String(i + 1).padStart(2, '0')}</span><div><h3>${title}</h3><p>${description}</p></div></div>`).join('');
  const evidence = project.evidence.map(item => `<li>${item}</li>`).join('');
  const gallery = project.architectureSections ? architectureStory(project) : project.media?.length > 1 ? `<div class="project-gallery section-shell" aria-label="更多项目图片">${project.media.slice(1).map(item => `<figure><img src="${item.src}" alt="${item.alt}" loading="lazy" /><figcaption>${item.caption}</figcaption></figure>`).join('')}</div>` : '';
  const cover = window.LIEFLAT_PORTFOLIO?.has(project.slug) ? window.LIEFLAT_PORTFOLIO.showcase(project) : `<div class="project-cover">${projectVisual(project)}</div>`;
  const analysisLabel = project.analysisStatus ? '归档线索与案例拆解' : '关键决策';
  const analysisHeading = project.analysisStatus ? '依据现有材料梳理展示路径。' : '每一步都指向可检查的理由。';
  return `<div class="project-page ${project.architectureSections ? 'architecture-page' : ''}"><header class="project-hero section-shell"><a class="back-link" href="work.html?category=${project.category}">← 返回${project.categoryLabel}项目集合</a><div class="project-head"><div><p class="small-label">${project.categoryLabel} / ${project.period}</p><h1>${project.title}</h1><p class="project-subtitle">${project.subtitle}</p></div><div class="project-index">${project.index}<span>/ ${String(projects.length).padStart(2, '0')}</span></div></div><div class="project-meta"><div><span>角色</span><strong>${project.role}</strong></div><div><span>内容状态</span><strong>${project.statusLabel || (project.category === 'data' ? '分析案例 · 结果待补' : project.architectureSections ? '归档方案 · 职责待核实' : '结构示例 · 结果与职责待核实')}</strong></div></div></header>${cover}${gallery}<div class="project-body section-shell"><aside class="project-toc" aria-label="案例目录"><span>本页内容</span><a href="#challenge">问题与背景</a><a href="#constraints">设计约束</a><a href="#decisions">${analysisLabel}</a><a href="#outcome">结果与证据</a></aside><div class="project-article"><section id="challenge" class="project-section"><p class="small-label">问题与背景</p><h2>${project.question}</h2><p>${project.context}</p></section><section id="constraints" class="project-section"><p class="small-label">设计约束</p><h2>先弄清必须解决什么。</h2><ol class="constraint-list">${constraints}</ol></section><section id="decisions" class="project-section"><p class="small-label">${analysisLabel}</p><h2>${analysisHeading}</h2><div class="decision-list">${decisions}</div></section><section id="outcome" class="project-section"><p class="small-label">结果与证据</p><h2>结论需要对应材料。</h2><p>${project.outcome}</p><div class="evidence-box"><b>${project.evidenceLabel || "正式案例待补"}</b><ul>${evidence}</ul></div></section></div></div><div class="next-project section-shell"><span>继续浏览</span><a href="work.html?category=${project.category}">查看同领域项目 <span>↗</span></a></div></div>`;
}

function setupNav() {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', '打开菜单');
  }));
}

setupNav();
if (page === 'home') {
  const gateway = projects.find(item => item.slug === 'cm5-home-gateway');
  const eye = projects.find(item => item.slug === 'eye-care-dashboard');
  const architecture = projects.find(item => item.slug === 'dezhou-exhibition-center');
  document.getElementById('hero-visual').innerHTML = (architecture ? projectVisual(architecture, true) : visual('architecture', true)) + (gateway ? projectVisual(gateway, true) : visual('device', true)) + (eye ? projectVisual(eye, true) : visual('data', true)) + visual('workflow', true);
  document.getElementById('featured-list').innerHTML = projects.filter(item => item.featured).map(featuredRow).join('');
  document.getElementById('domain-list').innerHTML = collections.map(domainLink).join('');
  window.LIEFLAT_PORTFOLIO?.mountPreviews(document);
}
if (page === 'work') {
  const list = document.getElementById('work-list');
  const filters = [...document.querySelectorAll('.filter')];
  const applyFilter = category => {
    const visible = category === 'all' ? collections : collections.filter(item => item.id === category);
    list.innerHTML = visible.map(collectionSection).join('');
    window.LIEFLAT_PORTFOLIO?.mountPreviews(list);
    filters.forEach(button => {
      const active = button.dataset.filter === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const url = new URL(location.href);
    if (category === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', category);
    history.replaceState(null, '', url);
  };
  filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  const requested = new URLSearchParams(location.search).get('category');
  applyFilter(collections.some(item => item.id === requested) ? requested : 'all');
}
if (page === 'project') {
  const slug = new URLSearchParams(location.search).get('slug');
  const project = projects.find(item => item.slug === slug);
  document.getElementById('project-content').innerHTML = project ? renderProject(project) : '<div class="not-found section-shell"><p class="small-label">未找到案例</p><h1>这个项目尚未加入作品集。</h1><a class="button button-primary" href="work.html">返回作品索引 <span>↗</span></a></div>';
  if (project) window.LIEFLAT_PORTFOLIO?.mount(project.slug);
}
