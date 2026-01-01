import React from 'react';
import renderer from 'react-test-renderer';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from './Badge';
import ThemeWrapper from '../../styles/ThemeWrapper';

test('Badge should render', () => {
  const component = (
    <ThemeWrapper>
      <Badge invisible={false} badgeContent={1} customBadgeVariant="alert-right">
        <AccountCircle fontSize="large" />
      </Badge>
    </ThemeWrapper>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
