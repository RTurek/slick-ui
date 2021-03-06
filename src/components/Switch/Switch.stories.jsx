import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withInfo } from '@storybook/addon-info';
import StoryWrapper from '../../styles/StoryWrapper';
import { storybookStyles } from '../../../.storybook/storybookTheming';
import Switch from './Switch';
import switchNotes from './switchNotes.md';

// https://material-ui.com/components/switches

const SwitchStory = (props) => {
  const [isChecked, setIsChecked] = useState(props.isCheckedByDefault);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StoryWrapper>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="switch-story" style={{ alignSelf: 'center' }}>Switch Input Label:</label>
      <Switch
        id="switch-story"
        onChange={handleChange}
        checked={isChecked}
        disabled={props.disabled}
      />
    </StoryWrapper>
  );
};

SwitchStory.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isCheckedByDefault: PropTypes.bool
};
SwitchStory.defaultProps = {
  isCheckedByDefault: true
};

export default {
  title: 'Inputs / Switch',

  decorators: [
    withInfo({
      text: switchNotes,
      header: true,
      inline: true,
      source: false,
      styles: storybookStyles,
      propTables: [Switch]
    })
  ]
};

// NOTE: There were some issues with knobs for Switch, so I just separated these out

export const enabledAndCheckedSwitch = () => (
  <SwitchStory
    disabled={false}
    isCheckedByDefault
  />
);

enabledAndCheckedSwitch.story = {
  name: 'Enabled And Checked'
};

export const enabledAndUncheckedSwitch = () => (
  <SwitchStory
    disabled={false}
    isCheckedByDefault={false}
  />
);

enabledAndUncheckedSwitch.story = {
  name: 'Enabled And Unchecked'
};

export const disabledAndCheckedSwitch = () => (
  <SwitchStory
    disabled
    isCheckedByDefault
  />
);

disabledAndCheckedSwitch.story = {
  name: 'Disabled And Checked'
};

export const disabledAndUncheckedSwitch = () => (
  <SwitchStory
    disabled
    isCheckedByDefault={false}
  />
);

disabledAndUncheckedSwitch.story = {
  name: 'Disabled And Unchecked'
};
