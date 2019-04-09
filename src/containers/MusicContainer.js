import React, {Component} from 'react';
import MusicList from '../components/MusicList';
import './MusicContainer.css'
class MusicContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        topTwenty: []
      }
  }
  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({topTwenty: data.feed.entry}))
  }
render(){
  return(
    <div className="container">
     <h2>itunes top 20</h2>
     <MusicList topTwenty={this.state.topTwenty}/>
    </div>
  )
}
}

export default MusicContainer;
