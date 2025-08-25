document.addEventListener('DOMContentLoaded',function(){
    const aumentaFonteBotao = document.getElementByIdI('aumentar-fonte');
     const diminuirFonteBotao = document.getElementByIdI('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonten += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonten -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

botaoAcessibilidade.addEventListener('click', function(){
    botaoAcessibilidade.classList.toggle('rotacao-botao');
})

})
}//falta parenteses?
