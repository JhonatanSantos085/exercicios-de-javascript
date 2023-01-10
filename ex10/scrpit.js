function calcular(){
    let vala = Number(window.prompt('Digite o valor de a'))
    let valb = Number(window.prompt('Digite o valor de b'))
    let c = Number(window.prompt('Digite o valor de c'))
    res.innerHTML = `<h2><strong>Resolvendo Bhaskara</strong></h2>`
    res.innerHTML += `<p>A equação atual é = <strong>${vala}x² + ${valb}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${valb}² - 4.${vala}.${c}</strong></p>`
    let bhas = valb * valb - (4* vala * c)
    res.innerHTML += `<p>O valor calculado foi <strong id = "respo">Δ = ${bhas}</strong></p>`
}

