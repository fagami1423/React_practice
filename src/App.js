import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";

//infile component
// function Heading() {
//   return (
//     <h1>This is an heading 1</h1>
//   )
// }

function App() {
  return (
    <div className="App">
      My first Compoenent
      <Heading firstname="Raj"/>
      <Heading firstname="Hari"/>
    </div>
  );
}

export default App;
