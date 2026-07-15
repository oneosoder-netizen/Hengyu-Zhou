/*
 * 发布真实照片时：
 * 1. 把图片放到 assets/photos/你的系列名/ 目录。
 * 2. 把 photo 对象改为 { src: "../assets/photos/系列名/01.jpg", caption: "可选说明" }。
 * 3. cover 可以使用任意一张照片的相对路径。
 */
window.PHOTO_ALBUMS = [
  {
    slug: "north-of-the-sea",
    title: "海边以北",
    cover: { placeholder: "placeholder-sea" },
    photos: [
      { placeholder: "placeholder-sea", caption: "示例图片 01" },
      { placeholder: "placeholder-night", caption: "示例图片 02" },
      { placeholder: "placeholder-mountain", caption: "示例图片 03" }
    ]
  },
  {
    slug: "night-walk",
    title: "夜行",
    cover: { placeholder: "placeholder-night" },
    photos: [
      { placeholder: "placeholder-night", caption: "示例图片 01" },
      { placeholder: "placeholder-sea", caption: "示例图片 02" }
    ]
  },
  {
    slug: "back-to-the-mountains",
    title: "回到山里",
    cover: { placeholder: "placeholder-mountain" },
    photos: [
      { placeholder: "placeholder-mountain", caption: "示例图片 01" },
      { placeholder: "placeholder-sea", caption: "示例图片 02" }
    ]
  }
];
