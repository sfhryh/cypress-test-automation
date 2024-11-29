/// <reference types="cypress" />

describe('API GET Single User', () => {
it('Test API Single User', () => {
    cy.request('GET','https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;   
    cy.log('Response time: ${response.duration}ms');
        expect(response.duration).to.be.lessThan(1000);
    })
})

})