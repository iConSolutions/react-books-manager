import { createSelector } from 'reselect';

/**
 * Direct selector to the bookFormPage state domain
 */
const selectBookFormPageDomain = (state) => state.get('bookFormPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BookFormPage
 */

const makeSelectBookFormPage = () => createSelector(
  selectBookFormPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectBookFormPage;
export {
  selectBookFormPageDomain,
};
