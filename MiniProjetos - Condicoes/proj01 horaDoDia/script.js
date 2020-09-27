


function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var body = window.document.getElementById('body')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()



    msg.innerHTML = `<h2>${hora}:${minutos}</h2>` 


    if(hora >=0 && hora <12){
        img.src = 'img/morningPhoto.png'
        body.style.background = '#F2BF5E'
    }else if(hora >=12 && hora <=18){
        img.src = 'img/afternoonPhoto.png'
        body.style.background = '#F2A516'
    }else{
        img.src = 'img/nightPhoto.png'
        body.style.background = '#152840'
    }

}