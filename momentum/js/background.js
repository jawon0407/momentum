const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg", "6.jpg"];
//1. 랜덤 선택될 이미지 나열 array!
const chosenImage = images[Math.floor(Math.random() * images.length )];
//2. 위에서 n번째 이미 랜덤 출력
const bgImage = document.createElement("img");
//3. <img> 생성시키기
bgImage.src=`img/${chosenImage}`;
//4. 이미지 출처 src설정
document.body.insertBefore(bgImage,clock);
//5. 어디에 넣을지 결정하기