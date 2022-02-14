import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Divspace = styled.div`
  position: absolute;
`;

const AgeContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 350px;
  width: 200px;
  height: 50px;
  text-align: center;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 350px;
  width: 200px;
  height: 50px;
  text-align: center;
`;

const EditDiv = styled.div`
  position: absolute;
  top: 200px;
  left: 300px;
  width: 300px;
`;

const ClickToEdit = props => {
  const useOutside = () => {
    const ClickOutside = e => {
      if (e.srcElement.id === 'cToe') {
        e.preventDefault(); // 새로고침 방지
        const name = inputAgeRef.current.value;
        const age = inputNameRef.current.value;
        console.log(inputAgeRef);
        props.print(name, age);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', ClickOutside);
      return () => {
        document.removeEventListener('mousedown', ClickOutside);
      };
    });
  };

  const inputAgeRef = React.createRef(); // 돔요소의 요소를 받아옴
  const inputNameRef = React.createRef();
  const wrapperRef = useRef(null);

  useOutside(wrapperRef);

  return (
    <Divspace id="space" ref={wrapperRef}>
      <form className="addform">
        <NameContainer>
          <span>이름</span>
          <input
            ref={inputAgeRef}
            type="text"
            className="add"
            placeholder="name"
          />
        </NameContainer>
        <AgeContainer>
          <span>나이</span>
          <input
            ref={inputNameRef}
            type="text"
            className="add"
            placeholder="age"
          />
        </AgeContainer>
        <EditDiv>
          이름 : {props.name} 나이 : {props.age}
        </EditDiv>
      </form>
    </Divspace>
  );
};

export default ClickToEdit;
