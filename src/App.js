import './App.css';

function IncrementNumber(props) {
  return <input type="button" value={props.value} />
}

function CounterElem(props) {
  return <div className='number-counter'>{props.value}</div>
}



function App() {
  const buttonElem = <IncrementNumber value="Increase" />;
  return (
    <div className="App">
      <CounterElem value={0} />
      {buttonElem}
    </div>
  );
}

export default App;
