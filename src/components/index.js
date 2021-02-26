import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactFigure from '@jswork/react-figure';

const CLASS_NAME = 'react-image';

export default class ReactImage extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * How an <img> or <video> should be resized to fit its container
     */
    objectFit: PropTypes.oneOf([
      'cover',
      'contain',
      'fill',
      'inherit',
      'none'
    ])
  };

  static defaultProps = {
    objectFit: 'cover'
  };

  render() {
    const { className, objectFit, ...props } = this.props;
    return (
      <ReactFigure
        data-component={CLASS_NAME}
        data-object-fit={objectFit}
        className={classNames(CLASS_NAME, className)}>
        <img alt="" {...props} />
      </ReactFigure>
    );
  }
}

