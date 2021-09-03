import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ galleryItems }) => {
  return (
    <ul className="ImageGallery">
      {galleryItems.map(({ id, webformatURL, largeImageURL, tags }, idx) => (
        <ImageGalleryItem
          // key={id}
          key={idx}
          src={webformatURL}
          dataSrc={largeImageURL}
          alt={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.object),
};
