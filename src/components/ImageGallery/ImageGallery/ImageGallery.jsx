import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../../Button';
import fetchImages from '../../../services/pixabay-api';
import scrollTo from '../../../utils';
import Modal from '../../Modal';

export default class ImageGallery extends Component {
  state = {
    isLastPage: true,
    page: 1,
    searchResult: [],
    modal: false,
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

  /*method for showing the modal*/
  showModal = e => {
    const index = Number(e.currentTarget.dataset.index);
    const { searchResult } = this.state;
    const currentItem = searchResult.find((item, idx) => idx === index);
    this.setState({ modal: currentItem });
  };

  /*method for closing the modal*/
  closeModal = () => {
    this.setState({ modal: false });
  };

  /*method for incrementing the page number by 1*/
  handleIncrementPage = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  render() {
    const { searchResult, isLastPage, modal } = this.state;

    return (
      <>
        <ul className="ImageGallery">
          {searchResult.map(
            ({ id, webformatURL, largeImageURL, tags }, idx) => (
              <ImageGalleryItem
                // key={id}
                key={idx}
                src={webformatURL}
                index={idx}
                dataSrc={largeImageURL}
                alt={tags}
                onClick={this.showModal}
              />
            ),
          )}
        </ul>
        {!isLastPage && (
          <Button handleIncrementPage={this.handleIncrementPage} />
        )}
        {modal && (
          <Modal
            src={modal.largeImageURL}
            alt={modal.tags}
            closeModal={this.closeModal}
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
};
