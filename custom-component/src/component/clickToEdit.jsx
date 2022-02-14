import React from 'react';
import styled from 'styled-components';

const ClickToEdit = props => {
  const inputAgeRef = React.createRef(); // 돔요소의 요소를 받아옴
  const inputNameRef = React.createRef();

  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const name = inputAgeRef.current.value;
    const age = inputNameRef.current.value;
    props.print(name, age);
  };

  return (
    <div>
      <form className="addform" onSubmit={onSubmit}>
        <input
          ref={inputAgeRef}
          type="text"
          className="add"
          placeholder="name"
        />
        <input
          ref={inputNameRef}
          type="text"
          className="add"
          placeholder="age"
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default ClickToEdit;
