import React from 'react';
import PropTypes from 'prop-types';

const Anonymous = ({
  style,
  fill,
  width,
  height,
  className,
  viewBox,
  onClick
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    onClick={onClick}
  >
    <path
      fill={fill}
      d="M0 32C0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32zm9.35 16.24C14.407 55.285 22.666 59.872 32 59.872c9.333 0 17.592-4.587 22.65-11.63a8.516 8.516 0 0 0-6.391-7.273l-4.178-1.044A18.441 18.441 0 0 1 32 44.387c-4.48 0-8.719-1.575-12.081-4.463l-4.178 1.044a8.516 8.516 0 0 0-6.392 7.273v-.001zm8.2-22.433c0 7.981 6.469 14.452 14.45 14.452 7.981 0 14.452-6.471 14.452-14.454 0-7.98-6.47-14.45-14.452-14.45-7.981 0-14.452 6.47-14.452 14.452h.001z"
    />
  </svg>
);

Anonymous.propTypes = {
  style: PropTypes.shape({}),
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  viewBox: PropTypes.string,
  onClick: PropTypes.func
};

Anonymous.defaultProps = {
  style: {},
  fill: '#7E8E9F',
  width: '100%',
  height: '100%',
  className: '',
  viewBox: '0 0 11 18',
  onClick: () => {}
};

export default Anonymous;
