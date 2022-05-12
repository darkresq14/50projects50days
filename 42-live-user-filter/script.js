const result = document.getElementById("result");
const filter = document.getElementById("filter");

const URL = "https://randomuser.me/api/?results=";
const NR_OF = 50;

const listItems = [];

async function getData() {
  const res = await fetch(URL + NR_OF);
  const { results } = await res.json();

  result.innerHTML = "";

  results.forEach((user) => {
    const newLi = document.createElement("li");

    newLi.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    listItems.push(newLi);

    result.appendChild(newLi);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));
