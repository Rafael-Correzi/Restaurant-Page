import { content } from "./content.js";
import cozinha from "./imagens/cozinha.jpg";
import { create, select, setContent, addContent, append } from "./functions";

const divContainer = create("div");
const sobre = create("h2");
const sobreContent = create("p");
const endereco = create("h3");
const enderecoContent = create("p");
const contato = create("h3");
const contatoEmail = create("p");
const contatoTelefone = create("p");
const imgCozinha = create("img");
const figure = create("figure");
const figCaption = create("figcaption");

imgCozinha.alt = "Cozinha";
imgCozinha.src = cozinha;

divContainer.classList.add("sobre-container");

function appendSobre() {
  append(content, divContainer);
  append(divContainer, sobre);
  setContent(sobre, "Sobre nós");
  setContent(sobreContent, "Criado em 1955, L’idea oferece as experiência legítima da cozinha italiana. \r\n"); 
  addContent(sobreContent, "Prove os sabores inesquecíveis da Sicília, as maravilhas do Lombardia, e muita mais de toda a Itália aqui.");
  append(divContainer, sobreContent);
  append(divContainer, figure);
  append(figure, imgCozinha);
  append(figure, figCaption);
  figCaption.innerHTML = 'Photo by <a href="https://unsplash.com/@novokayn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pylyp Sukhenko</a> on <a href="https://unsplash.com/photos/man-in-white-dress-shirt-holding-white-ceramic-plate-y-XZf_TNRms?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
      
  append(divContainer, endereco);
  setContent(endereco, "Endereço");
  append(divContainer, enderecoContent);
  setContent(enderecoContent, "Rua Xiz de Ypsilon de Souza, 111, São Paulo-SP");
  append(divContainer, contato);
  setContent(contato, "Contato");
  append(divContainer, contatoEmail);
  setContent(contatoEmail, "Email: email.email@email.com");
  append(divContainer, contatoTelefone);
  setContent(contatoTelefone, "Telefone: (11)99999-9999");
}

export { appendSobre };