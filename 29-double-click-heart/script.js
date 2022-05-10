const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
const fastest = document.querySelector("#fastest");

let firstClick = null;
let timesLoved = 0;

// * Easier method is with 'dblclick'
loveMe.addEventListener("click", (e) => {
  const now = new Date();
  if (firstClick) {
    const diff = Math.abs(now - firstClick);

    if (diff < 500) {
      times.innerText = ++timesLoved;
      makeWaves(e);

      if (diff < fastest.innerText) {
        fastest.innerText = diff;
      }

      firstClick = null;
      return;
    }
  }

  firstClick = now;
});

function makeWaves(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = yInside + "px";
  heart.style.left = xInside + "px";

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 600);
}
