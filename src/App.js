import React, { Component } from 'react'
import './App.css';


class Welcome extends Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button>Increment</button>
      </div>
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
