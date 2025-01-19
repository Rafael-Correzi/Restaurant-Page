import "./content.js";
import { content, addContent } from "./content.js";
import { appendHome } from "./home.js";
import { appendCardapio } from "./cardapio.js";
import { appendSobre } from "./sobre.js";
import "./styles.css"
import { select } from "./functions.js";

const inicio = select("#inicio");
const cardapio = select("#cardapio");
const sobre = select("#sobre");

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