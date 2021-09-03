import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button';
import LoaderSpinner from './components/Loader';
import fetchImages from './services/pixabay-api';
import scrollTo from './utils';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};

class App extends Component {
  state = {
    isLastPage: true,
    page: 1,
    query: '',
    searchResult: [],
    status: STATUS.IDLE,
  };

  fetchQueryUpdate = query => {
    this.setState({ query });
    this.resetPage();
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  handleIncrementPage = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const isQueryChanged = prevState.query !== query;
    const isPageIncreased = prevState.page < page;

    if (isQueryChanged || isPageIncreased) {
      this.setState({ status: STATUS.PENDING });

      fetchImages(query, page)
        .then(({ hits, totalHits }) =>
          this.setState(prevState => {
            return {
              ...prevState,
              searchResult: isQueryChanged
                ? hits
                : [...prevState.searchResult, ...hits],
              isLastPage: isQueryChanged
                ? hits.length >= totalHits
                : [...prevState.searchResult, ...hits].length >= totalHits,
            };
          }),
        )
        .catch(error => console.error(error.message))
        .finally(() => {
          this.setState({ status: STATUS.RESOLVED });
          scrollTo();
        });
    }
  }

  render() {
    const { searchResult, isLastPage, status } = this.state;
    return (
      <>
        <Searchbar fetchQueryUpdate={this.fetchQueryUpdate} />
        {status === STATUS.PENDING && <LoaderSpinner />}
        {searchResult && <ImageGallery galleryItems={searchResult} />}
        {!isLastPage && (
          <Button handleIncrementPage={this.handleIncrementPage} />
        )}
      </>
    );
  }
}

export default App;
