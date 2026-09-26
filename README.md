# 弓弼飞作品集网站

线上地址：[ongiei.github.io](https://ongiei.github.io/)

这是一个面向招聘方与面试官的静态作品集。设计以 **space → system → interface** 为主线：编辑式首页、可筛选的作品索引、各项目的完整案例页，以及首页一段可跳过的三维空间场景。九个已发布案例分布在建筑设计、智能硬件、数据分析看板与数字产品四个领域。

## 本地预览

在本目录运行 `python3 -m http.server 8000`，访问 `http://localhost:8000`。

## 文件结构

- `index.html`：定位、代表案例、空间场景与领域入口。
- `work.html`：九个项目的筛选索引和就地预览。
- `project.html?slug=...`：完整项目案例；三个数据案例直接在页面内呈现多章节图表。
- `about.html`：背景、工作方式与联系。
- `data.js`：项目内容和领域集合。新增项目先在这里录入，再检查索引顺序。
- `app.js`：内容渲染、筛选、索引选择与导航。
- `styles.css`、`editorial.css`：基础样式和 OpenDesign 聚合后的编辑式视觉系统。
- `spatial.js`、`vendor/three.min.js`：首页的可选三维空间场景，桌面端接近该区域时才加载；窄屏、减少动态效果偏好和 WebGL 不可用时使用真实项目图像。
- `portfolio-charts.js`、`portfolio-charts.css`、`assets/lieflat/`：护眼、自动背光和设备行为时间轴的嵌入式看板。
- `DESIGN.md`、`PRODUCT.md`：当前设计与产品约束。
- `ARCHITECTURE_ASSET_REVIEW.md`、`DASHBOARD_LOGIC.md`：素材筛选和分析逻辑归档。

三维库的许可证见 `vendor/THREE-LICENSE.txt`。图表使用的 Lieflat Charts 资源及原许可证保留在 `assets/lieflat/`。

GitHub Pages 部署说明见 [DEPLOY.md](DEPLOY.md)。
