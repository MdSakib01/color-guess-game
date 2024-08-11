const r=document.getElementById('r');
const g=document.getElementById('g');
const b=document.getElementById('b');
let score=0;
let color;
let red,green,blue;
const option=document.getElementById('option');

function verify(element){
    const tem=element.target.style.backgroundColor;
    console.log(color)
    console.log(tem==color?true:false);
    if(tem===color){
        score++;
        document.getElementById('score').innerText=score;
    }
    option.innerHTML=null
    startGame();
}

function randonNum(min,max){
   return min+Math.floor(Math.random()*(max-min)+1);
}

function randonGRB(){
     red=randonNum(0,255);
     green=randonNum(0,255);
     blue=randonNum(0,255);

    return `rgb(${red}, ${green}, ${blue})`;
}
function startGame(){
    color=randonGRB()
    console.log(color)
    r.innerText=Math.floor(((red/255)*100))+'%';
    g.innerText=Math.floor(((blue/255)*100))+'%';
    b.innerText=Math.floor(((green/255)*100))+'%';
     const ansIndex=Math.floor(Math.random()*(3-1+1))+1;
     console.log(ansIndex)
    for(let i=1;i<4;i++){
        const div=document.createElement('div');
        div.addEventListener("click",verify)
    div.style.backgroundColor=(ansIndex===i)?color:randonGRB();
    option.append(div);
    }
}
startGame()

