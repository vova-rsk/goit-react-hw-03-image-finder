import React from 'react';
import PropTypes from 'prop-types';
import Li from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <Li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        loading="lazy"
        onClick={onClick}
      />
    </Li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
