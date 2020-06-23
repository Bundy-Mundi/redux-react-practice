import { createStore } from "redux";

const addBtn = document.getElementById("add");
const number = document.getElementById("number");
const minusBtn = document.getElementById("minus");

// Reducer is a function that modifies the data
// Whatever the reducer returns, it is going to be the data
const reducerExample = () => {};

// By setting a default value, we can initialize state's value
const countModifier = (count = 0, action) => {
  console.log(count, action)
  return count;
};


const countStore = createStore(countModifier);

console.log(countStore.getState());
