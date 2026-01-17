async function loadMarkdown(file, targetId) {
  const res = await fetch(file);

  if (!res.ok) {
    throw new Error("Failed to load " + file);
  }

  const text = await res.text();
  const html = marked.parse(text);
  const container = document.getElementById(targetId);

  container.innerHTML = html;

  renderMathInElement(container, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ]
  });
}

// 👇 THIS WAS MISSING
loadMarkdown("blogs/first-post.md", "content");
