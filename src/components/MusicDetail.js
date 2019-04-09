import React from 'react';
import './MusicDetail.css'
const MusicDetail = (props) => {
  const {artist, song, sound, image} = props
  return(
    <div className="zoom">
    <div className="artist" style={{backgroundImage: "url(" + image + ")"}}>
    <p>{artist}</p>
    <p>{song}</p>
    <div className="sound">
    <audio controls src={sound}></audio>
    </div>
    </div>
    </div>
  )

}
export default MusicDetail;
