import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isMusicPlaying: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event){
    if(this.state.isMusicPlaying === false){
      this.setState({isMusicPlaying:true})
    } else {
      this.setState({isMusicPlaying:false})
    }
  }

  render(){
    return(<div id="container">
      <div id="hook">
        <h1>Lets make some reactness!!</h1>
        <input type="file" id="files" name="files[]" multiple="multiple"/>
      </div>
    </div>)
  }
}

export default App;
