// create main grid for the game
let container = document.querySelector('.container'); // get the main element on the HTML
let wrapper = document.createElement('div');
let computerPointsDisplay = document.createElement('h1'); // create a display for the computer to show the points
let result = document.createElement('h2'); // creating a result to your won Lose Draw 
let myPointsDisplay = document.createElement('h1'); // creating a display for the user
let myImg = document.createElement('img'); // creating a image that when clicked on one will show it on the myImg element
myImg.id = 'myImg'; // giving id to style it
let computerImg = document.createElement('img'); // doing the same for the computer
computerImg.id = 'computerImg'
let resultImages = document.createElement('div'); // a div that wrap the user and the computer choice
resultImages.append(computerImg , myImg);
resultImages.classList.add('imagesWrapper');

let scoreWrapper = document.createElement('div');
scoreWrapper.classList.add('scoreWrapper');
scoreWrapper.append(computerPointsDisplay,myPointsDisplay)
wrapper.append(result,scoreWrapper , resultImages);
container.appendChild(wrapper);



let computerPoints =0; // counter for the computer points
let myPoints =0; // counter for the player points
computerPointsDisplay.innerHTML =computerPoints ; // display the computer points on the screen
myPointsDisplay.innerHTML =myPoints ; // display the player points on the screen
let myChoice; // to save the player choice
let computerChoice; // to save the computer choice
// container.append(computerImg , myImg);
let choices = ['rock' , 'paper' , 'scissors']; // all the three available choices in the game
let imgWrapper = document.createElement('div');



    
window.onload = () =>
 {
    for(let i = 0; i < choices.length; i++) { // creating 3 images every image has a unique id  
        let img = document.createElement('img');
        img.id = choices[i];
        img.src = `${choices[i]}.png`;
        img.addEventListener('click',handleClick); // on every image we click on trigger the main function for the game
        imgWrapper.appendChild(img); // append the image to the wrapper element 
        imgWrapper.classList.add('imgWrapper'); // adding a class to style it 
        wrapper.appendChild(imgWrapper); // append to the container element
        container.appendChild(wrapper);

    }
}       
// a function  that has all the logic for the game
const handleClick = (e) =>
{
myChoice = e.target.id;
myImg.src =`${myChoice}.png`;

computerChoice = generateComputerChoice();
computerImg.src = `${computerChoice}.png`;
console.log(computerImg.src);
getWinners();



}
// a function the generate for the computer rock or paper or scissors
const generateComputerChoice = () => {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
// a function that check who beats the other 
const getWinners = () =>
{
    let rs;
    switch(myChoice + computerChoice){
        case 'rockrock' :
        case 'paperpaper':
        case 'scissorsscissors' :    
        rs = `ITS A DRAW!!`
            break;

            case 'rockpaper' :
            case 'paperscissors' :
            case 'scissorsrock' :    
            rs = `YOU LOSE!!`
            computerPoints+=1;
                break;

            case 'rockscissors' :
            case 'paperrock':
            case 'scissorspaper' :    
            rs = `YOU WIN!!`
            myPoints+=1;
            break;
                }

                result.innerHTML =`Result : ${rs}`;
                myPointsDisplay.innerHTML =`User points: ${myPoints}`;
                computerPointsDisplay.innerHTML = `Computer points: ${computerPoints}`;
                
    
}

// append the result at the last of the page to display teh results of the player