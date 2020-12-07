function cimc(height, weight){
    const result = weight/(height*2)
    return result
    //tableVerification(result.toFixed(1))
}

function tableVerification(result){
    let x = ''
    if(result < 18.5){
        x = "Under Weight"
    }else if(result >=18.5 && result <=24.9){
        x = "Normal weight"
    }else if(result >=25 && result <=29.9){
        x = "Overweight"
    }else if(result >=30 && result <=34.9){
        x = "Obesity 1"
    }else if(result >=35 && result >=39.9){
         x = "Obesity 2"
    }else if(result >=40){
         x = "Obesity 3"
    }else{
        x = "Sem valor"
    }
    return x;
}

function erroVerificacion(h,w){
    if(h >= 3.0 || w > 300){
        window.alert("O Peso máximo até 300kg\nAltura máxima até 3 metros")
        return false
    }else{
        return true
    }

}


const height = document.getElementById('inputHeight')
const weight = document.getElementById('inputWeight')
const button = document.getElementById('submit')
const result = document.getElementById('result')


button.onclick = function(e){
    e.preventDefault();
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);
    if(erroVerificacion(h,w)){
        const x = cimc(h,w)
        const valueStatus = document.createElement("h3");
        valueStatus.innerHTML = x.toFixed(valueStatus);
        result.appendChild(valueStatus)
        const textStatus = document.createElement("span")
        textStatus.innerHTML = tableVerification(x)
        result.appendChild(textStatus)
    }


    height.value = ''
    weight.value = ''
}






