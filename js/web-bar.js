const btn = document.querySelector(".web-bar");
const box = document.querySelector("#website-box > div");
const deleteWebBar = document.querySelector(".website-closebox");

const HIDDEN = "hidden";

function appearWebBox(){
    box.classList.remove(HIDDEN);
    btn.classList.add(HIDDEN);
}

function appearBtn(){
    box.classList.add(HIDDEN);
    btn.classList.remove(HIDDEN);
}
if(box.classList.contains(HIDDEN)){
    btn.addEventListener("click",appearWebBox);
}else if(btn.classList.contains(HIDDEN)){
    deleteWebBar.addEventListener("click",appearBtn);
};