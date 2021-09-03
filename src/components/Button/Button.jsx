import React from 'react';
import PropTypes from 'prop-types';
import LoadMoreButton from './Button.styled';

const Button = ({ handleIncrementPage }) => {
  return (
    <LoadMoreButton type="button" onClick={handleIncrementPage}>
      Load more
    </LoadMoreButton>
  );
};

export default Button;

Button.propTypes = {
  handleIncrementPage: PropTypes.func,
};
