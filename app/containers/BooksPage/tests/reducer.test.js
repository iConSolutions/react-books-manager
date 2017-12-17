
import { fromJS } from 'immutable';
import booksListReducer from '../reducer';

describe('booksListReducer', () => {
  it('returns the initial state', () => {
    expect(booksListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
