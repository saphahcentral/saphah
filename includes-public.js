// includes-public.js
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("header")?.insertAdjacentHTML("afterbegin", html);
    });

  // Load navigation
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("nav")?.insertAdjacentHTML("afterbegin", html);
    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("footer")?.insertAdjacentHTML("afterbegin", html);
    });
});
