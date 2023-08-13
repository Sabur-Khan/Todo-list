let taskBtn = document.querySelector('.task-btn');
let taskDo = document.querySelector('.taskDo');
let todoContent = document.querySelector('.todo-content')
taskBtn.addEventListener('click', function(){
    taskDo.style.display = "none";
    todoContent.style.display = "block"
})



// input value part

let inputs = document.querySelector('.inputs');
let inputsBtn = document.querySelector('.inputs-btn');
let error = document.querySelector('.error');

let ulItem = document.querySelector('.ul-item');

let spanError = document.querySelector('.span-error');

inputsBtn.addEventListener('click', function(){

    
    if(inputs.value == ''){
        error.innerHTML = "Please enter your task";
        error.style.display = "block";
        error.style.color = "red";

    }else if(inputs.value){
        error.style.display = "none";
        
        let newUl = document.createElement("ul");
        newUl.innerHTML = inputs.value;

        ulItem.appendChild(newUl);

        let spans = document.createElement("span");
        spans.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        newUl.append(spans);

        spans.addEventListener('click', function(){
            this.parentNode.remove();
        })
    }
    
    
    
    
})


// spanError.addEventListener('click', function(){
//     spanError.style.display = "none";
//     ulItem.remove();

// })