// const elems = document.querySelectorAll(".elem")

// elems.forEach(function(element, index){
//     element.childNodes[3].addEventListener("click", function () {

//     })
// })

const allButtoms = document.querySelectorAll("button");

allButtoms.forEach(function (button) {
    button.addEventListener("click", function (elem) { 
        console.log(elem.target.innerHTML);
if (elem.target.innerHTML == "Add friend") {
    elem.target.innerHTML = "Pending";
    elem.target.style.backgroundColor = "orange";
    }else if (elem.target.innerHTML == "Pending") {
        elem.target.innerHTML = "Add friend";
    elem.target.style.backgroundColor = "#2d89ff";
    }
    })
})