module.exports = {
  stories: [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-notes",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-essentials"
  ]
}
