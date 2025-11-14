document.addEventListener("DOMContentLoaded", function () {
  // Animação principal
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.out",
      opacity: 0,
      y: 20,
    },
  });

  // Anima todos os itens com stagger
  tl.from(".item", {
    stagger: 0.15, // Intervalo de 0.15s entre cada item
    duration: 0.6,
    y: 30,
    opacity: 0,
    ease: "back.out(1.2)", // Efeito elástico sutil
  });

  // Animação adicional para o header (opcional)
  gsap.from(".header", {
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
  });
});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

function openMenu() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");

  // some imediatamente
  menuBtn.style.display = "none";
}

function closeMenu() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");

  // reaparecer com animação
  menuBtn.style.display = "block";
  menuBtn.classList.add("menuBtn-enter");

  requestAnimationFrame(() => {
    menuBtn.classList.add("menuBtn-enter-active");
    menuBtn.classList.remove("menuBtn-enter");
  });
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);