import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <main>
          <div style={{ backgroundColor: `hsl(50,8%,20%)` }}>
            <h1>Colors</h1>
            <input type="range" min="0" max="240" />
            <input type="range" />
            <input type="range" />
          </div>
        </main>
      </>
    )
  }
}

export default App
