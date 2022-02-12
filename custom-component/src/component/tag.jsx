import { React } from 'react';
import styled from 'styled-components';
import TagsContent from './tagcontent';
import TagAddForm from './tagAddForm';

const Input = styled.input`
  border-style: none;
`;

const Tag = props => {
  let typing = ''; // 타이핑받는 부분
  console.log(props);

  // 부모 addTag
  const addTag = tag => {
    props.addTag(tag);
  };

  //Typing
  const changeHandler = e => {
    typing = e.target.value;
  };
  console.log('tag');

  //Enter acting
  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      addTag(typing); // app State를 업데이트
    }
  };

  return (
    <div>
      <TagAddForm addTag={addTag} />
      <Input
        type="text"
        placeholder="enter a tag..."
        className="Input"
        onChange={changeHandler}
        onKeyUp={handleEnterPress}
      ></Input>
      {props.items.map(props => (
        <TagsContent props={props} key={props.key} text={props.text} />
      ))}
    </div>
  );
};
export default Tag;
