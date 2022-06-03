import React from 'react';
import './App.css';
import { lockOrientationTo } from './usePortrait';

function App() {
  return (
    <div className="App">
      LOCK WITH UTILS

      <button onClick={() => lockOrientationTo('portrait')}>Lock portrait</button>
    </div>
  );
}

export default App;
