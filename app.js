const colors = [0,1,2,3,4,5,6,7,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const colorCode = document.querySelector('.color-code');

btn.addEventListener("click",function (){
    let hex = "#";
    for(let i=0;i<6;i++)
    {
        let randomNumber = getRandomNumber(0,colors.length-1);
        hex += colors[randomNumber];
    }
    
    document.body.style.backgroundColor = hex;
    colorCode.textContent = hex;
});

function getRandomNumber(start,end){
    return(Math.floor(Math.random()*(end-start+1))+start) ;
}
