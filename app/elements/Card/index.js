
/* Import Third Party Dependencies */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* Styled Components */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: ${(props) => props.height? props.height : 'auto'};
  border: 1px solid #eee;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#fff'}
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
`;

const BodyWrapper = styled.div`
  padding: 15px;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
`;


const Card = (props) => {
  return (
    <Wrapper
      height={props.height}
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
    >
      {props.header ? <HeaderWrapper>{props.header}</HeaderWrapper> : null}
      <BodyWrapper >
        {props.children}
      </BodyWrapper>
      {props.footer ? <FooterWrapper>{props.footer}</FooterWrapper> : null}
    </Wrapper>
  );
};

Card.propTypes = {
  height: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
};


export default Card;
