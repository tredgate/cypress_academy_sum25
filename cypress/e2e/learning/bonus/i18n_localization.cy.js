import { customElement } from "../../../helpers/custom_element.js";
import { i18n } from "../../../support/i18n/i18n.js";

describe("Localization tests", () => {
  it("Tegb localized", () => {
    cy.openTegbAndSetLanguage();

    customElement('[data-testid="submit-button"]').haveText(
      i18n.tegb.login.loginButton
    );
  });
});
