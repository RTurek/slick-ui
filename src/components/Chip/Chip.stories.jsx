import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { text, select, boolean } from '@storybook/addon-knobs';
import Chip from './Chip';

const colorOptions = {
  primary: 'primary',
  secondary: 'secondary'
};

export default {
  title: '1 ~ Slick / Uncategorized / Chip',

  decorators: [
    withInfo({
      text: '',
      header: true,
      inline: true,
      source: false,
      propTables: [Chip],
      excludedPropTypes: ['theme']
    })
  ]
};

export const containedDefault = () => (
  <Chip
    color={select('Color', colorOptions, 'primary')}
    label={text('Label', 'test@turekworks.com')}
    onDelete={boolean('Has Delete', true)}
    clickable={boolean('Clickable', true)}
  />
);

containedDefault.story = {
  name: 'Contained/Default'
};

export const outlined = () => (
  <Chip
    variant="outlined"
    color={select('Color', colorOptions, 'primary')}
    label={text('Label', 'test@turekworks.com')}
    onDelete={boolean('Has Delete', true)}
    clickable={boolean('Clickable', true)}
  />
);

outlined.story = {
  name: 'Outlined'
};
