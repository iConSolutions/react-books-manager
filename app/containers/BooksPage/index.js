
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
import * as ActionsCreator from './actions';

/* Import Components */
import EmptyList from '../../components/EmptyList';
import BooksList from '../../components/BooksList';


export class BooksPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.bookslist.books.length > 0) {
      return (
        <BooksList
          books={this.props.bookslist.books}
          selectedBooksIds={this.props.bookslist.selectedBooksIds}
          selectAllBooks={this.props.selectAllBooks}
          selectBook={this.props.selectBook}
        />);
    }
    return (<EmptyList />);
  }
}

BooksPage.propTypes = {
  bookslist: PropTypes.object,
  selectAllBooks: PropTypes.func,
  selectBook: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  bookslist: makeSelectBooksList(),
});

function mapDispatchToProps(dispatch) {
  return {
    selectAllBooks: () => dispatch(ActionsCreator.selectAllBooks()),
    selectBook: (bookId) => dispatch(ActionsCreator.selectBook(bookId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'booksList', reducer });

export default compose(
  withReducer,
  withConnect,
)(BooksPage);
