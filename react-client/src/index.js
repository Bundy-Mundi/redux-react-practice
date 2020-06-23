import { createStore } from "redux";
import "./index.css";

const input = document.getElementById("input");
const form = document.getElementById("form");
const list = document.getElementById("list");

// Redux Action Type Config
const ADD = "ADD";
const DELETE = "DELETE";

// Redux Action Object Config
const addToDo = (text) => {
  return { 
    type: ADD,
    text
  }
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  }
};

// Redux Config
const itemListModifier = (itemList = [], action) => {
  switch (action.type){
    case ADD:
      // Return a new array with new data + old data
      return [...itemList, { text: action.text, id: Date.now() }];
    case DELETE:
      const newArray = itemList.filter(item => item.id !== action.id);
      return newArray;
    default:
      return itemList;
  }
};
const itemListStore = createStore(itemListModifier);
itemListStore.subscribe(paintToDo);

// Vanilla JS Functions
function paintToDo () {
  const itemList = itemListStore.getState();
  list.innerHTML = ``;
  itemList.forEach(item=>{
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.innerText = item.text;
    li.id = item.id;
    btn.innerText = "X";
    btn.className = "del-btn";
    btn.addEventListener("click", handleDelete);
    list.appendChild(li);
    li.appendChild(btn);
  })
};

// Vanilla JS EventHandlers
function onSubmit (e) {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  itemListStore.dispatch(addToDo(toDo));
};
function handleDelete(e){
  const id = parseInt(e.target.parentNode.id);
  itemListStore.dispatch(deleteToDo(id));
};
form.addEventListener("submit", onSubmit);
