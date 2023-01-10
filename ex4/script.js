function calcular(){
    let pro = window.prompt('Que produto você está comprando?')
    let val = Number(window.prompt(`Por qual valor você está comprando esse ${pro}`))
    let pag = Number(window.prompt(`Qual valor você deu para pagar esse(a) ${pro}`))
    window.alert(`Você comprou um ${pro} por R$${val},00 e seu troco é R$${pag - val},00`)
}