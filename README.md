# 弓弼飞作品集网站

线上地址：[ongiei.work](https://ongiei.work/)

这是一个面向硬件产品经理岗位的静态作品集。**空间 → 系统 → 数据 → 产品** 是贯穿项目的判断链路，不是四个互斥类别。首页先呈现家庭语音触控终端的 0→1 产品实践，再连接数据验证、独立产品与建筑设计。九个案例保留按作品类型筛选的快速索引。

## 本地预览

在本目录运行 `python3 -m http.server 8000`，访问 `http://localhost:8000`。

## 文件结构

- `index.html`：定位、代表案例、空间场景与领域入口。
- `work.html`：九个项目的筛选索引和就地预览。
- `project.html?slug=...`：完整项目案例；三个数据案例直接在页面内呈现多章节图表。
- `about.html`：背景、工作方式与联系。
- `data.js`：项目内容和领域集合。新增项目先在这里录入，再检查索引顺序。
- `app.js`：内容渲染、筛选、索引选择与导航。
- `styles.css`、`editorial.css`、`portfolio-product.css`：基础样式、OpenDesign 聚合后的编辑式视觉系统与产品导向页面样式。
- `spatial.js`、`vendor/three.min.js`：首页的可选三维空间场景，桌面端接近该区域时才加载；窄屏、减少动态效果偏好和 WebGL 不可用时使用真实项目图像。
- `portfolio-charts.js`、`portfolio-charts.css`、`assets/lieflat/`：护眼、自动背光和设备行为时间轴的嵌入式看板。
- `DESIGN.md`、`PRODUCT.md`：当前设计与产品约束。
- `ARCHITECTURE_ASSET_REVIEW.md`、`DASHBOARD_LOGIC.md`：素材筛选和分析逻辑归档。

三维库的许可证见 `vendor/THREE-LICENSE.txt`。图表使用的 Lieflat Charts 资源及原许可证保留在 `assets/lieflat/`。

发布到 EdgeOne 的站点使用 `ongiei.work`；GitHub Pages 保留为备份入口。部署说明见 [DEPLOY.md](DEPLOY.md)。

## 本次素材与质量复查

2026-10-04 更新：新版 Spatial Storage 实际截图、九张建筑分析重绘、三张硬件方案渲染与六方式六张工作照片；修复案例证据标注、索引选择状态和手机预览。详见 `REVIEW_2026-10-04.md`、`IMAGE_ASSETS_2026-10-04.md`。

已有 Playwright 运行时可执行 `node scripts/check-portfolio.cjs`（用 `PLAYWRIGHT_MODULE_PATH` 指向已有模块，用 `CHROME_PATH` 指向已有 Chrome，默认使用 Chrome channel）。无需为静态站新增全局依赖。检查输出和发布工具放在被忽略的 `output/` 内。
