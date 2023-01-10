function calcular(){
    let nome = window.prompt('Digite o nome do funcionário')
    let sal = Number(window.prompt(`Digite o salário atual de ${nome}`))
    let pcen = Number.parseFloat(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let alme = Number.parseFloat((pcen / 100) * sal)
    
    res.innerHTML = `<h2><strong>${nome} recebeu um aumento salarial!</strong></h2>`
    res.innerHTML += `<p>Salário atual de ${nome} é ${sal}</p>`
    res.innerHTML += `<p>Com um aumento de ${pcen}% o salário vai almentar ${alme} no próximo mês.</p>`
    res.innerHTML += `<p>Apartir daí ${nome} vai passar a ganhar R$ ${sal + alme}</p>`
}