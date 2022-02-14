import { React } from 'react';
import styled from 'styled-components';

const ContentsSpan = styled.span`
  width: 50px;
  height: 20px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
`;
const XBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background: white;
`;
const TagsContent = props => {
  const deleteTag = () => {
    props.deleteTag(props.itemKey);
    console.log(props.itemKey);
  };

  console.log('tagcontent');
  console.log(props);
  return (
    <ContentsSpan className="tag">
      {props.itemText}
      <XBtn className="deleteKey" onClick={deleteTag}>
        x
      </XBtn>
    </ContentsSpan>
  );
};
export default TagsContent;
