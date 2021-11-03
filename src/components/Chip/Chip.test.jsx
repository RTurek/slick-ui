import React from 'react';
import renderer from 'react-test-renderer';
import Chip from './Chip';
import ThemeWrapper from '../../styles/ThemeWrapper';

test('Chip should render', () => {
  const component = (
    <ThemeWrapper>
      <Chip label="test" />
    </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
