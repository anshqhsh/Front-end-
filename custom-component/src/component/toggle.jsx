import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: absolute;
  left: 425px;
  top: 30px;
`;
const Input = styled.input`
  position: relative;
  display: inline-block;
  opacity: 0;
  width: 0;
  height: 0;
  &:checked {
    + span {
      &:before {
        width: 100%;
        opacity: 100%;
      }
      + div {
        transform: translateX(25px);
      }
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
  transition: all 0.5s;
  overflow: hidden;

  &:before {
    content: '';
    left: 0px;
    width: 10%;
    height: 120%;
    background-color: blue;
    opacity: 0%;
    position: absolute;
    transition: 0.5s;
  }
`;

const Circle = styled.div`
  content: '';
  position: relative;
  top: -21px;
  left: 4px;
  width: 17px;
  height: 17px;
  border-radius: 15px;
  transition: 0.5s;
  background: white;
  cursor: pointer;
`;
const CheckToggleP = styled.p`
  width: 200px;
  position: absolute;
  text-align: center;
  left: 350px;
  top: 80px;
`;
const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Toggle = ({ onChange, toggled }) => {
  return (
    <Div>
      <SliderContainer className="sliderContainer">
        <label className="togleswitch">
          <Input type="checkbox" onChange={onChange} />
          <Slider />
          <Circle />
        </label>
      </SliderContainer>
      <CheckToggleP>Toggle Switch {toggled ? 'on' : 'off'}</CheckToggleP>
    </Div>
  );
};

export default Toggle;
