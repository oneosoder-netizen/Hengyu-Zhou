function numberedPhotos(folder, count) {
  return Array.from({ length: count }, (_, index) => ({
    src: `../assets/photos/${folder}/${String(index + 1).padStart(3, "0")}.jpg`,
    caption: ""
  }));
}

window.PHOTO_ALBUMS = [
  {
    slug: "portrait",
    title: "Portrait",
    cover: { src: "../assets/photos/portrait/cover.jpg" },
    photos: numberedPhotos("portrait", 21)
  },
  {
    slug: "film",
    title: "FILM",
    cover: { src: "../assets/photos/film/cover.jpg" },
    photos: numberedPhotos("film", 38)
  },
  {
    slug: "los-angeles",
    title: "Los Angeles",
    cover: { src: "../assets/photos/los-angeles/cover.jpg" },
    photos: numberedPhotos("los-angeles", 4)
  },
  {
    slug: "traveling",
    title: "Traveling",
    cover: { src: "../assets/photos/traveling/cover.jpg" },
    photos: numberedPhotos("traveling", 32)
  },
  {
    slug: "champaign",
    title: "Champaign",
    cover: { src: "../assets/photos/champaign/cover.jpg" },
    photos: numberedPhotos("champaign", 17)
  },
  {
    slug: "chicago",
    title: "Chicago",
    cover: { src: "../assets/photos/chicago/cover.jpg" },
    photos: numberedPhotos("chicago", 19)
  },
  {
    slug: "georgia",
    title: "Georgia",
    cover: { src: "../assets/photos/georgia/cover.jpg" },
    photos: numberedPhotos("georgia", 25)
  }
];
