# 上线方案

## 当前发布状态

- 作品集仓库：[Ongiei/Ongiei.github.io](https://github.com/Ongiei/Ongiei.github.io)
- 公开地址：<https://ongiei.github.io/>
- GitHub Pages 从 `main` 分支根目录发布；推送新提交后会自动重新部署。
- 本地编辑不会直接同步到线上。修改完成后，需要在本仓库提交并推送到 `origin/main`。
- Spatial Storage 目前只作为作品集案例展示，独立的可操作演示站点尚未发布。

## 建议：GitHub Pages 起步，域名可后买，暂不租服务器

作品集是纯静态 HTML、CSS、JavaScript 与图片，目前资源约 14 MB。护眼、自动背光和设备时间轴看板也在浏览器里直接渲染，不需要数据库或常驻后端。GitHub Pages 足够发布这一层。

Spatial Storage 是独立的 React/Vite Web 应用。当前用 Dexie/IndexedDB 保存收纳项目，用浏览器本地存储保存空间布局；它没有账号、云同步或服务器 API。其生产构建同样可以部署为静态站点。作品集案例页先展示真实截图与产品决策；可操作演示建议另用独立 Pages 站点，避免把整套 React 应用塞入案例页的 iframe。

| 阶段 | 作品集 | Spatial Storage 演示 | 费用 |
|---|---|---|---|
| 第一阶段 | GitHub Pages，`用户名.github.io` 或项目路径 | 单独的 GitHub Pages 项目站点，可先不公开演示 | 托管免费 |
| 第二阶段 | 绑定个人域名，例如 `www.example.com` | 可用 `app.example.com` 指向独立站点 | 只需支付域名费用 |
| 需要账号与跨设备同步后 | 作品集仍可留在 Pages | 再选托管数据库、后端或云平台 | 按实际服务计费 |

域名和服务器是两件事：GitHub Pages 支持自定义域名及 HTTPS，买域名不要求买服务器。若应用今后增加登录、同步、私有共享或后台任务，再单独评估后端服务。

## 两个站点的部署边界

1. **作品集仓库**：仅放公开页面和经许可的图片。本站使用相对路径，已有 `.nojekyll`。可以用 GitHub Pages 从主分支根目录发布。
2. **Spatial Storage 仓库**：保留原有 pnpm workspace，用 GitHub Actions 执行依赖安装与 `pnpm build`，发布 `apps/web/dist`。如果使用 `用户名.github.io/spatial-storage/`，Vite 的 `base` 需设置为 `/spatial-storage/`；如果使用独立自定义子域名，`base` 为 `/`。不应直接把 TypeScript 源文件作为网页发布。
3. **演示数据**：用项目自带样例数据。IndexedDB 按域名隔离；从 `github.io` 迁到自有域名后，旧地址的浏览器数据不会自动迁移，必须先导出 JSON、再在新域名导入。公开演示页应清楚提示“数据保存在此浏览器，清理浏览器数据可能丢失，请导出备份”。
4. **案例链接**：演示站点实际部署并验证后，再在作品集的 Spatial Storage 案例页加“打开交互演示”链接。当前本地 `127.0.0.1:5175` 不能作为公网链接。

## 发布前核对

- 建筑、硬件图片的公开使用权与个人分工；公司材料、业务口径、设备标识的脱敏。
- GitHub Free 的 Pages 源仓库需公开，仓库文件可被下载。只提交最终公开资产，不把原 PDF/PPTX、真实业务导出或本机配置上传。
- 检查 Lieflat Charts 的 PolyForm Noncommercial 1.0.0 许可是否覆盖公开求职作品集用途，并保留许可文本。
- 本地检查所有案例、分类筛选、图像与图表在桌面和手机上正常；再用公开地址复查资源路径和 HTTPS。
- Spatial Storage 演示只使用样例项目，并验证 JSON 导入导出与刷新后持久化；不承诺云端备份。

## GitHub Pages 要点

GitHub Free 可为公开仓库启用 Pages。官方列出的 Pages 发布站点上限为 1 GB，源仓库推荐不超过 1 GB，软带宽限制为每月 100 GB。当前两个项目的体量远低于站点大小上限，但正式构建后仍需检查产物。对于 Vite 项目，官方建议使用 GitHub Actions 构建发布，并按站点路径设置 `base`。

- [GitHub Pages 创建站点](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Pages 限制](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [GitHub Pages 自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [Vite 静态部署指南](https://vite.dev/guide/static-deploy)
