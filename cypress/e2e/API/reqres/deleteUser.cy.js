/// <reference types="cypress" />

describe('API DEL User', () => {
it('Test API DEL User', () => {
    cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(204);
        expect(response.body).to.not.be.null;   
    cy.log('Response time: ${response.duration}ms');
        expect(response.duration).to.be.lessThan(1000);
    })
})

})