document.addEventListener("DOMContentLoaded", function () {
  // Abertura do modal
  const abrirModal = document.querySelector(".add-admin");
  const modal = document.getElementById("modalAdmin");
  const fecharModal = document.getElementById("closeModalBtn");

  if (abrirModal && modal && fecharModal) {
    abrirModal.addEventListener("click", () => {
      modal.classList.remove("opacity-0", "pointer-events-none");
      lucide.createIcons(); // atualiza ícones
    });

    fecharModal.addEventListener("click", () => {
      modal.classList.add("opacity-0", "pointer-events-none");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("opacity-0", "pointer-events-none");
      }
    });

    // Fechar ao apertar ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.classList.add("opacity-0", "pointer-events-none");
      }
    });
  }

  // Mostrar/ocultar senha
  const toggleSenha = document.getElementById("toggleSenha");
  const senhaInput = document.getElementById("senhaTemp");

  if (toggleSenha && senhaInput) {
    toggleSenha.addEventListener("click", () => {
      if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleSenha.setAttribute("data-lucide", "eye-off");
      } else {
        senhaInput.type = "password";
        toggleSenha.setAttribute("data-lucide", "eye");
      }
      lucide.createIcons();
    });
  }

  // ANIMAÇÃO JÁ EXISTENTE
  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: "power2.out", opacity: 0, y: 20 },
  });

  tl.from(".item", {
    stagger: 0.15,
    duration: 0.6,
    y: 30,
    opacity: 0,
    ease: "back.out(1.2)",
  });

  gsap.from(".header", {
    duration: 0.8,
    y: -30,
    opacity: 0,
    ease: "power2.out",
    delay: 0.2,
  });
});
