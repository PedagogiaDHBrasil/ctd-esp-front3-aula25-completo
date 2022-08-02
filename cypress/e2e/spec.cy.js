describe("Navigation Static", () => {
  it("should navigate to the static page", () => {
    // Comece na página index.js
    cy.visit("http://localhost:3000/");

    // Encontre um link com um atributo href contendo "static" e clique nele
    cy.get('a[href*="static"]').click();

    // Na URL deve incluir "/static"
    cy.url().should("include", "/static");

    // A nova página deve conter  uma tag P com "Está rota é estática"
    cy.get("p").contains("Está rota é estática");
  });
});
