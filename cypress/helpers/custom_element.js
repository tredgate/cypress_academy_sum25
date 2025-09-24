export const customElement = (selector) => {
  const element = {
    isVisible() {
      getCypressElement(selector).should("be.visible");
      return this;
    },
    isNotVisible() {
      getCypressElement(selector).should("not.be.visible");
      return this;
    },
    haveText(text, ignoreWhitespace = true) {
      text = String(text);
      const assertedText = ignoreWhitespace ? text.trim() : text; // ? Pokud nebude fungovat trim, tak použít text.replace(/\s+/g, ' ')
      getCypressElement(selector).should("have.text", assertedText);
      return this;
    },
    containsText(text) {
      getCypressElement(selector).should("contain.text", text);
      return this;
    },
    haveValue(value) {
      getCypressElement(selector).should("have.value", value);
      return this;
    },
    havePlaceholder(placeholder) {
      getCypressElement(selector).should(
        "have.attr",
        "placeholder",
        placeholder
      );
      return this;
    },
    haveAttribute(attribute, value) {
      getCypressElement(selector).should("have.attr", attribute, value);
      return this;
    },
    click() {
      getCypressElement(selector).click();
      return this;
    },
    type(value) {
      getCypressElement(selector).type(value);
      return this;
    },
    clear() {
      getCypressElement(selector).clear();
      return this;
    },
    get() {
      return getCypressElement(selector);
    },
  };
  return element;
};

function isXpath(selector) {
  const selectorString = String(selector);
  return selectorString.startsWith("/") || selectorString.startsWith("(/");
}

function getCypressElement(selector) {
  if (isXpath(selector)) {
    /** @type {Cypress.Chainable} */
    const xpathElement = cy.xpath(selector);
    return xpathElement;
  }
  return cy.get(selector);
}
