
let cot = Number.parseFloat(window.prompt('Antes de mais nada, quanto está a cotação do dólar hoje? '))
function converter(){
    let real = Number.parseFloat(window.prompt('Quantos R$ você deseja converter?'))
    let dol = real / cot
    res.innerHTML = `<p>Seu valor em real = ${real}</p>`
    res.innerHTML += `<p>Seu valor em dólar com a cotação de ${cot} é ${dol}</p>`

}