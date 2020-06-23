import { createStore } from "redux";

const addBtn = document.getElementById("add");
const number = document.getElementById("number");
const minusBtn = document.getElementById("minus");

const ADD = "Add";
const MINUS = "Minus";

const countModifier = (count=0, action) => {
  //console.log(count, action)
  switch (action.type){
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count; 
  }
};

const countStore = createStore(countModifier);

function onChange() {
  number.innerText = countStore.getState();
}
function handleAdd () {
  countStore.dispatch({ type: ADD })
}
function handleMinus () {
  countStore.dispatch({ type: MINUS })
}

countStore.subscribe(onChange);
addBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);

