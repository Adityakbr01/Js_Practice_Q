const body = document.body
const AutomateRandomBtn = document.getElementById("AutomateRandomBtn")
const RandomBtn = document.getElementById("RandomBtn")
const StopAutomateRandomBtn = document.getElementById("StopAutomateRandomBtn")
const GuessBtn = document.getElementById("GuessBtn")

RandomBtn.addEventListener("click", () => {
    let rgb1 = Math.floor(Math.random() * 256)
    let rgb2 = Math.floor(Math.random() * 256)
    let rgb3 = Math.floor(Math.random() * 256)
    body.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
})

let intervalId;

AutomateRandomBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        let rgb1 = Math.floor(Math.random() * 256)
        let rgb2 = Math.floor(Math.random() * 256)
        let rgb3 = Math.floor(Math.random() * 256)
        body.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
    }, 1000);
})
StopAutomateRandomBtn.addEventListener("click", () => {
    clearInterval(intervalId)
})


const Team = [
    {
        tema: "CSK",
        primaryColor: "Yellow",
        secondaryColor: "Blue",
        fullName: "Chennai Super Kings",
        triphyCount: 4.,
        captain: "MS Dhoni"
    }, {
        tema: "MI",
        primaryColor: "Blue",
        secondaryColor: "Gold",
        fullName: "Mumbai Indians",
        triphyCount: 5,
        captain: "Rohit Sharma"
    },
    {
        tema: "RCB",
        primaryColor: "Red",
        secondaryColor: "Black",
        fullName: "Royal Challengers Bangalore",
        triphyCount: 0,
        captain: "Faf du Plessis"
    }, {
        tema: "KKR",
        primaryColor: "Purple",
        secondaryColor: "Gold",
        fullName: "Kolkata Knight Riders",
        triphyCount: 2,
        captain: "Shreyas Iyer"
    }
]

GuessBtn.addEventListener("click", () => {
    const userGuess = prompt("Guess the IPL 2026 Winner Team Abbreviation (e.g., CSK, MI, RCB, KKR):").toUpperCase();
    const winningTeam = Team[Math.floor(Math.random() * Team.length)];  
    if (userGuess === winningTeam.tema) {
        body.style.backgroundColor = winningTeam.primaryColor;
        body.style.color = winningTeam.secondaryColor;
        alert(`Congratulations! You guessed it right. ${winningTeam.fullName} won the IPL 2026!`);
    } else {
        alert(`Sorry, wrong guess. The winner of IPL 2026 is ${winningTeam.fullName}. Better luck next time!`);
    }
})