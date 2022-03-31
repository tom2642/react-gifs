import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { setSelectedGifID } = props;
  const defaultGifIDs = ["WuGSL4LFUMQU", "u6uAu3yyDNqRq", "HuVCpmfKheI2Q"];
  return (
    <div className="gif-list">
      {
        defaultGifIDs.map(gifID => <Gif gifID={gifID} key={gifId} />)
      }
    </div>
  );
};

export default GifList;
