const content = document.querySelector("#content");

const sobre = document.createElement("h2");
const sobreContent = document.createElement("p");
const endereco = document.createElement("h3");
const enderecoContent = document.createElement("p");
const contato = document.createElement("h3");
const contatoEmail = document.createElement("p");
const contatoTelefone = document.createElement("p");


function appendSobre() {
  content.appendChild(sobre);
  sobre.textContent = "Sobre nós";
  content.appendChild(sobreContent);
    sobreContent.textContent = "Criado em 1955, L’idea oferece as experiência legítima da cozinha italiana. Prove os sabores inesquecíveis da Sicília, as maravilhas do Lombardia, e muita mais de toda a Itália aqui."
  content.appendChild(endereco);
  endereco.textContent = "Endereço";
  content.appendChild(enderecoContent);
  enderecoContent.textContent = "Rua Xiz de Ypsilon de Souza, 111, São Paulo-SP";
  content.appendChild(contato);
  contato.textContent = "Contato";
  content.appendChild(contatoEmail);
  contatoEmail.textContent = "Email: email.email@email.com";
  content.appendChild(contatoTelefone);
  contatoTelefone.textContent = "Telefone: (11)99999-9999";
}

export { appendSobre };