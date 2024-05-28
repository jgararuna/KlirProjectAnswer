/// <reference types="Cypress"/>

describe('Access customers list', () => {
    it('The user has to access the customers list', () => {
        const name = 'Joao Araruna'
        cy.visit("http://localhost:3000/")
        cy.get('#name').type(name)
        cy.get('[type="button"]').click()
        cy.get('p > :nth-child(1)').should('contain', name)
    });
});


describe('Verify customers list', () => {
    it('The size of customer has to be according the number of employees', () => {
        const name = 'Joao Araruna'
        cy.visit("http://localhost:3000/")
        cy.get('#name').type(name)
        cy.get('[type="button"]').click()
        cy.get('p > :nth-child(1)').should('contain', name)
        var customerPosition = 0
        cy.get('tbody').then($tbody => {
            const customerListSize = $tbody.find('tr').length       
            if (customerListSize > 0) {
                cy.log(`There are ${customerListSize} customers`)
                customerPosition = Math.floor((Math.random() * ((customerListSize + 1) - 1) + 1))
                cy.get('tbody > :nth-child('+ customerPosition +') > :nth-child(2)').then(function($elem) { const numberCustomerEmployees = $elem.text()
                    cy.log(numberCustomerEmployees)
                    if (numberCustomerEmployees <= 2500) {
                        cy.get('tbody > :nth-child('+ customerPosition + ') > :nth-child(3)').invoke('text').should('contain', 'Small')
                    }
                    if (2500 < numberCustomerEmployees && numberCustomerEmployees <= 5000) {
                        cy.get('tbody > :nth-child('+ customerPosition + ') > :nth-child(3)').invoke('text').should('contain', 'Medium')
                    }
                    if (numberCustomerEmployees > 5000) {
                        cy.get('tbody > :nth-child('+ customerPosition + ') > :nth-child(3)').invoke('text').should('contain', 'Big')
                    }
                })  
            } else {
                cy.log('There are no customers')
            }
        })       
    });
});


describe('Verify customers detailing', () => {
    it('The customer has to view the customers details', () => {
        const name = 'Joao Araruna'
        cy.visit("http://localhost:3000/")
        cy.get('#name').type(name)
        cy.get('[type="button"]').click()
        cy.get('p > :nth-child(1)').should('contain', name)
        cy.get('tbody').then($tbody => {
            const customerListSize = $tbody.find('tr').length
            
            if (customerListSize > 0) {
                cy.log(`There are ${customerListSize} customers`)
                const customerPosition = Math.floor((Math.random() * ((customerListSize + 1) - 1) + 1))
                cy.get(':nth-child(' + customerPosition + ') > :nth-child(1) > a').click() 
                cy.get(':nth-child(1) > div > :nth-child(2)').invoke('text').should('not.equal', 'Name:')
                cy.get('div > :nth-child(3)').invoke('text').should('not.equal', '# of Employees:')
                cy.get('div > :nth-child(4)').invoke('text').should('not.equal', 'Size:')
                cy.get('div > :nth-child(5)').invoke('text').should('not.equal', 'Contact:')  
            } else {
                cy.log('There are no customers')
            }
        })
         
    });
});