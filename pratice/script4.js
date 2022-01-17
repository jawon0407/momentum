const h1 = document.querySelector("h1")

function handleTitleClick(){
   h1.classList.toggle("active");
}
//const activeName = "active"; if(h1.classList.contains(activeName)){ h1.classList.remove(activeName);}else{h1.classList.add(activeName);}

h1.addEventListener("click",handleTitleClick);