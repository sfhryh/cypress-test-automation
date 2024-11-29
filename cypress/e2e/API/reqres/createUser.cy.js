/// <reference types="cypress" />

describe('API CREATE User', () => {
    it('Test API POST Create User',() => {
        const requestBody = {
            name: 'fafa',
            job: 'leader'
        };
        cy.request('POST','https://reqres.in/api/users', requestBody).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.not.be.null;
            expect(response.body.name).to.eq(requestBody.name);
            expect(response.body.job).to.eq(requestBody.job); 
        cy.log('Response time: ${response.duration}ms');
            expect(response.duration).to.be.lessThan(1000);       
        })
    })
    
    })