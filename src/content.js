import imagemPizza from "./imagens/pizza.jpg";
import { create, select, setContent, append } from "./functions";


const content = select("#content");
const logoContainer = select("#logo-container");

const p = create("p");
setContent(p, "L'idea");
p.classList.add("logo");

const figure = create("figure");
const img = create("img");
const figCaption = create("figcaption");


function addContent() { 
  content.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(figCaption);
  logoContainer.appendChild(p);
}

figure.classList.add("figure-cheia");
img.src = imagemPizza;
img.alt = "Pizza";
img.classList.add("cheia");
figCaption.innerHTML = 'Photo by <a href="https://unsplash.com/@amir_v_ali?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/pizza-with-green-leaves-and-red-sauce-XtLPfib7OuM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      

addContent();

export { content, addContent };




