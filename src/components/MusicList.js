import React from 'react';
import MusicDetail from './MusicDetail';

const MusicList = ({topTwenty}) => {

  const musicNodes = topTwenty.map(song => {
  return (
    <MusicDetail
    key={song.id}
    artist={song["im:artist"].label}
    song={song["im:name"].label}
    sound={song.link[1].attributes.href}
    image={song["im:image"][2].label}>
    </MusicDetail>
  )
})
return(
  <div className="songs-list">
   {musicNodes}
  </div>
)
}

export default MusicList;
