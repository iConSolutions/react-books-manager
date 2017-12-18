
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

/* Import Redux Flow */
import injectReducer from 'utils/injectReducer';
import makeSelectBooksList from './selectors';
import reducer from './reducer';

/* Import Components */
// import EmptyList from '../../components/EmptyList';
import BooksList from '../../components/BooksList';


export class BooksPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BooksList />
    );
  }
}

BooksPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bookslist: makeSelectBooksList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'booksList', reducer });

export default compose(
  withReducer,
  withConnect,
)(BooksPage);
