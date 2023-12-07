document.addEventListener("DOMContentLoaded", () => {

    let container = document.querySelector(".container")
    let submitButton = document.querySelector(".send");
  
    submitButton.addEventListener("click", () => {
      // Se oculta container de calificación
      container.style.display = "none";

    });
  });
  