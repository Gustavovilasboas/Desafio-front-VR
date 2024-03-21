
/// <reference types="Cypress" />

describe('Loja VR  Benefícios', function() {
    beforeEach(function() {
        cy.visit('https://loja.vr.com.br')
    })

    it('Valide o título da aplicação', function() {
        cy.title().should('be.equal', 'Loja VR Benefícios')
    })

    it('Validar que o auxilio Auto foi adicionado ao carrinho com sucesso', function() {
       cy.adicionandoAuto();
    })

    it('Validar que o auxilio VR + VA foi adicionado ao carrinho com sucesso', function() {
        cy.adicionandoVrVa();
    })

    it('Validar que o auxilio Refeição PAT foi adicionado ao carrinho com sucesso', function() {
        cy.adicionandoRefeicaoPAT();
     })

     it('Validar que o auxilio Alimentação PAT foi adicionado ao carrinho com sucesso', function() {
        cy.adicionandoAlimentacaoPAT();
     })

     it('Validar que o auxilio Auto foi excluido', function() {
        cy.adicionandoAuto();
        cy.excluirAuto();
     })

     it('Validar que o auxilio VR + VA foi adicionado e editado com sucesso', function() {
        cy.adicionandoVrVa();
        cy.editarVrVa();

    })
})
