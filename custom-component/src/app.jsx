import React, { useState } from 'react';

import './app.css';

import Toggle from './component/toggle';
import Modal from './component/modal';
import Tab from './component/tab';
import Tag from './component/tag';
import ClickToEdit from './component/clickToEdit';

function App() {
  const types = ['first', 'second', 'third'];

  const [toggled, setToggled] = useState(false); // Toggle
  const [opened, setOpened] = useState(false); // Modal
  const [active, setActive] = useState(types[0]); // Tab
  const [tags, setTag] = useState([{ key: 1, text: 'CodeStates' }]); // 테그 배열
  const [activeTag, setActiveTag] = useState(''); // Tag
  const [clickName, setClickName] = useState(''); // Click to Edit name
  const [clickAge, setClickAge] = useState(''); // Click to Edit name

  const addTag = text => {
    const tag = [...tags, { key: Date.now(), text: text }];
    setTag(tag);
  };
  const deleteTag = key => {
    const a = tags.filter(item => item.key !== key);
    setTag(a);
  };

  // click to edit
  const print = (name, age) => {
    setClickName(name);
    setClickAge(age);
  };

  // TagContainer에 Id 추가
  const tag = text => {
    setActiveTag(text);
  };

  return (
    <div className="App">
      <div className="container" id="toggle">
        <h3>Toggle</h3>
        <Toggle
          onChange={e => setToggled(e.target.checked)}
          toggled={toggled}
        />
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
        <h3>Tag</h3>
        <Tag
          items={tags}
          addTag={addTag}
          deleteTag={deleteTag}
          activeTag={activeTag}
          tag={tag}
        />
      </div>
      <div className="container" id="cToe">
        <h3>Click to Edit</h3>
        <ClickToEdit print={print} name={clickName} age={clickAge} />
      </div>
    </div>
  );
}

export default App;
