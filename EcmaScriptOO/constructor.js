function Celular(marca, tamanhoTela, bateria) {
    this.bateria = bateria
    this.tamanhoTela = tamanhoTela
    this.marca = marca

    this.ligar = function(){
        console.log("Fazendo ligação")
    }
}


const celular01 = new Celular("Nokia", 6, 5000);
console.log(celular01.bateria)
celular01.bateria = 4000;
console.log(celular01.bateria)

celular01.ligar()