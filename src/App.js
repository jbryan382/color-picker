import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    light: 0,
    savedHSL: []
  }

  updateHue = event => {
    console.log(event)
    this.setState({
      hue: event.type.value
    })
  }
  updateSat = event => {
    console.log(event)
    this.setState({
      saturation: event.type.value
    })
  }

  updateLight = event => {
    console.log(event)
    this.setState({
      light: event.type.value
    })
  }

  saveHSL = event => {
    const HSL = {
      savedHue: this.state.hue,
      savedSat: this.state.saturation,
      savedLight: this.state.light
    }
    savedHSL: this.setState.savedHSL.concat(HSL)
  }

  render() {
    return (
      <>
        <main>
          <div
            style={{
              backgroundColor: `hsl(${this.state.hue},${
                this.state.saturation
              },${this.state.light})`
            }}
          >
            <h1>Colors</h1>
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
        </main>
      </>
    )
  }
}

export default App
