import React from 'react';
import PropTypes from 'prop-types';
import MaterialBadge from '@material-ui/core/Badge';
import { useTheme, withStyles } from '@material-ui/core/styles';
import { COLORS } from '../../styles/colors';
import hexToRgba from '../../utils/hexToRgba';
import { decagramWithBorderEncoded, santaHatEncoded } from '../../assets/encodedSVGs';

function buildStyle(props) {
  const style = {
    lineHeight: 1,
    boxShadow: `0 2px 4px 0 ${hexToRgba(props.theme.palette.alert.main, 0.4)}`,
    color: props.theme.palette.common.white
  };

  if (props.customBadgeVariant === 'dot') {
    style.top = '0.2rem';
    style.right = '0.2rem';
    style.backgroundColor = props.theme.palette.alert.main;
  } else if (props.customBadgeVariant === 'menu-dot') {
    style.top = '0.7rem';
    style.right = '0.7rem';
    style.backgroundColor = props.theme.palette.alert.main;
  } else if (props.customBadgeVariant === 'mobile-dot') {
    style.top = '0.9rem';
    style.right = '35%';
    style.backgroundColor = props.theme.palette.alert.main;
  } else if (props.customBadgeVariant === 'alert-right') {
    style.top = '0.3rem';
    style.right = '0';
    style.backgroundColor = props.theme.palette.alert.main;
  } else if (props.customBadgeVariant === 'alert-top-right') {
    style.top = '-10px';
    style.right = '0.8rem';
    style.fontSize = '0.7rem';
    style.backgroundColor = props.theme.palette.alert.main;
  } else if (props.customBadgeVariant === 'point-progress') {
    style.top = '-5px';
    style.right = '50px';
    style.backgroundColor = props.theme.palette.secondary.main;
    style.boxShadow = `0 2px 4px 0 ${hexToRgba(props.theme.palette.secondary.main, 0.4)}`;
  } else if (props.customBadgeVariant === 'grey-left') {
    style.top = '0rem';
    style.right = '2rem';
    style.height = '22px';
    style.width = '22px';
    style.boxShadow = 'none';
    style.borderRadius = '50%';
    style.fontSize = '0.8rem';
    style.backgroundColor = props.theme.palette.mediumGrey.main;
  } else if (props.customBadgeVariant === 'decagram-left') {
    style.top = '0.20rem';
    style.right = '1.80rem';
    style.height = '26px';
    style.width = '27px';
    style.boxShadow = 'none';
    style.borderRadius = '50%';
    style.fontSize = '0.8rem';
    style.backgroundImage = `url("data:image/svg+xml;base64,${decagramWithBorderEncoded}")`;
  } else if (props.customBadgeVariant === 'seasonal-badge-left') {
    style.left = '-1.8rem';
    style.top = '0rem';
    style.width = '32px';
    style.height = '28px';
    style.borderRadius = '0px';
    style.padding = '0px';
    style.margin = '0px';
    style.boxShadow = 'none';
    style.color = props.theme.palette.common.black;
    style.backgroundImage = `url("data:image/svg+xml;base64,${santaHatEncoded}")`;
  } else if (props.customBadgeVariant === 'bottom-right') {
    style.right = '0';
    style.bottom = '0';
    style.top = 'unset !important';
    style.backgroundColor = props.theme.palette.warning.main;
    style.transform = 'scale(1) translateX(50%)';
  }

  return {
    ...style,
    ...props.style
  };
}

function Badge(props) {
  const styles = {
    badge: buildStyle({
      ...props,
      theme: useTheme()
    })
  };

  const VariantBadge = withStyles(styles)((variantProps) => {
    const {
      classes,
      children,
      style,
      customBadgeVariant,
      ...otherProps
    } = variantProps;

    return (
      <MaterialBadge
        variant={customBadgeVariant.includes('dot') ? 'dot' : 'standard'}
        classes={{
          badge: classes.badge
        }}
        {...otherProps}
      >
        {children}
      </MaterialBadge>
    );
  });

  return (
    <VariantBadge {...props} />
  );
}

Badge.propTypes = {
  /** customBadgeVariant of various types */
  customBadgeVariant: PropTypes.oneOf(['alert-right', 'grey-left', 'decagram-left', 'menu-dot', 'dot', 'point-progress', 'bottom-right', 'alert-top-right', 'seasonal-badge-left']),
  /** invisible true/false */
  invisible: PropTypes.bool,
  /** badgeContent typically a numerical value representing # of notifications, etc. */
  badgeContent: PropTypes.node,
  /** max number to show in badge */
  max: PropTypes.number,
  /** theming object */
  theme: PropTypes.shape({
    palette: PropTypes.shape({
      mediumGrey: PropTypes.shape({
        main: PropTypes.string
      }),
      alert: PropTypes.shape({
        main: PropTypes.string
      }),
      warning: PropTypes.shape({
        main: PropTypes.string
      }),
      secondary: PropTypes.shape({
        main: PropTypes.string
      }),
      text: PropTypes.shape({
        secondary: PropTypes.string
      }),
      common: PropTypes.shape({
        white: PropTypes.string
      })
    })
  })
};

Badge.defaultProps = {
  invisible: undefined,
  badgeContent: null,
  customBadgeVariant: 'alert-right',
  max: 9,
  theme: {
    palette: {
      mediumGrey: {
        main: COLORS.mediumGrey
      },
      alert: {
        main: COLORS.alert
      },
      warning: {
        main: COLORS.warning
      },
      secondary: {
        main: COLORS.secondary
      },
      text: {
        secondary: COLORS.gray
      },
      common: {
        white: COLORS.binary,
        black: COLORS.black
      }
    }
  }
};

export default Badge;
/* For Storybook Use Only */
export const BadgeForStorybook = Badge;
