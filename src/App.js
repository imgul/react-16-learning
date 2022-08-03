import React, { Component } from 'react'
import './App.css';


class Welcome extends Component {
  state = {
    name: "Gulzaib"
  }
  render() {
    return (
      <div>Welcome {this.state.name}</div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
