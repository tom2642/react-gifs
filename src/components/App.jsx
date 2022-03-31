import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  const [selectedGifID, setSelectedGifID] = useState("13HgwGsXF0aiGY");

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGifID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList setSelectedGifID={setSelectedGifID} />
      </div>
    </div>
  );
};

export default App;
