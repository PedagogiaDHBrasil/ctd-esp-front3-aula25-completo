describe("Navigation Dynamic", () => {
  it("should navigate to the dynamic page", () => {
    // Comece na página index.js
    cy.visit("http://localhost:3000/");

    // Encontre um link com um atributo href contendo "/serie/rickandmorty" e clique nele
    cy.get('a[href*="/serie/rickandmorty"]').click();

    // Na URL deve incluir "/serie/rickandmorty"
    cy.url().should("include", "/serie/rickandmorty");

    // A nova página deve conter uma tag P com "Rota dinâmica: /serie/rickandmorty"
    cy.get("p").contains("Rota dinâmica: /serie/rickandmorty");
  });
});
