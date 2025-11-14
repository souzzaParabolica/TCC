document.addEventListener("DOMContentLoaded", function () {
  // 🌀 Animação principal com GSAP
  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.out",
      opacity: 0,
      y: 20,
    },
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

  // 🔗 Referências aos modais e toast
  const modal02 = document.getElementById("reservaModal02");
  const modal03 = document.getElementById("reservaModal03");
  const toast = document.getElementById("toastSucesso");

  let pratoSelecionado = null;

  // 🔒 Fechamento do modal
  function configurarFechamento(modal, btnCancelarId) {
    const btnCancelar = modal.querySelector(`#${btnCancelarId}`);
    btnCancelar.addEventListener("click", () => {
      modal.classList.add("hidden");
      pratoSelecionado = null;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        pratoSelecionado = null;
      }
    });
  }

  // ✅ Toast animado com GSAP
  function showToast() {
    toast.classList.remove("hidden");
    gsap.fromTo(
      toast,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    setTimeout(() => {
      gsap.to(toast, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        onComplete: () => toast.classList.add("hidden"),
      });
    }, 2500);
  }

  // 🧹 Função de remoção com animação
  function configurarRemover(modal, btnRemoverId) {
    const btnRemover = modal.querySelector(`#${btnRemoverId}`);
    btnRemover.addEventListener("click", () => {
      if (pratoSelecionado) {
        gsap.to(pratoSelecionado, {
          height: 0,
          opacity: 0,
          margin: 0,
          padding: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            pratoSelecionado.remove();
            showToast();
          },
        });
      }

      modal.classList.add("hidden");
      pratoSelecionado = null;
    });
  }

  // ⚙️ Configura todos os modais
  configurarFechamento(modal02, "cancelarReserva02");
  configurarFechamento(modal03, "cancelarReserva03");
  configurarRemover(modal02, "confirmarReserva02");
  configurarRemover(modal03, "confirmarReserva03");

  // 🎯 Botões de cada grupo de prato
  document
    .querySelectorAll(".prato1 button, .prato2 button, .prato3 button")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        pratoSelecionado = btn.closest(".item");
        modal02.classList.remove("hidden");
      });
    });

  document
    .querySelectorAll(".prato4 button, .prato5 button, .prato6 button")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        pratoSelecionado = btn.closest(".item");
        modal03.classList.remove("hidden");
      });
    });

  // 🧠 Renderiza ícones do Lucide (depois de tudo carregado)
  lucide.createIcons();
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