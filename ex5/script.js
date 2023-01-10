function converter(){
    let num = Number(window.prompt('Digite uma distância em metros(m)'))
    res.innerHTML += `<h1>A distância de ${num} corresponde a...</h1>`
    res.innerHTML += `<p>${num / 1000} quilômetros (Km)</p>`
    res.innerHTML += `<p>${num / 100} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${num / 10} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${num * 10} decímetros (Dm)</p>`
    res.innerHTML += `<p>${num * 100} centímetros (Cm)</p>`
    res.innerHTML += `<p>${num * 1000} milímetros (Mm)</p>`

}