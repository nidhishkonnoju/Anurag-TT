import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 React Starter App</h1>
        <p>Clean UI • State Management • Modern Design</p>
      </header>

      <main className="card">
        <h2>Counter Example</h2>
        <p className="count">{count}</p>

        <div className="btn-group">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
