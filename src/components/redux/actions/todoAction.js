
import { SET_TODO } from './types';

export const addToDo = data => dispatch => {

  try {
    dispatch({
      type: SET_TODO,
      payload: data
    });
    return true;
  } catch (error) {
    console.error(error);
  }

};
