
/* Import Third Party Dependencies */
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background-color: #fff;
  border: 1px solid ${(props) => props.selected ? '#1890ff' : '#eee'};
  cursor: pointer;
`;


export default Wrapper;
