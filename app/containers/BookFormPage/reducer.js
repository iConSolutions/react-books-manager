
import { fromJS } from 'immutable';
import {
  CHANGE_INPUT,
} from './constants';

const initialState = fromJS({
  title: '',
  author: '',
  description: '',
});

function bookFormPageReducer(state = initialState, action) {
  switch (action.type) {

    /* Change input */
    case CHANGE_INPUT :
      return state.set(action.payload.key, action.payload.value);

    default:
      return state;
  }
}

export default bookFormPageReducer;
