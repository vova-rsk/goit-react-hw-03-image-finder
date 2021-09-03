import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderSpinner = () => {
  const options = {
    type: 'Puff',
    color: '#00BFFF',
    height: 100,
    width: 100,
    timeout: 3000,
  };
  return <Loader {...options} />;
};

export default LoaderSpinner;
