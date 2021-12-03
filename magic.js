console.log("Hello Dev");
const input = document.getElementById("input");
const saveBtn = document.getElementById("saveBtn");
const target = document.getElementById("targetDiv");
const search = document.getElementById("search");

// localStorage.clear();

let notesArr;

let notesrc = localStorage.getItem("notes");

if (notesrc == null) {
  notesArr = [];
} else {
  notesArr = JSON.parse(notesrc);
}

let round = 0;

saveBtn.addEventListener("click", function (params) {
  let txt = input.value;
  round++;
  let card = `
    <div class="card-body">
    <h5 id="cardTitle" class="card-title">Note no. ${round + 1}.</h5>
    <p class="card-text" id="cardtext">${txt}</p>
                            <button class="btn btn-primary" id="${round} onclick="deleteNote(this.id)">Delete Note</button>
                    </div>
                    `;
  let newEl = document.createElement("div");
  newEl.setAttribute("class", "card col-md-3 my-1 mx-2");
  newEl.setAttribute("style", "width:18rem;");
  newEl.innerHTML = card;
  target.appendChild(newEl);

  notesArr.push(txt);
  localStorage.setItem("notes", JSON.stringify(notesArr));

  input.value = "";
});

function showNotes() {
  if (notesrc != null) {
    notesArr.forEach((element, index) => {
      round++;
      round = index;
      let card = `
    <div class="card-body">
    <h5 id="cardTitle" class="card-title">Note no. ${round + 1}.</h5>
    <p class="card-text" id="cardtext">${element}</p>
                            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                    </div>
                    `;
      let newEl = document.createElement("div");
      newEl.setAttribute("class", "card col-md-3 my-1 mx-2");
      newEl.setAttribute("style", "width:18rem;");
      newEl.innerHTML = card;
      target.appendChild(newEl);
    });
  }
}

showNotes();
function deleteNote(index) {
  notesArr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  console.log("ppp", index);
  $(target).empty();
  showNotes();
  window.location.reload();
}

// search section
