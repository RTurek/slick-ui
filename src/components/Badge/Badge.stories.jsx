import React from 'react';
import { withInfo } from '@storybook/addon-info';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import StoryWrapper from '../utilities/StoryWrapper';
import Badge, { BadgeForStorybook } from './Badge';
import badgeNotes from './badgeNotes.md';

export default {
  title: 'Core / Badge',

  decorators: [
    withInfo({
      text: badgeNotes,
      header: true,
      inline: true,
      source: false,
      styles: storybookStyles,
      propTables: [BadgeForStorybook],
      propTablesExclude: [Badge, AccountCircle],
      excludedPropTypes: ['theme']
    })
  ]
};

export const alertRight = () => (
  <StoryWrapper>
    <Badge invisible={false} badgeContent={1} customBadgeVariant="alert-right">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

alertRight.story = {
  name: 'Alert Right'
};

export const alertText = () => (
  <StoryWrapper>
    <Badge invisible={false} badgeContent="NEW" customBadgeVariant="alert-right">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

alertText.story = {
  name: 'Alert Text'
};

export const alertDot = () => (
  <StoryWrapper>
    <Badge invisible={false} customBadgeVariant="dot">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

alertDot.story = {
  name: 'Alert Dot'
};

export const greyLeft = () => (
  <StoryWrapper>
    <Badge invisible={false} badgeContent={3} customBadgeVariant="grey-left">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

greyLeft.story = {
  name: 'Grey Left'
};

export const decagramLeft = () => (
  <StoryWrapper>
    <Badge invisible={false} badgeContent={3} customBadgeVariant="decagram-left">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

decagramLeft.story = {
  name: 'Decagram Left'
};

export const seasonalBadgeLeft = () => (
  <StoryWrapper>
    <Badge invisible={false} badgeContent={3} customBadgeVariant="seasonal-badge-left">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

seasonalBadgeLeft.story = {
  name: 'Seasonal Badge Left'
};

export const bottomRight = () => (
  <StoryWrapper>
    <Badge invisible={false} badgeContent={3} customBadgeVariant="bottom-right">
      <AccountCircle fontSize="large" />
    </Badge>
  </StoryWrapper>
);

bottomRight.story = {
  name: 'Bottom Right'
};
