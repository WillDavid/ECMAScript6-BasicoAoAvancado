const inputTodo = document.getElementById('tarefa')
const buttonAdd = document.getElementById('add')


const ulElement = document.getElementById('ulForm')
const buttonRemove = document.getElementById('buttonRemove')


buttonAdd.onclick = function(e){
    e.preventDefault();
    if(inputTodo.value !== ''){
        const textElement = document.createElement("span");
        textElement.innerHTML = inputTodo.value;
        
        const btnElement = document.createElement('button');
        btnElement.innerHTML = "Remover";

        const liElement = document.createElement("li");

        liElement.appendChild(textElement);
        liElement.appendChild(btnElement);

        btnElement.onclick = function(){
            ulElement.removeChild(liElement)
        }

        ulElement.appendChild(liElement);

        inputTodo.value = '';
    }
}
