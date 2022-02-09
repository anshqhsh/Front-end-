import React from 'react';
import './modal.css';
const Modal = props => {
  const { open, close } = props;
  console.log(props);
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <button onClick={close}>X</button>
          <div>HELLO CODESTATE!</div>
        </section>
      ) : null}
    </div>
  );
};
export default Modal;
