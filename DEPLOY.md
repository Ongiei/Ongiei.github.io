# 发布与同步

## 当前站点

- 主站：<https://ongiei.work/>，通过腾讯云 EdgeOne Pages 的静态站点发布。
- 备用入口：<https://ongiei.github.io/>，由 GitHub 仓库 `Ongiei/Ongiei.github.io` 的 `main` 分支发布。
- EdgeOne 项目：`ongiei-portfolio`。它使用直接上传，推送 GitHub 后不会自动同步主站。

## 更新主站

先在本地完成静态检查。发布时只上传网页文件和公开资源，不上传工作笔记、Git 元数据或本机登录目录 `.edgeone/`。

```sh
stage_dir=$(mktemp -d /tmp/ongiei-edgeone.XXXXXX)
rsync -a --include='/*.html' --include='/*.css' --include='/*.js' --include='/assets/***' --include='/vendor/***' --exclude='*' ./ "$stage_dir/"
npm exec --yes --package=edgeone -- edgeone makers deploy "$stage_dir" -n ongiei-portfolio -a overseas --skip-ai-gateway-sync --json
```

随后提交并推送 `main`，让 GitHub Pages 备用入口更新。若新增新的顶层静态文件类型，需同步调整上传清单。

## 项目边界

本站是纯静态网页；三个数据看板直接嵌入各自的案例页。Spatial Storage 在这里展示产品案例，其交互式应用是另一个仓库和部署目标。当前作品集不需要常驻服务器。
