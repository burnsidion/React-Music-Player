import React, {Component} from 'react';
import './App.css';
import PlayButton from './components/playButton';
import {handleFileSelect, getAnimation} from './components/animation';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isMusicPlaying: false
    }
    this.handleClick = this.handleClick.bind(this);
    getAnimation();
  }

  componentDidMount(){
    document.getElementById('files')
    .addEventListener('change', handleFileSelect, false)
  }

  async handleClick(event){
    if(this.state.isMusicPlaying === false){
      await this.audio.play()
      this.setState({isMusicPlaying:true})
    } else {
      await this.audio.pause()
      this.setState({isMusicPlaying:false})
    }
  }

  render(){
    return(<div id="container">
      <div id="hook">
        <h1>Lets make some reactness!!</h1>
        <PlayButton toggleButton={this.handleClick} isPlaying={this.state.isMusicPlaying}/>
        <input type="file" id="files" name="files[]" multiple="multiple"/>
        <audio id="audio" ref={(audioTag) => {
          this.audio = audioTag
        }}/>
      </div>
    </div>)
  }
}

export default App;
