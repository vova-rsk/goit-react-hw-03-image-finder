import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, dataSrc, index, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        data-src={dataSrc}
        data-index={index}
        alt={alt}
        className="ImageGalleryItem-image"
        loading="lazy"
        onClick={onClick}
      />
    </li>
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
