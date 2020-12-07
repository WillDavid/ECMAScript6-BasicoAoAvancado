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
        console.log("Erro")
    }
    return x;
}


const height = document.getElementById('inputWeight')
const weight = document.getElementById('inputHeight')
const button = document.getElementById('submit')
const result = document.getElementById('result')


button.onclick = function(e){
    e.preventDefault();
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);
    const x = cimc(h,w)

    const h1 = document.createElement("h1");
    h1.innerHTML = x.toFixed(1)
    result.appendChild(h1)
    result.onloadstart

    height.value = '', weight.value = ''
    x, h, w = 0
}






