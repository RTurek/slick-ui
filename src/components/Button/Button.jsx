import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { rgba } from 'polished';
import MaterialButton from '@material-ui/core/Button';
import getColorFromTheme from '../../styles/getColorFromTheme';
import { BUTTON_SIZES } from '../../styles/sizes';

/*
TODO: Refactor color choices for button to be an array of const values...
TODO: ...that can be exported to other files for use in PropTypes, Storybook, and tests
*/

/** checks to see if the color is default of inherit - set it to */
function defaultColors(color) {
  return ['default', 'inherit'].includes(color) ? 'secondary' : color;
}

function validVariant(variant) {
  if (variant === 'light') {
    return 'outlined';
  }
  return variant;
}

function sizeAndFontCss(size, iconPadding) {
  switch (size) {
    case BUTTON_SIZES.small:
      return `
        font-size: .875rem;
        padding: ${iconPadding ? '4px' : '7px 13px'};
        min-width: ${iconPadding ? '10px' : '120px'};
      `;
    case BUTTON_SIZES.large:
      return `
        font-size: 1.125rem;
        padding: ${iconPadding ? '12px' : '13px 18px'};
        min-width: ${iconPadding ? '10px' : '120px'};
      `;
    default: // Medium
      return `
        font-size: 1rem;
        padding: ${iconPadding ? '8px' : '10px 16px'};
        min-width: ${iconPadding ? '10px' : '120px'};
      `;
  }
}

function basicCss(color, size, iconPadding) {
  return `
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    color: ${color};
    font-family: Lato;
    text-transform: capitalize;
    font-style: normal;
    font-weight: 800;
    line-height: 18px;
    letter-spacing: 0.02em;
    ${sizeAndFontCss(size, iconPadding)}
  `;
}

function focusCss(square, colorVariant) {
  return `
    &:focus {
      border-radius: ${square ? 8 : 999}px;
      box-shadow: 0 0 0 4px ${rgba(colorVariant, 0.2)};
    }
  `;
}

function hoverAndPopCss(square, colorVariant, makeItPop) {
  return `
    &:hover {
      transform: ${makeItPop ? 'scale(1.1)' : 'scale(1)'};
      border-radius: ${square ? 8 : 999}px;
      box-shadow: 0 0 0 4px ${rgba(colorVariant, 0.2)};
    }
  `;
}

const StyledButton = styled(({
  square, variant, color, textColor, iconPadding, makeItPop, ...rest
}) =>
  <MaterialButton variant={validVariant(variant)} {...rest}/>)`
&&& {
  .MuiButton-startIcon {
    margin-left: 0px;
  }
  .MuiButton-endIcon {
    margin-right: 0px;
  }
  border-radius: ${({ square }) => (square ? 8 : 999)}px;
  min-width: 120px;
  max-width: 288px;
  color: #FFFFFF;
  ${({ variant, color, makeItPop, disabled, textColor, square, size, iconPadding }) => {
    const theme = useTheme();
    const colorVariant = getColorFromTheme(theme, defaultColors(color)) || 'white';
    const textColorVariant = getColorFromTheme(theme, defaultColors(textColor)) || 'white';
    switch (variant) {
      case 'contained':
        return css`
          background-color: ${colorVariant};
          box-shadow: unset;
          ${basicCss(textColorVariant, size, iconPadding)}
          ${focusCss(square, colorVariant)}
          ${hoverAndPopCss(square, colorVariant, makeItPop)}
          ${disabled && `
            background-color: ${theme.palette.backgroundColor.main} !important;
            color: ${theme.palette.lightGrey.main} !important;
          `}
        `;
      case 'outlined':
        return css`
          background-color: inherit;
          border: 2px solid ${rgba(colorVariant, 0.4)};
          ${basicCss(colorVariant, size, iconPadding)}
          ${focusCss(square, colorVariant)}
          ${hoverAndPopCss(square, colorVariant, makeItPop)}
          ${disabled && `
            border: 2px solid ${rgba(theme.palette.backgroundColor.main, 0.7)};
            color: ${theme.palette.lightGrey.main} !important;
            box-shadow: unset;
          `}
        `;
      case 'light':
        return css`
          border: none;
          background-color: ${rgba(colorVariant, 0.1)};
          ${basicCss(colorVariant, size, iconPadding)}
          ${focusCss(square, colorVariant)}
          ${hoverAndPopCss(square, colorVariant, makeItPop)}
          ${disabled && `
            background-color: ${rgba(theme.palette.backgroundColor.main, 0.4)};
            color: ${theme.palette.lightGrey.main} !important;
            box-shadow: unset;
          `}
        `;
      case 'text':
        return css`
          background-color: inherit;
          ${basicCss(colorVariant, size, iconPadding)}
          ${focusCss(square, colorVariant)}
          ${hoverAndPopCss(square, colorVariant, makeItPop)}
          ${disabled && `
            color: ${theme.palette.lightGrey.main} !important;
            box-shadow: unset;
          `}
        `;
      default:
        return '';
    }
  }}
}
`;

function Button(props) {
  const {
    className, inputProps, ...otherProps
  } = props;
  let spreadIP;
  if (inputProps || otherProps['data-testid']) {
    spreadIP = {
      ...otherProps['data-testid'] && { 'data-testid': otherProps['data-testid'] },
      ...inputProps
    };
  }
  return (
    <StyledButton
      className={classNames(
        'react-css',
        className
      )}
      {...spreadIP}
      {...otherProps}
    />
  );
}

Button.propTypes = {
  /** variant */
  variant: PropTypes.oneOf(['contained', 'outlined', 'light', 'text']),
  /** color */
  color: PropTypes.string,
  /** size, one of three options */
  size: PropTypes.oneOf([BUTTON_SIZES.small, BUTTON_SIZES.medium, BUTTON_SIZES.large]),
  /** textColor */
  textColor: PropTypes.string,
  /** disabled */
  disabled: PropTypes.bool,
  /** add class */
  className: PropTypes.string,
  /** inputProps */
  inputProps: PropTypes.shape({
  }),
  /** sets border radius to 8px */
  square: PropTypes.bool,
  /** adds hover elevation to contained variant */
  makeItPop: PropTypes.bool,
  /** sets padding to 6px so icon-only buttons look better */
  iconPadding: PropTypes.bool
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: BUTTON_SIZES.medium,
  className: '',
  disabled: false,
  textColor: undefined,
  inputProps: undefined,
  square: false,
  makeItPop: false,
  iconPadding: false
};

export default Button;
