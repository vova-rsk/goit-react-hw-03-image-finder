import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import AppContainer from './App.styled';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  ERROR: 'error',
};

export default class App extends Component {
  state = {
    query: '',
    status: STATUS.IDLE,
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
      <AppContainer>
        <Searchbar onSubmit={this.fetchQueryUpdate} />
        {status !== STATUS.ERROR && (
          <ImageGallery
            query={query}
            statusChanging={this.statusChanging}
            setErrorMessage={this.setErrorMessage}
            currentStatus={status}
          />
        )}
        {status === STATUS.ERROR && <div>{error}</div>}
      </AppContainer>
    );
  }
}
