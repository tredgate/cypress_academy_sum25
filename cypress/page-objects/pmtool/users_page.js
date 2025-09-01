import { HeaderSection } from "./common/header_section.js";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.pageTitleHeader = ".page-title";
    this.addUserButton = '[test_id="Add User"]';
  }
}
