import { LoginPage } from "../../../page-objects/pmtool/login_page.js";
import { UsersPage } from "../../../page-objects/pmtool/users_page.js";

describe("Users Page Atomic Tests", () => {
  const usersPage = new UsersPage();

  beforeEach(() => {
    new LoginPage().openPmtool().login("cypress_zima_2024", "Zima2024Cypress");
    new UsersPage().visit();
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      cy.get(usersPage.pageTitleHeader).should("be.visible");
    });

    it("Title have Text", () => {
      cy.get(usersPage.pageTitleHeader).should("have.text", "Users");
    });
  });

  context("Add User Button Tests", () => {
    it("Add User Button is Visible", () => {
      cy.get(usersPage.addUserButton).should("be.visible");
    });

    it("Add User Button have Text", () => {
      cy.get(usersPage.addUserButton).should("have.text", "Add User");
    });
  });
});
