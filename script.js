//const = constant(상수) 변수값을 절대 바꿀수가 없음  몰론 다시 쓰는것도 불가능
//let = 변수값을 바꿀 수 있음 다시 쓰는 것은 불가능 처음 변수값을 넣어줄때만 써줄것
//var = 변수값 변경 O 다시 쓰는 것도 O 하지만 언어의 보호를 못받음 즉 지역변수(해당 구문에서 쓰인 변수값)(⇔ 전역변수(전체에서 쓰이는 변수))에 쓰인 변수가 그대로 다른곳에도 적용됌

const mon="mon";
const tue="tue";
const wed="wed";
const thu="thu";
const fri="fri";
const sat="sat";
const sun="sun";
const hol="holiday";

const daysOfWeeks = [mon, tue, wed, thu, fri, sat];

const nonsense = [1, 2, "hello", true, false, undefined, null, "jawon"];

console.log(daysOfWeeks[3],nonsense);

daysOfWeeks.push(sun);

console.log(daysOfWeeks,nonsense);

daysOfWeeks.push(hol);
//무조건 앞에 써준 변수를 추가해주고 싶다면 변수를 추가해준 변수title에 맞게 추가할것. 혹은 앞에 써준 변수가 아닌 다른 변수를 추가하고 싶다면 datatype에 따라 맞게 쓸것 string= "",'' number,boolean = ~


console.log(daysOfWeeks[7]);

const player = {
    name:"jawon", //string
    points:10, //number
    fat:true, //boolean
    sayHi:function(otherPersonName){
        console.log("Hi! " + otherPersonName + " nice to meet you");
    }//object 안에서의 function
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.sayHi(player.points);
player.sayHi("jawon");
player.sayHi("sunhee");

player.name="jaewon"

console.log(player.name);

player.firstName="Cho"

console.log(player);

player.points = player.points + 15;

console.log(player);

player.name = "Cho " + player.name;

console.log(player);

player.age=24;

console.log(player);

function sayHello(nameOfPersonm, age){
    console.log("Hello my name is " + nameOfPersonm + " and I'm " + age);
}

sayHello("jawon", 24);
sayHello("Chojaewon", 24);
sayHello("jawon0407", 24);

function plus(a,b){
    console.log(a + b)
}
function divide(a,b){
    console.log(a / b)
}
plus(44,22);
divide(60,2);

const calculator={
add:function(a,b){
    return a+ b
},


minus:function(a,b){
    return a - b
},


multiple:function(a,b){
    return a * b
},


divide:function(a,b){
    return a / b
},


powerCode:function(a,b){
    return  a ** b
},
};

const plusResult = calculator.add(5,10); // = 15
const minusResult = calculator.minus(plusResult,3); // = 12
const multipleResult = calculator.multiple(minusResult,18); // = 216
const divideResult = calculator.divide(multipleResult,minusResult); // = 18  
const powerCodeResult = calculator.powerCode(plusResult,divideResult);
// = 15 ** 18



const age = 24;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const KrAge = calculateKrAge(age);
console.log(KrAge);
// age = 24 -> calculateKrAge(age) = calculateKrAge(ageOfForeigner) -> 변수값을 받아서 계산한뒤 다시 전달해준다. 