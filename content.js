
async function loadMarkdown(file, targetId) {
  const res = await fetch(file);
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
