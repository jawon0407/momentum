const btn = document.querySelector(".web-bar");
const box = document.querySelector("#website-box > div");
const deleteWebBar = document.querySelector(".website-closebox");

const HIDDEN = "hidden";

function appear(){
    box.classList.toggle(HIDDEN);
    btn.classList.toggle(HIDDEN);
}

btn.addEventListener("click",appear);
deleteWebBar.addEventListener("click",appear);
