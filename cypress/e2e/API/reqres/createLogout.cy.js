/// <reference types="cypress" />

describe('API CREATE Logout', () => {
    it('Test API POST Create Logout',() => {
        cy.request('POST','https://reqres.in/api/logout').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
        cy.log('Response time: ${response.duration}ms');
            expect(response.duration).to.be.lessThan(1000);       
        })
    })
    
    })