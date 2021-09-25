import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiSwitch from '@material-ui/core/Switch';

// https://material-ui.com/components/switches

function Switch(props) {
  const { onChange, checked, disabled, ...otherProps } = props;

  const theme = useTheme();

  const useStyles = makeStyles({
    switchBase: {
      '&$checked': {
        color: theme?.palette?.success?.main
      },
      '&$checked + $track': {
        backgroundColor: theme?.palette?.success?.main
      }
    },
    checked: {},
    track: {}
  });

  const classes = useStyles(props);

  return (
    <Fragment>
      {!disabled &&
        <MuiSwitch
          {...otherProps}
          classes={classes}
          onChange={onChange}
          checked={checked}
        />
      }
      {disabled &&
        <MuiSwitch
          {...otherProps}
          classes={classes}
          checked={checked}
          disabled
        />
      }
    </Fragment>
  );
}

Switch.propTypes = {
  classes: PropTypes.shape({}),
  /** On Change Event handler (typically makes an API call and changes the checked value) */
  onChange: PropTypes.func.isRequired,
  /** Checked sets switch to true or false / left or right */
  checked: PropTypes.bool.isRequired,
  /** Renders a disabled switch element */
  disabled: PropTypes.bool
};

Switch.defaultProps = {
  classes: {},
  disabled: false
};

export default Switch;
