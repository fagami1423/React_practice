import logo from './logo.svg';
import './App.css';

function Heading() {
  return (
    <h1>This is an heading 1</h1>
  )
}

function App() {
  return (
    <div className="App">
      My first Compoenent
      <Heading/>
    </div>
  );
}

export default App;
