[![Netlify Status](https://api.netlify.com/api/v1/badges/73200f96-fc74-4825-98cd-a97f105e3155/deploy-status)](https://app.netlify.com/sites/slick-ui/deploys)
[![CircleCI](https://img.shields.io/circleci/project/github/RTurek/slick-ui/main.svg?style=flat&logo=circleci)](https://app.circleci.com/pipelines/github/RTurek/slick-ui?branch=main)

<!-- [![Coverage Status](https://img.shields.io/codecov/c/github/RTurek/slick-ui/main.svg)](https://codecov.io/gh/RTurek/slick-ui/branch/main) -->

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/RTurek/slick-ui/blob/main/LICENSE)
[![Follow on Twitter](https://img.shields.io/twitter/follow/rjturek.svg?label=follow+rjturek)](https://twitter.com/rjturek)

# slick-ui (alpha)
`slick-ui` is a component library based on Material-UI and the Material Design System. At the moment this is just a side project for fun, practice, and teaching.

This library is a collection of work I've done over the last few years that demonstrates my ui development capabilities. It's meant for use on my other side projects, not necessarily for use by the general public.

Frontend architecture, ui component development, accessibility, clean and maintainable code, user experience, documentation, and ui testing are my passions as a developer. I like to live where all of those things come together!

_Things I'm playing around with for this project just to practice and learn..._
- React.js
- Material-UI
- Semantic HTML
- styled-components (css-in-js)
- Jest and storybook testing
- eslint / stylelint
- Storybook
- Netlify
- CircleCI
- (not yet) Chromatic
- (not yet) Codecov
- (not yet) tailwindcss (utility based css)
- (not yet) TypeScript
- (not yet) Custom HTML Elements (web components)
- Accessibility testing

# Demo
https://slick-ui.netlify.app/

# Instructions for LOCAL development

Clone `slick-ui` from GitHub - [https://github.com/rturek/slick-ui](https://github.com/rturek/slick-ui)

  ```shell
    gh repo clone rturek/slick-ui
  ```

### Dependencies:

_The project might work with previous versions, but I can only guarantee it works on these versions_
- node v14.17.6
- npm v8.1.2

### Install

  ```shell
    npm install
  ```

### Tests

Run tests
  ```shell
    npm run test
  ```
  Or
  ```shell
    npm run test-windows
  ```

Update Snapshots
  ```shell
    npm run test -u
  ```

Coverage report should be generated at `coverage/lcov-report/index.html`

### Lint

  ```shell
    npm run lint
  ```

  ```shell
    npm run lint:css
  ```

## Storybook

### Local Development
  ```shell
    npm run storybook
  ```

### Static Build
  ```shell
    build-storybook -c .storybook -o static-storybook
  ```

### Upgrade Storybook

_Requires `@storybook/cli`_
  ```shell
    npx sb upgrade
  ```

# Netlify Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/73200f96-fc74-4825-98cd-a97f105e3155/deploy-status)](https://app.netlify.com/sites/slick-ui/deploys)

https://slick-ui.netlify.app/

Netlify pulls from the `deploy-netlify-storybook` branch in this repo to deploy to the URL above. To start a new deploy, you should get `deploy-netlify-storybook` up to date with `main` OR push whatever changes you'd like to test to the deploy branch, and Netlify will automatically run the storybook static build and publish the updates when the branch is updated on GitHub.

  ```shell
    git checkout deploy-netlify-storybook
    git rebase main
    git push
  ```


<!--
NOTE: This is from an old repo that I wrote, and may not work for slick-ui but I'm leaving it here for now.

- Yarn Linking
  - Because of shared dev and peer dependencies (like `react` and `material-ui`), you have to do some special things locally to point your application towards the `slick-ui` library for local Slick development in conjunction with your application.
  - Delete `node_modules` in both the `slick-ui` and `modernmsg/client` directories (or wherever your local app is)
  - run `yarn install` in `modernmsg/client`
  - run `yarn link` in `slick-ui`
  - run `yarn link @slick-ui/core` in `modernmsg/client`
  - DO NOT run `yarn install` again or the link may be broken and you will have to repeat these steps. You should just be able to build either or both projects from here on out.
- Hot-Reloading For ModernMsg/Client
  - Run the application in watch mode a you normally would (e.g. `foreman s -f Procfile.hot` etc.)
  - In the slick-ui repo, run `yarn build` to re-build the distributed files on file changes (you'll need to do this manually), and foreman should pick up the updates immediately and re-build the app. This is because Yarn Link is pointing to the new build in the slick repo
 -->
