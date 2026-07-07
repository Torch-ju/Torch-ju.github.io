const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".masthead__menu");
const navItems = Array.from(document.querySelectorAll(".masthead__menu a"));
const sections = navItems
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const setActiveLink = () => {
  const offset = 120;
  let currentId = "about-me";

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= offset) {
      currentId = section.id;
    }
  });

  navItems.forEach((link) => {
    const target = link.getAttribute("href");
    link.classList.toggle("active", target === `#${currentId}`);
  });
};

document.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();
