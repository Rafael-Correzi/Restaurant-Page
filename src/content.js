import imagemPizza from "./imagens/pizza.jpg";
import { create, select, setContent, append } from "./functions";


const content = select("#content");
const logoContainer = select("#logo-container");

const p = create("p");
setContent(p, "L'idea");
p.classList.add("logo");


const img = create("img");

function addContent() { 
  content.appendChild(img);
  logoContainer.appendChild(p);
}

img.src = imagemPizza;
img.alt = "Pizza";
img.classList.add("cheia");

addContent();

export { content, addContent };




