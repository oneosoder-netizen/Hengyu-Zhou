(function () {
  "use strict";

  const posts = Array.isArray(window.SITE_POSTS) ? window.SITE_POSTS : [];
  const list = document.getElementById("postList");
  const index = document.getElementById("postIndex");
  const article = document.getElementById("articleView");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderList() {
    if (!posts.length) {
      list.innerHTML = '<p class="empty-state">No posts yet.</p>';
      return;
    }

    list.innerHTML = posts.map((post) => `
      <div class="post-row">
        <span class="post-date">${escapeHtml(post.date || "")}</span>
        <a class="post-link" href="?post=${encodeURIComponent(post.slug)}">${escapeHtml(post.title)}</a>
      </div>
    `).join("");
  }

  function renderArticle(slug) {
    const post = posts.find((item) => item.slug === slug);
    if (!post) return false;

    document.title = `${post.title}｜你的名字`;
    document.getElementById("articleTitle").textContent = post.title;
    document.getElementById("articleMeta").textContent = post.date || "";
    document.getElementById("articleContent").innerHTML = (post.paragraphs || [])
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
    index.hidden = true;
    article.hidden = false;
    return true;
  }

  renderList();
  const slug = new URLSearchParams(window.location.search).get("post");
  if (slug) renderArticle(slug);
}());
