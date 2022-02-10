import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  display: contents;
  top: 500px;
  left: 50px;
`;

const Second = props => {
  return <Content>Tab menu TWO</Content>;
};
export default Second;
