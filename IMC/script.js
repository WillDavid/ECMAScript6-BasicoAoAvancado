function cimc(height, weight){
    const result = weight/(height*2)
    return result
    //tableVerification(result.toFixed(1))
}

function tableVerification(result){
    let x = ''
    if(result < 18.5){
        x = "Abaixo do peso"
    }else if(result >=18.5 && result <=24.9){
        x = "Peso normal"
    }else if(result >=25 && result <=29.9){
        x = "Sobrepeso"
    }else if(result >=30 && result <=34.9){
        x = "Obesidade 1"
    }else if(result >=35 && result >=39.9){
         x = "Obesidade 2"
    }else if(result >=40){
         x = "Obesidade 3"
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
    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);
    if(erroVerificacion(heightValue, weightValue)){
        const resultIMC = cimc(heightValue,weightValue)
        const resultStatusTable = tableVerification(resultIMC)
        result.innerHTML = `<h3><br>${resultIMC.toFixed(1)}<br>${resultStatusTable}</h3>`
    }


    height.value = ''
    weight.value = ''
}






