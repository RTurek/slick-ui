import React from 'react';
import renderer from 'react-test-renderer';
import Switch from './Switch';

test('Switch should render', () => {
  const component = (
    <Switch
      id="test"
      data-test-id="jest-test-switch-1"
      onChange={() => {}}
      checked
    />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
