export const REGISTRATION_FORM = {
    fullNameField: '#ca-name',
    userNameField: '#ca-username',
    passwordField: '#ca-password',
    emailField: '#ca-email',
    birthDaySelect: '.input-day > .cb-container > .cb-combobox-container > .cb-combobox',
    birthMonthSelect: '.input-month > .cb-container > .cb-combobox-container > .cb-combobox',
    birthYearSelect: '.input-year > .cb-container > .cb-combobox-container > .cb-combobox',
    cellPhoneField: '.phone',
    currencyBrlField: '.ng-invalid > .cb-container > .cb-combobox-container > .cb-combobox',
    createAaccountButton: 'button[type="submit"]',
}
export const LOGIN = {
    toEnterButton: '.headertop-notauth > app-button > .btn',
    playerSuccessfullyAuthenticated: '.headertop-auth-user-name',
    loginUsernameField: '#username',
    loginPasswordField: '#password',
    loginEnterButton: '.w-100 > .btn > span',
}
export const LOGOFF = {
    logOffButton: 'a.headertop-auth-usermenu-item',  
}
export const ACCOUNT_CREATED = {
    accountCreatedSuccessfully: '.create-account-success',
    msgAccountCreatedSuccessfully: 'h3.text-pink',
}
export const DEPOSIT = {
    depositOption: 'a[routerlink="/deposit"]',
    depositScreen: '.h3',
    pixOption: 'div.text-body1.text-pink.mb-2:contains("Pix")',
    pixDeposit: 'img[src="/assets/images/deposit/methods/PIX_BANK_TRANSFER.svg"]',
    pixValueScreen: 'div.h3.mb-4:contains("PIX - Valor")',
    customValueField: '#value',
    depositButton: 'button[title*="Depositar"]',
    successUrlPixDeposit: 'https://bmsite-staging.salsaomni.com/br/deposit/home/BR/PIX/BANK_STEPS/BANK_TRANSFER/PIX/success/ftd-success',
}
export const DEPOSIT_ADDITIONAL_INFORMATION = {
    modalAdditionalInformation: 'div.text-body2.text-bold.mb-3',
    cpfField: '#documentNumber',
    validateCpfNumberButton: '.offset-xl-2 > app-button > .btn > span',
    acceptCookiesButton: '.mb-2 > .btn > span',
    continueButton: 'button.btn.pink.btn-block.btn-regular[title="Continuar"]',
    pixDepositInstructions:'.d-flex > .h3'
}
export const BO_LOGIN = {
    loginUsernameField: '#j_username',
    loginPasswordField: '#j_password',
    loginEnterButton: '#login_button',
    MenuBotton: '.menu-button-div > .btn',
    user: 'asdasd',
    password: 'asdasd',
}
export const BO_FINANCES_DROPDOWN = {
    boFinancesOption: 'a.dropdown-toggle.ng-binding',
    boDepositOption: 'a[ui-sref="home.deposits"]',
    userNameField:'input.form-control[ng-model="filters.tempObject.username"]',
    searchBotton: '.btn > .ng-scope',
    userNameValidation: 'td[auto="red-text"][condition="isBlocked"]',
    bankValidation: 'td.ng-scope[ng-click^="openInnerOption',
    statusValidation: 'td[translate=""].ng-scope',
}
export const VERTICALS_MENU = {
    verticalMain: 'a.headertop-menu-item' ,
    sportsBettingVerticalURL: 'https://bmsite-staging.salsaomni.com/br/apostas-esportivas/overview',
    slotVerticalUrl:'https://bmsite-staging.salsaomni.com/br/slots-online/lobbyjackpotkarina',
    casinoVerticalUrl:'https://bmsite-staging.salsaomni.com/br/cassino-online/betgamestv-tv',
    bingoVertical: 'https://bmsite-staging.salsaomni.com/br/bingo-online/keno',
    promotionsVerticalUrl: 'https://bmsite-staging.salsaomni.com/br/promocoes/bonus-de-boas-vindas',

}