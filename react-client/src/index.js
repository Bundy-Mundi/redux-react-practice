const addBtn = document.getElementById("add");
const number = document.getElementById("number");
const minusBtn = document.getElementById("minus");

let count = 0;

function updateText () {
  number.innerText = count;
}

function handleAdd(){
  count++;
  updateText();
}

function handleMinus(){
  count--;
  updateText();
}

addBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);

