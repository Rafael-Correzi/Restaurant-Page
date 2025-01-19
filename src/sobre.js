import { content } from "./content.js"

const divContainer = document.createElement("div");
const sobre = document.createElement("h2");
const sobreContent = document.createElement("p");
const endereco = document.createElement("h3");
const enderecoContent = document.createElement("p");
const contato = document.createElement("h3");
const contatoEmail = document.createElement("p");
const contatoTelefone = document.createElement("p");

divContainer.classList.add("sobre-container");

function appendSobre() {
  content.appendChild(divContainer);
  divContainer.appendChild(sobre);
  sobre.textContent = "Sobre nós";
  sobreContent.textContent = "Criado em 1955, L’idea oferece as experiência legítima da cozinha italiana. \r\n" 
  sobreContent.textContent += "Prove os sabores inesquecíveis da Sicília, as maravilhas do Lombardia, e muita mais de toda a Itália aqui."
  divContainer.appendChild(sobreContent);
  divContainer.appendChild(endereco);
  endereco.textContent = "Endereço";
  divContainer.appendChild(enderecoContent);
  enderecoContent.textContent = "Rua Xiz de Ypsilon de Souza, 111, São Paulo-SP";
  divContainer.appendChild(contato);
  contato.textContent = "Contato";
  divContainer.appendChild(contatoEmail);
  contatoEmail.textContent = "Email: email.email@email.com";
  divContainer.appendChild(contatoTelefone);
  contatoTelefone.textContent = "Telefone: (11)99999-9999";
}

export { appendSobre };