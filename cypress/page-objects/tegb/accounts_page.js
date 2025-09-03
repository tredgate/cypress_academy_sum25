import { customElement } from "../../helpers/custom_element.js";

export class AccountsPage {
  constructor() {
    this.titleHeader = customElement('[data-testid="title"]');
  }

  titleHaveText(titleText) {
    this.titleHeader.haveText(titleText);
    return this;
  }
}
