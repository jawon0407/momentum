const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(todoIt){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todoIt;
    li.appendChild(span);
    //element.appendChild = element안에 자식 element를 만든다는 의미! 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit",handleToDoSubmit);