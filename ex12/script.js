function verificar(){
    var pan = Number.parseFloat(window.prompt('Digite o preço anterior do produto?'))
    var pat = Number.parseFloat(window.prompt('Digite o preço atual do produto?'))
    res.innerHTML = `<p>O produto custava R$ ${pan} e agora custa R$ ${pat}</p>`
    if(pat > pan){
        res.innerHTML += `<p>O protudo está mais caro hoje</p>`
        res.innerHTML += `O preço subiu R$ ${pat - pan} reais, em relação ao preço anterior`
        let pcsu = ((pat / pan) -1) * 100
        res.innerHTML += `<p>Uma variação de ${pcsu}% para cima</p>`
    }else if(pat == pan){
        res.innerHTML += `<p>O produto não mudou de preço</p>`
    }else{
        res.innerHTML += `<p>O produto está mais barato hoje</p>`
        res.innerHTML += `<p>O preço desceu R$ ${pan - pat} reis, em relação ao preço anterior</p>`
        pcde = ((pan / pat) -1) * 100
        res.innerHTML += `<p>Uma variação de ${pcde}% para baixo</p>`
    }
}
// ((valor no momento posterior / valor no momento anterior) - 1) * 100.
