// keyboard_arguments.cy.js
// keyboard-actions

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Keyboard Arguments", () => {
  it("Confirm Form by Pressing Enter Key", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password") + "{enter}");
  });
});
