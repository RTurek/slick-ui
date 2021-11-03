import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import CopyText from './CopyText';
import StoryWrapper from '../../styles/StoryWrapper';

const CopyTextStoryWrapper = styled.div`
  justify-content: center;
  align-items: center;
  max-width: 400px;
  min-width: 330px;
  margin: auto;
`;

export default {
  title: 'Novel Features / CopyText',

  decorators: [
    withInfo({
      text: '',
      header: true,
      inline: true,
      source: false,
      styles: storybookStyles,
      propTables: [CopyText],
      propTablesExclude: []
    })
  ]
};

export const copyText = () => (
  <StoryWrapper>
    <CopyTextStoryWrapper>
      <CopyText textToCopy={text('Text To Copy', '123TEST')} />
    </CopyTextStoryWrapper>
  </StoryWrapper>
);

copyText.story = {
  name: 'CopyText'
};
