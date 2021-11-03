import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './Typography';
import ThemeWrapper from '../../styles/ThemeWrapper';

test('Typography should render', () => {
  const component = (
    <ThemeWrapper>
      <Typography
        variant="body1"
        color="primary"
      >
        This Is A Test
      </Typography>
    </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
