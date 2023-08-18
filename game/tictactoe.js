console.log("Welcome to tic tac toe game");
let turn="X";
let isGameover=false;

//function to change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//function to check win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,-45]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
            isGameover=true;
            document.querySelector(".line").style.width="30vw";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
    }


//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})

//reset button
reset.addEventListener('click',(e)=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isGameover=false;
    document.querySelector(".line").style.width="0vw";
    if(!isGameover){
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    }
})