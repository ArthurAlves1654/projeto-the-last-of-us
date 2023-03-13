/*
    OBJETIVO - quando clicarmos  o botão temos que mostrar a imagem de fundo correspondente 

*/

/* PASSO 1 - Dar um jeito de pegar o elemento HTML dos botões */

const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

/* PASSO 2 - Dar um jeito de identificar o clique do usuário no botão */
   botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener('click' , () => {

   /*PASSO 3 - Desmarcar o botão selecionado anterior */
  
     desativarBotaoSelecionado();

   // PASSO 4 - Marcar o botã clicado como se tivesse selecionada

      selecionarBotaoCarrossel(botao);

  // PASSO 5 - Esconder a imagen ativa de fundo 

      esconderImagemAtiva();

  // PASSO 6 - Fazer aparecer a imagem de fundo no botão correpondente
      
       mostrarImagemDeFundo(indice);
   })
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    console.log(botaoSelecionado.classList.remove('selecionado'));
}

