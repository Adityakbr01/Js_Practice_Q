const counter = document.getElementById("counter")
const IncBtn = document.getElementById("IncreaseBtn")
const DecBtn = document.getElementById("DecreaseBtn")


IncBtn.addEventListener("click", () => {
    console.log(counter.innerText)
    counter.innerText = Number(counter.innerText) +1
})

DecBtn.addEventListener("click", () => {
    console.log(counter.innerText)
    //Adding Chacking 
    if (Number(counter.innerText) <= 0) {
        alert(`You cannot decrease in Minus`)
        return;
    }
    counter.innerText = Number(counter.innerText) -1
})