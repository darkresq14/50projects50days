const password = document.getElementById("password");
const background = document.getElementById("background");

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

password.addEventListener("input", (e) => {
  const blurValue = scale(e.target.value.length, 0, 15, 20, 0);
  background.style.filter = `blur(${blurValue}px)`;
});
