import React from 'react';
import './App.css';

function App() {
  function lock(orientation: OrientationLockType) {
    console.log('Lock called', orientation);

    let de = document.documentElement as any;
    if (de.requestFullscreen) {de.requestFullscreen()}
    else if (de.mozRequestFullscreen) {de.mozRequestFullscreen()}
    else if (de.webkitRequestFullscreen) {de.webkitRequestFullscreen()}
    else if (de.msRequestFullscreen) {de.msRequestFullscreen()}

    window.screen.orientation.lock(orientation);
  }

  return (
    <div className="App">
      Hello world

      <button onClick={() => lock('portrait')}>Lock portrait</button>
    </div>
  );
}

export default App;
