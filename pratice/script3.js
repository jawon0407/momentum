const h1=document.querySelector(".hello h1");
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue" ){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

//먼저 currentcolor라는 변수를 const로 선언을 함으로써 currnetColor = h1.style.color 라는걸 지정해줌 여기서 h1.style.color는 blue가 될 수 도 있고 tomato가 될 수 도 있는데 왜 let newColor; 처럼 let으로 지정을 안해주는거냐 라고 의문이 들수도 있지만 궁극적으로 h1.style.color라는 변수는 색상만 바뀔뿐 바뀌지않기 때문에 const로 선언을 해준것이고 let newColor; 같은경우 왜 마지막에  h1.style.color = newColor;을 선언해준거냐면 let newColor; 는 변수가 선언되지않은 빈 값이기 때문에 아무리 newColor에 대한 속성을 부여해줘도 컴퓨터는 이해를 하지 못하기에 변수값을 지정을 해줘야 하는 거고 위에서 아래로 읽는다는 특성때문에 if문 앞에서 변수값을 선언해주면 적용이 안된다는 것이다.

h1.innerText="Hello!";

h1.onclick = handleTitleClick; 
// = title.addEventListener("click", handleTitleClick);


