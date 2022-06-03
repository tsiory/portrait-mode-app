import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    function lock(orientation: OrientationLockType) {
      console.log('Lock called', orientation);

      let de = document.documentElement as any;
      if (de.requestFullscreen) {de.requestFullscreen()}
      else if (de.mozRequestFullscreen) {de.mozRequestFullscreen()}
      else if (de.webkitRequestFullscreen) {de.webkitRequestFullscreen()}
      else if (de.msRequestFullscreen) {de.msRequestFullscreen()}

      window.screen.orientation.lock(orientation);
      alert('update oh');
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
