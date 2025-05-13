const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".cabecalho-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });