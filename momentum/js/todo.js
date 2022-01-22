const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
//array 생성

const TODOS_KEY = "todo";

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    //newTodo 변수값을 toDos = []; array의 값들로 지정
    paintToDo(newTodo);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

function paintToDo(todoIt){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todoIt;
    const button = document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    //element.appendChild = element안에 자식 element를 만든다는 의미! 
    toDoList.appendChild(li);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
//Json.stringnify = js의 object나 array를 string 형태로 변환해서 저장하게 해주는 기능

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);


if(savedToDos !== null ){
    const parsedToDos=JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

//stringify으로 한번 거치고 parse를 통해 array값으로 저장하는 이유 => localStorage에 저장 될 때 바로 array로 저장 할 수 없어서 한번 stringify으로 한번 거쳐줘야한다.