
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Import antd Components */
import { Checkbox, Button, Icon } from 'antd';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';
import BodyWrapper from './elements/BodyWrapper';
import { HeaderWrapper, LeftPart, RightPart } from './elements/HeaderWrapper';

/* Import Shared Elements */
import { Text, TEXT_DOM_ELEMENT } from '../../elements/Heading';

/* Import Components */
import Book from '../Book/Loadable';


function BooksList({ books, selectAllBooks, selectBook, selectedBooksIds }) {
  return (
    <Wrapper>
      <Text element={TEXT_DOM_ELEMENT.H4} fontSize={24} color="#555" fontWeight={700}>
        Books List
      </Text>
      <HeaderWrapper>
        <LeftPart>
          <Checkbox checked={books.length === selectedBooksIds.length} onChange={selectAllBooks}>Select all</Checkbox>
        </LeftPart>
        <RightPart>
          { selectedBooksIds.length === 1 ? (<Link to={`/books/${selectedBooksIds[0]}`}><Button style={{ marginRight: '5px' }}>update</Button></Link>) : null }
          { selectedBooksIds.length > 0 ? (<Button type="danger" style={{ marginRight: '5px' }}>delete</Button>) : null }
          <Button.Group>
            <Button>
              <Icon type="bars" />
            </Button>
            <Button>
              <Icon type="appstore" />
            </Button>
          </Button.Group>
        </RightPart>
      </HeaderWrapper>
      <BodyWrapper>
        {
          books.map((book) => <Book selectBook={selectBook} book={book} selectedBooksIds={selectedBooksIds} key={Math.random()} />)
        }
      </BodyWrapper>
    </Wrapper>
  );
}

BooksList.propTypes = {
  books: PropTypes.array,
  selectAllBooks: PropTypes.func,
  selectBook: PropTypes.func,
  selectedBooksIds: PropTypes.array,
};

export default BooksList;
