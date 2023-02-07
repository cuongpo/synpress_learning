describe('Metamask Extension tests', () => {
  it('connect to DApp with Metamask extension example', () => {
    // посещаем сайт
    cy.visit('/');
    // кликаем на кнопку Connect
    cy.get('#connectButton').click();
    // после клика должна появиться нотификация
    cy.acceptMetamaskAccess().should('be.true');
    // подключаемся к DApp
    cy.get('#connectButton').should('have.text', 'Connected');
    // убеждаемся, что UI изменился
  });

  it('create transaction example', () => {
    cy.get('#sendButton').click();
    cy.confirmMetamaskTransaction().should('be.true');
  });

  it('confirm signature example', () => {
    cy.get('#ethSign').click();
    cy.confirmMetamaskSignatureRequest().should('be.true');
  });
})