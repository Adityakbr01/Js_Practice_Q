// const container = document.getElementById('container');
// const cursor = document.getElementById('cursor');
// const body = document.body;



// body.addEventListener('mousemove', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   cursor.style.left = `${x}px`;
//   cursor.style.top = `${y}px`;
// });


const sounds = {
  a: new Audio("./28.mp3"),
  s: new Audio("./29.mp3"),
  d: new Audio("./30.mp3"),
  f: new Audio("./31.mp3"),
  g: new Audio("./32.mp3"),
  h: new Audio("./33.mp3"),
  j: new Audio("./34.mp3"),
  k: new Audio("./35.mp3"),
  l: new Audio("./36.mp3"),
  ";": new Audio("./37.mp3"),
  "'": new Audio("./38.mp3"),
};

// ✅ Keydown listener
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (sounds[key]) {
    sounds[key].currentTime = 0;
    sounds[key].play();
    animateKey(key);
  }
});

// ✅ Mouse click support
document.querySelectorAll(".key").forEach((keyEl) => {
  keyEl.addEventListener("click", () => {
    const key = keyEl.dataset.key;

    sounds[key].currentTime = 0;
    sounds[key].play();
    animateKey(key);
  });
});

// ✅ Animation
function animateKey(key) {
  const activeKey = document.querySelector(`.key[data-key="${key}"]`);
  if (!activeKey) return;

  activeKey.classList.add("active");

  setTimeout(() => {
    activeKey.classList.remove("active");
  }, 150);
}


//Ye ai se Genrated code hai but logic mene diya hai kaese kya karn ahai