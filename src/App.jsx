import React, { useState } from 'react'
import "./App.css"

function App() {
  const [num, setNum] = useState('')
  const [result, setResult] = useState([])

  const computeFib = (n) => {
    const count = parseInt(n, 10)
    if (!Number.isFinite(count) || count <= 0) return []
    const res = []
    for (let i = 0; i < count; i++) {
      if (i === 0) res.push(0)
      else if (i === 1) res.push(1)
      else res.push(res[i - 1] + res[i - 2])
    }
    return res
  }

  return (
    <div className="app">
      {/* animated background */}
      <div className="background" aria-hidden="true">
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
        <span className="ball"></span>
      </div>

      <main className="content">
        <h2>Fibonacci Generator</h2>
        <input
          type="number"
          id="num"
          placeholder="Enter a number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          min="0"
          step="1"
        />
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            setResult(computeFib(num))
          }}
        >
          Get Fibonacci
        </button>
        <h3>Result</h3>
        <div id="result">{result.length ? result.join(", ") : "—"}</div>
      </main>
    </div>
  )
}

export default App