import React from 'react';
import renderer from 'react-test-renderer';
// import ThemeWrapper from '@style/ThemeWrapper';
import Chip from './Chip';

test('Chip should render', () => {
  const component = (
    // <ThemeWrapper>
    <Chip label="test" />
    // </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
