
import { createSelector } from 'reselect';


const selectBookFormPageDomain = (state) => state.get('bookFormPage');

const makeSelectBookFormPage = () => createSelector(
  selectBookFormPageDomain,
  (substate) => substate.toJS({
    title: substate.get('title'),
    author: substate.get('author'),
    description: substate.get('description'),
    isProcessing: substate.get('isProcessing'),
  })
);


export default makeSelectBookFormPage;
// export {
//   selectBookFormPageDomain,
// };
