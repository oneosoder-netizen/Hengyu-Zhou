(function () {
  "use strict";

  const albums = Array.isArray(window.PHOTO_ALBUMS) ? window.PHOTO_ALBUMS : [];
  const albumList = document.getElementById("albumList");
  const albumIndex = document.getElementById("albumIndex");
  const albumDetail = document.getElementById("albumDetail");
  const photoGrid = document.getElementById("photoGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxMedia = document.getElementById("lightboxMedia");
  let activeAlbum = null;
  let activePhoto = 0;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function mediaMarkup(media, className) {
    if (media && media.src) {
      return `<span class="${className}"><img src="${escapeHtml(media.src)}" alt="" loading="lazy"></span>`;
    }
    const placeholder = media && media.placeholder ? media.placeholder : "placeholder-sea";
    return `<span class="${className} ${escapeHtml(placeholder)}" aria-hidden="true"></span>`;
  }

  function renderAlbums() {
    if (!albums.length) {
      albumList.innerHTML = '<p class="empty-state">No photo series yet.</p>';
      return;
    }

    albumList.innerHTML = albums.map((album) => `
      <button class="album-card" type="button" data-album="${escapeHtml(album.slug)}" aria-label="打开摄影系列：${escapeHtml(album.title)}">
        ${mediaMarkup(album.cover, "album-cover")}
        <span class="album-caption">${escapeHtml(album.title)}</span>
      </button>
    `).join("");

    albumList.querySelectorAll("[data-album]").forEach((button) => {
      button.addEventListener("click", () => openAlbum(button.dataset.album));
    });
  }

  function openAlbum(slug, updateHash = true) {
    const album = albums.find((item) => item.slug === slug);
    if (!album) return;
    activeAlbum = album;
    document.getElementById("albumTitle").textContent = album.title;
    photoGrid.innerHTML = album.photos.map((photo, index) => `
      <button class="photo-button" type="button" data-photo="${index}" aria-label="查看 ${escapeHtml(album.title)} 第 ${index + 1} 张照片">
        ${mediaMarkup(photo, "photo-frame")}
        <span class="photo-caption">${escapeHtml(photo.caption || `${index + 1} / ${album.photos.length}`)}</span>
      </button>
    `).join("");
    photoGrid.querySelectorAll("[data-photo]").forEach((button) => {
      button.addEventListener("click", () => openLightbox(Number(button.dataset.photo)));
    });
    albumIndex.hidden = true;
    albumDetail.hidden = false;
    if (updateHash) history.replaceState(null, "", `#${encodeURIComponent(slug)}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function closeAlbum() {
    activeAlbum = null;
    albumDetail.hidden = true;
    albumIndex.hidden = false;
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderLightbox() {
    if (!activeAlbum) return;
    const photo = activeAlbum.photos[activePhoto];
    lightboxMedia.className = "lightbox-media";
    lightboxMedia.innerHTML = "";
    if (photo.src) {
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.caption || activeAlbum.title;
      lightboxMedia.appendChild(image);
    } else {
      lightboxMedia.classList.add(photo.placeholder || "placeholder-sea");
    }
    document.getElementById("lightboxLabel").textContent = `${activeAlbum.title} · ${activePhoto + 1} / ${activeAlbum.photos.length}`;
  }

  function openLightbox(index) {
    if (!activeAlbum) return;
    activePhoto = index;
    renderLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function movePhoto(direction) {
    if (!activeAlbum) return;
    activePhoto = (activePhoto + direction + activeAlbum.photos.length) % activeAlbum.photos.length;
    renderLightbox();
  }

  document.getElementById("albumBack").addEventListener("click", closeAlbum);
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => movePhoto(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => movePhoto(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") movePhoto(-1);
    if (event.key === "ArrowRight") movePhoto(1);
  });

  renderAlbums();
  const initialSlug = decodeURIComponent(window.location.hash.slice(1));
  if (initialSlug) openAlbum(initialSlug, false);
}());
