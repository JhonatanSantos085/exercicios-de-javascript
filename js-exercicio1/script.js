var agora = new Date()
var hora = agora.getHours()
msg.innerHTML = `<p>Agora são ${hora} horas` 
if(hora < 12){
    tit.innerHTML =`Bom Dia`
    imgmanha.style.opacity = '1'
    imgtarde.style.opacity = '0'
    imgnoite.style.opacity = '0'
    corpo.style.background = 'rgb(255, 213, 162)'
    tit.style.color = 'black'
}else if(hora <= 18){
    tit.innerHTML =`Boa Tarde`
    imgmanha.style.opacity = '0'
    imgtarde.style.opacity = '1'
    imgnoite.style.opacity = '0'
    corpo.style.background = 'rgb(255, 175, 78)'
    tit.style.color = 'black'
}else{
    tit.innerHTML =`Boa Noite`
    imgmanha.style.opacity = '0'
    imgtarde.style.opacity = '0'
    imgnoite.style.opacity = '1'
    corpo.style.background = 'rgb(93, 55, 135)'
}