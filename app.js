const projects = window.PORTFOLIO_PROJECTS || [];
const collectionOrder = ["architecture", "hardware", "data", "research"];
const collections = [...(window.PORTFOLIO_COLLECTIONS || [])].sort((a, b) => collectionOrder.indexOf(a.id) - collectionOrder.indexOf(b.id));
const page = document.body.dataset.page;

function projectVisual(project, compact = false) {
  if (window.LIEFLAT_PORTFOLIO?.has(project.slug)) return window.LIEFLAT_PORTFOLIO.preview(project);
  if (project.media?.length) {
    const item = project.media[0];
    return `<figure class="visual visual-photo ${compact ? 'compact' : ''}"><img src="${item.src}" alt="${item.alt}" loading="${compact ? 'lazy' : 'eager'}" /><figcaption class="visual-caption">${item.caption}</figcaption></figure>`;
  }
  return '';
}

function featuredRow(project, position) {
  return `<a class="feature-row row-${position}" href="project.html?slug=${project.slug}"><div class="feature-meta"><span>${project.index} / ${project.categoryLabel}</span><span>${project.period}</span></div><div class="feature-copy"><h3>${project.title}</h3><p>${project.summary}</p></div><div class="feature-visual">${projectVisual(project, true)}</div><span class="row-arrow" aria-hidden="true">↗</span></a>`;
}

function domainLink(collection) {
  const known = projects.filter(project => project.category === collection.id).length;
  return `<a class="domain-link" href="work.html?category=${collection.id}"><div><span class="small-label">${String(known).padStart(2, '0')} 件作品</span><h3>${collection.label}</h3></div><span aria-hidden="true">↗</span></a>`;
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
  const gallery = project.architectureSections ? architectureStory(project) : project.media?.length > 1 ? `<div class="project-gallery section-shell" aria-label="更多项目图片">${project.media.slice(1).map(item => `<figure><img src="${item.src}" alt="${item.alt}" loading="lazy" /><figcaption>${item.caption}</figcaption></figure>`).join('')}</div>` : '';
  const cover = window.LIEFLAT_PORTFOLIO?.has(project.slug) ? window.LIEFLAT_PORTFOLIO.showcase(project) : `<div class="project-cover">${projectVisual(project)}</div>`;
  const role = project.role ? `<div class="project-meta"><div><span>角色</span><strong>${project.role}</strong></div></div>` : '';
  const outcomeLink = project.outcome ? '<a href="#outcome">项目呈现</a>' : '';
  const outcomeSection = project.outcome ? `<section id="outcome" class="project-section"><p class="small-label">项目呈现</p><h2>从方案走向可见的作品。</h2><p>${project.outcome}</p></section>` : '';
  return `<div class="project-page ${project.architectureSections ? 'architecture-page' : ''}"><header class="project-hero section-shell"><a class="back-link" href="work.html?category=${project.category}">← 返回${project.categoryLabel}项目集合</a><div class="project-head"><div><p class="small-label">${project.categoryLabel} / ${project.period}</p><h1>${project.title}</h1><p class="project-subtitle">${project.subtitle}</p></div><div class="project-index">${project.index}<span>/ ${String(projects.length).padStart(2, '0')}</span></div></div>${role}</header>${cover}${gallery}<div class="project-body section-shell"><aside class="project-toc" aria-label="案例目录"><span>本页内容</span><a href="#challenge">问题与背景</a><a href="#constraints">设计约束</a><a href="#decisions">关键决策</a>${outcomeLink}</aside><div class="project-article"><section id="challenge" class="project-section"><p class="small-label">问题与背景</p><h2>${project.question}</h2><p>${project.context}</p></section><section id="constraints" class="project-section"><p class="small-label">设计约束</p><h2>方案需要回应的条件</h2><ol class="constraint-list">${constraints}</ol></section><section id="decisions" class="project-section"><p class="small-label">关键决策</p><h2>从问题走向方案。</h2><div class="decision-list">${decisions}</div></section>${outcomeSection}</div></div><div class="next-project section-shell"><span>继续浏览</span><a href="work.html?category=${project.category}">查看同领域项目 <span>↗</span></a></div></div>`;
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
  const featured = projects.filter(item => item.featured).sort((a, b) => collectionOrder.indexOf(a.category) - collectionOrder.indexOf(b.category));
  document.getElementById('featured-list').innerHTML = featured.map(featuredRow).join('');
  document.getElementById('domain-list').innerHTML = collections.map(domainLink).join('');
  window.LIEFLAT_PORTFOLIO?.mountPreviews(document);
}
if (page === 'work') {
  const list = document.getElementById('work-list');
  const detail = document.getElementById('work-detail');
  const filters = [...document.querySelectorAll('.filter')];
  let selectedSlug = null;
  const displayOrder = ['dezhou-exhibition-center', 'zhengzhou-exhibition-center', 'longchang-civic-center', 'cm5-home-gateway', 'voice-ui-prototype', 'eye-care-dashboard', 'auto-backlight-dashboard', 'device-timeline', 'spatial-storage'];
  const ordered = [...projects].sort((a, b) => displayOrder.indexOf(a.slug) - displayOrder.indexOf(b.slug));
  const detailMarkup = project => `<div class="detail-top"><span>${project.index} / ${String(projects.length).padStart(2, '0')} · ${project.categoryLabel}</span><span>${project.period}</span></div><h2>${project.title}</h2><p class="detail-question">${project.question}</p><div class="detail-media category-${project.category}">${projectVisual(project, true)}</div><p class="detail-summary">${project.summary}</p><a class="detail-cta" href="project.html?slug=${project.slug}">阅读完整案例 <span aria-hidden="true">↗</span></a>`;
  const select = slug => {
    const project = projects.find(item => item.slug === slug);
    if (!project) return;
    selectedSlug = slug;
    detail.innerHTML = detailMarkup(project);
    list.querySelectorAll('.index-row').forEach(row => row.setAttribute('aria-selected', String(row.dataset.slug === slug)));
    window.LIEFLAT_PORTFOLIO?.mountPreviews(detail);
  };
  const applyFilter = category => {
    const visible = category === 'all' ? ordered : ordered.filter(item => item.category === category);
    list.innerHTML = visible.map(project => `<button class="index-row" type="button" data-slug="${project.slug}" aria-selected="false"><span class="index-num">${project.index}</span><span class="index-title">${project.title}<small>${project.subtitle}</small></span><span class="index-category">${project.categoryLabel}</span><span class="index-arrow" aria-hidden="true">↗</span></button>`).join('');
    list.querySelectorAll('.index-row').forEach(row => {
      row.addEventListener('click', () => select(row.dataset.slug));
      row.addEventListener('focus', () => select(row.dataset.slug));
      row.addEventListener('keydown', event => {
        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
        event.preventDefault();
        const rows = [...list.querySelectorAll('.index-row')];
        const next = rows[Math.max(0, Math.min(rows.length - 1, rows.indexOf(row) + (event.key === 'ArrowDown' ? 1 : -1)))];
        next.focus();
      });
    });
    select(visible.some(item => item.slug === selectedSlug) ? selectedSlug : visible[0]?.slug);
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
  document.getElementById('project-content').innerHTML = project ? renderProject(project) : '<div class="not-found section-shell"><p class="small-label">未找到作品</p><h1>请从作品索引继续浏览。</h1><a class="button button-primary" href="work.html">返回作品索引 <span>↗</span></a></div>';
  if (project) window.LIEFLAT_PORTFOLIO?.mount(project.slug);
}
