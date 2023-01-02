import { SET_TODO } from "../actions/types";
const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_TODO:
      return {
        ...state,
        todoList: payload,
      };
    default:
      return state;
  }
}
export default  todoReducer;