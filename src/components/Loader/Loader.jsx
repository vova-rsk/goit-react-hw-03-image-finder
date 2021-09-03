import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from './Loader.styled';

const LoaderSpinner = () => {
  const options = {
    type: 'ThreeDots',
    color: '#eb4034',
    height: 100,
    width: 100,
  };
  return (
    <Container>
      <Loader {...options} />
    </Container>
  );
};

export default LoaderSpinner;
