import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import ThemeWrapper from '../../styles/ThemeWrapper';

test('Button should render', () => {
  const component = (
    <ThemeWrapper>
      <Button
        color="primary"
      >
        This Is A Test
      </Button>
    </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
