import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px'}}>
      <h1>Auto Detailing Website</h1>
      <p>Welcome to our site!</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
