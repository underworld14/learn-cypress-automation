/// <reference types="cypress" />

describe("fashion sizes", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
  });

  it("should have the 7 type of sizes", () => {
    cy.get(".checkmark").should("have.length", 7);
  });
});
