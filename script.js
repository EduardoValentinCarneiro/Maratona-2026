const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const options = [...document.querySelectorAll(".quiz-option")];
const feedback = document.querySelector(".quiz-feedback");
const reset = document.querySelector(".reset-quiz");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((button) => {
      button.disabled = true;
      if (button === option) {
        button.classList.add(button.dataset.answer === "right" ? "selected-correct" : "selected-wrong");
      }
    });
    if (option.dataset.answer === "right") {
      feedback.textContent = "Isso! Encontrar a origem e comparar fontes dá contexto. O exemplo não permite confirmar se o vídeo é real ou manipulado.";
    } else {
      feedback.textContent = "Pense de novo: compartilhar sem verificar espalha a dúvida, e aparência estranha sozinha não prova manipulação.";
      feedback.classList.add("wrong");
    }
    reset.hidden = false;
  });
});

reset.addEventListener("click", () => {
  options.forEach((option) => {
    option.disabled = false;
    option.classList.remove("selected-correct", "selected-wrong");
  });
  feedback.textContent = "";
  feedback.classList.remove("wrong");
  reset.hidden = true;
});
