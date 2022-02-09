import React from 'react';
import styled from 'styled-components';
// import './toggle.css';

const InputWrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  position: relative;
  display: inline-block;
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: blue;

    &:before {
      transform: translateX(140%);
    }
  }
`;

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: lightgray;
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 17px;
    height: 17px;
    border-radius: 15px;
    transition: 0.2s;
    background: white;
  }
`;

const Toggle = ({ onChange }) => {
  return (
    <InputWrapper>
      <h3>Toggle</h3>
      <label className="togleswitch">
        <Input type="checkbox" onChange={onChange} />
        <Slider />
      </label>
    </InputWrapper>
  );
};

export default Toggle;
