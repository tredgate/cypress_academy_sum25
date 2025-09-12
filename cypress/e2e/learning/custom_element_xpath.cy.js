import { customElement } from "../../helpers/custom_element.js";

describe("Xpath and CSS auto recognition", () => {
  it("Custom element xpath, css", () => {
    cy.visit("https://tredgate.com/pmtool");
    customElement("#username").type("CSS");
    customElement('//input[@id="username"]').type("Xpath");
  });
});
