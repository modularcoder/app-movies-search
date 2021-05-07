// https://docs.cypress.io/api/introduction/api.html

describe('Movies Page ', () => {
  it('Searches movies', () => {
    cy.visit('/')

    cy.get('.BaseCardMovie').should('have.length', 9)

    cy.get('input.HeaderSearch').type('dark knight')

    cy.get('.BaseCardMovie').should('have.length', 4)
  })
})
