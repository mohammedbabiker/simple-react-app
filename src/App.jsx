import { useEffect, useState } from 'react'
import { MainApp } from "./styled.js";
import './App.css'

function App() {
  const storageKeyName = "count";

  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName)) || 0;

  const [count, setCount] = useState(retrieveCountValue());

const addNumber = (count) => setCount(Number(count) + 1);
  // stop number at refresh

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));

  }, [count]);

  return (
    <MainApp>

      <h1>Count App</h1>
      <button onClick={() => addNumber(count)}>
        count is {count}
      </button>

    </MainApp>
  )
}

export default App
