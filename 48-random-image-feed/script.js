const URL = "https://source.unsplash.com/random/";

const container = document.querySelector(".container");

const picturePerLoad = 20;

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 250) {
    loadImages();
  }
});

function loadImages() {
  for (let i = 0; i < picturePerLoad; i++) {
    const newImage = document.createElement("img");
    newImage.src = `${URL}${getRandomSize()}`;
    newImage.classList.add("image");

    container.appendChild(newImage);
  }
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 30) + 300;
}

loadImages();
