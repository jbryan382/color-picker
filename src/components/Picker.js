import React, { useState } from 'react'
import HSLDisplay from './HSLDisplay'

export default function Picker(props) {
  const [hueValue, setHueValue] = useState(Math.floor(Math.random() * 360))
  const [satValue, setSatValue] = useState(Math.floor(Math.random() * 100))
  const [lightValue, setLightValue] = useState(Math.floor(Math.random() * 100))
  // const [randomHSL, saveRandomHSL] = useState(hueValue, satValue, lightValue)

  const randomColor = () => {
    setHueValue(random => Math.floor(Math.random() * 360))
    setSatValue(random => Math.floor(Math.random() * 100))
    setLightValue(random => Math.floor(Math.random() * 100))
  }
  return (
    <>
      <main>
        <h1>{props.title}</h1>
        <div
          style={{
            backgroundColor: `hsl(${hueValue},${satValue}%,${lightValue}%)`
          }}
        >
          <input
            type="range"
            max="360"
            onChange={e => setHueValue(e.target.value)}
            value={hueValue}
          />
          <input
            type="range"
            onChange={e => setSatValue(e.target.value)}
            value={satValue}
          />
          <input
            type="range"
            onChange={e => setLightValue(e.target.value)}
            value={lightValue}
          />
        </div>
        <div>
          <h3>{props.subtitle}</h3>
          <HSLDisplay hue={hueValue} sat={satValue} light={lightValue} />
          <button onClick={randomColor}>Random Color</button>
          {/* <button
            onClick={() =>
              saveHSL(prevHSL => prevHSL + hueValue + satValue + lightValue)
            }
          >
            {' '}
            Save Selection
          </button>
          <ul>
            {savedHSL().map(HSL => {
              return <li>{savedHSL}</li>
            })}
          </ul> */}
        </div>
      </main>
    </>
  )
}
