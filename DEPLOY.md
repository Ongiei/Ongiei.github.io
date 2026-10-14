# 发布与同步

## 当前站点

- 主站：<https://ongiei.work/>，通过腾讯云 EdgeOne Pages 的静态站点发布。
- 备用入口：<https://ongiei.github.io/>，由 GitHub 仓库 `Ongiei/Ongiei.github.io` 的 `main` 分支发布。
- EdgeOne 项目：`ongiei-portfolio`。它使用直接上传，推送 GitHub 后不会自动同步主站。

## 更新主站

先在本地完成静态检查。发布时只上传网页文件和公开资源，不上传工作笔记、Git 元数据或本机登录目录 `.edgeone/`。

```sh
stage_dir=$(mktemp -d /tmp/ongiei-edgeone.XXXXXX)
rsync -a --include='/*.html' --include='/*.css' --include='/*.js' --include='/assets/***' --include='/vendor/***' --include='/spatial-storage/***' --exclude='*' ./ "$stage_dir/"
npm exec --yes --package=edgeone -- edgeone makers deploy "$stage_dir" -n ongiei-portfolio -a overseas --skip-ai-gateway-sync --json
```

随后提交并推送 `main`，让 GitHub Pages 备用入口更新。若新增新的顶层静态文件类型，需同步调整上传清单。

## 项目边界

本站是纯静态网页；三个数据看板直接嵌入各自的案例页。Spatial Storage 的交互应用发布在 `/spatial-storage/`，源码仍由独立项目维护；这里跟踪构建产物，使主站和 GitHub Pages 备用站均可访问。数据保存在访客当前浏览器，不需要常驻服务器。

## 更新 Spatial Storage

在独立源码目录运行类型检查、核心及 Web 测试，再按网站子路径构建：

```sh
cd '/Users/ongiei/Documents/New project/spatial-storage'
pnpm typecheck
pnpm test:core
pnpm test:web
pnpm --filter @spatial-storage/web exec vite build --base=/spatial-storage/ --outDir='/Users/ongiei/Documents/ChatGPT/作品集网站/output/spatial-deploy-check/site/spatial-storage' --emptyOutDir
```

确认浏览器中搜索、2D/3D 切换、手机布局及刷新正常后，在作品集目录同步产物，再按上面的完整站点清单发布：

```sh
rsync -a --delete output/spatial-deploy-check/site/spatial-storage/ spatial-storage/
```

`spatial-storage/` 只存放公开构建产物。发布时包含这个完整目录，不能只上传主站的顶层文件，否则在线体验入口会失效。源码中的 `public/textures/README.md` 随产物保留素材出处。
