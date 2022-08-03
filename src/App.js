import React, { Component } from 'react'
import './App.css';

function IncrementNumber(props) {
  return <input type="button" value={props.value} />
}

function CounterElem(props) {
  return <div className='number-counter'>{props.value}</div>
}


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
  const buttonElem = <IncrementNumber value="Increase" />;
  return (
    <div className="App">
      <CounterElem value={0} />
      {buttonElem}
      <Welcome />
    </div>
  );
}

export default App;
