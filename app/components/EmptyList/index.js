
/* Import Third Party Dependencies */
import React from 'react';

/* Import antd Components */
import { Button } from 'antd';

/* Import Local Elements */
import Wrapper from './elements/Wrapper';

/* Import Shared Elements */
import { Text, TEXT_DOM_ELEMENT } from '../../elements/Heading';


function EmptyList() {
  return (
    <Wrapper>
      <Text element={TEXT_DOM_ELEMENT.P} fontSize={28} fontWeight={700} color={"#1890ff"}>
        Oops! Empty List
      </Text>
      <Text element={TEXT_DOM_ELEMENT.P} align="center" fontSize={16} fontWeight={500} color={"#888"}>
        00, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen
        de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à
      </Text>
      <Button type="dashed"  icon={"plus"} style={{color: "#888", backgroundColor:'#f5f5f5'}}>
        add a book
      </Button>
    </Wrapper>
  );
}

EmptyList.propTypes = {

};

export default EmptyList;
