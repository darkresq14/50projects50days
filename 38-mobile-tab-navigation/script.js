const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((el) => el.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((el) => el.classList.remove("active"));
}
