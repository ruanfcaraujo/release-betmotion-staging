/// <reference types="Cypress"/>
import { DEPOSIT, LOGIN, BO_LOGIN, BO_FINANCES_DROPDOWN } from './constants'
import { userName, password } from './@1newPlayerRegister.cy'

describe('pix deposit with a new player account and backoffice confirmation ', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearAllSessionStorage()
    })
    it('must deposit by pix and confirm', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://bmsite-staging.salsaomni.com/br/', { failOnStatusCode: false })
        cy.get(LOGIN.toEnterButton).click()
        cy.playerLogin({ userName, password })
        cy.get(LOGIN.playerSuccessfullyAuthenticated).click()
        cy.get(DEPOSIT.depositOption).contains('Depósito').click()
        cy.get(DEPOSIT.depositScreen, { timeout: 30000 }).contains('Faça seu primeiro depósito e comece a apostar!')
        cy.pixDeposit()
        cy.depositAdditionalInformation()

        Cypress.on('uncaught:exception', () => {
            return false
        })

        cy.visit('https://bmbo-staging.salsaomni.com', { failOnStatusCode: false })
        cy.backOfficeLogin()
        cy.get(BO_LOGIN.MenuBotton).should('be.visible')
        cy.contains(BO_FINANCES_DROPDOWN.boFinancesOption, 'Finanzas').click()
        cy.get(BO_FINANCES_DROPDOWN.boDepositOption).click()
        cy.get(BO_FINANCES_DROPDOWN.userNameField).type(userName)
        cy.get(BO_FINANCES_DROPDOWN.searchBotton).click()
        cy.get(BO_FINANCES_DROPDOWN.userNameValidation).should('have.text', userName)
        cy.get(BO_FINANCES_DROPDOWN.bankValidation).contains('PIX').should('be.visible')
        cy.get(BO_FINANCES_DROPDOWN.statusValidation).contains('Pendiente').should('be.visible')

    })

})