import React from 'react';

const Gif = (props) => {
  const { gifID } = props;
  return (
    <img src={`https://media.giphy.com/media/${gifID}/giphy.gif`} alt="#" className="gif" />
  );
};

export default Gif;
