import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeWrapper from './ThemeWrapper';

const StyledStoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px;
`;

const StoryWrapper = (props) => (
  <ThemeWrapper>
    <StyledStoryWrapper>
      {props.children}
    </StyledStoryWrapper>
  </ThemeWrapper>
);

StoryWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoryWrapper;
