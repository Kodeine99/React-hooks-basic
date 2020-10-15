import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React hooks Basics</h1>
      
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

    </div>
  );
}

export default App;
