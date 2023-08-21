import { Pila } from "./script.js";

document.addEventListener("DOMContentLoaded", () => {
  const pila = new Pila();
  const divIds = ["one", "two", "three", "four", "five"];
  const divTwo = document.getElementById("div-two");
  const divOne = document.getElementById("divOne");

  const btn = document.querySelector("#btn");

  divIds.forEach((divId) => {
    const div = document.getElementById(divId);
    div.addEventListener("click", () => {
      if (!div.classList.contains("check")) {
        pila.push(div);
        div.classList.add("check");
        div.remove();

        pila.items.forEach((div) => {
          divTwo.appendChild(div);
        });
      }
    });
  });

  btn.addEventListener("click", () => {
    let result = pila.pop();
    if (result !== "La pila está vacía") {
      result.classList.remove("check");
      divOne.appendChild(result);

      // Obtener todos los elementos hijos de divOne
      const divOneChildren = Array.from(divOne.children);

      // Ordenar los elementos por su contenido de texto (números)
      divOneChildren.sort((a, b) => {
        const numA = parseInt(a.innerText);
        const numB = parseInt(b.innerText);
        return numA - numB;
      });

      // Limpiar divOne y agregar los elementos ordenados
      divOne.innerHTML = ""; // Limpiar divOne
      divOneChildren.forEach((child) => {
        divOne.appendChild(child);
      });
    }
  });
});
