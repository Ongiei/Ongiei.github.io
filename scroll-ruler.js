/* THESIS: Chapters travel up a drawing scale and unfold into a fixed heading.
   WORLD: Existing paper, ink, blue annotations and display type.
   STORY: Follow the chapter, read the work, jump to another part when needed.
   VIEW: A reserved desktop gutter; a quiet bottom indicator on touch screens.
   MOTION: Scroll-driven letters only, reversible, with no continuous idle loop. */
(() => {
  if (document.body.dataset.page !== 'home') return;
  const sections = [...document.querySelectorAll('[data-ruler-label]')];
  if (!sections.length) return;
  const clamp = value => Math.max(0, Math.min(1, value));
  const ease = value => value < .5 ? 4 * value ** 3 : 1 - (-2 * value + 2) ** 3 / 2;
  const mix = (from, to, progress) => from + (to - from) * progress;
  const simpleMedia = matchMedia('(max-width: 1099px), (pointer: coarse), (prefers-reduced-motion: reduce)');
  const root = document.createElement('nav');
  root.className = 'scroll-ruler';
  root.setAttribute('aria-label', '首页章节导航');
  root.innerHTML = '<div class="ruler-rail" role="scrollbar" tabindex="0" aria-label="页面阅读进度" aria-controls="main" aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="ruler-ticks" aria-hidden="true"></div><div class="ruler-needle" aria-hidden="true"><span class="ruler-progress"></span></div></div><div class="ruler-compact"><span class="ruler-compact-line" aria-hidden="true"></span><a class="ruler-compact-link" href="#main"><span>↑</span><span>首页</span></a><span class="ruler-compact-progress" aria-hidden="true">0%</span></div>';
  const rail = root.querySelector('.ruler-rail');
  const ticks = root.querySelector('.ruler-ticks');
  const needle = root.querySelector('.ruler-needle');
  const progressText = root.querySelector('.ruler-progress');
  const compactLink = root.querySelector('.ruler-compact-link');
  const compactText = root.querySelector('.ruler-compact-progress');
  const compactLine = root.querySelector('.ruler-compact-line');
  const chapters = sections.map(section => {
    const link = document.createElement('a');
    link.className = 'ruler-title';
    link.href = `#${section.id}`;
    link.setAttribute('aria-label', `跳转到${section.dataset.rulerLabel}`);
    const letters = [...section.dataset.rulerLabel].map(char => {
      const letter = document.createElement('span');
      letter.className = 'ruler-letter';
      const glyph = document.createElement('span');
      glyph.className = 'ruler-glyph';
      glyph.textContent = char;
      letter.appendChild(glyph);
      letter.setAttribute('aria-hidden', 'true');
      link.appendChild(letter);
      return letter;
    });
    root.appendChild(link);
    return { section, link, letters, top: 0 };
  });
  document.body.appendChild(root);
  document.body.classList.add('has-scroll-ruler');
  let geometry, frame = 0, lastPercent = -1, activeIndex = -2;
  let needsMeasure = true;
  const schedule = () => {
    if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
  };
  const invalidate = () => { needsMeasure = true; schedule(); };
  const applyMode = () => {
    document.body.classList.toggle('ruler-simple', simpleMedia.matches);
    invalidate();
  };
  function measure() {
    const height = innerHeight, width = innerWidth;
    geometry = { height, width, max: Math.max(1, document.documentElement.scrollHeight - height), base: 24, span: Math.max(1, height - 48) };
    chapters.forEach(chapter => { chapter.top = chapter.section.getBoundingClientRect().top + scrollY; });
    ticks.replaceChildren();
    const documentHeight = geometry.max + height;
    for (let percent = 0; percent <= 100; percent++) {
      const tick = document.createElement('span');
      tick.className = `ruler-tick${percent % 10 === 0 ? ' major' : ''}`;
      tick.style.top = `${percent / 100 * documentHeight}px`;
      if (percent % 10 === 0) {
        const number = document.createElement('span');
        number.className = 'ruler-tick-number';
        number.textContent = percent;
        tick.appendChild(number);
      }
      ticks.appendChild(tick);
    }
    needsMeasure = false;
  }
  function draw() {
    frame = 0;
    if (needsMeasure) measure();
    const { width, height, max, base, span } = geometry;
    const scroll = scrollY, progress = clamp(scroll / max), percent = Math.round(progress * 100);
    const current = chapters.findLastIndex(chapter => Math.min(chapter.top, max) <= scroll + 120);
    if (current !== activeIndex) {
      activeIndex = current;
      chapters.forEach((chapter, index) => {
        if (index === current) chapter.link.setAttribute('aria-current', 'location');
        else chapter.link.removeAttribute('aria-current');
      });
      compactLink.href = current < 0 ? '#main' : `#${chapters[current].section.id}`;
      compactLink.lastElementChild.textContent = current < 0 ? '首页' : chapters[current].section.dataset.rulerLabel;
    }
    if (percent !== lastPercent) {
      lastPercent = percent;
      rail.setAttribute('aria-valuenow', percent);
      progressText.textContent = compactText.textContent = `${percent}%`;
    }
    compactLine.style.transform = `scaleX(${progress})`;
    if (simpleMedia.matches) return;
    const drift = base - progress * 48;
    ticks.style.transform = `translateY(${-scroll + drift}px)`;
    needle.style.transform = `translateY(${base + progress * span}px)`;
    progressText.style.top = progress > .96 ? '-18px' : '7px';
    const flips = chapters.map(chapter => {
      const normal = clamp((300 - (chapter.top - scroll + drift)) / 220);
      // A short final chapter must also settle when the document reaches its end.
      if (chapter.top - max - base <= 80) return normal;
      const start = Math.max(0, Math.min(chapter.top - 300, max - 220));
      return Math.max(normal, clamp((scroll - start) / Math.max(1, max - start)));
    });
    const complete = flips.filter(value => value === 1).length;
    chapters.forEach((chapter, index) => {
      const count = chapter.letters.length, flip = flips[index];
      const rideY = chapter.top - scroll + drift;
      const queueY = height - 52 - (chapters.length - 1 - index) * 26;
      const detach = clamp((queueY + 220 - (rideY + count * 18)) / 220);
      const nextFlip = flips[index + 1] || 0;
      const settledSmall = index < complete - 1;
      const shrink = settledSmall ? 1 : nextFlip;
      const scale = mix(1, .60, shrink);
      const dockY = 36 + index * 24 + 24 * (1 - shrink);
      const horizontal = (letter, y, size) => ({ x: width - 52 - (count - letter - .5) * 24 * size, y, rotation: 0, size });
      // Chinese reads top to bottom with upright glyphs, then unfolds horizontally.
      const vertical = letter => ({ x: width - 19, y: rideY + (letter + .5) * 18, rotation: 0, size: .75 });
      const bounds = { left: Infinity, right: -Infinity, top: Infinity, bottom: -Infinity };
      const positions = chapter.letters.map((letter, letterIndex) => {
        let start, end, progress;
        if (flip > 0) {
          start = vertical(letterIndex);
          end = horizontal(letterIndex, dockY, scale);
          progress = flip;
        } else {
          start = horizontal(letterIndex, queueY, .60);
          end = vertical(letterIndex);
          progress = detach;
        }
        const stagger = .14, order = count - 1 - letterIndex;
        const eased = ease(clamp(progress * (1 + (count - 1) * stagger) - order * stagger));
        const arc = Math.sin(Math.PI * eased) * 20;
        const x = mix(start.x, end.x, eased) - arc;
        const y = mix(start.y, end.y, eased);
        const rotation = mix(start.rotation, end.rotation, eased) - Math.sin(Math.PI * eased) * 12;
        const size = mix(start.size, end.size, eased);
        const half = 12 * size * (Math.abs(Math.cos(rotation * Math.PI / 180)) + Math.abs(Math.sin(rotation * Math.PI / 180)));
        bounds.left = Math.min(bounds.left, x - half - 4);
        bounds.right = Math.max(bounds.right, x + half + 4);
        bounds.top = Math.min(bounds.top, y - half - 4);
        bounds.bottom = Math.max(bounds.bottom, y + half + 4);
        return { x, y, rotation, size };
      });
      chapter.link.style.transform = `translate(${bounds.left}px, ${bounds.top}px)`;
      chapter.link.style.width = `${Math.max(24, bounds.right - bounds.left)}px`;
      chapter.link.style.height = `${Math.max(24, bounds.bottom - bounds.top)}px`;
      chapter.link.dataset.state = flip === 1 ? 'docked' : flip > 0 ? 'flipping' : detach === 1 ? 'riding' : 'queued';
      chapter.letters.forEach((letter, letterIndex) => {
        const { x, y, rotation, size } = positions[letterIndex];
        letter.style.transform = `translate(${x - bounds.left - 12}px, ${y - bounds.top - 12}px) rotate(${rotation}deg) scale(${size})`;
      });
    });
  }
  const scrollToRail = clientY => {
    const progress = clamp((clientY - geometry.base) / geometry.span);
    window.scrollTo({ top: progress * geometry.max, behavior: 'instant' });
  };
  rail.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    rail.setPointerCapture(event.pointerId);
    rail.focus({ preventScroll: true });
    scrollToRail(event.clientY);
  });
  rail.addEventListener('pointermove', event => {
    if (rail.hasPointerCapture(event.pointerId)) scrollToRail(event.clientY);
  });
  const release = event => {
    if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
  };
  rail.addEventListener('pointerup', release);
  rail.addEventListener('pointercancel', release);
  rail.addEventListener('keydown', event => {
    const targets = { Home: 0, End: geometry.max, ArrowDown: scrollY + 80, ArrowUp: scrollY - 80, PageDown: scrollY + innerHeight * .8, PageUp: scrollY - innerHeight * .8 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    window.scrollTo({ top: targets[event.key], behavior: 'instant' });
  });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', invalidate, { passive: true });
  simpleMedia.addEventListener('change', applyMode);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else invalidate();
  });
  const observer = new ResizeObserver(invalidate);
  observer.observe(document.querySelector('main'));
  sections.forEach(section => observer.observe(section));
  observer.observe(document.querySelector('.site-header'));
  observer.observe(document.querySelector('.site-footer'));
  window.addEventListener('load', invalidate, { once: true });
  window.addEventListener('pageshow', invalidate);
  document.fonts?.ready.then(invalidate);
  applyMode();
})();
