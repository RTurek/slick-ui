import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, object, text } from '@storybook/addon-knobs';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import StoryWrapper from '../utilities/StoryWrapper';
import Typography from './Typography';
import typographyNotes from './typographyNotes.md';

const VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'srOnly',
  'inherit'
];

export default {
  title: 'Core / Typography',

  decorators: [
    withInfo({
      text: typographyNotes,
      header: true,
      inline: true,
      source: false,
      styles: storybookStyles,
      propTables: [Typography],
      propTablesExclude: [],
      excludedPropTypes: ['theme']
    })
  ]
};

export const typographyList = () => (
  <StoryWrapper>
    <div style={{ backgroundColor: '#fff' }}>
      {VARIANTS.map(variant => (
        <div style={{ margin: '10px' }} key={variant}>
          <Typography
            variant={variant}
            {...{
              align: select('align', [
                'initial',
                'inherit',
                'left',
                'center',
                'right',
                'justify'
              ], 'left'),
              color: select('color', [
                'inherit',
                'primary',
                'secondary',
                'textPrimary',
                'textSecondary',
                'error',
                'warning',
                'success'
              ]),
              display: select('display', ['initial', 'block', 'inline']),
              gutterBottom: boolean('gutterBottom', false),
              noWrap: boolean('noWrap', false),
              paragraph: boolean('paragraph', false),
              style: object('style', { display: 'inherit' })
            }}
          >
            {variant} {text('text', 'Slick-UI')}
          </Typography>
        </div>
      ))}
    </div>
  </StoryWrapper>
);

typographyList.story = {
  name: 'Typography List'
};
