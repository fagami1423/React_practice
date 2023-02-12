//you will be changing the states of the data here
import React from "react";
import FruitsCounter from "./components/FruitsCounter";
import Fruits from "./components/Fruits";

function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  return (
    <div>
      <h1>Fruits Counter</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
  }

export default App;