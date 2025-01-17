import svgBandeja from "./imagens/plate-svgrepo-com.svg";

const content = document.querySelector("#content");

const h1 = document.createElement("h1");
const restaurantParagraph = document.createElement("p");
const bandeja = document.createElement("img");

function appendHome() {
  content.appendChild(h1);
  content.appendChild(bandeja);
  content.appendChild(restaurantParagraph);
}

h1.textContent = "O restaurante italiano número um de São Paulo"
restaurantParagraph.textContent = "Prove os sabores inesquecíveis da Itália aqui." 


bandeja.src = svgBandeja;
bandeja.alt = "Bandeja";
bandeja.classList.add("bandeja");

export { content, appendHome };