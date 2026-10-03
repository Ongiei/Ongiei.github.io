# 图像更新与生成说明

## 执行方式

使用内置 `imagegen`，每个资产单独以本地原图为编辑目标，生成后人工检查并转换为WebP入库。用户指定 image2，生成prompt均包含 `Use image2`；工具接口不提供 model 字段，返回信息也未提供底层模型标识，因此不把模型名称视为另行核验的事实。实际应用截图与六方式实拍不经过生成引擎。

原始图片全部保留。新图为 `*-v2.webp`；页面的原始图链接指向原项目导出而非本次重绘。图片展示不证明尺寸、接口电气功能、产量、业务指标或施工落地。

## 硬件图 prompt（每张完整相同，分别输入对应原图）

输入：`assets/hardware/voice-touch-terminal-86.png`、`home-gateway.png`、`cm5-gateway-zigbee.png`。
输出：`voice-touch-terminal-studio-v2.webp`、`home-gateway-studio-v2.webp`、`cm5-gateway-studio-v2.webp`。

> Use image2. Edit this exact hardware design into a convincing physically based industrial design studio render for a portfolio. Preserve the exact product silhouette, dimensions relative to the body, number and placement of ports, screen, button, vents and all existing labels, with no added features or invented interface. Do not reinterpret the device. Fine matte off-white injection molded ABS with realistic microtexture, subtle bevel edge highlights, believable recessed openings, black screen glass with restrained reflections where present, precise seams. Soft large daylight source from upper left, real ambient occlusion and grounded contact shadow on a pale mineral warm gray studio tabletop. Single product in the same three-quarter angle, 16:9 landscape, generous clean margin, sharp professional product photography look. Do not add props, cables, captions, badges or watermark. This is a concept render, not a production evidence photograph.

## 四张建筑图 prompt

每条由以下前缀 + 对应请求 + 后缀拼接：

前缀：`Use image2. Style-transfer edit for a cohesive architectural portfolio diagram series.`

| 输入图 | 对应请求 |
|---|---|
| dezhou-routes-analysis-redraw.webp | Reduce this aerial view to a clear architectural circulation diagram. Preserve all SIX radial exhibition hall groups, central circular public hall, north south axis, water bodies and road entrances. Trace the EXISTING red/orange public arrival and green peripheral paths with thin accurate lines and small arrows, no new routes or asserted vehicle classifications. Remove photoreal shading, cars, road textures and excessive planting. Single overall axonometric diagram. |
| dezhou-spatial-analysis-redraw.webp | Edit this composition into one legible coherent architectural board. Preserve the city axis plan on left and the right-side small radial organization studies and hall construction studies exactly including existing numbers 3 6 9 12, without interpreting or adding text. Clearly emphasize the six hall groups around the circular center. Simplify excessive contextual detailing without changing plan geometry. |
| zhengzhou-site.webp | Redraw the same FOUR site analysis panels in the same two by two layout. Preserve site shape, orientation, surrounding roads, eastern river and green corridors, all colored surrounding land-use relationships and southwest conference connection. Retain exact short labels SITE 科学大道 西四环 滨河景观, remove tiny long paragraphs and institution labels rather than inventing words. Do not add built proposal geometry. |
| zhengzhou-landscape.webp | Redraw this green-space relationship diagram in the identical axonometric view. Preserve the exact site boundary, adjacent green parcel on left, context block positions, and all existing green directional connections. Do not invent proposed building roof geometry inside the empty outlined site. Remove all original titles and paragraphs; retain just diagram. |

后缀：

> Unified style for ALL diagrams: pale mineral paper #f7f9f5, thin precise deep green-gray linework #4b665e, low-saturation sage landscape, off-white massing models, faint soft daylight shadows, sparing muted terracotta or blue only to distinguish paths/functions. Clean professional competition analytical plate, generous white margins, restrained technical line drawing, no hand drawn watercolor grain, no heavy sepia, no photoreal rendering. Keep all geometry, counts and relationships from input. No added claims, metrics, labels, legends or watermark. Landscape composition, all edges fully visible.

## 其余五张分析图 prompt

输入分别为 `zhengzhou-massing-analysis-redraw.webp`、`zhengzhou-program-analysis-redraw.webp`、`longchang-axis-analysis-redraw.webp`、`longchang-massing-analysis-redraw.webp`、`longchang-program-analysis-redraw.webp`；输出改为同名 `analysis-v2.webp`。

> Use image2. Style transfer edit ONLY for a unified architectural analysis series. Keep the EXACT composition, all building geometry, number of modules (six where shown), site boundary, orientations, axial lines, existing arrows, green courtyards, relative locations and the same analysis stages of input. No added architecture, paths, labels, people, dimensions or building claims. Change presentation only: flat pale mineral paper #f7f9f5 with NO sepia paper grain, thin precise deep green-gray ink lines, crisp off-white massing, muted sage landscape, muted terracotta/ochre/blue-gray ONLY for existing functional distinction. REDUCE the photoreal textures, dense watercolor trees, crowds and evening lighting; make a clean sober architectural line-and-clay analytical plate with faint soft daylight shadows and white margin. Preserve existing arrows and functional shapes exactly. No text, no watercolor, no heavy shadows, no watermark. Landscape image with whole diagram visible.

## 真实截图与工作照片

- `assets/spatial-storage-home-3d-v2.webp`：当前源码在本地5175运行，家庭样例，桌面1600×1000，3D总览，关闭提示条。
- `assets/spatial-storage-home-2d-v2.webp`：同一应用同一样例，2D布局与内容面板。
- `assets/spatial-storage-search-mobile-v2.webp`：实际手机视口的Batteries搜索结果与完整路径。
- `assets/spatial-storage-locate-mobile-v2.webp`：实际搜索结果的3D层板定位，柜内摆放为示意。
- `assets/work/gateway-enclosures.webp`：六方式 `微信图片_20260924223929_24_1885.jpg`。
- `assets/work/gateway-components.webp`：六方式 `微信图片_20260924223932_26_1885.jpg`。
- `assets/work/gateway-assembly.webp`：六方式 `微信图片_20260924223919_19_1885.jpg`。
- `assets/work/gateway-open-board.webp`：六方式 `微信图片_20260924223921_22_1885.jpg`。
- `assets/work/mobile-platform.webp`：六方式 `微信图片_20260924224138_30_1885.jpg`。
- `assets/work/mobile-platform-workbench.webp`：六方式 `微信图片_20260924224128_28_1885.jpg`。

实拍只做EXIF方向校正、等比例缩小和WebP编码；未生成或替换照片主体。
