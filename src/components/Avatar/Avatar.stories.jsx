import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { select, text } from '@storybook/addon-knobs';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from './Avatar';
import StoryWrapper from '../../styles/StoryWrapper';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import avatarNotes from './avatarNotes.md';

const defaultSize = 'small';

const sizeOptions = {
  xxsmall: 'xxsmall',
  xsmall: 'xsmall',
  small: 'small',
  medium: 'medium',
  large: 'large'
};

export default {
  title: 'Core / Avatar',

  decorators: [
    withInfo({
      text: avatarNotes,
      header: true,
      inline: true,
      styles: storybookStyles,
      source: false,
      propTables: [Avatar],
      propTablesExclude: [Avatar, AccountCircle],
      excludedPropTypes: ['theme']
    })
  ]
};

export const sandbox = () => (
  <StoryWrapper>
    <Avatar
      firstName={text('First Name', 'Sandbox')}
      lastName={text('Last Name', 'User')}
      imageUrl={text('Avatar Source URL', 'http://placekitten.com/g/60/60')}
      size={select('Size', sizeOptions, defaultSize)}
    />
  </StoryWrapper>
);

sandbox.story = {
  name: 'Sandbox',
  parameters: { avatarNotes }
};

export const withImage = () => (
  <StoryWrapper>
    <Avatar
      firstName="Erwin"
      lastName="Schrödinger"
      imageUrl="http://placekitten.com/60/60"
      size={select('Size', sizeOptions, defaultSize)}
    />
  </StoryWrapper>
);

withImage.story = {
  name: 'With Image',
  parameters: { avatarNotes }
};

export const withInitials = () => (
  <StoryWrapper>
    <Avatar
      firstName="Erwin"
      lastName="Schrödinger"
      size={select('Size', sizeOptions, defaultSize)}
    />
  </StoryWrapper>
);

withInitials.story = {
  name: 'With Initials',
  parameters: { avatarNotes }
};

// export const withSeasonalBadge = () => (
//   <StoryWrapper>
//     <Badge invisible={false} customBadgeVariant="seasonal-badge-left">
//       <Avatar
//         firstName={text('First Name', 'Santa')}
//         lastName={text('Last Name', 'Claus')}
//         imageUrl={text('Avatar Source URL', 'https://media.bizj.us/view/img/1586581/bloombergphotowillferrellelf*1200xx1388-777-0-354.jpg')}
//         size={select('Size', sizeOptions, 'xxsmall')}
//       />
//     </Badge>
//   </StoryWrapper>
// );

// withSeasonalBadge.story = {
//   name: 'With Seasonal Badge',
//   parameters: { avatarNotes }
// };

export const placeholderSvg = () => (
  <StoryWrapper>
    <Avatar size={select('Size', sizeOptions, defaultSize)} />
  </StoryWrapper>
);

placeholderSvg.story = {
  name: 'Placeholder SVG',
  parameters: { avatarNotes }
};
