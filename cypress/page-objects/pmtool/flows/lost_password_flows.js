import { LoginPage } from "../login_page.js";

export function pmtoolOpenAndResetPassword(username, email) {
  return new LoginPage()
    .openPmtool()
    .clickPasswordForgotten()
    .typeEmail(email)
    .typeUsername(username)
    .clickSend();
}
