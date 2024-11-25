import loginPage from "../../../pom/Login/login.cy";
/// <reference types="cypress" />

describe('Login Feature',() => {
    beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.verifyLoginPage().should('contain.text','Login');
    });
  
    it('user login with valid credentials', ()=> {
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','**/subunit').as('subUnit');
        loginPage.buttonLogin().click();
        cy.wait('@subUnit');
        loginPage.dashboardPage().should('contain.text','Dashboard');
    })

    it('should display validation error message for invalid username and password', () => {
        loginPage.inputUsername().type('Asmin');
        loginPage.inputPassword().type('admin1234');
        loginPage.buttonLogin().click();
        loginPage.errorValidate()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      
    })

    it('should display validation error message for invalid password', () => {
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin1234');
        loginPage.buttonLogin().click();
        loginPage.errorValidate()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      
    })

    it('should display validation error message for invalid username', () => {
        loginPage.inputUsername().type('Asmin');
        loginPage.inputPassword().type('admin123');
        loginPage.buttonLogin().click();
        loginPage.errorValidate()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      
    })

    it('should display validation error when username and password are empty', () => {
        loginPage.buttonLogin().click();
        loginPage.errorNull()
          .should('be.visible')
          .and('contain.text', 'Required');
        loginPage.errorNull().eq(1)
          .should('be.visible')
          .and('contain.text', 'Required');
    });
        
    it('should display validation error when password is empty', () => {
        loginPage.inputUsername().type('Admin');    
        loginPage.buttonLogin().click();
        loginPage.errorNull()
          .should('be.visible')
          .and('contain.text', 'Required');
    });

    it('should display validation error when username is empty', () => {
        loginPage.inputPassword().type('admin123');    
        loginPage.buttonLogin().click();
        loginPage.errorNull()
          .should('be.visible')
          .and('contain.text', 'Required');
    });

    it('should success to login when username has different case-sensitivity', () => {
        loginPage.inputUsername().type('aDmin');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','**/locations').as('locations');
        loginPage.buttonLogin().click();
        cy.wait('@locations');
        loginPage.dashboardPage().should('contain.text','Dashboard');
    })

    it('should display validation error when password has different case-sensitivity', () => {
        loginPage.inputUsername().type('admin');        
        loginPage.inputPassword().type('Admin123');    
        loginPage.buttonLogin().click();
        loginPage.errorValidate()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
    });

    it('should success to login when username has trailing spaces', () => {
        loginPage.inputUsername().type('Admin ');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','**/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc').as('feed');
        loginPage.buttonLogin().click();
        cy.wait('@feed');
        loginPage.dashboardPage().should('contain.text','Dashboard');
    })

    it('should display validation error when username has leading spaces', () => {
        loginPage.inputUsername().type(' Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.buttonLogin().click();
        loginPage.errorValidate()
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
    })

    it('should redirect to login page when accessing menu URL directly without login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        cy.url().should('include', '/login');
        loginPage.inputUsername().should('be.visible');
        loginPage.inputPassword().should('be.visible');
    });

})
