function contar(){
    var nu = document.getElementById('txtn')
    var n = Number(nu.value)
    res.innerHTML += `Tabuada do ${n} <br>`
    for(var c = 1; c <= 10; c++){
        res.innerHTML += `${c} + ${n} = ${c+n} <br>`
    }
}
function clean(){
    document.getElementById('res')
    res.innerHTML=''
}