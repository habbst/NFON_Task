/// <reference types="cypress" />

import TextHelper from "../support/helpers/text.helper";
import { UserObject } from "../support/objects/user.object";
import LoginPage from '../support/pages/login.page'
import UserPage from "../support/pages/user.page";

const loginPage = new LoginPage()
const userPage = new UserPage()
const textHelper = new TextHelper()

describe("loginPage_testsuite", () => {
    let validUser: UserObject
    let invalidUser: UserObject

    before(() => {
        cy.fixture('valid-user.json').then((user) => {
            validUser = user;
        });

        cy.fixture('invalid-user.json').then((user) => {
            invalidUser = user;
        });
    })

    beforeEach(()=> {
        cy.visit("baseUrl")
    })

    it("Perform login with valid credentials", () => {
        loginPage.PerformLogin(validUser.username, validUser.password)
        userPage.ChangePasswordButton.should('be.visible')
    })

    it("Perform login with invalid credentials", () => {
        loginPage.PerformLogin(invalidUser.username, invalidUser.password)
        textHelper.PageContainsText("Username and/or password are incorrect")

    })
})