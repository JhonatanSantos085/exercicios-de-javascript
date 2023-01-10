function verificar(){
    let ano = Number(window.prompt('Digite o ano que deseja analizar'))
    res.innerHTML = `<h2>Analizando o ano de ${ano}</h2>`
    if(ano % 4 == 0){
        res.innerHTML = `<p>O ano de ${ano} <strong id="anobi">é um ano Bisexto</strong></p>`
    }else{
        res.innerHTML = `<p>O ano de ${ano} <strong id="anonaobi">não é um ano Bisexto</strong></p>`
    }

}
