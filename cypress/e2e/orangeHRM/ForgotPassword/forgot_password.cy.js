import loginPage from "../../../pom/Login/login.cy";
import forgotPassword from "../../../pom/forgot-password/forgotPassword.cy";
/// <reference types= "cypress" />

describe('Forgot Password Feature', () => {

    const validUsername = 'admin';

    beforeEach(() => {
        loginPage.visitLoginPage();
        loginPage.verifyLoginPage().should('contain.text','Login');
        forgotPassword.clickForgotPwd();
        forgotPassword.verifyForgotPwdPage();
    });

    it('Should successfully send a reset password link for a valid email', () => {
        forgotPassword.inputUsername().type(validUsername);
        forgotPassword.buttonResetPwd().click();
        forgotPassword.verifySuccessMessage().should('contain.text', 'Reset Password link sent successfully');
    });
    it('Should navigate back to login when clicking on the cancel button', () => {
        forgotPassword.buttonCancel().click();
        loginPage.verifyLoginPage().should('contain.text','Login');
    });


})