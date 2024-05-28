/// <reference types="Cypress" />

describe('API - Access to the Water Customer App', () => {

    it('The user has to access the Water Customer App', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/',
            failOnStatusCode: false        
        }).then((response) => {           
            expect(response.status).to.equal(200)              
        })
    });

});


describe('API - Access to the Water Customer App list', () => {

    it('The user has to access the Water Customer App list', () => {
        var name = 'Joao Araruna'
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/',
            failOnStatusCode: false,
            body:{"name": name}
        }).then((response) => {     
            expect(response.status).to.equal(200)                   
            expect(response.body.name).to.equal(name)
            var customerListSize = response.body.customers.length
            var customerPosition = Math.floor((Math.random() * ((customerListSize + 1) - 1) + 1))
            cy.log(customerPosition) 
            cy.log(response.body.customers[customerPosition - 1].name)
            expect(response.body.customers[customerPosition - 1].id.toString()).to.not.empty
            expect(response.body.customers[customerPosition - 1].name).to.not.empty
            expect(response.body.customers[customerPosition - 1].employees.toString()).to.not.empty
            expect(response.body.customers[customerPosition - 1].contactInfo).to.exist
            expect(response.body.customers[customerPosition - 1].size).to.not.empty              
        })
    });

});

describe('API - Verify customers list', () => {

    it('The size of customer has to be according the number of employees', () => {
        var name = 'Joao Araruna'
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/',
            failOnStatusCode: false,
            body:{"name": name}
        }).then((response) => {     
            expect(response.status).to.equal(200)      
              expect(response.body.name).to.equal(name)
              var customerListSize = response.body.customers.length
              var customerPosition = Math.floor((Math.random() * ((customerListSize + 1) - 1) + 1))
              cy.log(customerPosition) 
              cy.log(response.body.customers[customerPosition - 1].name)
              var numberEmployees = response.body.customers[customerPosition - 1].employees
              if (numberEmployees <= 2500) {
                expect(response.body.customers[customerPosition - 1].size).to.equal('Small')
              }
              if (2500 < numberEmployees && numberEmployees <= 5000) {
                expect(response.body.customers[customerPosition - 1].size).to.equal('Medium')
              }
              if (numberEmployees > 5000) {
                expect(response.body.customers[customerPosition - 1].size).to.equal('Big')
              }
                          
        })
    });

});