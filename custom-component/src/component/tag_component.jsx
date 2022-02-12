import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  width: 100px;
  height: 100px;
`;

const xBtn = styled.span`
  font-style: bold;
`;

const Tag = props => {
  return (
    <Tag>
      {props.text}
      <xBtn>X</xBtn>
    </Tag>
  );
};
export default Tag;
