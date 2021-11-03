import React, { useRef, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';
import Button from '../Button/Button';

const CopyTextWrapper = styled.div`
  background-color: white;
  box-sizing: content-box;
  width: auto;
  height: 36px;
  padding: 5px;
  text-align: center;
  border-radius: 24px;
  margin: auto;
`;

const TextInput = styled(InputBase)`
  float: left;
  box-sizing: content-box;
  margin: 8px 0px 0px 10px;
  width: 116px; /* This is set so low because of the Dashboard Perk Preview Drawer. TODO: Revisit */
  input {
    margin: 0px !important;
    padding: 0px !important;
    height: 1rem !important;
    text-align: left !important;
    border: none !important;
    min-height: 0px !important;
  }
`;

const buttonStyle = {
  float: 'right'
};

const SET_COPIED = 'SET_COPIED';
const copyCommandSupported = document.queryCommandSupported('copy');

const initialState = {
  copied: false
};

function reducer(state, action) {
  switch (action.type) {
    case SET_COPIED:
      return { ...state, copied: action.copied };
    default:
      return state;
  }
}

function CopyText(props) {
  const { textToCopy } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const referralUrlRef = useRef(null);
  useEffect(() => {
    if (state.copied) {
      setTimeout(() => {
        dispatch({ type: SET_COPIED, copied: false });
      }, 5000);
    }
  }, [state.copied]);

  const copyToClipboard = (e) => {
    referralUrlRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    dispatch({ type: SET_COPIED, copied: true });
  };

  return (
    <CopyTextWrapper>
      <TextInput
        inputRef={referralUrlRef}
        value={textToCopy}
        inputProps={{
          title: 'Text To Copy',
          name: 'Text To Copy',
          className: 'react-css'
        }}
      />
      {copyCommandSupported && (
        <Button
          variant="contained"
          color="lightGrey"
          size="medium"
          onClick={copyToClipboard}
          style={buttonStyle}
        >
          {state.copied ? 'Copied!' : 'Copy Text'}
        </Button>
      )}
    </CopyTextWrapper>
  );
}

CopyText.propTypes = {
  /** Text To Be Copied */
  textToCopy: PropTypes.string
};

CopyText.defaultProps = {
  textToCopy: ''
};

export default CopyText;
