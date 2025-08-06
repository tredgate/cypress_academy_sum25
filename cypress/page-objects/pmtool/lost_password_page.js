import { LoginPage } from "./login_page.js";
import { LostPasswordTransfer } from "./lost_password_transfer.js";

export class LostPasswordPage {
  constructor() {
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.sendButton = ".btn-info";
    this.backButton = "#back-btn";
  }

  clickBack() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  clickSend() {
    cy.get(this.sendButton).click();
    return new LoginPage();
  }

  clickSendFail() {
    cy.get(this.sendButton).click();
    return this;
  }

  // ? Bonusová metoda směřující na rozcestník
  clickSendTransfer() {
    cy.get(this.sendButton).click();
    return new LostPasswordTransfer();
  }
}
