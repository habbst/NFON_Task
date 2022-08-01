/// <reference types="cypress" />

import { UserObject } from "../support/objects/user.object";
import LoginPage from '../support/pages/login.page'

const loginPage = new LoginPage()

describe("loginPage_testsuite", () => {
    let nfonUser: UserObject

    before(() => {
        cy.fixture('test-users.json').then((user) => {
            nfonUser = user;
        });
    })

    beforeEach(()=> {
        cy.visit("baseUrl")
    })

    it("Perform login with valid credentials", () => {
        loginPage.PerformLogin(nfonUser.username, nfonUser.password)
    })
})