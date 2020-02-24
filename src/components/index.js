import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import ReactFigure from '@feizheng/react-figure';
import objectAssign from 'object-assign';

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
     * Default value.
     */
    objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'inherit', 'none'])
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
        <img {...props} />
      </ReactFigure>
    );
  }
}
