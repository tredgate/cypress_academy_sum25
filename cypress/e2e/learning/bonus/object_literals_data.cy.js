// cypress/e2e/learning/bonus/
// object_literals_data.cy.js

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";
import { generateUserData } from "../../../support/generators.js";

describe("Object Literals Data Examples", () => {
  it("Basic Object Literal demo", () => {
    const userData = {
      username: "petrfifka",
      password: "CypressRocks123!",
      email: "petrfifka@example.com",
      firstName: "Petr",
      age: 30,
    };
    // * Použití knihovny JSON pro hezký výpis objektu v logu
    cy.log(JSON.stringify(userData, null, 2));

    cy.log("Username: " + userData.username);
    cy.log("Password: " + userData.password);
    cy.log("Email: " + userData.email);
    cy.log("First Name: " + userData.firstName);
    cy.log("Age: " + userData.age);
  });

  it("Object Literal in Page Objects", () => {
    const userData = {
      username: "petrfifka",
      password: "CypressRocks123!",
      email: "petrfifka@example.com",
      firstName: "Petr",
      age: 30,
    };

    new LoginPage().logUserData(userData);
  });

  it("Object Literal - using custom generator", () => {
    const userData = generateUserData();
    new LoginPage().logUserData(userData);
  });
});
