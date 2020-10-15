import React, {useState} from 'react';
import './App.css';
import Hero from './Components/Hero';


function App() {
  const [count, setCount] = useState(0);
  // const handleHeroClick = () => { }; test

  return (
    <div className="App">
      <h1>React hooks Basics</h1>
      
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Demo React.memo()" />
    </div>
  );
}

export default App;
