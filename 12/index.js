// const btn = document.querySelector("button")
// const main = document.querySelector("main")



// btn.addEventListener("click", function () {

//     let div = document.createElement("div")

//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)

//     div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//     div.style.width = "100px"
//     div.style.height = "100px"
//     div.style.borderRadius = "10px"
//     div.style.position = "absolute"
//     div.style.top = `${Math.floor(Math.random() * (main.clientHeight - 100))}px`
//     div.style.left = `${Math.floor(Math.random() * (main.clientWidth - 100))}px`
//     div.innerText = `rgb(${r}, ${g}, ${b})`
//     div.style.display = "flex"
//     div.style.alignItems = "center"
//     div.style.justifyContent = "center"
//     div.style.color = "white"
//     div.style.fontWeight = "bold"
//     div.id = "box"
//     main.appendChild(div)
//  })



// const btn = document.querySelector("button")
// const main = document.querySelector("main")

// const arr = ["Hey i Am Aditya","Hey i Am Sheryian","Hey i Am Developer","Hey i Am Designer","Hey i Am Freelancer"]


// btn.addEventListener("click", function () {
//     let h2 = document.createElement("h2")

//     let i = Math.floor(Math.random()*arr.length)
//     let scale = Math.random() * 3
//     let y = Math.random() * 80;
//     let x = Math.random() * 80;

//     h2.style.position = "absolute"
//     h2.style.top = `${y}%`
//     h2.style.left = `${x}%`

//     h2.innerText = arr[i]
//     h2.style.scale = scale
    
//     main.appendChild(h2)


// })
 



// My Thought but chatGPT Code
// If user did not interact to my app ,i will show him random text on my screen if cursor remove than remove all text

const main = document.querySelector("main");

if (!main) {
	throw new Error("<main> element is required for this interaction.");
}

const phrases = [
	"Hey I am Aditya",
	"Building something cool",
	"Designing in silence",
	"Still here, keep exploring",
	"Frontend magic in progress"
];

const IDLE_DELAY_MS = 3000;
const MESSAGE_INTERVAL_MS = 1500;
const MAX_VISIBLE_MESSAGES = 10;

const visibleMessages = [];
let idleTimer = null;
let messageTimer = null;

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const addFloatingMessage = () => {
	const h2 = document.createElement("h2");
	h2.textContent = phrases[Math.floor(Math.random() * phrases.length)];

	const { clientWidth, clientHeight } = main;
	const x = randomBetween(20, Math.max(40, clientWidth - 160));
	const y = randomBetween(20, Math.max(40, clientHeight - 80));

	h2.style.position = "absolute";
	h2.style.left = `${x}px`;
	h2.style.top = `${y}px`;
	h2.style.fontSize = `${randomBetween(1.2, 2.2).toFixed(2)}rem`;
	h2.style.opacity = "0";
	h2.style.transition = "opacity 200ms ease-out";
	h2.style.pointerEvents = "none";

	main.appendChild(h2);
	requestAnimationFrame(() => {
		h2.style.opacity = "1";
	});

	visibleMessages.push(h2);
	if (visibleMessages.length > MAX_VISIBLE_MESSAGES) {
		const oldMessage = visibleMessages.shift();
		oldMessage.remove();
	}
};

const clearFloatingMessages = () => {
	while (visibleMessages.length) {
		const msg = visibleMessages.pop();
		msg.remove();
	}
};

const beginIdleMode = () => {
	if (messageTimer) return;
	addFloatingMessage();
	messageTimer = setInterval(addFloatingMessage, MESSAGE_INTERVAL_MS);
};

const stopIdleMode = () => {
	if (messageTimer) {
		clearInterval(messageTimer);
		messageTimer = null;
	}
	clearFloatingMessages();
};

const resetIdleTimer = () => {
	if (idleTimer) {
		clearTimeout(idleTimer);
	}
	idleTimer = setTimeout(beginIdleMode, IDLE_DELAY_MS);
};

const handleInteraction = () => {
	stopIdleMode();
	resetIdleTimer();
};

const interactionEvents = [
	"mousemove",
	"keydown",
	"mousedown",
	"touchstart",
	"scroll"
];

interactionEvents.forEach((event) => {
	window.addEventListener(event, handleInteraction, { passive: true });
});

resetIdleTimer();