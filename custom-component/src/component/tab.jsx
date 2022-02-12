import React from 'react';
import First from './tabs/first';
import Second from './tabs/second';
import Third from './tabs/third';
import styled from 'styled-components';

const TabList = {
  0: <First />,
  1: <Second />,
  2: <Third />,
};

const Contents = styled.div`
  text-align: center;
`;

const Modal = props => {
  console.log(Modal);
  return (
    <Contents className="tabContent">
      {props.tab === 'first'
        ? TabList[0]
        : props.tab === 'second'
        ? TabList[1]
        : TabList[2]}
    </Contents>
  );
};
export default Modal;
