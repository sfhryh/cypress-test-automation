/// <reference types="cypress" />

describe('Login Feature',() => {
    beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('h5').contains('Login').should('contain.text','Login');
    });
  
    it('user login with valid credentials', ()=> {
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('contain.text','Dashboard');
    })

    it('should display validation error message for invalid username and password', () => {
        cy.get('[name="username"]').type('Asmin');
        cy.get('[name="password"]').type('admin1234');
        cy.get('[type="submit"]').click();
        cy.get('div.oxd-alert-content.oxd-alert-content--error')
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      
    })

    it('should display validation error message for invalid password', () => {
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin1234');
        cy.get('[type="submit"]').click();
        cy.get('div.oxd-alert-content.oxd-alert-content--error')
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      
    })

    it('should display validation error message for invalid username', () => {
        cy.get('[name="username"]').type('Asmin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('div.oxd-alert-content.oxd-alert-content--error')
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      
    })

    it('should display validation error when username and password are empty', () => {
        cy.get('[type="submit"]').click();
        cy.get('.oxd-input-group__message')
          .should('be.visible')
          .and('contain.text', 'Required');
        cy.get('.oxd-input-group__message').eq(1)
          .should('be.visible')
          .and('contain.text', 'Required');
    });
        
    it('should display validation error when password is empty', () => {
        cy.get('[name="username"]').type('Admin');    
        cy.get('[type="submit"]').click();
        cy.get('.oxd-input-group__message')
          .should('be.visible')
          .and('contain.text', 'Required');
    });

    it('should display validation error when username is empty', () => {
        cy.get('[name="password"]').type('admin123');    
        cy.get('[type="submit"]').click();
        cy.get('.oxd-input-group__message')
          .should('be.visible')
          .and('contain.text', 'Required');
    });

    it('should success to login when username has different case-sensitivity', () => {
        cy.get('[name="username"]').type('aDmin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('contain.text','Dashboard');
    })

    it('should display validation error when password has different case-sensitivity', () => {
        cy.get('[name="username"]').type('admin');        
        cy.get('[name="password"]').type('Admin123');    
        cy.get('[type="submit"]').click();
        cy.get('div.oxd-alert-content.oxd-alert-content--error')
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
    });

    it('should success to login when username has trailing spaces', () => {
        cy.get('[name="username"]').type('Admin ');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('contain.text','Dashboard');
    })

    it('should display validation error when username has leading spaces', () => {
        cy.get('[name="username"]').type(' Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('div.oxd-alert-content.oxd-alert-content--error')
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
    })

    it('should redirect to login page when accessing menu URL directly without login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
        cy.url().should('include', '/login');
        cy.get('[name="username"]').should('be.visible');
        cy.get('[name="password"]').should('be.visible');
    });

})
