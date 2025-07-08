const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const headerLink = document.querySelector("header a");
const headerLinks = document.querySelectorAll("header p");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  const scrolled = window.scrollY > 0;

  header.classList.toggle("shadow", scrolled);
  header.classList.toggle("bg-white", scrolled);

  if (headerLink) {
    headerLink.classList.toggle("text-black", scrolled);
  }

  headerLinks.forEach((link) => {
    link.classList.toggle("text-black", scrolled);
  });
};
