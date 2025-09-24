import { customElement } from "../../helpers/custom_element.js";
import { DashboardPage } from "./dashboard_page.js";
import { LostPasswordPage } from "./lost_password_page.js";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username");
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.passwordForgottenAnchor = customElement("#forget_password");
    this.pageHeader = customElement("h3.form-title");
    this.logo = customElement(".login-page-logo img");
    this.rememberMeCheckbox = customElement(".checkbox");
    this.alertDiv = customElement(".alert");
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  clickPasswordForgotten() {
    this.passwordForgottenAnchor.click();
    return new LostPasswordPage();
  }

  pageHeaderHasText(headerText) {
    this.pageHeader.haveText(headerText);
    return this;
  }

  /**
   * Tato metoda slouží pro ukázku použití objektových literálů v Page Objectu, reálně by zde neměla být, s LoginPage nesouvisí a neinteraguje s ní
   * @param {Object} userData - objektový literál s uživatelskými daty
   * @param {string} userData.username - uživatelské jméno
   * @param {string} userData.password - heslo
   * @param {string} userData.email - emailová adresa
   * @param {string} userData.firstName - křestní jméno
   * @param {number} userData.age - věk
   *
   * @example
   * const userData = {
   *   username: "petrfifka",
   *  password: "CypressRocks123!",
   *  email: "petrfifka@example.com",
   *  firstName: "Petr",
   *  age: 30,
   * };
   */
  logUserData(userData) {
    cy.log("User Data:");
    cy.log("Username: " + userData.username);
    cy.log("Password: " + userData.password);
    cy.log("Email: " + userData.email);
    cy.log("First Name: " + userData.firstName);
    cy.log("Age: " + userData.age);
  }
}
