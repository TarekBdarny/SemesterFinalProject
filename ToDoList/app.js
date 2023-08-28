let container = document.querySelector('.container');
// create the main input
let title = document.createElement('h2');
title.innerHTML = "Simple to do app"
let img = document.createElement('img');
img.src = "icon.png";
title.appendChild(img);

// let br = document.createElement('br');
let todoInput = document.createElement('input');
todoInput.placeholder = "Enter your TODO's...";
// create a submit button
let submitButton = document.createElement('button');
submitButton.innerText = "Add";
submitButton.classList.add("btn");
// create a div the wrap all the inputs
let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.append(title,todoInput , submitButton);
container.appendChild(wrapper);

const listArrays = [];
let todo = document.createElement('div');
todo.classList.add('todo');


let ul = document.createElement('ul');
ul.classList.add('todo-container');
submitButton.addEventListener('click' , () => {
        todo.classList.remove('fade');
    
    todo.appendChild(ul);
    if(todoInput.value === ""){
        alert('Cant add empty to do');
        return;
    }
    let li = document.createElement('li');

    li.innerHTML = todoInput.value;
    let deleteButton = document.createElement('button');
    deleteButton.className = "fa-solid fa-trash";
    deleteButton.id = "delete-button";

    let editButton = document.createElement('button');
    editButton.className = "fa-solid fa-check";
    editButton.id = "edit-button";
    editButton.addEventListener('click' , (e) =>{
       li.className !== 'checked' ? li.classList.add("checked") : li.classList.remove('checked')
      li.style.disabled = "disabled";
      })
    li.append(editButton , deleteButton);
    listArrays.push(li.innerText);
    console.log(listArrays)
    ul.appendChild(li);
    wrapper.appendChild(todo);
    clearInput();
     deleteButton.addEventListener('click' , (e) =>{ 
          li.classList.add('delete-todo')
          setTimeout(() => {li.parentNode ? li.parentNode.removeChild(li):li.parentNode.removeChild(li)
            listArrays.splice(listArrays.indexOf(e.target))
            if(listArrays.length === 0 )
          {
            todo.classList.add('fade');
          }

          
        }, 600) 

});

     editButton.addEventListener('click' , (e) =>{
       
     });

})
const clearInput = () =>{
    todoInput.value = "";
}


