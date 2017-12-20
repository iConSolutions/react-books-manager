
/* Import Third Party Dependencies */
import { fromJS } from 'immutable';
import {
  SELECT_ALL_BOOKS,
  SELECT_BOOK,
} from './constants';

const initialState = fromJS({
  books: [{
    id: '1',
    title: 'book 1',
    author: 'zaidbentaleb',
    description: 'description test',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'book 1',
    author: 'zaidbentaleb',
    description: 'description test',
    createdAt: new Date(),
  }],
  selectedBooksIds: [],
  isLoading: false,
});

function booksListReducer(state = initialState, action) {
  switch (action.type) {
    /* Select/Deselect All Books */
    case SELECT_ALL_BOOKS: {
      let newSelectedBooksIds = state.get('selectedBooksIds');
      if (state.get('books').size !== state.get('selectedBooksIds').size) {
        newSelectedBooksIds = state.get('books').map((book) => book.get('id'));
      } else {
        newSelectedBooksIds = fromJS([]);
      }
      return state.set('selectedBooksIds', newSelectedBooksIds);
    }
    /* Select/Deselect Single Book */
    case SELECT_BOOK: {
      let nSelectedBooksIds = state.get('selectedBooksIds');
      let index = -1;
      for (let i = 0; i < nSelectedBooksIds.size; i += 1) {
        if (action.payload.id === nSelectedBooksIds.get(i)) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        nSelectedBooksIds = nSelectedBooksIds.push(action.payload.id);
      } else {
        nSelectedBooksIds = nSelectedBooksIds.delete(index);
      }
      return state.set('selectedBooksIds', nSelectedBooksIds);
    }
    /* Return default state */
    default:
      return state;
  }
}

export default booksListReducer;
