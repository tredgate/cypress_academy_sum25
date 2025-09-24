// cypress/e2e/learning/bonus/
// custom_element_xpath.cy.js

import { customElement } from "../../../helpers/custom_element.js";
import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Custom Element using automatic Xpath, CSS resolution", () => {
  it("Custom Element Xpath, CSS", () => {
    new LoginPage().openPmtool();
    customElement("//input[@id='username']").type("XPATH SELECTOR");
    customElement("#username").type("CSS SELECTOR");
  });
});
