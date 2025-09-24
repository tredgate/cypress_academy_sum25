// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { currentLanguage } = require("./i18n/i18n.js");

Cypress.Commands.add("waitWith", (milliseconds, reason) => {
  cy.wait(milliseconds);
  cy.log(`Waited for ${milliseconds} ms. Reason: ${reason}`);
});

Cypress.Commands.add(
  "typeSlowly",
  { prevSubject: "element" },
  (selector, text, delay = 100) => {
    const { customElement } = require("../helpers/custom_element.js");
    customElement(selector).get().type(text, { delay, log: false });
    cy.log(
      `Typed text "${text}" into element ${selector} with delay ${delay} ms`
    );
  }
);

Cypress.Commands.add("openTegbAndSetLanguage", () => {
  const { LoginPage } = require("../page-objects/tegb-cert/login_page.js");
  const { currentLanguage } = require("./i18n/i18n.js");
  const loginPage = new LoginPage();
  loginPage.open();
  loginPage.switchLanguage(currentLanguage);
  cy.log(`Switched TEGB to '${currentLanguage}' language`);
});
