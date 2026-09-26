# 弓弼飞作品集网站样板

这是一个可浏览的静态样板，案例文字依据现有简历和六方式工作、OPPO 实习归档中可核对的项目目录与看板示意整理。六方式硬件案例已加入原始外观渲染图，三篇建筑案例已加入方案图并按场地、组织、体验编排；其他无图项目仍使用**结构示意**。公司素材、效果指标和个人职责细节在正式公开前仍需逐项核实。

## 本地预览

在本目录运行：

```sh
python3 -m http.server 8000
```

访问 `http://localhost:8000`。

## 页面与内容

- `index.html`：定位和精选案例。
- `work.html`：先按领域浏览，再查看该领域的多个案例和待补位置。建筑选图来源与后续修订建议见 `ARCHITECTURE_ASSET_REVIEW.md`。
- `project.html?slug=...`：统一案例详情结构。
- `project.html?slug=eye-care-dashboard`、`auto-backlight-dashboard`、`device-timeline`：三篇直接嵌入图表的数据案例。
- `assets/hardware/`：经筛选的硬件外观渲染图与圆屏界面探索图。
- `assets/lieflat/`：Lieflat Charts 的图表 token 文件及原许可证。
- `about.html`：背景与工作方式。
- `data.js`：案例内容与领域集合；后续补作品时优先修改这里。
- `styles.css`：视觉系统。
- `portfolio-charts.js`、`portfolio-charts.css`：护眼 6 图、自动背光 6 图、设备行为 5 图及章节导航。
- `DASHBOARD_LOGIC.md`：归档看板的分析逻辑、图表与指标口径映射。

`PORTFOLIO_PROJECTS` 中的每个案例包含问题、约束、个人职责、关键决策和待补证据。`PORTFOLIO_COLLECTIONS` 定义每个领域的介绍与待补项目位置。一个领域可以关联任意多篇案例；新增案例时设定相同的 `category` 即会自动归入对应领域。待补位置不会生成详情页，也不会计入已整理案例数。先替换内容与素材，再决定是否迁移到 Astro 的内容集合。

本轮从归档补充了 CM5 家庭网关、1.85 英寸语音助手交互原型，以及护眼、自动背光、设备行为时间轴三个数据方向。归档中出现的“基本完成”只是目录状态，不作为量产、上线或效果结论。硬件图明确标为渲染图；图表数值、时刻与事件都是合成示意，不能作为真实业务结果引用。图型来自 [Lieflat Charts](https://github.com/larashero3-dotcom/lieflat-charts) 的真实模板，发布前应核对其 PolyForm Noncommercial 1.0.0 许可与本用途是否相容。

上线方式见 [DEPLOY.md](DEPLOY.md)。目前没有 Git 远程仓库，也未推送或公开发布。

## 研究参考

- [Astro 官方 Portfolio starter](https://astro.build/themes/details/portfolio/)：作品入口与项目内容集合的参考。
- [Case Astro 主题](https://github.com/erlandv/case)：问题、约束、决策、结果的案例结构参考。本站未复制其源代码。
- [Magic UI Portfolio](https://github.com/magicuidesign/portfolio)：开发者简历式布局的对照样本，未采用。
