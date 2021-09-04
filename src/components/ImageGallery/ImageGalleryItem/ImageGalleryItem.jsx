import React from 'react';
import PropTypes from 'prop-types';
import Li from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, dataSrc, index, onClick }) => {
  return (
    <Li className="ImageGalleryItem">
      <img
        src={src}
        data-src={dataSrc}
        data-index={index}
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
  dataSrc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
