import mmStorybookTheming, { globalStyle } from './storybookTheming';

// Global Wrapper for theme and global styles
const wrapper = (Story) => (
  <div style={globalStyle}><Story /></div>
);

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
