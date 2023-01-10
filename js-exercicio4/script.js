function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar. Verifique seus dados'
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Inválido! Considerando PASSO = 1')
            p=1
        }
        if(i<f){
            //contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
    }
}