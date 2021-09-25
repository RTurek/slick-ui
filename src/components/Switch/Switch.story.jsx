import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withActions } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Switch from './Switch';

// https://material-ui.com/components/switches

const SwitchStory = (props) => {
  const [isChecked, setIsChecked] = useState(props.isCheckedByDefault);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Switch
      onChange={handleChange}
      checked={isChecked}
      disabled={props.disabled}
    />
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
  title: '1 ~ Slick / Forms / Switch',

  decorators: [
    withInfo({
      text: 'Use knobs to try out the different variants and to disable/enable.',
      header: true,
      inline: true,
      source: false
    }),
    withActions('mouseover', 'click')
  ]
};

// NOTE: There were some issues with knobs for Switch, so I just separated these out

export const enabledAndCheckedSwitch = () => <SwitchStory
  disabled={false}
  isCheckedByDefault
/>;

enabledAndCheckedSwitch.story = {
  name: 'Enabled And Checked'
};

export const enabledAndUncheckedSwitch = () => <SwitchStory
  disabled={false}
  isCheckedByDefault={false}
/>;

enabledAndUncheckedSwitch.story = {
  name: 'Enabled And Unchecked'
};

export const disabledAndCheckedSwitch = () => <SwitchStory
  disabled
  isCheckedByDefault
/>;

disabledAndCheckedSwitch.story = {
  name: 'Disabled And Checked'
};

export const disabledAndUncheckedSwitch = () => <SwitchStory
  disabled
  isCheckedByDefault={false}
/>;

disabledAndUncheckedSwitch.story = {
  name: 'Disabled And Unchecked'
};
