import React from 'react';

const MusicDetail = (props) => {
  const {artist, song, sound} = props
  return(
    <div>
    <p>{artist}</p>
    <p>{song}</p>
    <audio controls src={sound}></audio>
    </div>
  )

}
export default MusicDetail;
