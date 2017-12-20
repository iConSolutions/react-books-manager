
/* Import Third Party Dependencies */
import React from 'react';
import PropTypes from 'prop-types';


const TEXT_DOM_ELEMENT = {
  H1: {
    dom: 'h1',
    default: {
    },
  },
  H2: {
    dom: 'h2',
    default: {
    },
  },
  H3: {
    dom: 'h3',
    default: {
    },
  },
  H4: {
    dom: 'h4',
    default: {
    },
  },
  H5: {
    dom: 'h5',
    default: {
    },
  },
  H6: {
    dom: 'h6',
    default: {
    },
  },
  P: {
    dom: 'p',
    default: {
    },
  },
  SPAN: {
    dom: 'span',
    default: {
    },
  },
};

const Text = (props) => {
  /* Prepare styles to be passed */
  const style = Object.assign({}, {
    fontSize: props.fontSize ? props.fontSize.toString() + 'px' : '12px',
    fontWeight: props.fontWeight ? props.fontWeight : '400',
    color: props.color ? props.color : '#111',
    textAlign: props.align ? props.align : 'left',
  }, props.style);

  /* Create the appropriate element to be rendered */
  const Element = React.createElement(props.element !== undefined ? props.element.dom : 'p', { style }, props.children);

  /* Render the created element */
  return (Element);
};

Text.propTypes = {
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  element: PropTypes.object,
  align: PropTypes.string,
};


export {
  Text,
  TEXT_DOM_ELEMENT,
};
