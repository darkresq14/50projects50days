const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replayBtn = document.querySelector("#replay");

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        setTimeout(() => {
          counter.classList.add("hide");
          final.classList.add("show");
        }, 500);
      }
    });
  });
}

function resetDOM() {
  counter.classList.remove("hide");
  final.classList.remove("show");
  nums.forEach((num) => {
    num.classList.value = "";
  });
  nums[0].classList.add("in");
}

replayBtn.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
