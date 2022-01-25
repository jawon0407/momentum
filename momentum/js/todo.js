const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
//array 생성 WHY let? todo의 목록은 항상 바뀔수 있기 때문!

const TODOS_KEY = "todo";

toDoForm.addEventListener("submit",handleToDoSubmit);

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    //newTodo 변수값을 toDos = []; array의 값들로 지정
    paintToDo(newToDoObj);
    saveToDos();
}


function paintToDo(todoIt){
    const li = document.createElement("li");
    li.id=todoIt.id;
    const span = document.createElement("span");
    span.innerText = todoIt.text;
    const button = document.createElement("button");
    button.innerText="❌"
    button.addEventListener("click",deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    //element.appendChild = element안에 자식 element를 만든다는 의미! 
    toDoList.appendChild(li);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id))
    saveToDos();
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

