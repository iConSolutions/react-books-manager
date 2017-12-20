
import {
  DEFAULT_ACTION,
  CHANGE_INPUT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeInput(key, value) {
  return {
    type: CHANGE_INPUT,
    payload: { key, value },
  };
}
