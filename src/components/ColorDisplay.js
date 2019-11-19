import React from 'react'

const ColorDisplay = props => {
  return (
    <>
      <div
        style={{
          backgroundColor: `hsl(${props.hue},${props.sat}%,${props.light}%)`
        }}
      ></div>
    </>
  )
}

export default ColorDisplay
