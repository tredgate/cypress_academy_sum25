// cypress_commands.cy.js
// cypress/e2e/learning/bonus/

describe("Using Cypress Commands", () => {
  it("slowlyType and waitWith Commands", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.waitWith(1000, "Testing new waiting");
    cy.get("#username").typeSlowly("testujeme", 500);
  });
});
