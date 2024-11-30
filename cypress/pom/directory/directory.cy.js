export default class directory{

    static clickDirectoryMenu(){
        return cy.get('[href="/web/index.php/directory/viewDirectory"]').click();
    }
    static verifyDirectoryMenu(){
        return cy.get('h5').contains('Directory');
    }
    static inputEmployeeName(){
        return cy.get('input[placeholder="Type for hints..."]');
    }
    static suggestionList(){
        return cy.get('[role="listbox"]');
    }
    static buttonSearch(){
        return cy.get('[type="submit"]');
    }
    static resultbyName(){
        return cy.get('p.oxd-text.oxd-text--p.orangehrm-directory-card-header.--break-words');
    }
    static dropDownJobTitle(){
        return cy.get('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(0)
    }
    static resultbyJob(){
        return cy.get('p.oxd-text.oxd-text--p.orangehrm-directory-card-subtitle.--break-words')
    }
    static dropDownLocation(){
        return cy.get('i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(1)
    }
    static resultbyLocation(){
        return cy.get('p.oxd-text.oxd-text--p.orangehrm-directory-card-description.--break-words')
    }
    static invalidEmployeeName(){
        return cy.get('span').contains('Invalid');
    }
    static noResultFound(){
        return cy.get('div.orangehrm-horizontal-padding.orangehrm-vertical-padding span.oxd-text');
    }
}