import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import StarIcon from '@material-ui/icons/Star';
import { BUTTON_SIZES } from '../../styles/sizes';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import Button from './Button';
import StoryWrapper from '../../styles/StoryWrapper';
import buttonNotes from './buttonNotes.md';

const colorOptions = {
  inherit: 'inherit',
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  alert: 'alert',
  success: 'success',
  warning: 'warning',
  backgroundColor: 'backgroundColor',
  mediumGrey: 'mediumGrey',
  lightGrey: 'lightGrey'
};

const textColor = {
  inherit: 'inherit',
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  alert: 'alert',
  success: 'success',
  warning: 'warning',
  backgroundColor: 'backgroundColor',
  mediumGrey: 'mediumGrey',
  lightGrey: 'lightGrey',
  contrastPrimary: 'contrastPrimary',
  contrastSecondary: 'contrastSecondary',
  white: 'white',
  black: 'black'
};

export default {
  title: 'Core / Button',

  decorators: [
    withInfo({
      text: buttonNotes,
      header: true,
      inline: true,
      source: false,
      styles: storybookStyles,
      propTables: [Button],
      propTablesExclude: [Button],
      excludedPropTypes: ['theme']
    }),
    withActions('mouseover', 'click')
  ]
};

export const button = () => (
  <StoryWrapper>
    <div style={{ backgroundColor: 'white', padding: '50px', display: 'grid', gridTemplateRows: '1fr', gridRowGap: '20px', justifyItems: 'center' }}>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="contained"
        startIcon={boolean('startIcon', true) ? <StarIcon /> : null}
        endIcon={boolean('endIcon', false) ? <StarIcon /> : null}
      >
        Contained
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="outlined"
        startIcon={boolean('startIcon', true) ? <StarIcon /> : null}
        endIcon={boolean('endIcon', false) ? <StarIcon /> : null}
      >
        Outlined
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="light"
        startIcon={boolean('startIcon', true) ? <StarIcon /> : null}
        endIcon={boolean('endIcon', false) ? <StarIcon /> : null}
      >
        Light
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="text"
        startIcon={boolean('startIcon', true) ? <StarIcon /> : null}
        endIcon={boolean('endIcon', false) ? <StarIcon /> : null}
      >
        Text
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="contained"
        iconPadding
      >
        <StarIcon />
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="outlined"
        iconPadding
      >
        <StarIcon />
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="light"
        iconPadding
      >
        <StarIcon />
      </Button>
      <Button
        color={select('Color', colorOptions, 'primary')}
        textColor={select('text Color', textColor, 'white')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('fullWidth', true)}
        square={boolean('square', true)}
        makeItPop={boolean('makeItPop', true)}
        size={select('size', BUTTON_SIZES, 'medium')}
        variant="text"
        iconPadding
      >
        <StarIcon />
      </Button>
    </div>
  </StoryWrapper>
);

button.story = {
  name: 'Button'
};
