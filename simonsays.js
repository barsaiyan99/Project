let gameseq =[];
let userSeq =[];
let h2 = document.querySelector("h2");
let btns = ["red","green","blue","yellow"];
let h3 = document.querySelector("h3");
let started = false;
let level =0;
let high = 0;
document.addEventListener("keypress",function(){
    if(started==false){
console.log("game started");
started = true;
levelup();
    }
});
function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");},250);
}
function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");},250);
}
function levelup(){
    userSeq=[];
level++;
 high = Math.max(level,high)
h2.innerText=`Level ${level}`;
h3.innerText=`High score : ${high}`;
let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameseq.push(randColor);
console.log(gameseq);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameflash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameseq[idx]){
        if(userSeq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key to start.`;
        let x = document.querySelectorAll(".btn");
        for(i of x){
            i.classList.add("special");
        }
        setTimeout(function(){
            let x = document.querySelectorAll(".btn");
        for(i of x){
            i.classList.remove("special");
        }
        },200);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userflash(this);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    level=0;
    gameseq=[];
    userSeq=[];
}
