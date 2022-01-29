const audio = new Audio();
const audioTitle = document.querySelector(".music-title > span");
const audioList=["Duggy - Dawn.mp4","Duggy - Trust yourself.mp4","Duggy - 그 때 그 날들.mp4","Duggy - 우리가 바랐던 날들(The Days We Wished For).mp4"];

const todaysMusic = audioList[Math.floor(Math.random() * audioList.length)];

audio.src=`./sound/${todaysMusic}`;

const btnPlay=document.querySelector("#btnPlay");
const btnPause=document.querySelector("#btnPause");
const btnStop=document.querySelector("#btnStop");

btnPlay.addEventListener("click",audioPlay)
function audioPlay(){
    audio.play();
}
btnPause.addEventListener("click",audioPause)
function audioPause(){
    audio.pause();
}
btnStop.addEventListener("click",audioStop)
function audioStop(){
    audio.pause();
    audio.currentTime = 0;
}