import {
  DEFAULT_ACTION,
  SELECT_ALL_BOOKS,
  SELECT_BOOK,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function selectAllBooks() {
  return {
    type: SELECT_ALL_BOOKS,
  };
}

export function selectBook(bookId) {
  return {
    type: SELECT_BOOK,
    payload: { id: bookId },
  };
}
