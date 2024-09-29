let edit = document.getElementById("edit");
let tekst = document.getElementById("text");
// let edit = document.getElementById("edit");
let placeholder = document.getElementById("placeholder");

// edit.addEventListener("click", () => {
//   placeholder.style.display = "none";
// });
let beforeContent;

if (localStorage.getItem("savedTekst")) {
  tekst.innerHTML = localStorage.getItem("savedTekst");
  beforeContent = tekst.innerHTML;
}

edit.addEventListener("click", function () {
  placeholder.style.display = "none";
  tekst.contentEditable = "true";
});

let save = document.getElementById("save");
// console.log("save");
save.addEventListener("click", function () {
  localStorage.setItem("savedTekst", tekst.innerHTML);
  console.log(tekst.innerHTML);
});

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", function () {
  tekst.innerHTML = beforeContent;
});
