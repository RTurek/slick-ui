import React from 'react';
import { withInfo } from '@storybook/addon-info';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import Badge, { BadgeForStorybook } from './Badge';

export default {
  title: 'Core / Badge',

  decorators: [
    withInfo({
      text: 'This variant on the Badge gives us control over color and placement.',
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
  <Badge invisible={false} badgeContent={1} customBadgeVariant="alert-right">
    <AccountCircle fontSize="large" />
  </Badge>
);

alertRight.story = {
  name: 'Alert Right'
};

export const alertText = () => (
  <Badge invisible={false} badgeContent="NEW" customBadgeVariant="alert-right">
    <AccountCircle fontSize="large" />
  </Badge>
);

alertText.story = {
  name: 'Alert Text'
};

export const alertDot = () => (
  <Badge invisible={false} customBadgeVariant="dot">
    <AccountCircle fontSize="large" />
  </Badge>
);

alertDot.story = {
  name: 'Alert Dot'
};

export const greyLeft = () => (
  <Badge invisible={false} badgeContent={3} customBadgeVariant="grey-left">
    <AccountCircle fontSize="large" />
  </Badge>
);

greyLeft.story = {
  name: 'Grey Left'
};

export const decagramLeft = () => (
  <Badge invisible={false} badgeContent={3} customBadgeVariant="decagram-left">
    <AccountCircle fontSize="large" />
  </Badge>
);

decagramLeft.story = {
  name: 'Decagram Left'
};

export const seasonalBadgeLeft = () => (
  <Badge invisible={false} badgeContent={3} customBadgeVariant="seasonal-badge-left">
    <AccountCircle fontSize="large" />
  </Badge>
);

seasonalBadgeLeft.story = {
  name: 'Seasonal Badge Left'
};

export const bottomRight = () => (
  <Badge invisible={false} badgeContent={3} customBadgeVariant="bottom-right">
    <AccountCircle fontSize="large" />
  </Badge>
);

bottomRight.story = {
  name: 'Bottom Right'
};
