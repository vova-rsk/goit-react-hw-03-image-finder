import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button';
import fetchImages from './services/pixabay-api';
import scrollTo from './utils';

class App extends Component {
  state = {
    isLastPage: false,
    page: 1,
    query: '',
    searchResult: [],
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
          scrollTo();
        });
    }
  }

  render() {
    const { searchResult, isLastPage } = this.state;
    return (
      <>
        <Searchbar fetchQueryUpdate={this.fetchQueryUpdate} />
        {searchResult && <ImageGallery galleryItems={searchResult} />}
        {!isLastPage && (
          <Button handleIncrementPage={this.handleIncrementPage} />
        )}
      </>
    );
  }
}

export default App;
