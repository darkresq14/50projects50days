const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote(""));

retrieveLS();

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
  <div class="tools">
    <p class="editing">${text ? "" : "Edit Mode"}</p>
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="trash">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector(".edit");
  const trashBtn = note.querySelector(".trash");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked.parse(text);

  trashBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");

    const editing = note.querySelector(".editing");
    if (!textArea.classList.contains("hidden")) {
      editing.innerText = "Edit Mode";
    } else {
      editing.innerText = "";
    }
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked.parse(value);

    updateLS();
  });

  document.body.appendChild(note);
  textArea.focus();
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];
  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}

function retrieveLS() {
  const notes = JSON.parse(localStorage.getItem("notes"));

  if (notes) {
    notes.forEach((note) => addNewNote(note));
  }
}
