import "./content.js";
import { content, addContent } from "./content.js";
import { appendHome } from "./home.js";
import { appendCardapio } from "./cardapio.js";
import { appendSobre } from "./sobre.js";
import "./styles.css"

const inicio = document.querySelector("#inicio");
const cardapio = document.querySelector("#cardapio");
const sobre = document.querySelector("#sobre");

function remove() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

inicio.addEventListener("click", () => {
  remove();
  addContent();
  appendHome();
})

cardapio.addEventListener("click", () => {
  remove();
  addContent();
  appendCardapio();
})

sobre.addEventListener("click", () => {
  remove();
  addContent();
  appendSobre();
})

appendHome();

console.log("funcionou");