import React from 'react';
import './App.css';
import useOrientation from './usePortrait';

function App() {
  const { lock } = useOrientation('portrait');

  return (
    <div className="App">
      APP HOOKS

      <button onClick={() => lock('portrait')}>Lock portrait</button>
    </div>
  );
}

export default App;
