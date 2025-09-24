// dictionaries.cy.js
// cypress/e2e/learning/bonus/

import { customElement } from "../../../helpers/custom_element.js";
import { dictionary } from "../../../support/dictionary.js";

describe("Using Dictionaries", () => {
  it("Pmtool Login Page Texts Checks", () => {
    const texts = dictionary.pmtool.login;

    cy.visit("https://tredgate.com/pmtool");
    customElement("#username").havePlaceholder(texts.usernamePlaceholder);
    customElement("#password").havePlaceholder(texts.passwordPlaceholder);
    customElement("h3.form-title").haveText(texts.title);
  });
});
