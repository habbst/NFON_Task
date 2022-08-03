import { CyJElement } from "../../types-aliases";

class UserPage {
    
    get ChangePasswordButton(): CyJElement {
        return cy.get('[data-e2e="main-settings-user-page__change-password--button"]')
    }
}

export default UserPage