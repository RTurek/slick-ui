import React from 'react';
import renderer from 'react-test-renderer';
import Switch from './Switch';
import ThemeWrapper from '../../styles/ThemeWrapper';

test('Switch should render', () => {
  const component = (
    <ThemeWrapper>
      <Switch
        id="test"
        data-test-id="jest-test-switch-1"
        onChange={() => {}}
        checked
      />
    </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
