import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return (
    {
      type: ADD,
      text
    }
  )
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
  }
}

const dataModifier = (state=[], action) => {
  switch(action.type){
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter(toDos => toDos.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(dataModifier);
export const actionCreators = {
  addToDo,
  deleteToDo
}
export default store;