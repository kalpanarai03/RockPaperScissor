let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.getElementById("msg");



const userScorePara =document.getElementById("user-score");
const computerScorePara =document.getElementById("computer-score");

const generateComputerChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

    //rock,paper,scissors

};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game draw, play again";
    msg.style.backgroundColor = "yellow";
    
    
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        console.log("you win");
        msg.innerText = 'you win! ${userChoice} beats ${compChoice}';
        msg.style.backgroundColor = "green";
        
    
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;

        console.log("you lose");
        msg.innerText = 'you lose! ${compChoice} beats ${userChoice}';
        msg.style.backgroundColor = "red";
        
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    // Generate computer choice -> modular programming--> reusable functions that we can make sure to use in future aspects.
    const compChoice = generateComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw condition.
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //either scissor or paper is generated.
            userWin = compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin =compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }


};
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
});