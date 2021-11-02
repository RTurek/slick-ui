import React from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { COLORS } from '@styles/colors';

class ThemeWrapper extends React.Component {
  constructor(props) {
    super(props);

    const primaryThemeColor = COLORS.primary
    const secondaryThemeColor = COLORS.secondary
    const textPrimaryThemeColor = COLORS.textPrimary;
    const textSecondaryThemeColor = COLORS.textSecondary;
    const backgroundThemeColor = COLORS.background;
    const alertThemeColor = COLORS.alert;
    const urgentThemeColor = COLORS.urgent;
    const successThemeColor = COLORS.success;
    const warningThemeColor = COLORS.warning;
    const crGreenThemeColor = COLORS.crGreen;
    const rpOrangeThemeColor = COLORS.rpOrange;
    const darkGreyThemeColor = COLORS.darkGrey;
    const mediumGreyThemeColor = COLORS.mediumGrey;
    const lightGreyThemeColor = COLORS.lightGrey;
    const modernBlackThemeColor = COLORS.modernBlack;

    this.muiTheme = createTheme({
      typography: {
        // fontFamily: primaryFontFamily,
        useNextVariants: true,
        h1: {
          letterSpacing: '-1.5px'
        },
        h2: {
          letterSpacing: '-0.5px'
        },
        h3: {
          lineHeight: 1,
          letterSpacing: '0px',
          fontWeight: '300'
        },
        h4: {
          fontSize: '1.875rem',
          letterSpacing: '0.25px',
          lineHeight: 1.0667
        },
        h5: {
          letterSpacing: '0px',
          lineHeight: 1.0833
        },
        h6: {
          letterSpacing: '0.15px',
          lineHeight: 1.1
        },
        subtitle1: {
          letterSpacing: '0.15px',
          lineHeight: 1.125
        },
        subtitle2: {
          letterSpacing: '0.1px',
          lineHeight: 1.1428
        },
        body1: {
          letterSpacing: '0.25px',
          lineHeight: 1.25
        },
        body2: {
          letterSpacing: '0.15px',
          lineHeight: 1.28571
        },
        body1Next: {
          letterSpacing: '0.25px',
          lineHeight: 1.25
        },
        body2Next: {
          letterSpacing: '0.15px',
          lineHeight: 1.28571
        },
        button: {
          fontWeight: 700,
          letterSpacing: '1.25px'
        },
        buttonNext: {
          fontWeight: 700,
          letterSpacing: '1.25px'
        },
        caption: {
          letterSpacing: '0.2px',
          lineHeight: 1.33333
        },
        overline: {
          fontWeight: 600,
          fontSize: '0.625rem',
          letterSpacing: '1.5px',
          lineHeight: 1.4
        },
        fontWeightLight: 300,
        fontWeightMedium: 600,
        fontWeightRegular: 400
      },
      palette: {
        primary: {
          main: primaryThemeColor
        },
        secondary: {
          main: secondaryThemeColor,
          contrastText: '#FFF'
        },
        error: {
          main: alertThemeColor
        },
        text: {
          primary: textPrimaryThemeColor,
          secondary: textSecondaryThemeColor
        },
        alert: {
          main: alertThemeColor
        },
        urgent: {
          main: urgentThemeColor
        },
        success: {
          main: successThemeColor
        },
        warning: {
          main: warningThemeColor
        },
        backgroundColor: {
          main: backgroundThemeColor
        },
        mediumGrey: {
          main: mediumGreyThemeColor
        },
        lightGrey: {
          main: lightGreyThemeColor
        },
        crGreen: {
          main: crGreenThemeColor
        },
        darkGrey: {
          main: darkGreyThemeColor
        },
        rpOrange: {
          main: rpOrangeThemeColor
        },
        modernBlack: {
          main: modernBlackThemeColor
        }
      },
      overrides: {
        MuiTypography: {
          root: {
            display: 'block'
          }
        }
      },
      props: {
        MuiButtonBase: {
          TouchRippleProps: {
            style: {
              color: lightGreyThemeColor
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.muiTheme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.node
};

ThemeWrapper.defaultProps = {
  children: null
};

export default ThemeWrapper;
