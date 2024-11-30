export default class loginPage{
    
    
    static visitLoginPage(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }    
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get('[type="submit"]');
    }
    static dashboardPage(){
        return cy.get('h6').contains('Dashboard');
    }
    static errorValidate(){
        return cy.get('div.oxd-alert-content.oxd-alert-content--error');
    } 
    static errorNull(){
        return cy.get('.oxd-input-group__message');
    } 
}