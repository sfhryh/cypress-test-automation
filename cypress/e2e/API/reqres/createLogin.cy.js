/// <reference types="cypress" />

describe('API CREATE Login', () => {
    it('Test API POST Create Login',() => {
        const requestBody = {
            username: 'Siti Fakhriyyah',
            email: 'fakhriyyahsiti@gmail.com',
            password: '123456'
        };
        cy.request('POST','https://reqres.in/api/login', requestBody).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.not.be.null;
            expect(response.body.username).to.eq(requestBody.username);
            expect(response.body.email).to.eq(requestBody.email); 
            expect(response.body.password).to.eq(requestBody.password); 
        cy.log('Response time: ${response.duration}ms');
            expect(response.duration).to.be.lessThan(1000);       
        })
    })
    
    })