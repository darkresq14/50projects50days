const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  // * Using .then
  // fetch("https://icanhazdadjoke.com/", config)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     jokeEl.innerText = data.joke;
  //   });

  // * Using Async/Await
  try {
    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();

    if (data.status === 200 && data.joke) {
      jokeEl.innerText = data.joke;
    }
  } catch (error) {
    alert("Error fetching data ", error.message);
  }
}

getJoke();

jokeBtn.addEventListener("click", () => getJoke());
