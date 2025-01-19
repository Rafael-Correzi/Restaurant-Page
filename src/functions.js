function create(element) {
  return document.createElement(element);
}

function select(classOrId) {
  return document.querySelector(classOrId);
}

function setContent(element, content) {
  element.textContent = content;
}

function addContent(element, content) {
  element.textContent += content;
}

function append(appendTo, appendee) {
  appendTo.appendChild(appendee);
}

export {create, select, setContent, addContent, append};