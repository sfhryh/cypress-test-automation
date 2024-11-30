export default class forgotPassword{

    static clickForgotPwd(){
        return cy.get('p.orangehrm-login-forgot-header').click();
    }
    static verifyForgotPwdPage(){
        return cy.url().should('include', '/requestPasswordResetCode');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static buttonResetPwd(){
        return cy.get('[type="submit"]');
    }
    static verifySuccessMessage(){
        return cy.get('h6').contains('Reset Password link sent successfully');
    }
    static buttonCancel(){
        return cy.get('[type="button"]');
    }



}