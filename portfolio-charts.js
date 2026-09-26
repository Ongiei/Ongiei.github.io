/*
 * Lieflat Charts portfolio adaptations.
 * Template geometry: F2 Hairline Line, L14 Hundred Field, F8 Plumb Scatter,
 * F5 Tick Rows, L11 Trend Lineage. Source: https://github.com/larashero3-dotcom/lieflat-charts
 * The sample values below are deterministic, synthetic presentation data.
 * Lieflat Charts is distributed under PolyForm Noncommercial 1.0.0;
 * see assets/lieflat/LICENSE before public distribution.
 */
(function () {
  'use strict';
  const M = window.MONO;
  if (!M) return;
  const { INK, PAPER, MUTED, FAINT, GRID, rnd, pol, el, txt, tip, obsReveal } = M;
  let previewCount = 0;

  const defs = {
    'eye-care-dashboard': {
      heading: '从触达到长期使用，读懂护眼功能。',
      intro: '沿一次会话和后续使用两条线索，区分看见、交互、开启、设置与保持。',
      chapters: [
        { id: 'reach', eyebrow: '01 / 触达与转化', title: '先看入口，再看下一步。', note: '页面访问和同次会话转化使用不同口径；其他入口的开启不进入这里的漏斗。' },
        { id: 'settings', eyebrow: '02 / 功能与设置', title: '开启不等于真正用起来。', note: '周期内曾开启与期末仍开启分开比较；定时设置只在完成配置的人群中分析。' },
        { id: 'staying', eyebrow: '03 / 主动护眼与保持', title: '从提醒触发走到长期保持。', note: '提醒是否打开、是否触发与首次开启后是否保持，是三个不同问题。' }
      ],
      cards: [
        { id: 'eye-days', chapter: 'reach', template: 'F2', title: '页面触达在 30 天中如何变化？', sub: '页面访问指数 · 一点代表一天 · 空心点为周末', src: '观察周期 / 近 30 天', draw: drawEyeDays },
        { id: 'eye-funnel', chapter: 'reach', template: 'L13', title: '一次会话里，流失发生在哪一步？', sub: '页面曝光 → 一级功能交互 → 开启成功 · 同次会话顺序', src: '口径 / 仅统计本次会话的连续行为', draw: drawEyeFunnel },
        { id: 'eye-rates', chapter: 'settings', template: 'F6', title: '曾经开启与期末仍开启，需要分开读。', sub: '浅色：周期内开启 · 深色：周期末仍开启 · 分母为各功能支持设备', src: '口径 / 两种开启率不直接推算关闭人数', draw: drawEyeRates },
        { id: 'eye-hundred', chapter: 'settings', template: 'L14', title: '定时配置，用户主要修改哪一端？', sub: '一枚点代表 1% · 设置完成且保持开启的用户 · 四类互斥', src: '口径 / 定时设置偏好合计 100%', draw: drawEyeHundred },
        { id: 'eye-trigger', chapter: 'staying', template: 'F5', title: '提醒触发是否集中在少数用户？', sub: '一根刻度代表 1% 用户日 · 按当日提醒次数分箱', src: '口径 / 触发次数与触达人数应分别分析', draw: drawEyeTriggerRows },
        { id: 'eye-retain', chapter: 'staying', template: 'F12', title: '首次开启之后，哪些功能更能留下来？', sub: '空心为次日保持 · 实心为第 30 日保持 · 仅纳入观察窗完整的首次开启用户', src: '口径 / cohort 按首次开启后的相对天数统计', draw: s => drawDumbbell(s, 'retention') }
      ]
    },
    'auto-backlight-dashboard': {
      heading: '把光线、亮度和干预放回同一个场景。',
      intro: '先分清自动与手动的使用方式，再追问环境光、亮度停留、手动调整和应用场景之间的关系。',
      chapters: [
        { id: 'modes', eyebrow: '01 / 使用方式', title: '模式选择决定分析起点。', note: '自动模式时长与手动模式时长分开；随后再观察亮度停留分布。' },
        { id: 'response', eyebrow: '02 / 环境与响应', title: '同样的亮度，不一定对应同样的光线。', note: '环境光与屏幕亮度采用独立单位；手动调整是一条需要回到现场的线索。' },
        { id: 'context', eyebrow: '03 / 干预与应用', title: '把拖动发生时的场景补回来。', note: '检查事件发生时的时间、光线、前台应用与调整前后亮度。' }
      ],
      cards: [
        { id: 'backlight-mode', chapter: 'modes', template: 'F4', title: '自动与手动的使用时长如何分配？', sub: '一根刻度代表 1% 的亮屏使用时长 · 高亮与省电状态另行观察', src: '口径 / 自动与手动互斥，合计 100%', draw: drawBacklightMode },
        { id: 'backlight-rows', chapter: 'modes', template: 'F5', title: '屏幕亮度主要停在哪些区间？', sub: '一根刻度代表 1% 使用时长 · nit 区间按上边界分箱', src: '口径 / 亮度区间按使用时长汇总', draw: drawBacklightRows },
        { id: 'backlight-plumb', chapter: 'response', template: 'F8', title: '环境光与屏幕亮度是什么关系？', sub: '一枚点代表一个观察片段 · 横轴环境光 lux · 纵轴屏幕亮度 nit · 空心为手动调整', src: '口径 / lux 与 nit 不合并成单一指数', draw: drawBacklightScatter },
        { id: 'backlight-heat', chapter: 'response', template: 'F10', title: '主动调整更容易出现在何时？', sub: '星期 × 小时 · 点面积表示拖动事件强度', src: '观察 / 事件时间需要对应前台使用场景', draw: s => drawDotHeat(s, 'backlight') },
        { id: 'backlight-adjust', chapter: 'context', template: 'F12', title: '手动拖动之后，亮度往哪里走？', sub: '空心为调整前 · 实心为调整后 · 每行是一类使用场景', src: '口径 / 两端均为屏幕亮度 nit', draw: s => drawDumbbell(s, 'backlight') },
        { id: 'backlight-app', chapter: 'context', template: 'F7', title: '不同应用的亮度停留结构有何差异？', sub: '每根刻度代表 1% · 三段灰阶对应低、中、高亮度区间', src: '观察 / 按前台应用类别分组比较', draw: drawBacklightApps }
      ]
    },
    'device-timeline': {
      heading: '一次使用过程，比孤立的异常值更有解释力。',
      intro: '把屏幕、应用、亮度、手势与系统状态放在同一时间坐标，再从事件密度走向具体片段。',
      chapters: [
        { id: 'sequence', eyebrow: '01 / 事件对齐', title: '先恢复一次使用的先后顺序。', note: '五条事件轨共享时间刻度，便于回看状态变化前后的上下文。' },
        { id: 'patterns', eyebrow: '02 / 行为结构', title: '从密度看出值得追问的片段。', note: '事件类型、发生时段与应用类别描述不同切面，不能互相替代。' },
        { id: 'diagnosis', eyebrow: '03 / 场景下钻', title: '把异常带回发生时的状态。', note: '对照调整前后亮度与当时的应用场景，再检查缺失事件或版本断层。' }
      ],
      cards: [
        { id: 'device-lineage', chapter: 'sequence', template: 'L11', title: '同一时刻，哪些状态可以被对齐？', sub: '每条纵线是一类事件 · ● 状态发生 · ○ 后续调整 · 09:00–09:30', src: '阅读方法 / 沿横向时间线比较不同事件轨', draw: drawDeviceLineage },
        { id: 'device-mix', chapter: 'patterns', template: 'F4', title: '一段会话里，哪些事件最常出现？', sub: '一根刻度代表 1% 事件 · 按事件类别互斥归类', src: '口径 / 事件占比合计 100%', draw: drawDeviceMix },
        { id: 'device-heat', chapter: 'patterns', template: 'F10', title: '高密度片段集中在哪些时段？', sub: '星期 × 小时 · 点面积表示记录到的事件强度', src: '观察 / 密集不等于异常，需进入具体片段', draw: s => drawDotHeat(s, 'device') },
        { id: 'device-app', chapter: 'diagnosis', template: 'F5', title: '回到前台应用，看会话花在何处。', sub: '一根刻度代表 1% 的前台亮屏时长 · 应用类别互斥', src: '口径 / 前台亮屏时长合计 100%', draw: drawDeviceApps },
        { id: 'device-compare', chapter: 'diagnosis', template: 'F12', title: '同类片段的亮度调整方向一致吗？', sub: '空心为调整前 · 实心为调整后 · 按应用场景分组', src: '口径 / 两端均为屏幕亮度 nit', draw: s => drawDumbbell(s, 'device') }
      ]
    }
  };

  function drawEyeDays(s) {
    // Adapted from F2 Hairline Line: calendar floor, 30 daily dots, hollow weekends, peak labels.
    const N = 30;
    const val = d => 42 + 18 * Math.sin(d / 5.2) + 11 * Math.sin(d / 2.1) + rnd(d + 1, 5) * 11;
    const x = d => 30 + d * 11.7, base = 262, map = v => base - v * 2.15;
    for (let d = 0; d < N; d++) el(s, 'line', { x1: x(d), y1: base, x2: x(d), y2: base - 7, stroke: '#CFCEC7', 'stroke-width': .6, class: 'fade', style: `animation-delay:${d * .008}s` });
    el(s, 'line', { x1: 24, y1: base, x2: 376, y2: base, stroke: GRID, 'stroke-width': .8, class: 'fade' });
    const vs = Array.from({ length: N }, (_, d) => val(d));
    const top = [];
    for (const d of [...vs.keys()].sort((a, b) => vs[b] - vs[a])) { if (top.every(t => Math.abs(t - d) >= 5)) top.push(d); if (top.length === 2) break; }
    const pts = vs.map((v, d) => `${x(d)} ${map(v)}`).join(' L ');
    el(s, 'path', { d: 'M' + pts, fill: 'none', stroke: INK, 'stroke-width': 1, pathLength: 1, class: 'draw', style: 'animation-duration:1.2s' });
    vs.forEach((v, d) => {
      const weekend = d % 7 === 5 || d % 7 === 6, big = top.includes(d);
      const dot = el(s, 'circle', { cx: x(d), cy: map(v), r: big ? 4.2 : 2.1, fill: weekend ? PAPER : INK, stroke: INK, 'stroke-width': weekend ? 1 : 0, class: 'pop', style: `animation-delay:${.2 + d * .03}s` });
      tip(dot, `第 ${d + 1} 天 · 访问指数 ${Math.round(v)}`);
      if (big) txt(s, { x: x(d), y: map(v) - 11, 'font-size': 9.5, 'font-weight': 800, fill: INK, 'text-anchor': 'middle', style: `paint-order:stroke;stroke:${PAPER};stroke-width:3px;animation-delay:${1 + d * .01}s`, class: 'fade' }, Math.round(v));
    });
    [[0, '第 1 天'], [14, '第 15 天'], [29, '第 30 天']].forEach(([d, label]) => txt(s, { x: x(d), y: base + 18, 'font-size': 7.5, 'font-weight': 600, fill: MUTED, 'text-anchor': 'middle', class: 'fade' }, label));
    txt(s, { x: 200, y: 306, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'ONE DOT = ONE DAY · HOLLOW = WEEKEND');
  }

  function drawEyeHundred(s) {
    // Adapted from L14 Hundred Field: 100 countable phyllotaxis dots in four clusters.
    const SEG = [['保留默认时间', 35, INK], ['只改开始', 25, '#4A4944'], ['只改结束', 20, '#8F8E88'], ['两端都改', 20, '#B0AFA9']];
    const POS = [[132, 140], [276, 116], [186, 252], [322, 238]];
    [[0, 1], [0, 2], [1, 3], [2, 3]].forEach(([a, b], k) => el(s, 'line', { x1: POS[a][0], y1: POS[a][1], x2: POS[b][0], y2: POS[b][1], stroke: GRID, 'stroke-width': .7, 'stroke-dasharray': '2 5', class: 'fade', style: `animation-delay:${.9 + k * .1}s` }));
    SEG.forEach(([name, v, shade], ci) => {
      const [cx, cy] = POS[ci]; let edge = 0;
      for (let k = 0; k < v; k++) {
        const a = k * 137.508 + ci * 55, rr = 4 + Math.sqrt(k) * 5.9 + rnd(k + 1, ci + 2) * 3;
        edge = Math.max(edge, rr);
        const [x, y] = pol(cx, cy, rr, a);
        if (k % 5 === 0) el(s, 'line', { x1: cx, y1: cy, x2: x, y2: y, stroke: '#CDCCC5', 'stroke-width': .6, class: 'fade', style: `animation-delay:${ci * .14 + k * .012}s` });
        const dot = el(s, 'circle', { cx: x, cy: y, r: 1.5 + rnd(k + 2, ci + 3) * 1.7, fill: shade, opacity: .9, class: 'pop', style: `animation-delay:${ci * .14 + k * .012}s` });
        tip(dot, `${name} · 每枚点代表 1%`);
      }
      el(s, 'circle', { cx, cy, r: 2.4, fill: INK, class: 'pop', style: `animation-delay:${ci * .14}s` });
      txt(s, { x: cx, y: cy + edge + 13, 'font-size': 8, 'font-weight': 800, fill: INK, 'text-anchor': 'middle', style: `paint-order:stroke;stroke:${PAPER};stroke-width:3px;animation-delay:${.5 + ci * .12}s`, class: 'fade' }, `${name} · ${v}%`);
    });
    txt(s, { x: 200, y: 314, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'ONE DOT = ONE PERCENT · FOUR MUTUALLY EXCLUSIVE CHOICES');
  }

  function drawBacklightScatter(s) {
    // Adapted from F8 Plumb Scatter: each observation hangs a line to the lux floor.
    const P = [
      ['09:02', 40, 34, false], ['09:06', 90, 47, false], ['09:09', 120, 56, false],
      ['09:13', 210, 75, false], ['09:18', 280, 91, false], ['09:22', 310, 74, true],
      ['09:26', 430, 122, false], ['09:31', 530, 138, false], ['09:35', 610, 126, true],
      ['09:39', 700, 167, false], ['09:43', 820, 184, false], ['09:48', 930, 202, false]
    ];
    const X0 = 48, X1 = 368, base = 258, mapX = v => X0 + v / 1000 * (X1 - X0), mapY = v => base - v * 1.02;
    for (let g = 0; g <= 20; g++) { const x = X0 + g / 20 * (X1 - X0); el(s, 'line', { x1: x, y1: base, x2: x, y2: base - (g % 5 === 0 ? 7 : 4), stroke: '#CFCEC7', 'stroke-width': .6, class: 'fade', style: `animation-delay:${g * .01}s` }); }
    el(s, 'line', { x1: X0 - 6, y1: base, x2: X1 + 6, y2: base, stroke: GRID, 'stroke-width': .8, class: 'fade' });
    txt(s, { x: X0, y: base + 16, 'font-size': 7, 'font-weight': 600, fill: FAINT, class: 'fade' }, '0 lux');
    txt(s, { x: X1, y: base + 16, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'end', class: 'fade' }, '1000 lux');
    P.forEach(([time, lux, nit, manual], i) => {
      const x = mapX(lux), y = mapY(nit);
      el(s, 'line', { x1: x, y1: base, x2: x, y2: y, stroke: '#B0AFA9', 'stroke-width': .55, opacity: .6, class: 'fade', style: `animation-delay:${.2 + i * .05}s` });
      const dot = el(s, 'circle', { cx: x, cy: y, r: manual ? 4.6 : 2.6, fill: manual ? PAPER : '#55554F', stroke: manual ? INK : 'none', 'stroke-width': 1.3, class: 'pop', style: `animation-delay:${.25 + i * .05}s` });
      tip(dot, `${time} · ${lux} lux · ${nit} nit${manual ? ' · 手动调整' : ''}`);
      if (manual) txt(s, { x, y: y - 10, 'font-size': 8.5, 'font-weight': 800, fill: INK, 'text-anchor': 'middle', style: `paint-order:stroke;stroke:${PAPER};stroke-width:3px;animation-delay:.8s`, class: 'fade' }, `${nit} nit`);
    });
    txt(s, { x: 26, y: 90, 'font-size': 7, 'font-weight': 600, fill: FAINT, transform: 'rotate(-90 26 90)', 'text-anchor': 'end', class: 'fade' }, 'SCREEN LUMINANCE · NIT ↑');
    txt(s, { x: 200, y: 306, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'HOLLOW = MANUAL ADJUSTMENT · READ LUX AT THE FLOOR');
  }

  function drawBacklightRows(s) {
    // Adapted from F5 Tick Rows: countable 1% ticks, 5-bin composition summing to 100.
    const D = [['0–40 nit', 32], ['40–80 nit', 28], ['80–140 nit', 20], ['140–220 nit', 12], ['220 nit 以上', 8]];
    const y0 = i => 52 + i * 49, X0 = 116, PX = 6.7;
    D.forEach(([name, v], i) => {
      const y = y0(i);
      txt(s, { x: 106, y: y + 3, 'font-size': 8, 'font-weight': 700, fill: '#6A6963', 'text-anchor': 'end', class: 'fade', style: `animation-delay:${i * .08}s` }, name);
      el(s, 'line', { x1: X0, y1: y + 9, x2: X0 + 32 * PX, y2: y + 9, stroke: GRID, 'stroke-width': .6, class: 'fade', style: `animation-delay:${i * .08}s` });
      for (let k = 0; k < v; k++) {
        const x = X0 + k * PX + PX / 2, h = 9 + rnd(k + 1, i + 2) * 6;
        el(s, 'line', { x1: x, y1: y + 9, x2: x, y2: y + 9 - h, stroke: INK, 'stroke-width': .9, opacity: .55 + rnd(k + 3, i + 5) * .45, class: 'fade', style: `animation-delay:${i * .08 + k * .012}s` });
        if (k % 5 === 4) el(s, 'circle', { cx: x, cy: y + 13, r: .8, fill: FAINT, class: 'fade' });
      }
      const lab = txt(s, { x: X0 + v * PX + 10, y: y + 4, 'font-size': 11, 'font-weight': 800, fill: INK, class: 'fade', style: `animation-delay:${.4 + i * .08}s` }, `${v}%`);
      tip(lab, `${name} · ${v}% 使用时长`);
    });
    txt(s, { x: 200, y: 308, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'ONE TICK = ONE PERCENT OF SCREEN-ON TIME');
  }

  function drawEyeTriggerRows(s) {
    // F5 Tick Rows: countable 1% units for mutually exclusive user-day bins.
    const rows = [['0 次', 25], ['1 次', 32], ['2 次', 21], ['3–5 次', 15], ['6 次以上', 7]];
    rows.forEach(([name, value], i) => {
      const y = 52 + i * 49, x0 = 116, px = 6.7;
      txt(s, { x: 106, y: y + 3, 'font-size': 8, 'font-weight': 700, fill: MUTED, 'text-anchor': 'end', class: 'fade' }, name);
      el(s, 'line', { x1: x0, y1: y + 9, x2: x0 + 34 * px, y2: y + 9, stroke: GRID, 'stroke-width': .6, class: 'fade' });
      for (let k = 0; k < value; k++) {
        const x = x0 + k * px + px / 2, h = 9 + rnd(k + 1, i + 2) * 6;
        el(s, 'line', { x1: x, y1: y + 9, x2: x, y2: y + 9 - h, stroke: INK, 'stroke-width': .9, class: 'fade', style: `animation-delay:${i * .08 + k * .012}s` });
      }
      txt(s, { x: x0 + value * px + 10, y: y + 4, 'font-size': 11, 'font-weight': 800, fill: INK, class: 'fade' }, `${value}%`);
    });
    txt(s, { x: 200, y: 308, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'ONE TICK = ONE PERCENT OF USER-DAYS');
  }

  function drawDeviceLineage(s) {
    // Adapted from L11 Trend Lineage: vertical event rails, horizontal time grid,
    // filled/open nodes, continuation segments, and terminal state dots.
    const TR = [
      ['屏幕', [[0, 'f'], [11, 'o']], true],
      ['应用', [[3, 'f'], [17, 'o']], true],
      ['亮度', [[8, 'f'], [19, 'o'], [26, 'o']], true],
      ['手势', [[14, 'f'], [22, 'o']], false],
      ['系统', [[6, 'f'], [29, 'o']], true]
    ];
    const yY = min => 34 + min * 8, colX = c => 92 + c * 62;
    for (let min = 0; min <= 30; min += 5) {
      el(s, 'line', { x1: 60, y1: yY(min), x2: 372, y2: yY(min), stroke: '#E3E2DB', 'stroke-width': .8, class: 'fade', style: `animation-delay:${min * .01}s` });
      txt(s, { x: 52, y: yY(min) + 3, 'font-size': 8, 'font-weight': 600, fill: MUTED, 'text-anchor': 'end', class: 'fade' }, `09:${String(min).padStart(2, '0')}`);
    }
    TR.forEach(([name, ev, alive], c) => {
      const x = colX(c);
      for (let k = 0; k < ev.length - 1; k++) {
        const gap = ev[k + 1][0] - ev[k][0];
        el(s, 'line', { x1: x, y1: yY(ev[k][0]) + 7, x2: x, y2: yY(ev[k + 1][0]) - 7, stroke: '#B0AFA9', 'stroke-width': 1, 'stroke-dasharray': gap > 10 ? '2 4' : 'none', pathLength: 1, class: 'draw', style: `animation-delay:${.3 + c * .07}s;animation-duration:.6s` });
      }
      const last = ev[ev.length - 1][0];
      if (alive) el(s, 'line', { x1: x, y1: yY(last) + 7, x2: x, y2: yY(30) + 16, stroke: '#B0AFA9', 'stroke-width': 1, pathLength: 1, class: 'draw', style: `animation-delay:${.45 + c * .07}s;animation-duration:.6s` });
      ev.forEach(([min, t]) => {
        const node = el(s, 'circle', t === 'f' ? { cx: x, cy: yY(min), r: 5.5, fill: INK } : { cx: x, cy: yY(min), r: 5.5, fill: PAPER, stroke: INK, 'stroke-width': 1.4 });
        node.setAttribute('class', 'pop'); node.style.animationDelay = (.35 + c * .07) + 's';
        tip(node, `${name} · 09:${String(min).padStart(2, '0')} · ${t === 'f' ? '事件发生' : '状态调整'}`);
      });
      el(s, 'circle', { cx: x, cy: alive ? yY(30) + 16 : yY(last) + 12, r: alive ? 3 : 1.6, fill: alive ? INK : FAINT, class: 'pop', style: `animation-delay:${.6 + c * .07}s` });
      const ly = yY(30) + 26;
      txt(s, { x, y: ly, 'font-size': 8, 'font-weight': 600, fill: alive ? '#4A4944' : '#B0AFA9', 'text-anchor': 'middle', class: 'fade' }, name);
    });
  }

  // L13 Hourglass Stream: stage width tracks the surviving share; individual
  // ticks and threads keep the three same-session steps visibly connected.
  function drawEyeFunnel(s) {
    const stages = [['页面曝光', 100], ['功能交互', 61], ['开启成功', 39]];
    const cx = 176, sy = k => 54 + k * 94, width = v => v * 2.65;
    stages.forEach(([name, value], k) => {
      const y = sy(k), half = width(value) / 2;
      for (let i = 0; i < value; i++) {
        const x = cx - half + (i + .5) / value * half * 2 + (rnd(i + 1, k + 3) - .5) * 2;
        el(s, 'line', { x1: x, y1: y - 6, x2: x, y2: y + 6, stroke: INK, 'stroke-width': .8, opacity: .45 + rnd(i + 2, k + 5) * .5, class: 'fade', style: `animation-delay:${k * .12 + i * .004}s` });
      }
      if (k < stages.length - 1) {
        const nextHalf = width(stages[k + 1][1]) / 2;
        for (let t = 0; t < 30; t++) {
          const top = cx + (rnd(t + 1, k * 7 + 1) - .5) * 2 * half * .92;
          const bottom = cx + (rnd(t + 3, k * 7 + 5) - .5) * 2 * nextHalf * .92;
          el(s, 'path', { d: `M${top} ${y + 8} C${top} ${y + 39} ${bottom} ${sy(k + 1) - 39} ${bottom} ${sy(k + 1) - 8}`, fill: 'none', stroke: '#B0AFA9', 'stroke-width': .5, opacity: .34, pathLength: 1, class: 'draw', style: `animation-delay:${.2 + k * .15 + t * .008}s` });
        }
        txt(s, { x: 18, y: y + 49, 'font-size': 11, 'font-weight': 800, fill: INK, class: 'fade' }, `${Math.round(stages[k + 1][1] / value * 100)}%`);
      }
      el(s, 'line', { x1: cx + half + 5, y1: y, x2: 335, y2: y, stroke: GRID, 'stroke-width': .8, class: 'fade' });
      txt(s, { x: 340, y: y - 2, 'font-size': 8, 'font-weight': 700, fill: MUTED, class: 'fade' }, name);
      txt(s, { x: 340, y: y + 12, 'font-size': 11, 'font-weight': 800, fill: INK, class: 'fade' }, `${value}%`);
    });
    txt(s, { x: 200, y: 312, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'STAGE WIDTH = SHARE STILL IN THIS SESSION');
  }

  // F6 Paired Rungs: side-by-side countable ladders for period/current rates.
  function drawEyeRates(s) {
    const values = [['护眼', 42, 27], ['舒眠', 33, 21], ['距离', 21, 13], ['干眼', 16, 9], ['舒适', 12, 6]];
    const base = 258, step = 4.45;
    values.forEach(([name, was, now], i) => {
      const x = 54 + i * 73;
      [[was, x - 12, '#B0AFA9'], [now, x + 12, INK]].forEach(([count, px, shade], side) => {
        for (let k = 0; k < count; k++) {
          const y = base - k * step, w = 9 + rnd(k + 1, i + side + 2) * 2;
          el(s, 'line', { x1: px - w, y1: y, x2: px + w, y2: y, stroke: shade, 'stroke-width': 1, opacity: .55 + rnd(k + 2, i + side + 5) * .4, class: 'fade', style: `animation-delay:${i * .08 + side * .15 + k * .01}s` });
        }
        txt(s, { x: px, y: base - (count - 1) * step - 10, 'font-size': side ? 10 : 8.5, 'font-weight': side ? 800 : 700, fill: shade, 'text-anchor': 'middle', class: 'fade' }, String(count));
      });
      txt(s, { x, y: base + 18, 'font-size': 8, 'font-weight': 700, fill: MUTED, 'text-anchor': 'middle', class: 'fade' }, name);
    });
    el(s, 'line', { x1: 24, y1: base + 4, x2: 376, y2: base + 4, stroke: GRID, 'stroke-width': .8, class: 'fade' });
    txt(s, { x: 200, y: 305, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'PALE = OPENED IN PERIOD · INK = ON AT PERIOD END');
  }

  // F4 Tick Donut: one tick equals one percentage point, exact 100-tick ring.
  function drawTickDonut(s, data, centerLabel) {
    const shade = [INK, '#4A4944', '#8F8E88', '#B0AFA9'];
    const cx = 200, cy = 148, r0 = 64;
    let cursor = 0;
    data.forEach(([name, count], j) => {
      for (let k = 0; k < count; k++) {
        const index = cursor + k, angle = index * 3.6 - 90;
        const [x1, y1] = pol(cx, cy, r0, angle), [x2, y2] = pol(cx, cy, r0 + 10 + rnd(index + 1, j + 2) * 6, angle);
        el(s, 'line', { x1, y1, x2, y2, stroke: shade[j], 'stroke-width': 1, class: 'fade', style: `animation-delay:${index * .012}s` });
        if (index % 10 === 0) { const [dx, dy] = pol(cx, cy, r0 - 5, angle); el(s, 'circle', { cx: dx, cy: dy, r: .8, fill: FAINT, class: 'fade' }); }
      }
      const angle = (cursor + count / 2) * 3.6 - 90;
      const [gx, gy] = pol(cx, cy, r0 + 20, angle), [lx, ly] = pol(cx, cy, r0 + 37, angle);
      el(s, 'line', { x1: gx, y1: gy, x2: lx, y2: ly, stroke: FAINT, 'stroke-width': .7, 'stroke-dasharray': '1 3', class: 'fade' });
      const align = Math.cos(angle * Math.PI / 180) > .3 ? 'start' : Math.cos(angle * Math.PI / 180) < -.3 ? 'end' : 'middle';
      const label = txt(s, { x: lx, y: ly + 3, 'font-size': 8, 'font-weight': 800, fill: shade[j], 'text-anchor': align, class: 'fade', style: `paint-order:stroke;stroke:${PAPER};stroke-width:3px` }, `${name} ${count}%`);
      tip(label, `${name}占比 ${count}%`);
      cursor += count;
    });
    txt(s, { x: cx, y: cy - 2, 'font-size': 24, 'font-weight': 800, fill: INK, 'text-anchor': 'middle', class: 'fade' }, '100%');
    txt(s, { x: cx, y: cy + 15, 'font-size': 8, 'font-weight': 600, fill: MUTED, 'text-anchor': 'middle', class: 'fade' }, centerLabel);
    txt(s, { x: 200, y: 303, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'ONE TICK = ONE PERCENT · READ CLOCKWISE');
  }
  function drawBacklightMode(s) { drawTickDonut(s, [['自动', 58], ['手动', 42]], '亮屏使用时长'); }
  function drawDeviceMix(s) { drawTickDonut(s, [['屏幕', 32], ['应用', 27], ['亮度', 24], ['其他', 17]], '事件类别'); }

  // F10 Dot Heat: 7 × 12 grid, circle area proportional to event strength.
  function drawDotHeat(s, kind) {
    const days = ['一', '二', '三', '四', '五', '六', '日'];
    const x = j => 64 + j * 27, y = i => 58 + i * 30;
    const peak = kind === 'eye' ? 9 : kind === 'backlight' ? 5 : 7;
    const intensity = (i, j) => {
      const shape = Math.exp(-((j - peak) ** 2) / 7) + .56 * Math.exp(-((j - (peak - 4)) ** 2) / 5);
      return Math.round((kind === 'device' ? 21 : 18) * shape * (i < 5 ? 1 : .65) * (.6 + rnd(i * 12 + j + 1, j + 3) * .8));
    };
    let maximum = 0, maxI = 0, maxJ = 0;
    for (let i = 0; i < 7; i++) for (let j = 0; j < 12; j++) { const v = intensity(i, j); if (v > maximum) { maximum = v; maxI = i; maxJ = j; } }
    for (let i = 0; i < 7; i++) {
      txt(s, { x: 48, y: y(i) + 3, 'font-size': 8, 'font-weight': 700, fill: MUTED, 'text-anchor': 'end', class: 'fade' }, `周${days[i]}`);
      for (let j = 0; j < 12; j++) {
        const v = intensity(i, j), radius = v ? 1.2 + Math.sqrt(v) * 2.1 : .8;
        const dot = el(s, 'circle', { cx: x(j), cy: y(i), r: radius, fill: v > maximum * .66 ? INK : v > maximum * .33 ? '#6A6963' : v ? '#B0AFA9' : '#D8D6CE', class: 'pop', style: `animation-delay:${i * .05 + j * .015}s` });
        tip(dot, `周${days[i]} ${9 + j}:00 · 相对强度 ${v}`);
        if (i === maxI && j === maxJ) el(s, 'circle', { cx: x(j), cy: y(i), r: radius + 3.4, fill: 'none', stroke: INK, 'stroke-width': 1, 'stroke-dasharray': '2 3', class: 'fade' });
      }
    }
    for (let j = 0; j < 12; j += 2) txt(s, { x: x(j), y: y(6) + 27, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, `${9 + j}:00`);
    txt(s, { x: 200, y: 307, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'DOT AREA = EVENT INTENSITY · RING = PEAK');
  }

  // F12 Dumbbell Queue: two states share an honest numeric axis; beads mark
  // every unit of change (percent point for retention, 10 nit otherwise).
  function drawDumbbell(s, kind) {
    const sets = {
      retention: [['护眼', 78, 57], ['舒眠', 74, 52], ['距离', 65, 43], ['干眼', 60, 39], ['舒适', 58, 34]],
      backlight: [['阅读', 88, 64], ['视频', 118, 104], ['户外', 122, 169], ['夜间', 65, 39], ['导航', 104, 132]],
      device: [['阅读', 92, 66], ['社交', 86, 112], ['视频', 118, 140], ['相机', 166, 188], ['夜间', 61, 42]]
    };
    const data = sets[kind], x0 = 112, x1 = 367, y0 = i => 56 + i * 46;
    const map = v => x0 + (kind === 'retention' ? (v - 20) / 70 : v / 220) * (x1 - x0);
    data.forEach(([name, before, after], i) => {
      const y = y0(i), xa = map(before), xb = map(after);
      txt(s, { x: 101, y: y + 3, 'font-size': 8, 'font-weight': 700, fill: MUTED, 'text-anchor': 'end', class: 'fade' }, name);
      el(s, 'line', { x1: x0 - 5, y1: y, x2: x1 + 5, y2: y, stroke: '#E3E2DB', 'stroke-width': .7, class: 'fade' });
      const count = Math.max(1, Math.round(Math.abs(after - before) / (kind === 'retention' ? 1 : 10)));
      for (let k = 0; k < count; k++) {
        const xx = xa + (k + .5) / count * (xb - xa), yy = y + (rnd(k + 1, i + 3) - .5) * 2.6;
        el(s, 'circle', { cx: xx, cy: yy, r: 1.5 + rnd(k + 2, i + 4) * .8, fill: '#8F8E88', class: 'pop', style: `animation-delay:${.3 + i * .08 + k * .02}s` });
      }
      el(s, 'circle', { cx: xa, cy: y, r: 4.2, fill: PAPER, stroke: INK, 'stroke-width': 1.3, class: 'pop', style: `animation-delay:${.2 + i * .08}s` });
      const point = el(s, 'circle', { cx: xb, cy: y, r: 4.6, fill: INK, class: 'pop', style: `animation-delay:${.6 + i * .08}s` });
      tip(point, `${name} · ${before} → ${after} ${kind === 'retention' ? '%' : 'nit'}`);
      txt(s, { x: xa, y: y - 11, 'font-size': 8, 'font-weight': 700, fill: '#999890', 'text-anchor': 'middle', class: 'fade' }, String(before));
      txt(s, { x: xb, y: y + 17, 'font-size': 9, 'font-weight': 800, fill: INK, 'text-anchor': 'middle', class: 'fade' }, String(after));
    });
    txt(s, { x: 200, y: 308, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, kind === 'retention' ? 'HOLLOW = DAY 1 · INK = DAY 30 · ONE BEAD = ONE POINT' : 'HOLLOW = BEFORE · INK = AFTER · ONE BEAD ≈ 10 NIT');
  }

  // F5 Tick Rows: countable percent strips, used for mutually exclusive app share.
  function drawDeviceApps(s) {
    const rows = [['社交', 31], ['视频', 26], ['阅读', 19], ['导航', 14], ['其他', 10]];
    rows.forEach(([name, value], i) => {
      const y = 54 + i * 49, x0 = 113, px = 6.7;
      txt(s, { x: 103, y: y + 3, 'font-size': 8, 'font-weight': 700, fill: MUTED, 'text-anchor': 'end', class: 'fade' }, name);
      el(s, 'line', { x1: x0, y1: y + 9, x2: x0 + 32 * px, y2: y + 9, stroke: GRID, 'stroke-width': .6, class: 'fade' });
      for (let k = 0; k < value; k++) el(s, 'line', { x1: x0 + k * px + px / 2, y1: y + 9, x2: x0 + k * px + px / 2, y2: y - rnd(k + 1, i + 2) * 6, stroke: INK, 'stroke-width': .9, class: 'fade', style: `animation-delay:${i * .08 + k * .012}s` });
      txt(s, { x: x0 + value * px + 10, y: y + 4, 'font-size': 11, 'font-weight': 800, fill: INK, class: 'fade' }, `${value}%`);
    });
    txt(s, { x: 200, y: 308, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'ONE TICK = ONE PERCENT OF FOREGROUND SCREEN TIME');
  }

  // F7 Stacked Rungs: three countable luminance bands stack for each app group.
  function drawBacklightApps(s) {
    const data = [['阅读', [52, 38, 10]], ['视频', [32, 46, 22]], ['社交', [45, 42, 13]], ['导航', [18, 47, 35]]];
    const shades = [INK, '#8F8E88', '#C0BFB8'], base = 258, step = 1.78;
    data.forEach(([name, parts], i) => {
      const x = 69 + i * 84; let offset = 0;
      parts.forEach((count, j) => {
        for (let k = 0; k < count; k++) {
          const y = base - (offset + k + j) * step, w = 10 + rnd(k + 1, i * 3 + j + 2) * 3;
          el(s, 'line', { x1: x - w, y1: y, x2: x + w, y2: y, stroke: shades[j], 'stroke-width': 1, class: 'fade', style: `animation-delay:${i * .09 + (offset + k) * .008}s` });
        }
        txt(s, { x: x + 18, y: base - (offset + count / 2 + j) * step + 3, 'font-size': 8, 'font-weight': 800, fill: shades[j] === '#C0BFB8' ? MUTED : shades[j], class: 'fade' }, String(count));
        offset += count;
      });
      txt(s, { x, y: base + 18, 'font-size': 8, 'font-weight': 700, fill: MUTED, 'text-anchor': 'middle', class: 'fade' }, name);
    });
    el(s, 'line', { x1: 24, y1: base + 4, x2: 376, y2: base + 4, stroke: GRID, 'stroke-width': .8, class: 'fade' });
    txt(s, { x: 200, y: 305, 'font-size': 7, 'font-weight': 600, fill: FAINT, 'text-anchor': 'middle', class: 'fade' }, 'INK = LOW · MID = MEDIUM · PALE = HIGH · ONE RUNG = 1%');
  }

  function chartCard(card, index) {
    const viewBox = card.id === 'device-lineage' ? '0 0 400 340' : '0 0 400 320';
    return `<section class="lf-card"><p class="lf-template">观察 ${String(index + 1).padStart(2, '0')}</p><h3>${card.title}</h3><div class="lf-sub">${card.sub}</div><svg id="${card.id}" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${card.title} ${card.sub}"></svg><div class="lf-src">${card.src}</div></section>`;
  }

  function showcase(project) {
    const def = defs[project.slug];
    if (!def) return '';
    const nav = def.chapters.map(chapter => `<a href="#dash-${chapter.id}">${chapter.eyebrow.slice(0, 2)} ${chapter.title}</a>`).join('');
    const chapters = def.chapters.map(chapter => {
      const cards = def.cards.filter(card => card.chapter === chapter.id);
      return `<section class="dashboard-chapter" id="dash-${chapter.id}" aria-labelledby="dash-heading-${chapter.id}"><div class="dashboard-chapter-head"><div><p class="small-label">${chapter.eyebrow}</p><h3 id="dash-heading-${chapter.id}">${chapter.title}</h3></div><p>${chapter.note}</p></div><div class="lieflat-grid ${cards.length === 1 ? 'single' : ''}">${cards.map(card => chartCard(card, def.cards.indexOf(card))).join('')}</div></section>`;
    }).join('');
    return `<section class="data-showcase section-shell" aria-label="${project.title}分析看板"><div class="data-showcase-head"><div><p class="small-label">分析看板 / INTERACTIVE STUDY</p><h2>${def.heading}</h2></div><p>${def.intro}</p></div><nav class="dashboard-nav" aria-label="本看板章节">${nav}</nav>${chapters}</section>`;
  }

  function preview(project) {
    const def = defs[project.slug];
    if (!def) return '';
    const card = def.cards[0];
    const id = `preview-${project.slug}-${++previewCount}`;
    const viewBox = card.id === 'device-lineage' ? '0 0 400 340' : '0 0 400 320';
    return `<div class="visual lf-preview" role="img" aria-label="${project.title}图表预览"><svg id="${id}" data-lf-slug="${project.slug}" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"></svg><span class="visual-caption">数据分析 / 交互原型</span></div>`;
  }

  function mount(projectSlug) {
    const def = defs[projectSlug];
    if (!def) return;
    def.cards.forEach(card => obsReveal(card.id, card.draw));
  }

  function mountPreviews(root = document) {
    root.querySelectorAll('.lf-preview svg[data-lf-slug]').forEach(svg => {
      const def = defs[svg.dataset.lfSlug];
      if (def) obsReveal(svg.id, def.cards[0].draw);
    });
  }

  window.LIEFLAT_PORTFOLIO = { has: slug => Boolean(defs[slug]), showcase, preview, mount, mountPreviews, definitions: defs };
})();
