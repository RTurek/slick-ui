import React from 'react';
import Chip from './Chip';

export default {
  title: 'Inputs/Chip2',
  component: Chip,
  argTypes: {
    label: { control: 'text' },
    onDelete: { control: 'boolean' },
    clickable: { control: 'boolean' }
  },
};

const Template = (args) => <Chip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Chip 2',
  onDelete: false,
  clickable: false
};
