import { createStore } from "redux";

const addBtn = document.getElementById("add");
const number = document.getElementById("number");
const minusBtn = document.getElementById("minus");

const countModifier = (count = 0, action) => {
  //console.log(count, action)
  if(action.type === "Add"){
    return count + 1
  }
  else if(action.type === "Minus"){
    return count - 1
  }
  else if(action.type === "Test"){
    return "test"
  }
};

const countStore = createStore(countModifier);

// OnChange decides what to do when there is any single updates.
function onChange() {
  number.innerText = countStore.getState();

}
function handleAdd () {
  // "type" is an action's type(action.type)
  countStore.dispatch({ type: "Add" })
}
function handleMinus () {
  // "type" is an action's type(action.type)
  countStore.dispatch({ type: "Minus" })
}
// Subscribe lets us to access to change when store.dispatch is fired
countStore.subscribe(onChange);
addBtn.addEventListener("click", handleAdd);
minusBtn.addEventListener("click", handleMinus);

