/// <reference types="cypress" />

describe('API PATCH User', () => {
    it('Test API PATCH Update user', () => {
        const updateData = {
            first_name: 'Siti',
            last_name: 'Fakhriyyah'
        };
        const maxResponseTime= 1000; 
    
        cy.request('PATCH','https://reqres.in/api/users/2', updateData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            expect(response.body.first_name).to.eq(updateData.first_name);
            expect(response.body.last_name).to.eq(updateData.last_name);
        cy.log(`Response time: ${response.duration}ms`);
            expect(response.duration).to.be.lessThan(maxResponseTime);
          });
        });
      });