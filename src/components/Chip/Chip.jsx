import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import MuiChip from '@material-ui/core/Chip';

// https://mui.com/components/chips/

function Chip(props) {
  const { color, ...passedProps } = props;
  const theme = useTheme();
  const style = {
    ...props.style
  };
  const defaultVariants = ['primary', 'secondary'];
  if (!defaultVariants.includes(color)) {
    style.backgroundColor = theme.palette[props.color].main;
    return <MuiChip {...passedProps} style={style} />;
  }
  return <MuiChip {...passedProps} style={style} color={color} />;
}

Chip.propTypes = {
  /** Avatar Element */
  avatar: PropTypes.node,
  /** Class overrides */
  classes: PropTypes.shape({}),
  /** Appears to be interactive on Click */
  clickable: PropTypes.bool,
  /** Color, primary or secondary */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'lightGrey',
    'mediumGrey',
    'alert',
    'success'
  ]),
  /** String or Node to be rendered inside component */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Function to fire when delete is clicked */
  onDelete: PropTypes.func,
  /** Varaint, default or outlined */
  variant: PropTypes.oneOf(['default', 'outlined']),
  /** optional override for style */
  style: PropTypes.shape({})
};

Chip.defaultProps = {
  avatar: null,
  classes: {},
  clickable: true,
  color: 'primary',
  onDelete: undefined,
  variant: 'default',
  style: undefined
};

export default Chip;
