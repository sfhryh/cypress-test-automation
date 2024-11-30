import loginPage from "../../../pom/Login/login.cy"
import directory from "../../../pom/directory/directory.cy";
/// <reference types = "cypress" /> 

describe('Directory Feature', () =>{

    beforeEach(() =>{
        loginPage.visitLoginPage();
        loginPage.verifyLoginPage().should('contain.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept('GET','**/subunit').as('subUnit');
        loginPage.buttonLogin().click();
        cy.wait('@subUnit');
        loginPage.dashboardPage().should('contain.text','Dashboard');
        cy.intercept('GET','**/employees?limit=14&offset=0').as('employees');
        directory.clickDirectoryMenu();
        cy.wait('@employees');
        directory.verifyDirectoryMenu();
    });

    it('Search by Employee Name', () => {
        directory.inputEmployeeName().type("Rebecca");
        directory.suggestionList()
            .should('be.visible')
            .contains('Rebecca Harmony')
            .click();
        directory.buttonSearch().click();
        directory.resultbyName().contains(/Rebecca Harmony/);
      });

    it('Search by Job Title', () => {
        directory.dropDownJobTitle().click();
        directory.suggestionList()
            .should('be.visible')
            .contains('QA Engineer')
            .click();
        directory.buttonSearch().click();
        directory.resultbyJob().contains(/QA Engineer/);
      });

      it('Search by Location', () => {
        directory.dropDownLocation().click();
        directory.suggestionList()
            .should('be.visible')
            .contains('Texa')
            .click();
        directory.buttonSearch().click();
        directory.resultbyLocation().contains(/Texa/);
      });
        
      it("Search by Combined Filters", () => {
        directory.inputEmployeeName().type("Rebecca");
        directory.suggestionList()
            .should('be.visible')
            .contains('Rebecca Harmony')
            .click();
        directory.dropDownJobTitle().click();
        directory.suggestionList()
            .should('be.visible')
            .contains('QA Engineer')
            .click();
        directory.dropDownLocation().click();
        directory.suggestionList()
            .should('be.visible')
            .contains('Texa')
            .click();
        directory.buttonSearch().click();
        directory.resultbyName().contains(/Rebecca Harmony/)
        directory.resultbyJob().contains(/QA Engineer/)
        directory.resultbyLocation().contains(/Texa/);
      });
      
      it("Search with No Results of Employee", () => {
        directory.inputEmployeeName().type("xyz123");
        directory.buttonSearch().click();
        directory.invalidEmployeeName().should("contain.text", "Invalid");
      });

      it("Search with No Results of Job Title or Location", () => {
        directory.dropDownJobTitle().click();
        directory.suggestionList()
            .should('be.visible')
            .contains('Database Administrator')
            .click();
        directory.dropDownLocation().click();
        directory.suggestionList()
            .should('be.visible')
            .contains('Texa')
            .click();
        directory.buttonSearch().click();
        directory.noResultFound().should('contain.text', 'No Records Found');
      });

})