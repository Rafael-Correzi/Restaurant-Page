import { content } from "./content.js"

const divContainer = document.createElement("div");
const cardapio = document.createElement("h2");
const divItem = [];
const item = [];
const itemDescription = [];

cardapio.classList.add("cardapio");

for (let i = 0; i < 10; i++) {
  divItem[i] = document.createElement("div");
  item[i] = document.createElement("h3");
  itemDescription[i] = document.createElement("p");
  
  itemDescription[i].classList.add("descricao");
}

divContainer.classList.add("cardapio-container");

cardapio.textContent = "Cardápio";

item[0].textContent = "Arancini";
item[1].textContent = "Bistecca alla Fiorentina";
item[2].textContent = "Bucatini all’amatriciana";
item[3].textContent = "Carbonara";
item[4].textContent = "Cotoletta alla milanese";
item[5].textContent = "Lasagna";
item[6].textContent = "Olive all'Ascolana";
item[7].textContent = "Pizza Margherita";
item[8].textContent = "Ravioli";
item[9].textContent = "Risotto";

itemDescription[0].textContent = "Bolinhos fritos de arroz, recheados e empanados"
itemDescription[1].textContent = "Bife de filé mignon e conntra filé bovino";
itemDescription[2].textContent = "Macarrão com molho matriciana, à base de tomate, queijo e pimenta";
itemDescription[3].textContent = "Macarrão cremoso coberto com ovos, guanciale, pimenta e queijo parmigiano reggiano";
itemDescription[4].textContent = "Costeleta de vitela empanada e frita";
itemDescription[5].textContent = "Camadas de massa, carne moída, e queijo, com cebola, alho, molho de tomate e especiarias";
itemDescription[6].textContent = "Azeitonas empanadas fritas recheadas com carne";
itemDescription[7].textContent = "Pizza de mozzarella de búfala, com tomates. manjericão e azeite de oliva extra virgem";
itemDescription[8].textContent = "Pequenos pastéis de massa recheados de carne, queijo e vegetais";
itemDescription[9].textContent = "Arroz cremoso típico da Lombardia, com queijo e acompanhamentos";


function appendCardapio() {
  content.appendChild(divContainer);
  divContainer.appendChild(cardapio);

  for (let i = 0; i < 10; i++) {
    divContainer.appendChild(divItem[i]);
    divItem[i].appendChild(item[i]);
    divItem[i].appendChild(itemDescription[i]);
  }
}

export { appendCardapio };



