import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../../Button';
import fetchImages from '../../../services/pixabay-api';
import scrollTo from '../../../utils';

export default class ImageGallery extends Component {
  state = {
    isLastPage: true,
    page: 1,
    searchResult: [],
  };

  handleIncrementPage = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { query, statusChanging, setErrorMessage } = this.props;

    const isQueryChanged = prevProps.query !== query;
    const isPageIncreased = prevState.page < page;

    if (isQueryChanged || isPageIncreased) {
      statusChanging('pending');

      fetchImages(query, isQueryChanged ? 1 : page)
        .then(({ hits, totalHits }) =>
          this.setState(prevState => {
            return {
              page: isQueryChanged ? 1 : prevState.page,
              searchResult: isQueryChanged
                ? hits
                : [...prevState.searchResult, ...hits],
              isLastPage: isQueryChanged
                ? hits.length >= totalHits
                : [...prevState.searchResult, ...hits].length >= totalHits,
            };
          }),
        )
        .catch(error => {
          setErrorMessage(error.message);
          statusChanging('error');
        })
        .finally(() => {
          statusChanging('resolved');
          scrollTo();
        });
    }
  }

  render() {
    const { searchResult, isLastPage } = this.state;
    return (
      <>
        <ul className="ImageGallery">
          {searchResult.map(
            ({ id, webformatURL, largeImageURL, tags }, idx) => (
              <ImageGalleryItem
                // key={id}
                key={idx}
                src={webformatURL}
                dataSrc={largeImageURL}
                alt={tags}
              />
            ),
          )}
        </ul>
        {!isLastPage && (
          <Button handleIncrementPage={this.handleIncrementPage} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  statusChanging: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};
