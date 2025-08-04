import { LoginPage } from "../../page-objects/pmtool/login_page.js";
import { LostPasswordPage } from "../../page-objects/pmtool/lost_password_page.js";

describe("Exercise: Page Objects - Lost Password", () => {
  it("Lost Password Test", () => {
    const loginPage = new LoginPage();
    const lostPasswordPage = new LostPasswordPage();

    loginPage.openPmtool();
    loginPage.clickPasswordForgotten();
    lostPasswordPage.typeEmail("test@tredgate.cz");
    lostPasswordPage.typeUsername("test");
    lostPasswordPage.clickSend();
  });
});
