import { HeaderSection } from "./common/header_section.js";
import { LoginPage } from "./login_page.js";
import { ProjectsPage } from "./projects_page.js";

export class DashboardPage extends HeaderSection {
  constructor() {
    super();
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
