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

}//falta parenteses?
