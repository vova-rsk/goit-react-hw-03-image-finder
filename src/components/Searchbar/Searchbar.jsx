import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { fetchQueryUpdate } = this.props;
    const { query } = this.state;

    if (query) fetchQueryUpdate(query);
  };

  handleInputChange = e => {
    this.setState({ query: e.currentTarget.value.trim() });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  fetchQueryUpdate: PropTypes.func.isRequired,
};
