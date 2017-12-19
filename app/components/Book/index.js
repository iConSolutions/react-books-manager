
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Import antd Components */
import { Icon, Dropdown, Menu } from 'antd';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';
import CoverWrapper from './elements/CoverWrapper';
import DetailsWrapper from './elements/DetailsWrapper';
import ControlWrapper from './elements/ControlWrapper';

/* Import Shared Elements */
import { Text, TEXT_DOM_ELEMENT } from '../../elements/Heading';


function Book({ book, selectedBooksIds, selectBook }) {
  const selected = selectedBooksIds.indexOf(book.id) !== -1;
  return (
    <Wrapper onClick={() => selectBook(book.id)} selected={selected}>
      <CoverWrapper>
        <Icon type="picture" style={{ fontSize: '24px', color: '#aaa' }} />
      </CoverWrapper>
      <DetailsWrapper>
        <Text element={TEXT_DOM_ELEMENT.H4} fontSize={16} fontWeight={700} color="#1890ff">
          {book.title}
        </Text>
        <Text element={TEXT_DOM_ELEMENT.P} fontSize={12} fontWeight={400} color="#888">
          author
          <Text element={TEXT_DOM_ELEMENT.SPAN} fontSize={12} fontWeight={700} color="#1890ff">
            {' '} {book.author}
          </Text>
        </Text>
        <Text element={TEXT_DOM_ELEMENT.p} fontSize={14} fontWeight={400} color="#aaa">
          {book.description}
        </Text>
      </DetailsWrapper>
      <ControlWrapper >
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item>
                remove
              </Menu.Item>
              <Menu.Item>
                <Link to={`/books/${book.id}`}>
                  update
                </Link>
              </Menu.Item>
            </Menu>
          )}
        >
          <Icon type="ellipsis" style={{ fontSize: '18px' }} />
        </Dropdown>
      </ControlWrapper>
    </Wrapper>
  );
}

Book.propTypes = {
  book: PropTypes.object,
  selectedBooksIds: PropTypes.array,
  selectBook: PropTypes.func,
};

export default Book;
