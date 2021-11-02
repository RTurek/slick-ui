import { configure, addDecorator, addParameters } from '@storybook/react';
import mmStorybookTheming, { globalStyle } from './storybookTheming';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

// Global Wrapper for theme and global styles
const wrapper = storyFn => (
  <div style={globalStyle}>{storyFn()}</div>
);

// Decorators: Order matters here
addDecorator(wrapper);

// Parameters
addParameters({
  defaultViewport: 'responsive',
  options: {
    name: 'slick-ui',
    url: '/', /* Change this to the URL of the deployed ui-kit when it is deployed somewhere */
    /** show story component as full screen
     * @type {Boolean} */
    isFullScreen: true,
    /** display panel that shows a list of stories
     * @type {Boolean} */
    showNav: true,
    /** display panel that shows addon configurations
     * @type {Boolean} */
    showPanel: true,
    /** where to show the addon panel
     * @type {('bottom'|'right')} */
    panelPosition: 'right',
    /** regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex} */
    hierarchySeparator: /\/|\./,
    /** regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex} */
    hierarchyRootSeparator: /\|/,
    /** sidebar tree animations
     * @type {Boolean} */
    sidebarAnimations: true,
    /**
    * id to select an addon panel
    * @type {String}
    */
    selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /** enable/disable shortcuts
     * @type {Boolean} */
    enableShortcuts: true,
    /** show/hide tool bar
     * @type {Boolean} */
    isToolshown: true,
    /** theme storybook, see link below */
    theme: mmStorybookTheming,
    /** sorts stories
     * @type {Boolean} */
    sortStoriesByKind: false,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    // storySort: (a, b) => a[1].id.localeCompare(b[1].id) // TODO: Play around with this more
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

configure(module);
