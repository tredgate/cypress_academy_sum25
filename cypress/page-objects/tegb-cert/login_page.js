import { customElement } from "../../helpers/custom_element.js";

export class LoginPage {
  constructor() {
    this.czechLanguageButton = customElement("button[data-testid='cz']");
    this.englishLanguageButton = customElement("button[data-testid='en']");
    this.usernameInput = customElement("input[data-testid='username-input']");
    this.passwordInput = customElement("input[data-testid='password-input']");
    this.loginButton = customElement("button[data-testid='submit-button']");
    this.lostPasswordButton = customElement(
      "[data-testid='registration-link']"
    ); // ! Bug v TEGB - špatný data-testid
    this.registerButton = customElement("[data-testid='register-button']");
    this.title = customElement("h1.title");
  }

  switchLanguage(language) {
    switch (language.toLowerCase()) {
      case "cs":
        this.czechLanguageButton.click();
        break;
      case "en":
        this.englishLanguageButton.click();
        break;
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
    return this;
  }

  open() {
    cy.visit(Cypress.env("tegb_cert_url"));
    return this;
  }

  loginPageTextChecks(loginTexts) {
    this.title.haveText(loginTexts.title);
    this.usernameInput.havePlaceholder(loginTexts.usernamePlaceholder);
    this.passwordInput.havePlaceholder(loginTexts.passwordPlaceholder);
    this.loginButton.haveText(loginTexts.loginButton);
    this.lostPasswordButton.haveText(loginTexts.forgotPassword);
    this.registerButton.haveText(loginTexts.register);
    return this;
  }
}
