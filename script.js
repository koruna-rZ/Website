const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

/* ---------- THEME ---------- */

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggle.textContent = "☀";
}

// Toggle theme
toggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "☾";
  }
});

/* ---------- PAGE TRANSITIONS ---------- */

// Only animate nav page links
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    const url = link.getAttribute("href");

    // Same page? Do nothing
    if (
      !url ||
      url.startsWith("#") ||
      window.location.pathname.endsWith(url)
    ) {
      return;
    }

    e.preventDefault();
    document.body.style.opacity = "0";

    setTimeout(() => {
      window.location.href = url;
    }, 250);
  });
});
