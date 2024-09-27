import React from 'react';
import useScreenSize from './useScreenSize';
import './styles.css';

const App = () => {
  const screenSize = useScreenSize();

  return (
    <div className={`container ${screenSize}`}>
      <h1>Your Screen Size</h1>
      <p>Current screen size: {screenSize}</p>
    </div>
  );
};

export default App;