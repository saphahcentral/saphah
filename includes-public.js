// includes-public.js
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("https://saphahcentral.github.io/saphah/includes/header.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("header")?.insertAdjacentHTML("afterbegin", html);
    });

  // Load navigation
  fetch("https://saphahcentral.github.io/saphah/includes/nav.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("nav")?.insertAdjacentHTML("afterbegin", html);
    });

  // Load footer
  fetch("https://saphahcentral.github.io/saphah/includes/footer.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("footer")?.insertAdjacentHTML("afterbegin", html);
    });
});
