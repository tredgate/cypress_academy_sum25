import { faker } from "@faker-js/faker";

/**
 * Generuje náhodná uživatelská data pomocí Faker.js
 * @return {{username: string, password: string, email: string, firstName: string, age: number}} Objektový literál s uživatelskými daty
 * @property {string} username - náhodné uživatelské jméno
 * @property {string} password - náhodné heslo
 * @property {string} email - náhodná emailová adresa
 * @property {string} firstName - náhodné křestní jméno
 * @property {number} age - náhodný věk mezi 18 a 99 lety
 */
export function generateUserData() {
  return {
    username: faker.internet.username(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    age: faker.number.int({ min: 18, max: 99 }),
  };
}
