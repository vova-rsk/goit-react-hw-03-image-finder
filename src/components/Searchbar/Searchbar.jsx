import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  /*method for submiting form*/
  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { query } = this.state;

    if (query) onSubmit(query);
  };

  render() {
    const { query } = this.state;
    return (
      <Header className="Searchbar">
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
            onChange={e =>
              this.setState({ query: e.currentTarget.value.trim() })
            }
            value={query}
          />
        </form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
