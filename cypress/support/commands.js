//Verifica se o produto Auto foi adicionado
Cypress.Commands.add('adicionandoAuto', function() { 
    cy.get('.close-button').click();
    cy.get('#btn-selecionar-modalidade-avulso').click();
    cy.get('[class="fa-solid fa-plus"]').eq(3).click();
    cy.get('#produto-auto-valor').type('500,00');
    cy.get('#btn-adicionar-carrinho-auto').click();
    cy.contains('.product-in-cart-view__content > p', 'Produto adicionado!').should('be.visible');
})

//Verifica se o produto VR e VA foi adicionado
Cypress.Commands.add('adicionandoVrVa', function() { 
    cy.get('.close-button').click();
    cy.get('#btn-selecionar-modalidade-avulso').click();
    cy.get('[class="fa-solid fa-plus"]').eq(0).dblclick();
    cy.get('#produto-auxilio-vr-mais-va-valor').type('1000,00');
    cy.get('#btn-adicionar-carrinho-auxilio-vr-mais-va').click();
    cy.contains('.product-in-cart-view__content > p', 'Produto adicionado!').should('be.visible');
})

//Verifica se o produto RefeicaoPAT foi adicionado
Cypress.Commands.add('adicionandoRefeicaoPAT', function() { 
    cy.get('.close-button').click();
    cy.get('#btn-selecionar-modalidade-avulso').click();
    cy.get('[class="fa-solid fa-plus"]').eq(1).click();
    cy.get('#produto-refeicao-pat-valor').type('200,00');
    cy.get('#btn-adicionar-carrinho-refeicao-pat').click();
    cy.contains('.product-in-cart-view__content > p', 'Produto adicionado!').should('be.visible');
})

//Verifica se o produto AlimentacaoPAT foi adicionado
Cypress.Commands.add('adicionandoAlimentacaoPAT', function() { 
    cy.get('.close-button').click();
    cy.get('#btn-selecionar-modalidade-avulso').click();
    cy.get('[class="fa-solid fa-plus"]').eq(2).click();
    cy.get('#produto-alimentacao-pat-valor').type('200,00');
    cy.get('#btn-adicionar-carrinho-alimentacao-pat').click();
    cy.contains('.product-in-cart-view__content > p', 'Produto adicionado!').should('be.visible');
})

//Verifica se o produto foi excluído
Cypress.Commands.add('excluirAuto', function() { 
    cy.contains('#btn-excluir-auto', 'Excluir').should('be.visible');
    cy.get('#btn-excluir-auto').click();
})

//Verifica se o produto VR e VA foram editados
Cypress.Commands.add('editarVrVa', function() { 
    cy.contains('#btn-editar-auxilio-vr-mais-va', 'Editar').should('be.visible');
    cy.get('#btn-editar-auxilio-vr-mais-va').click();
    cy.get('[class="fa-solid fa-minus"]').eq(0).click();
    cy.get('#produto-auxilio-vr-mais-va-valor').clear();
    cy.get('#produto-auxilio-vr-mais-va-valor').type('1,00');
    cy.get('#btn-adicionar-carrinho-auxilio-vr-mais-va').click();
    cy.contains('.product-in-cart-view__content > p', 'Produto adicionado!').should('be.visible');
})
