
/* Import Third Party Dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

/* Import antd Components */
import { Button, Input } from 'antd';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';
import ActionsWrapper from './elements/ActionsWrapper';

/* Import Shared Elements */
import { Text, TEXT_DOM_ELEMENT } from '../../elements/Heading';


function TopBar() {
  return (
    <Wrapper>
      <Text fontSize={18} element={TEXT_DOM_ELEMENT.H4} color={'#888'} fontWeight={700}>
        react books manager
      </Text>
      <ActionsWrapper>
        <Input.Search
          placeholder="Which book are you looking for?"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
        <Link to="/books/add">
          <Button type="primary" icon="plus">
            new book
          </Button>
        </Link>
      </ActionsWrapper>
    </Wrapper>
  );
}

TopBar.propTypes = {

};

export default TopBar;
