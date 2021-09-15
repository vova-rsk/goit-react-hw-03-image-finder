import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../../Button';
import pixabayApi from '../../../services/pixabay-api';
import scrollTo from '../../../utils';
import Modal from '../../Modal';
import List from './ImageGallery.styled';
import LoaderSpinner from '../../Loader';

export default class ImageGallery extends Component {
  state = {
    isLastPage: true,
    page: 1,
    searchResult: [],
    selectedItem: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { query, statusChanging, setErrorMessage } = this.props;

    /*check for changes in query or page in local state.
     * If was new search or clicked on LoadMore btn - then makes fetch
     */
    const isQueryChanged = prevProps.query !== query;
    const isPageIncreased = prevState.page < page;

    if (isQueryChanged || isPageIncreased) {
      statusChanging('pending');

      if (isQueryChanged) {
        this.setState({ searchResult: [] });
      }

      pixabayApi
        .fetchImages(query, isQueryChanged ? 1 : page)
        .then(({ hits, totalHits }) =>
          this.setState(prevState => {
            const updatedPage = isQueryChanged ? 1 : prevState.page;
            const updatedSearchResult = isQueryChanged
              ? hits
              : [...prevState.searchResult, ...hits];
            const updatedIsLastPage = isQueryChanged
              ? hits.length >= totalHits
              : [...prevState.searchResult, ...hits].length >= totalHits;

            return {
              ...prevState,
              page: updatedPage,
              searchResult: updatedSearchResult,
              isLastPage: updatedIsLastPage,
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
    const { searchResult, isLastPage, selectedItem } = this.state;
    const isShowLoader = this.props.currentStatus === 'pending' ? true : false;
    const isShowLoadButton = !isLastPage && !isShowLoader ? true : false;
    const isModalShow = selectedItem !== null;

    return (
      <>
        <List className="ImageGallery">
          {searchResult.map(({ webformatURL, tags }, idx) => (
            <ImageGalleryItem
              key={idx}
              src={webformatURL}
              alt={tags}
              onClick={() => this.setState({ selectedItem: idx })}
            />
          ))}
        </List>
        {isShowLoadButton && (
          <Button
            handleIncrementPage={() =>
              this.setState(prevState => ({ page: prevState.page + 1 }))
            }
          />
        )}
        {isShowLoader && <LoaderSpinner />}
        {isModalShow && (
          <Modal
            src={searchResult[selectedItem].largeImageURL}
            alt={searchResult[selectedItem].tags}
            closeModal={() => this.setState({ selectedItem: null })}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  statusChanging: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  currentStatus: PropTypes.string.isRequired,
};
