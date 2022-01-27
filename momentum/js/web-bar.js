const btn = document.querySelector(".web-bar");
const box = document.querySelector("#website-box");
const HIDDEN = "hidden-box";

function appearWebBox(){
    box.classList.remove(HIDDEN);
    btn.classList.add(HIDDEN);
}
if(box.classList.contains(HIDDEN)){
    btn.addEventListener("click",appearWebBox);
    
}