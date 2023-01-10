function calcular(){
    let nota1 = window.prompt('Digite a primeira nota de Ana Maria')
    let nota2 = window.prompt('Digite a segunda nota de Ana Maria')
    let n1 = Number.parseFloat(nota1)
    let n2 = Number.parseFloat(nota2)
    let media = (n1 + n2)/2
    res.innerHTML += `<p>Com as notas ${n1} e ${n2} a média é ${media}`
    if(media < 3){//reprovado
        res.innerHTML += `<p>Com a média abaixo de 3.0 o aluno está <strong id='rep'>reprovado</strong></p>`
    }else if(media >= 3 && media <= 6){ //recuperação
        res.innerHTML += `<p>Com a média maior ou igual a 3.0 e menor que 6.0 o aluno está de <strong id='rec'>recuperação</strong></p>`
    }else if(media > 6){ //aprovado
        res.innerHTML += `<p>Com a média maior que 6.0 o aluno está <strong id='apr'>aprovado</strong></p>`
    }
}