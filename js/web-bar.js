const btn = document.querySelector(".web-bar");
const box = document.querySelector("#website-bar");
const deleteWebBar = document.querySelector(".website-closebox");

const HIDDEN = "hidden";

function boxAppear(){
    btn.classList.add(HIDDEN);
    box.classList.remove(HIDDEN);
}

function btnAppear(){
    btn.classList.remove(HIDDEN);
    box.classList.add(HIDDEN);
}

btn.addEventListener("click",boxAppear);
deleteWebBar.addEventListener("click",btnAppear);