import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
        fullName: 'Fulla Fridhi',
        bio: 'Stay strong for the moment you dream about every day.',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/606/606641.png',
        profession: 'Student in Gomycode',
        show: false,
        mountedTime : 0
    };
  }

  
componentDidMount(){

   this.intervalId = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
 shows = () => {
    this.setState({ showProfile: !this.state.showProfile });
  };




  show = () => {
    this.setState({ show: !this.state.show });
}
 
render() {
  const {  mountedTime } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.show}>
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.show && (
          <div className="profile">
            <img src={this.state.imgSrc} alt="Profile" />
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.profession}</h2>
            <p>{this.state.bio}</p>
            
            
          </div>
        )}
<div className="timer">
          <p>Component mounted for: {mountedTime} seconds</p>
        </div>
        
        
      </header>
      
    </div>
  );
}
}


export default App;
