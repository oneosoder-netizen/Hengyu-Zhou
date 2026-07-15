# 极简写作与摄影网站

这是一个专门为 GitHub Pages 准备的纯静态个人网站，不需要 Node.js、数据库或服务器。

## 网站结构

- `index.html`：极简首页
- `photos/`：摄影系列、相册和灯箱浏览
- `writing/`：写作列表和文章阅读
- `assets/`：首页图片以及你的摄影文件
- `css/style.css`：全站样式
- `.nojekyll`：让 GitHub Pages 直接发布纯静态文件

## 第一次替换内容

当前网站名称为 `enshrouding-Hengyu Zhou`，首页图片和首批七个摄影系列已经完成配置。Writing 暂时保留示例文章。

## 发布新照片

假设要增加一个名为 `nanjing` 的系列：

1. 新建目录 `assets/photos/nanjing/`。
2. 上传照片，例如 `01.jpg`、`02.jpg`、`03.jpg`。
3. 将照片转换成适合网页的 JPG 后，打开 `photos/albums.js` 增加相册配置。

```js
{
  slug: "nanjing",
  title: "Nanjing",
  cover: { src: "../assets/photos/nanjing/01.jpg" },
  photos: [
    { src: "../assets/photos/nanjing/01.jpg", caption: "2026" },
    { src: "../assets/photos/nanjing/02.jpg", caption: "" },
    { src: "../assets/photos/nanjing/03.jpg", caption: "" }
  ]
}
```

提交到 GitHub 后，网站会自动更新。

## 发布新文章

打开 `writing/posts.js`，复制一个文章对象，修改 `slug`、`date`、`title` 和 `paragraphs`。提交后自动更新。

## GitHub Pages 发布

1. 在 GitHub 创建名为 `你的用户名.github.io` 的公开仓库。
2. 把本目录的所有文件上传到仓库根目录。
3. 打开仓库 `Settings → Pages`，将 Source 选择为 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/ (root)`，然后保存。
5. 等待发布完成，网站地址就是 `https://你的用户名.github.io/仓库名/`。

## 图片建议

- JPG 使用 80–88% 品质即可。
- 长边建议控制在 2000–2560 像素。
- 单张图片尽量控制在 1 MB 内。
- 文件名只使用英文、数字、短横线，不使用空格和中文。
