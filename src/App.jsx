import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoaderSpinner from './components/Loader';

// const STATUS = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   ERROR:'error'
// };

class App extends Component {
  state = {
    query: '',
    status: 'idle',
    error: '',
  };

  /*method for getting query-data from components*/
  fetchQueryUpdate = query => {
    this.setState({ query });
  };

  /*method for setting status in local state*/
  statusChanging = statusName => {
    this.setState({ status: statusName });
  };

  /*method for setting error-message in local state*/
  setErrorMessage = message => {
    this.setState({ error: message });
  };

  render() {
    const { query, status, error } = this.state;
    return (
      <>
        <Searchbar fetchQueryUpdate={this.fetchQueryUpdate} />
        {status === 'pending' && <LoaderSpinner />}
        {status !== 'error' && (
          <ImageGallery
            query={query}
            statusChanging={this.statusChanging}
            setErrorMessage={this.setErrorMessage}
          />
        )}
        {status === 'error' && <div>{error}</div>}
      </>
    );
  }
}

export default App;
