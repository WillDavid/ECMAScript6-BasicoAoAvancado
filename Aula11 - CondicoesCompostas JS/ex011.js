var idade = 10

if(idade>=18 && idade<60){
    console.log("Você já pode votar")
}else if((idade >=16 && idade <18) || idade>=60){
    console.log("Voto opcional")
}else{
    console.log("Não vota")
}