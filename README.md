# 极简写作与摄影网站

这是一个专门为 GitHub Pages 准备的纯静态个人网站，不需要 Node.js、数据库或服务器。

## 网站结构

- `index.html`：极简首页
- `photos/`：摄影系列、相册和灯箱浏览
- `writing/`：写作列表和文章阅读
- `assets/`：首页图片以及你的摄影文件
- `css/style.css`：全站样式
- `.github/workflows/pages.yml`：自动发布到 GitHub Pages

## 第一次替换内容

1. 在所有 HTML 和 JS 文件中，把“你的名字”替换为你的真实名字。
2. 用自己的首页图片替换 `assets/home-visual.png`。
3. 删除 `photos/albums.js` 里的示例系列，换成自己的相册。
4. 删除 `writing/posts.js` 里的示例文章，换成自己的文字。

## 发布新照片

假设要增加一个名为 `nanjing` 的系列：

1. 新建目录 `assets/photos/nanjing/`。
2. 上传照片，例如 `01.jpg`、`02.jpg`、`03.jpg`。
3. 打开 `photos/albums.js`，增加：

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
3. 打开仓库 `Settings → Pages`，将 Source 选择为 `GitHub Actions`。
4. 等待 Actions 完成，网站地址就是 `https://你的用户名.github.io/`。

## 图片建议

- JPG 使用 80–88% 品质即可。
- 长边建议控制在 2000–2560 像素。
- 单张图片尽量控制在 1 MB 内。
- 文件名只使用英文、数字、短横线，不使用空格和中文。
