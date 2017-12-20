
import { fromJS } from 'immutable';
import {
  CHANGE_INPUT,
  CHANGE_PROCESSING_STATE,
} from './constants';

const initialState = fromJS({
  title: '',
  author: '',
  description: '',
  isProcessing: true,
});

function bookFormPageReducer(state = initialState, action) {
  switch (action.type) {

    /* Change input */
    case CHANGE_INPUT :
      return state.set(action.payload.key, action.payload.value);

    /* Change processing state */
    case CHANGE_PROCESSING_STATE :
      return state.set('isProcessing', action.payload.value);

    default:
      return state;
  }
}

export default bookFormPageReducer;
