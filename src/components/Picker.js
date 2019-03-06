import React, { useState } from 'react'

export default function Picker(props) {
  const [hueValue, setHueValue] = useState(0)
  const [satValue, setSatValue] = useState(0)
  const [lightValue, setLightValue] = useState(0)
  const [randomHSL, saveRandomHSL] = useState(hueValue, satValue, lightValue)

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
            max="240"
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
          <p>
            {hueValue}, {satValue}, {lightValue}
          </p>
          <button
            onClick={() =>
              saveRandomHSL(
                randomHSL => randomHSL + hueValue + satValue + lightValue
              )
            }
          >
            Random Color
          </button>
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
