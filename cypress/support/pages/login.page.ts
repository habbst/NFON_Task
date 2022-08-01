import { CyJElement } from "../../types-aliases";

class LoginPage {

    get UsernameField(): CyJElement {
        return cy.get('[data-e2e="auth-login-page__username--input"]')
    }

    get PasswordField(): CyJElement {
        return cy.get('[data-e2e="auth-login-page__password--input"]')
    }

    get LoginButton(): CyJElement {
        return cy.get('[data-e2e="auth-login-page__submit--button"]')
    }

    PerformLogin(username, password) {
        this.UsernameField.type(username)
        this.PasswordField.type(password)
        this.LoginButton.click()
    }
}

export default LoginPage