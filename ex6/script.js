function converter(){
    var tempe = window.prompt('Digite uma temperatura em °C (Celsius)')
    var temp = Number.parseFloat(tempe)
    res.innerHTML += `<h1>A temperatura de ${temp}°C corresponde a...</h1>`
    res.innerHTML += `<p>${temp + 273.15}°K (Kelvin)</p>`
    res.innerHTML += `<p>${(temp * 1.8)+32}°F (Fahrenheit)</p>`
}