import React from 'react';
import './modal.css';
import First from './tabs/first';
import Second from './tabs/second';
import Third from './tabs/third';

const TabList = {
  0: <First />,
  1: <Second />,
  2: <Third />,
};

const Modal = props => {
  console.log(props.tab);

  return (
    <>
      <h3>Tab</h3>
      <section>
        <ul class="tabs">
          <li></li>
          <li className="tab"></li>
          <li className="tab"></li>
        </ul>
        <div className="contentArea">
          {props.tab === 'first'
            ? TabList[0]
            : props.tab === 'second'
            ? TabList[1]
            : TabList[2]}
        </div>
      </section>
    </>
  );
};
export default Modal;
