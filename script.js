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


const detectiveOptions = [...document.querySelectorAll(".detective-option")];
const detectiveFeedback = document.querySelector(".detective-feedback");
const detectiveReset = document.querySelector(".detective-reset");

detectiveOptions.forEach((option) => {
  option.addEventListener("click", () => {
    detectiveOptions.forEach((button) => {
      button.disabled = true;
      if (button === option) button.classList.add(button.dataset.result === "right" ? "correct" : "incorrect");
    });
    const correct = option.dataset.result === "right";
    detectiveFeedback.textContent = correct
      ? "Boa! Verificar a data e procurar a publicação original ajuda a recuperar o contexto. A falta de data, por si só, não prova que o vídeo foi manipulado."
      : "Ainda não dá para concluir. Uma legenda pode estar errada, mas a ausência de data também não prova que o vídeo é falso. Procure a fonte e o contexto. ";
    detectiveFeedback.classList.toggle("wrong", !correct);
    detectiveReset.hidden = false;
  });
});

detectiveReset.addEventListener("click", () => {
  detectiveOptions.forEach((option) => {
    option.disabled = false;
    option.classList.remove("correct", "incorrect");
  });
  detectiveFeedback.textContent = "";
  detectiveFeedback.classList.remove("wrong");
  detectiveReset.hidden = true;
});
