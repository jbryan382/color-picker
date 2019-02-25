import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    light: 50,
    savedHSL: []
  }

  updateHue = event => {
    console.log(event)
    this.setState({
      hue: event.target.value
    })
  }
  updateSat = event => {
    console.log(event)
    this.setState({
      saturation: event.target.value
    })
  }

  updateLight = event => {
    console.log(event)
    this.setState({
      light: event.target.value
    })
  }

  saveHSL = event => {
    const HSL = {
      savedHue: this.state.hue,
      savedSat: this.state.saturation,
      savedLight: this.state.light
    }
    // Need to add to state the saved HSL values.
    this.setState({
      // Update the savedHSL with HSL
      savedHSL: this.setState.savedHSL + HSL
      // Not working potential logic loop...
    })
  }

  render() {
    return (
      <>
        <main>
          <h1>Colors</h1>
          <div
            style={{
              backgroundColor: `hsl(${this.state.hue},${
                this.state.saturation
              }%,${this.state.light}%)`
            }}
          >
            <input
              type="range"
              max="240"
              onChange={this.updateHue}
              value={this.state.hue}
            />
            <input
              type="range"
              onChange={this.updateSat}
              value={this.state.saturation}
            />
            <input
              type="range"
              onChange={this.updateLight}
              value={this.state.light}
            />
          </div>
          <div>
            <h3>Your Current Selection:</h3>
            <p>
              {this.state.hue}, {this.state.saturation}, {this.state.light}
            </p>
            <button onClick={this.saveHSL}> Save Selection</button>
            <ul>
              {this.state.savedHSL.map(HSL => {
                return (
                  <li>
                    {HSL.savedHue}, {HSL.savedSat}, {HSL.savedLight}{' '}
                  </li>
                )
              })}
            </ul>
          </div>
        </main>
      </>
    )
  }
}

export default App
