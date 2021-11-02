import React from 'react';
import renderer from 'react-test-renderer';
import Chip from './Chip';

test('Chip should render', () => {
  const component = (
    <Chip label="test" />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
