import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (window.screen.width) {
      setScreenWidth(window.screen.width);
    }
  }, []);

  return (
    <div className="App" style={{width: '100vw', height: '100vh', backgroundColor: 'dodgerblue', color:'white', display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center'}}>
      SCREEN WIDTH

      <br />

      <strong>
        {screenWidth}
      </strong>

    </div>
  );
}

export default App;
