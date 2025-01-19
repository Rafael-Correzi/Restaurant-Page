import { content } from "./content.js"
import { create, select, setContent, append } from "./functions";

const divContainer = create("div");
const cardapio = create("h2");
const divItem = [];
const item = [];
const itemDescription = [];

cardapio.classList.add("cardapio");

for (let i = 0; i < 10; i++) {
  divItem[i] = create("div");
  item[i] = create("h3");
  itemDescription[i] = create("p");

  itemDescription[i].classList.add("descricao");
}

divContainer.classList.add("cardapio-container");

setContent(cardapio, "Cardápio");

setContent(item[0], "Arancini");
setContent(item[1], "Bistecca alla Fiorentina");
setContent(item[2], "Bucatini all’amatriciana");
setContent(item[3], "Carbonara");
setContent(item[4], "Cotoletta alla milanese");
setContent(item[5], "Lasagna");
setContent(item[6], "Olive all'Ascolana");
setContent(item[7], "Pizza Margherita");
setContent(item[8], "Ravioli");
setContent(item[9], "Risotto");

setContent(itemDescription[0], "Bolinhos fritos de arroz, recheados e empanados");
setContent(itemDescription[1], "Bife de filé mignon e conntra filé bovino");
setContent(itemDescription[2], "Macarrão com molho matriciana, à base de tomate, queijo e pimenta");
setContent(itemDescription[3], "Macarrão cremoso coberto com ovos, guanciale, pimenta e queijo parmigiano reggiano");
setContent(itemDescription[4], "Costeleta de vitela empanada e frita");
setContent(itemDescription[5], "Camadas de massa, carne moída, e queijo, com cebola, alho, molho de tomate e especiarias");
setContent(itemDescription[6], "Azeitonas empanadas fritas recheadas com carne");
setContent(itemDescription[7], "Pizza de mozzarella de búfala, com tomates. manjericão e azeite de oliva extra virgem");
setContent(itemDescription[8], "Pequenos pastéis de massa recheados de carne, queijo e vegetais");
setContent(itemDescription[9], "Arroz cremoso típico da Lombardia, com queijo e acompanhamentos");


function appendCardapio() {
  append(content, divContainer);
  append(divContainer, cardapio);

  for (let i = 0; i < 10; i++) {
    append(divContainer, divItem[i]);
    append(divItem[i], item[i]);
    append(divItem[i], itemDescription[i]);
  }
}

export { appendCardapio };



