import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button type="button" onClick={() => console.log('ТЫЦ')}>
      Load more
    </button>
  );
};

export default Button;
