import React from 'react';
import renderer from 'react-test-renderer';
// import ThemeWrapper from '@style/ThemeWrapper';
import Switch from './Switch';

test('Switch should render', () => {
  const component = (
    // <ThemeWrapper>
    <Switch
      data-test-id="jest-test-switch-1"
      onChange={() => {}}
      checked
    />
    // </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
