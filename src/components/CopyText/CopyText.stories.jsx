import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import CopyText from './CopyText';

const CopyTextStoryWrapper = styled.div`
  justify-content: center;
  align-items: center;
  max-width: 400px;
  min-width: 330px;
  margin: auto;
`;

export default {
  title: '1 ~ Slick / Uncategorized / CopyText',

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
  <CopyTextStoryWrapper>
    <CopyText codeToCopy={text('Code To Copy', '123TEST')} />
  </CopyTextStoryWrapper>
);

copyText.story = {
  name: 'CopyText'
};
