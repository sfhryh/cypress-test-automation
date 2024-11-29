/// <reference types="cypress" />

describe('API PUT Resource', () => {
it('Test API PUT Update Resource', () => {
    const updateData = {
            name: 'Siti',
            year: '2024'
    };
    const maxResponseTime= 1000; 

    cy.request('PUT','https://reqres.in/api/{resources}/12', updateData).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.name).to.eq(updateData.name);
        expect(response.body.year).to.eq(updateData.year);
    cy.log(`Response time: ${response.duration}ms`);
        expect(response.duration).to.be.lessThan(maxResponseTime);
      });
    });
  });