describe("Using Context", () => {
  context("Podsložka 1", () => {
    it("Test1 v podsložce 1", () => {
      cy.log("TEST 1");
    });

    it("Test2 v podsložce 1", () => {
      cy.log("TEST 1");
    });
  });

  context("Podsložka 2", () => {
    it("Test1 v podsložce 2", () => {
      cy.log("TEST 1");
    });

    it("Test2 v podsložce 3", () => {
      cy.log("TEST 1");
    });
  });
});
