
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/* Import antd Components */
import { Icon, Dropdown, Menu } from 'antd';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';
import CoverWrapper from './elements/CoverWrapper';
import DetailsWrapper from './elements/DetailsWrapper';
import ControlWrapper from './elements/ControlWrapper';

/* Import Shared Elements */
import { Text, TEXT_DOM_ELEMENT } from '../../elements/Heading';


function Book() {
  return (
    <Wrapper>
      <CoverWrapper>
        <Icon type="picture" style={{ fontSize: '24px', color: '#aaa' }} />
      </CoverWrapper>
      <DetailsWrapper>
        <Text element={TEXT_DOM_ELEMENT.H4} fontSize={16} fontWeight={700} color="#1890ff">Book Title</Text>
        <Text element={TEXT_DOM_ELEMENT.P} fontSize={12} fontWeight={400} color="#888">
          author
          <Text element={TEXT_DOM_ELEMENT.SPAN} fontSize={12} fontWeight={700} color="#1890ff">
            {" "} zaidbentaleb
          </Text>
        </Text>
        <Text element={TEXT_DOM_ELEMENT.p} fontSize={14} fontWeight={400} color="#aaa">
          livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé
        </Text>
      </DetailsWrapper>
      <ControlWrapper>
        O
      </ControlWrapper>
    </Wrapper>
  );
}

Book.propTypes = {
  book: PropTypes.string,
};

export default Book;
