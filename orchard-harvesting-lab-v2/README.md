# 林果采收智能感知与装备创新组 V2

## 预览
直接双击 `index.html`。联网时会加载 Google Fonts；断网也有系统字体回退。

## 添加郑洲洲老师照片
把照片命名为：
`zhengzhouzhou.jpg`
放入：
`assets/images/team/`
刷新网页即可。建议竖版 4:5 或 3:4，至少 1000px 高。

## 添加成员
在 `index.html` 中搜索 `person-card`，复制整个成员模块并修改姓名、身份、研究方向、英文名和照片路径。
如果成员较多，建议下一版把成员独立成 People 页面。

## 换首页真实背景图
当前首页使用纯 CSS 科技果园视觉，不依赖外部图片，因此部署最稳定。
有真实果园/机器人照片后：
1. 放到 `assets/images/hero/hero.jpg`
2. 在 `style.css` 搜索 `.hero-bg`
3. 将其 background 改为：
   background:
   linear-gradient(90deg,rgba(8,28,20,.90),rgba(12,34,24,.45)),
   url("assets/images/hero/hero.jpg") center/cover no-repeat;

## 换成果图片
把图片放进 `assets/images/projects/`。
可将 `.work-image` 区域替换为 `<img>`，或直接让 ChatGPT 根据你的图片继续修改。

## 修改按钮
按钮文字在 `index.html` 中，例如：
- Explore Research
- Meet Our Team
- Contact Us
Paper / Code / Video 按钮的 `href="#"` 替换为真实链接即可。

## 修改颜色
`style.css` 最顶部 `:root`：
- `--ink` 深绿色
- `--green` 主绿色
- `--lime` 荧光浅绿
- `--cream` 浅背景
- `--paper` 页面背景

## 修改联系方式
搜索：
- `学校 / 学院：待补充`
- `Email：待补充`
- `Location：待补充`
同时把 `mailto:your-email@example.com` 改成真实邮箱。

## 发布 GitHub Pages
把本文件夹里的所有文件上传到 GitHub 仓库根目录。
Settings → Pages → Deploy from a branch → main / root。
之后每次提交更新，网站会自动重新部署。
