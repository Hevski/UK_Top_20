import React from 'react';
import MusicDetail from './MusicDetail';
import './MusicList.css'

const MusicList = ({topTwenty}) => {

  const musicNodes = topTwenty.map((song, index) => {
  return (
    <MusicDetail key={index} song={song}></MusicDetail>
  )
})
return(
  <div className="songs-list">
   {musicNodes}
  </div>
)
}

export default MusicList;
