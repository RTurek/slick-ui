import { create } from '@storybook/theming';
import { COLORS } from '@styles/colors';

// Source: https://storybook.js.org/docs/configurations/theming/

export default create({
  base: 'light',

  colorPrimary: COLORS.primary,
  colorSecondary: COLORS.secondary,

  // UI
  appBg: COLORS.binary,
  appContentBg: COLORS.background,
  appBorderColor: COLORS.mediumGrey,
  appBorderRadius: 4,

  // Typography
  // fontBase: '',
  fontCode: 'monospace',

  // Text colors
  textColor: COLORS.textPrimary,
  textInverseColor: COLORS.binary,

  // Toolbar default and active colors
  barTextColor: COLORS.binary,
  barSelectedColor: COLORS.secondary,
  barBg: COLORS.primary,

  // Form colors
  inputBg: COLORS.binary,
  inputBorder: '#bebebe',
  inputTextColor: '#000000',
  inputBorderRadius: 4,

  brandTitle: 'slick-ui',
  brandUrl: 'https://turek.works',
  // brandImage: 'tbd',
});

// Global style for components only
export const globalStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto'
};

export const storybookStyles = {
  info: {
    // Placeholder
  },
  children: {
    // Placeholder
  },
  infoBody: {
    marginBottom: '16px'
  },
  infoContent: {
    // Placeholder
  },
  jsxInfoContent: {
    // Placeholder
  },
  header: {
    // Placeholder
  },
  infoStory: {
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '16px'
  }
}
