const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const boxHeight = 200;
  const windowHeight = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < windowHeight - boxHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
