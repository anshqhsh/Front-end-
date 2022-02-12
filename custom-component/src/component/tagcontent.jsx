import { React } from 'react';
import styled from 'styled-components';

const Contents = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border-color: red;
  border-style: solid;
`;

const TagsContent = props => {
  console.log('tagcontent');
  console.log(props);
  return <Contents>{props.text}</Contents>;
};
export default TagsContent;
