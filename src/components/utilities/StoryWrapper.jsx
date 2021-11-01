import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledStoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px;
`;

const StoryWrapper = (props) => (
  <StyledStoryWrapper>
    {props.children}
  </StyledStoryWrapper>
);

StoryWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoryWrapper;
