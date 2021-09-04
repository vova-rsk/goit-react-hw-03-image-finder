import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closingByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closingByEsc);
  }

  /*method for closing modal by pressing Esc*/
  closingByEsc = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  /*method for closing modal by clicking on overlay*/
  closingByClick = e => {
    if (e.currentTarget === e.target) this.props.closeModal();
  };

  render() {
    const { src, alt } = this.props;

    return (
      <div className="Overlay" onClick={this.closingByClick}>
        <div className="Modal">
          <img src={src} alt={alt} width="800" height="600" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
