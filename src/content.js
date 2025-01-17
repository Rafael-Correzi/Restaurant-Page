const content = document.querySelector("#content");

const h1 = document.createElement("h1");
const restaurantParagraph = document.createElement("p");
const img = document.createElement("img");

function appendHome() {
  content.appendChild(h1);
  content.appendChild(img);
  content.appendChild(restaurantParagraph);
}

img.src = "";
img.alt = "Prato de espaguete";

h1.textContent = "O restaurante italiano número um de São Paulo"
restaurantParagraph.textContent = "Criado em 1955, l’idea oferece as experiência legítima da cozinha italiana. Prove os sabores inesquecíveis da Sicília, as maravilhas do Lombardia, e muita mais de toda a Itália aqui." 

export { content, appendHome };