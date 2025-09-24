// cypress/page-objects/pmtool/flows
// login_flows.js

import { LoginPage } from "../login_page.js";

export function openAndLogin(username, password) {
  return new LoginPage().openPmtool().login(username, password);
}

export function loginDefaultUser() {
  const username = Cypress.env("pmtool_username");
  const password = Cypress.env("pmtool_password");

  return openAndLogin(username, password);
}

export function loginAndOpenProjects(username, password) {
  return openAndLogin(username, password).clickProjectLink();
}

export function attemptInvalidLogin(username, password) {
  const loginPage = new LoginPage();
  loginPage.openPmtool().login(username, password);
  return loginPage;
}
