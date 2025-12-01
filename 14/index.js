const postImg = document.querySelector(".post-img");
const heart = document.querySelector(".heart");
const likeBtn = document.querySelector("#likeBtn");

let liked = false;

// Double click like effect
postImg.addEventListener("dblclick", () => {
    liked = true;
    likeBtn.textContent = "❤️";

    heart.classList.add("active");

    setTimeout(() => {
        heart.classList.remove("active");
    }, 600);
});

// Like button toggle
likeBtn.addEventListener("click", () => {
    liked = !liked;

    if (liked) {
        likeBtn.textContent = "❤️";
    } else {
        likeBtn.textContent = "🤍";
    }
});
