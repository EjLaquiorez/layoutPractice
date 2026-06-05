export function initNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const navList = document.querySelector("[data-nav-list]");

  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      navList.classList.toggle("is-open");
    });
  }

  highlightActiveLink();
}

function highlightActiveLink() {
  const currentPath = window.location.pathname.replace(/\\/g, "/");
  const links = document.querySelectorAll(".site-nav__link");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;

    const linkPath = new URL(href, window.location.href).pathname.replace(
      /\\/g,
      "/"
    );

    if (
      currentPath === linkPath ||
      (linkPath !== "/" && currentPath.includes(linkPath.replace(/\/index\.html$/, "")))
    ) {
      link.classList.add("is-active");
    }
  });
}
