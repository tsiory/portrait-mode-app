import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    function lock(orientation: OrientationLockType) {
      console.log('Lock called', orientation);

      let de = document.documentElement;
      if (de.requestFullscreen) {de.requestFullscreen()}

      window.screen.orientation.lock(orientation);
      alert('Orientation locked: ' + orientation);
    }

    lock('portrait');
  }, []);

  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
