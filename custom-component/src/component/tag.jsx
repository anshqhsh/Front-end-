import React, { useEffect } from 'react';

import styled from 'styled-components';
import TagsContent from './tagcontent';

const Input = styled.input`
  border-style: none;
  height: 28px;
  margin: 5px;
  :focus {
    outline: none;
  }
`;

const TagContainer = styled.div`
  display: inline-block;
  position: absolute;
  width: 800px;
  height: 38px;
  top: 100px;
  left: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

const TagItem = styled.span`
  display: inline-block;
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
    console.log(e);
    typing = e.target.value;
  };

  //Enter acting
  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      addTag(typing); // app State를 업데이트
      props.tag('');
      e.target.value = '';
    }
  };

  const useOutside = () => {
    const ClickOutside = e => {
      console.log(e.target.id);
      if (e.target.id === 'inputTag') {
        props.tag('tagActive');
      } else {
        props.tag('');
      }
    };
    useEffect(() => {
      document.addEventListener('mousedown', ClickOutside);
      return () => {
        document.removeEventListener('mousedown', ClickOutside);
      };
    });
  };
  useOutside();

  return (
    <TagContainer id={props.activeTag}>
      <TagItem>
        {props.items.map(items => {
          return (
            <TagsContent
              itemKey={items.key}
              itemText={items.text}
              deleteTag={deleteTag}
            />
          ); // 자식요소 반복시 유니크키 요청
        })}
      </TagItem>
      <Input
        id="inputTag"
        type="text"
        placeholder="Press enter to the tags"
        className="inputTag"
        onChange={changeHandler}
        onKeyUp={handleEnterPress}
      ></Input>
    </TagContainer>
  );
};
export default Tag;
