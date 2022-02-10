import { React, useState } from 'react';
import './app.css';

import Toggle from './component/toggle';
import Modal from './component/modal';
import Tab from './component/tab';

function App() {
  const [toggled, setToggled] = useState(false);
  const [opened, setOpened] = useState(false);
  const [tabed, setTab] = useState('first');

  return (
    <div className="App">
      <Toggle onChange={e => setToggled(e.target.checked)} />
      <p>Toggle Switch {toggled ? 'on' : 'off'}</p>
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
      <button
        className="tab "
        onClick={() => {
          setTab('first');
        }}
      >
        first
      </button>
      <button
        class="tab"
        onClick={() => {
          setTab('second');
        }}
      >
        second
      </button>
      <button
        class="tab"
        onClick={() => {
          setTab('third');
        }}
      >
        third
      </button>
      <Tab tab={tabed} />
    </div>
  );
}

export default App;
