// ? toto je bonusová třída pro řešení situací, kdy mám nejednoznačné chování i funkcionality

import { LoginPage } from "./login_page.js";
import { LostPasswordPage } from "./lost_password_page.js";

export class LostPasswordTransfer {
  onLoginPage() {
    return new LoginPage();
  }

  onLostPasswordPage() {
    return new LostPasswordPage();
  }
}
