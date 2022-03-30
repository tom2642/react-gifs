import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene">
        <p>What</p>
      </div>
    </div>
  );
};

export default App;
