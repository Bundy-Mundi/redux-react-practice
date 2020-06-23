import { createStore } from "redux";

const addBtn = document.getElementById("add");
const number = document.getElementById("number");
const minusBtn = document.getElementById("minus");

const countModifier = (count = 0, action) => {
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

countStore.dispatch({ type:"Add" });

countStore.dispatch({ type:"Add" });

countStore.dispatch({ type:"Add" });

console.log(countStore.getState());