// tegb_login_tests.cy.js
// cypress/e2e/learning/api

import { TegBLoginPage } from "../../../page-objects/tegb/tegb_login_page.js";

describe("Tegb Accounts Tests", () => {
  it("Login and Open Accounts", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegbx_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .clickAccounts()
      .titleHaveText("Account");
  });
});
