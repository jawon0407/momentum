const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const hiddenClassName = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event){
    event.preventDefault();
    loginForm.classList.add(hiddenClassName);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); // => localStorage.setItem("username",loginInput.value)
    //greeting.innerText = "Hello " + username;
    paintGreetings(username); // => paintGreetings(loginInput.value) loginInput.value를 인수로 갖는 paintGreetings 함수 실행!
 }
//EventListener의 함수의 첫번째 argument는 해당 이벤트가 발생했을때 일어나는 정보들을 기록하게 된다!

function paintGreetings(tomato){
    greeting.innerText = `Hello ${tomato}`; 
    //즉 paintGreetings(username); => paintGrretings에서 선언한 변수명 tomato에 적용 = ${tomato}의 값
    greeting.classList.remove(hiddenClassName);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(hiddenClassName);
    loginForm.addEventListener("submit",handleSubmit);
}else{
    paintGreetings(saveUsername);
}


