function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 9
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'imagens/manha.png'
    document.body.style.background = '#A9A7B5'
    }else if (hora >=12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FCC397'
    }else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#18223F'
    }
}