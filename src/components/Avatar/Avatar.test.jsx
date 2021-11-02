import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

const fullProps = {
  imageUrl: 'http://i.pravatar.cc/300',
  firstName: 'John',
  lastName: 'Max'
};
const hasInitialsProps = {
  firstName: 'John',
  lastName: 'Max'
};
const anonProps = {};

test('Avatar should render', () => {
  const component = (
    <Avatar {...fullProps} />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Avatar should render Initials when there is no image', () => {
  const component = (
    <Avatar {...hasInitialsProps} />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Avatar should render Anonymous when there is no image or full name', () => {
  const component = (
    <Avatar {...anonProps} />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
