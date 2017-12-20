import { createSelector } from 'reselect';

/**
 * Direct selector to the booksList state domain
 */
const selectBooksListDomain = (state) => state.get('booksList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BooksPage
 */

const makeSelectBooksList = () => createSelector(
  selectBooksListDomain,
  (substate) => substate.toJS()
);

export default makeSelectBooksList;
export {
  selectBooksListDomain,
};
