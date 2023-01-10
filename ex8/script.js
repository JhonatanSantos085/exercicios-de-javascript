function calcular(){
    var prod = window.prompt('Qual produto está comprando?')
    var preço = window.prompt(`Quanto custa esse ${prod}`)
    var preç = Number.parseFloat(preço)
    res.innerHTML += `<h1>Calculando desconto de 10%<h1>`
    res.innerHTML += `<p>O preoço original do ${prod} é ${preç}</p>`
    res.innerHTML += `<p>Você vai pagar ${preç-(preç*0.10)}</p>`
    res.innerHTML += `<p>Uma economia de ${preç*0.10}`
}