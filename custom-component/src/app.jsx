import { React, useState } from 'react';
import './app.css';

import Toggle from './component/toggle';
import Modal from './component/modal';
import Tab from './component/tab';
import Tag from './component/tag';

function App() {
  const types = ['first', 'second', 'third'];

  const tags = [
    { key: 1, text: 'text1' },
    { key: 2, text: 'text2' },
  ];

  const [toggled, setToggled] = useState(false);
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(types[0]);
  const [tagItem, setTag] = useState(tags);

  const addTag = text => {
    tags.push({ key: Date.now(), text: { text } });
    setTag(tags);
    console.log(tags);
  };

  return (
    <div className="App">
      <div className="container" id="toggle">
        <h3>Toggle</h3>
        <Toggle onChange={e => setToggled(e.target.checked)} />
        <p>Toggle Switch {toggled ? 'on' : 'off'}</p>
      </div>
      <div className="container" id="modal">
        <h3>Modal</h3>
        <button
          id="modalButton"
          onClick={() => {
            setOpened(true);
          }}
        >
          Open Modal
        </button>
        <Modal
          open={opened}
          close={() => {
            setOpened(false);
          }}
        />
      </div>
      <div className="container" id="tab">
        <h3>Tab</h3>
        <div className="btnContainer">
          <button
            className={active === 'first' ? 'btn_act' : 'btn'}
            onClick={() => {
              setActive(types[0]);
            }}
          >
            first
          </button>
          <button
            className={active === 'second' ? 'btn_act' : 'btn'}
            onClick={() => {
              setActive(types[1]);
            }}
          >
            second
          </button>
          <button
            className={active === 'third' ? 'btn_act' : 'btn'}
            onClick={() => {
              setActive(types[2]);
            }}
          >
            third
          </button>
        </div>
        <Tab tab={active} />
      </div>
      <div className="container" id="tag">
        <Tag items={tagItem} addTag={addTag} />
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
