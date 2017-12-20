
/* Import Third Party Dependencies */
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 15px 0px;
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export {
  HeaderWrapper,
  LeftPart,
  RightPart,
};
