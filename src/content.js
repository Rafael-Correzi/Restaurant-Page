import imagemPizza from "./imagens/pizza.jpg";
import svgBandeja from "./imagens/plate-svgrepo-com.svg";
import "./styles.css"

const content = document.querySelector("#content");

const h1 = document.createElement("h1");
const restaurantParagraph = document.createElement("p");
const bandeja = document.createElement("img");
const img = document.createElement("img");

function appendHome() {
  content.appendChild(h1);
  content.appendChild(img);
  content.appendChild(bandeja);
  content.appendChild(restaurantParagraph);
}

img.src = imagemPizza;
img.alt = "Pizza";
img.classList.add("cheia");

bandeja.src = svgBandeja;
bandeja.alt = "Bandeja";
bandeja.classList.add("bandeja");

h1.textContent = "O restaurante italiano número um de São Paulo"
restaurantParagraph.textContent = "Prove os sabores inesquecíveis da Itália aqui." 

export { content, appendHome };