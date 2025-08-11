import { LoginPage } from "./login_page.js";
import { ProjectsPage } from "./projects_page.js";

export class DashboardPage {
  constructor() {
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.projectLink = "#Projects";
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  clickProjectLink() {
    cy.get(this. projectLink).click();
    return new ProjectsPage();
  }
}
