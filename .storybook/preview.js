import React from 'react';
import mmStorybookTheming, { globalStyle } from './storybookTheming';

// Global Wrapper for theme and global styles
const wrapper = (Story) => React.createElement('div', { style: globalStyle }, React.createElement(Story, null));

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [wrapper],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical'
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: mmStorybookTheming
    }
  }
};

export default preview;
