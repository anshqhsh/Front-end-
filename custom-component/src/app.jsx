import { React, useState } from 'react';
import './app.css';
import Toggle from './component/toggle';
import Toggle2 from './component/toggle';

function App() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="App">
      <Toggle onChange={e => setToggled(e.target.checked)} />
      <p>Toggle Switch {toggled ? 'on' : 'off'}</p>
    </div>
  );
}

export default App;
