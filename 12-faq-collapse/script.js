const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach((btn) => {
  // * My initial implementation from event
  // btn.addEventListener("click", (event) => {
  //   console.log(event);
  //   event.path[2].classList.toggle("active");
  // });

  // * Second implementation from partents
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
