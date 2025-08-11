import { faker } from '@faker-js/faker'
import { LoginPage } from '../../page-objects/pmtool/login_page';

describe('CSS Selectors Exercise', () => {
    it("Create new project with selectors", () => {
        const name = "MartinProject" + faker.number.int({ max: 1000 });
  
        new LoginPage()
        .openPmtool()
        .login("cypress_zima_2024", "Zima2024Cypress")
        .clickProjectLink()
        .clickAddProject()
        .typeName(name)
        .clickSave()
        .clickProfile()
        .clickLogout();
    })
})
