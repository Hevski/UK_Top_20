import React from 'react';
import './MusicDetail.css'
const MusicDetail = ({song}) => {
  return(
    <div className="artist">
    <div className="zoom">
     <img src={song["im:image"][2].label} alt="album-work"></img>
     <p>{song["im:artist"].label}</p>
     <p>{song["im:name"].label}</p>
    <div className="sound">
     <audio controls src={song.link[1].attributes.href}></audio>
    </div>
    </div>
    </div>
  )
}
export default MusicDetail;
