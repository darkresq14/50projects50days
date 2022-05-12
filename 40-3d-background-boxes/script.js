const btn = document.getElementById("btn");
const boxes = document.getElementById("boxes");

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");

    newBox.style.backgroundPosition = `-${j * 125}px -${i * 125}px`;

    boxes.appendChild(newBox);
  }
}

btn.addEventListener("click", () => {
  boxes.classList.toggle("big");
});
