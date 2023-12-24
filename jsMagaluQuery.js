// Obtém todos os elementos <h2> com a classe "sc-ZEldx"
const titles = document.querySelectorAll("h2.sc-ZEldx");

// Percorre cada título encontrado
titles.forEach(title => {
  // Verifica se o título contém a palavra "iPhone 11"
  if (title.textContent.includes("iPhone 11")) {
    // Cria um novo elemento <span> com o texto "Em promoção"
    const promoText = document.createElement("span");
    promoText.textContent = "Em promoção";

    // Insere o novo elemento após o título
    title.parentNode.insertBefore(promoText, title.nextSibling);
  }
});
