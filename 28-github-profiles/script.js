const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response.status === 404) {
      createErrorCard("No profile with this username");
      return "error";
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(
      API_URL + username + "/repos?sort=created"
    );
    return data;
  } catch (error) {
    createErrorCard("Problem fetching repos", error);
  }
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h1>${msg}<h1>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Follower${
    user.followers === 1 ? "" : "s"
  }</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector("#repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    const data = await getUser(user);

    if (data !== "error") {
      const repos = await getRepos(user);

      createUserCard(data);
      addReposToCard(repos);
    }
    search.value = "";
  }
});
