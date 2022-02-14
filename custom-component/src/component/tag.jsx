import { React } from 'react';
import styled from 'styled-components';
import TagsContent from './tagcontent';

const Input = styled.input`
  border-style: none;
`;
const TagContainer = styled.div`
  display: inline;
  position: absolute;
  width: 500px;
  height: 100px;
  top: 100px;
  left: 200px;
  text-align: center;
`;

const Tag = props => {
  let typing = ''; // 타이핑받는 부분

  // 부모 addTag
  const addTag = tag => {
    props.addTag(tag);
  };
  // 부모 deleteTags
  const deleteTag = tag => {
    props.deleteTag(tag);
  };

  //Typing
  const changeHandler = e => {
    typing = e.target.value;
  };

  //Enter acting
  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      addTag(typing); // app State를 업데이트
    }
  };

  return (
    <TagContainer className="tagcontainer">
      {props.items.map(items => {
        return (
          <TagsContent
            itemKey={items.key}
            itemText={items.text}
            deleteTag={deleteTag}
          />
        ); // 자식요소 반복시 유니크키 요청
      })}
      <Input
        type="text"
        placeholder="enter a tag..."
        className="inputTag"
        onChange={changeHandler}
        onKeyUp={handleEnterPress}
      ></Input>
    </TagContainer>
  );
};
export default Tag;
