/// <reference types="cypress" />

describe('API GET List User', () => {
it('Test API List User', () => {
    cy.request('GET','https://reqres.in/api/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;   
    cy.log('Response time: ${response.duration}ms');
        expect(response.duration).to.be.lessThan(1000);
    })
})

})