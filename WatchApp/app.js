let startButton = document.querySelector('.start');
let endButton = document.querySelector('.end');
let interval;
let second = 0;
let minute = 0;
let mileSeconds = 0;
const linesParent  = document.querySelector('.lines');
const secondsLine = document.querySelector('.seconds');
const lapsContainer = document.querySelector('.laps-container');
const ul = document.createElement('ul');
let count =0;
let lapItem = "";
let active = false;
startButton.addEventListener('click' , (e) => {
    e.target.innerHTML = "Start";
    if(active)
        return;
    
        
 interval = setInterval(() => {
    active = true;
    mileSeconds++;
    if(mileSeconds === 100){
        secondsLine.style.transform = `rotate(${mileSeconds*6}deg)`;
        second++;
        mileSeconds = 0;
    }
    if(second === 60)
    {
        minute++;
        second =0;

    }
    secondsLine.style.transform = `rotate(${second * 6}deg)`;
    mileSeconds = checkTimer(mileSeconds);
    second = checkTimer(second);
    minute = checkTimer(minute);
    document.querySelector('.time').innerHTML = `${minute}:${second}:${mileSeconds}`;
    lapItem = document.querySelector('.time').innerHTML;
 },10)
});
const LAPS = [];

endButton.addEventListener('click' , () => {
    active = false;
    clearInterval(interval);
    secondsLine.style.transform = `rotate(0deg)`;

    second =0;
    mileSeconds =0;
    insertLapValue(lapItem);
    LAPS.push(lapItem);
    checkOverFlow(LAPS);
    console.log(LAPS.length)
    lapItem = 0;
    document.querySelector('.time').innerHTML = '00:00:00';
})
document.querySelector('.reset').addEventListener("click" , (e) => {
    active = false;

    LAPS.length = 0;
    console.log(LAPS.length)
    document.querySelector('.laps-wrapper').classList.add('roll-out-blurred-right');
    if(document.querySelector('.laps i').className === "fa-solid fa-xmark")
       document.querySelector('.laps i').className = "fa-solid fa-list";
        count =0;
        e.target.style.display = "none";

       setTimeout(() => {
        document.querySelector(".laps-container ul").innerHTML ="";
         document.querySelector('.laps-wrapper').className = "laps-wrapper";
    }, 2000);

})
document.querySelector('.pause').addEventListener("click" , () =>{
    clearInterval(interval);
    document.querySelector('.start').innerHTML = "Continue";
    active = false;
    } )

const checkTimer = (time) =>{
    return (('0') + time).length >2 ? time : "0" + time;
}

const insertLapValue = (value) =>{
    if(+value === 0) return;
    count++;
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = `Lap ${count}`
    li.innerHTML =`${value}`;
    let lapsNumber = document.createElement('div');
    lapsNumber.append(span,li);
    ul.appendChild(lapsNumber);
    lapsContainer.appendChild(ul);
}
document.querySelector('.fa-list').addEventListener('click' , (e) =>{
    if(LAPS.length === 0)return;

    if(e.target.className === 'fa-solid fa-list'){
        document.querySelector('.reset').style.display = "block";
    document.querySelector('.reset').classList.add('showLaps');
    }
        else
        document.querySelector('.reset').style.display = "none";

    document.querySelector('.laps-wrapper').classList.toggle('showLaps');
    return e.target.className === 'fa-solid fa-list' ? e.target.className= 'fa-solid fa-xmark' : e.target.className= 'fa-solid fa-list' ;

})

const checkOverFlow = (arr) =>{
    
    if(arr.length >=6 ){
         lapsContainer.style.overflowY = 'scroll';
         lapsContainer.style.height = '500px';  

    }
    else{
        lapsContainer.style.overflowY = 'hidden';
    }

}
