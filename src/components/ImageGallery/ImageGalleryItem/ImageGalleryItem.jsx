import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        loading="lazy"
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
