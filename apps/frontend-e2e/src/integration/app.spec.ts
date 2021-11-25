describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('input').first().type('h');
    cy.get('li').first().should('have.text', 'hoge');
    cy.get('body').screenshot();
  });
});
