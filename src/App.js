import React, {useState} from "react";
import "./App.css";
import Todo from './components/todo';

function App() {
  const [todo, setTodo] = useState('');

  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
