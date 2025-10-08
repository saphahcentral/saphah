// includes-internal.js
document.addEventListener("DOMContentLoaded", () => {
  // Load internal header
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("header")?.insertAdjacentHTML("afterbegin", html);
    });

  // Load internal navigation
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("nav")?.insertAdjacentHTML("afterbegin", html);
    });

  // Load internal footer
  fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.querySelector("footer")?.insertAdjacentHTML("afterbegin", html);
    });
});
