export const customElement = (selector) => {
  let isXPath = false;
  if (selector.startsWith("//") || selector.startsWith("(//")) {
    isXPath = true;
  }

  const element = {
    isVisible() {
      !isXPath
        ? cy.get(selector).should("be.visible")
        : cy.xpath(selector).should("be.visible");
      return this;
    },
    isNotVisible() {
      if (!isXPath) {
        cy.get(selector).should("not.be.visible");
      } else {
        cy.xpath(selector).should("not.be.visible");
      }
      return this;
    },
    haveText(text) {
      if (!isXPath) {
        cy.get(selector).should("have.text", text);
      } else {
        cy.xpath(selector).should("have.text", text);
      }
      return this;
    },
    containsText(text) {
      if (!isXPath) {
        cy.get(selector).should("contain.text", text);
      } else {
        cy.xpath(selector).should("contain.text", text);
      }
      return this;
    },
    haveValue(value) {
      if (!isXPath) {
        cy.get(selector).should("have.value", value);
      } else {
        cy.xpath(selector).should("have.value", value);
      }
      return this;
    },
    havePlaceholder(placeholder) {
      if (!isXPath) {
        cy.get(selector).should("have.attr", "placeholder", placeholder);
      } else {
        cy.xpath(selector).should("have.attr", "placeholder", placeholder);
      }
      return this;
    },
    haveAttribute(attribute, value) {
      if (!isXPath) {
        cy.get(selector).should("have.attr", attribute, value);
      } else {
        cy.xpath(selector).should("have.attr", attribute, value);
      }
      return this;
    },
    click() {
      if (!isXPath) {
        cy.get(selector).click();
      } else {
        cy.xpath(selector).click();
      }
      return this;
    },
    type(value) {
      if (!isXPath) {
        cy.get(selector).type(value);
      } else {
        cy.xpath(selector).type(value);
      }
      return this;
    },
    clear() {
      if (!isXPath) {
        cy.get(selector).clear();
      } else {
        cy.xpath(selector).clear();
      }
      return this;
    },
    get() {
      return !isXPath ? cy.get(selector) : cy.xpath(selector);
    },
  };
  return element;
};
