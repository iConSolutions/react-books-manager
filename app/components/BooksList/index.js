
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

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


function BooksList() {
  return (
    <Wrapper>
      <Text element={TEXT_DOM_ELEMENT.H4} fontSize={24} color="#555" fontWeight={700}>
        Books List
      </Text>
      <HeaderWrapper>
        <LeftPart>
          <Checkbox onChange={() => {}}>Select all</Checkbox>
        </LeftPart>
        <RightPart>
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
        <Book />
        <Book />
        <Book />
      </BodyWrapper>
    </Wrapper>
  );
}

BooksList.propTypes = {
  books: PropTypes.array,
};

export default BooksList;
