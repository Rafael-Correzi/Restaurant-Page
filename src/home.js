import svgBandeja from "./imagens/plate-svgrepo-com.svg";
import { content } from "./content.js"
import { create, select, setContent, append } from "./functions";

const h1 = create("h1");
const restaurantParagraph = create("p");
const bandeja = create("img");

restaurantParagraph.classList.add("home-text");

function appendHome() {
  append(content, h1);
  append(content, bandeja);
  append(content, restaurantParagraph);
}

setContent(h1, "O restaurante italiano número um de São Paulo");
setContent(restaurantParagraph, "Prove os sabores inesquecíveis da Itália aqui.");


bandeja.src = svgBandeja;
bandeja.alt = "Bandeja";
bandeja.classList.add("bandeja");

export { appendHome };