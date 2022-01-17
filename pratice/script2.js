const age = parseInt( prompt("how old are you?"));

console.log(isNaN(age));
//변수 age에 적용된 값 = string is not a number = true, number = false

if(isNaN(age) || age <= 0){
    ///function === true 일땐 해당 아래 코드를 실행함.
    console.log("Please write a real positive number");
} else if(age < 18) {
    //function === false 일때 else if의 조건을 확인하고 일치할시 실행.
    console.log("you are too young");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else if(age >= 51 && age <= 80){
    console.log("you need to drink less and should exercise");
} else if(age>=81){
    console.log("you can do whatever you want")
}
// && > and || > or
