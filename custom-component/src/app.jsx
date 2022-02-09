import { React, useState } from 'react';
import './app.css';

import Toggle from './component/toggle';
import Modal from './component/modal';

function App() {
  const [toggled, setToggled] = useState(false);
  const [opened, setOpened] = useState(false);

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
    </div>
  );
}

export default App;
