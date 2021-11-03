import React from 'react';
import MaterialTypography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const Typography = (props) => {
  const theme = useTheme();
  const style = {
    ...props.style
  };
  switch (props.color) {
    case 'success':
    case 'alert':
    case 'urgent':
    case 'warning':
    case 'lightGrey':
    case 'mediumGrey':
    case 'modernBlack': {
      const { color, ...otherProps } = props;
      style.color = theme.palette[color].main;
      return <MaterialTypography {...otherProps} style={style} />;
    }
    case 'contrastPrimary': {
      const { color, ...otherProps } = props;
      style.color = theme.palette.primary.contrastText;
      return <MaterialTypography {...otherProps} style={style} />;
    }
    case 'contrastSecondary': {
      const { color, ...otherProps } = props;
      style.color = theme.palette.secondary.contrastText;
      return <MaterialTypography {...otherProps} style={style} />;
    }
    default:
  }
  return <MaterialTypography {...props} />;
};

Typography.propTypes = {
  color: PropTypes.string,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        contrastText: PropTypes.string
      }),
      secondary: PropTypes.shape({
        contrastText: PropTypes.string
      })
    })
  })
};

Typography.defaultProps = {
  color: 'textPrimary',
  style: undefined,
  theme: {
    palette: {
      primary: {
        contrastText: 'white'
      },
      secondary: {
        contrastText: 'white'
      }
    }
  }
};

export default Typography;
