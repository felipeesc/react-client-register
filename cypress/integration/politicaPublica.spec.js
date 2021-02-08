describe('Realiza o fluxo Politica Publica!', function () {
  xit('Cadastrar uma nova Animal!', () => {
    cy.login('joseur', 'teste')
    cy.get('[data-testid="btnCadastro"]').should('be.visible').as('botaoCadastro')
    cy.get('@botaoCadastro').click()

    cy.get('[data-testid="btn-novo-cadastro"]').should('be.visible').as('botaoNovoCadastro')
    cy.get('@botaoNovoCadastro').click()

    cy.get('input[name="nome"]').type('Primeira Animal')
    cy.get('input[name="racas"]').type('Dire')
    cy.contains('Diretriz').should('be.visible').click()
    cy.get('[data-testid="btn-salvar"]').should('be.visible').as('botaoSalvar')
    cy.get('@botaoSalvar').click()
  })
})
