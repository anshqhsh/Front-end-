import React from 'react';
import styled from 'styled-components';

const ContentsSpan = styled.span`
  display: inline-block;
  width: 130px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  margin: 5px;
`;
const XBtn = styled.button`
  float: right;
  border: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 5px;
  border-radius: 50%;
  background: white;
`;
const TextSpan = styled.p`
  display: inline-block;
  margin: 5px;
`;

// key를 받아 삭제
const TagsContent = props => {
  const deleteTag = () => {
    props.deleteTag(props.itemKey);
  };

  return (
    <ContentsSpan className="tag">
      <TextSpan>{props.itemText}</TextSpan>
      <XBtn className="deleteKey" onClick={deleteTag}>
        x
      </XBtn>
    </ContentsSpan>
  );
};
export default TagsContent;
