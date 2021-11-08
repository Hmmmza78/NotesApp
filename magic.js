console.log("Hello Dev");
const input = document.getElementById("input");
const saveBtn = document.getElementById("saveBtn");
const target = document.getElementById("targetDiv");

// localStorage.clear();
localStorage.setItem("notes", "Dev");

let notesArr;

let notesrc = localStorage.getItem("notes");
// console.log(notesrc);

if (notesrc == null) {
  // console.log("pp");
  notesArr = [];
  // console.log(notesArr);
} else {
  notesArr = JSON.parse(notesrc);
  console.log("kk");
}
// console.log(typeof notesArr);
let round = 1;

saveBtn.addEventListener("click", function (params) {
  let txt = input.value;
  let card = `
    <div class="card-body">
    <h5 id="cardTitle" class="card-title">Note no. ${round}.</h5>
    <p class="card-text" id="cardtext">${txt}</p>
                            <button class="btn btn-primary" id="deleteBtn${round}">Delete Note</button>
                    </div>
                    `;
  let newEl = document.createElement("div");
  newEl.setAttribute("class", "card col-md-3 my-1 mx-2");
  newEl.setAttribute("style", "width:18rem;");
  newEl.innerHTML = card;
  target.appendChild(newEl);
  // console.log(round + 1);
  round++;

  console.log(typeof notesrc);
  notesArr.push(txt);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  // console.log(notesArr);
  // console.log(txt);
  input.value = "";
});

function showNotes() {}
