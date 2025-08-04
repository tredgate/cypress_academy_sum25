// import { faker } from "@faker-js/faker"; // ? Originálni faker - anglický
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? Česká lokalizace

describe("Data generation with Faker", () => {
  it("Generate unique test data", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.exampleEmail({
      firstName: firstName,
      lastName: lastName,
    });
    const street = faker.location.streetAddress();
    const city = faker.location.city();

    cy.log(
      `Vygenerovaná test data: \n - jméno: ${firstName} \n - příjmení: ${lastName} \n email: \n ${email}`
    );
    cy.log(`Adresa: ${street}, ${city}`);
  });
});

/*
Cvičení: Vytvoření nových PO a testu (⌛15:00)
Vytvořte test, který:
Otevře přihlašovací stránku Pmtool
Klikne na odkaz: Password forgotten?
Vyplní:
Email: test@tredgate.cz
Uživatelské jméno: test
Klikne na tlačítko send.

Umístění testu: cypress/e2e/exercises
Název testovacího souboru: lost_password_po.cy.js

Umístění page objectu: cypress/page-objects/pmtool
Název page objectu: lost_password_page.js
Název class: LostPasswordPage

Selektory:
Password forgotten (LoginPage): #forget_password
Email: :nth-child(3) > .input-icon > .form-control
Uživatelské jméno: :nth-child(2) > .input-icon > .form-control
Send: .btn-info

*/
