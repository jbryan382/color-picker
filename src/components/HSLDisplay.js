import React from 'react'

const HSLDisplay = props => {
  return (
    <p>
      {props.hue}, {props.sat}, {props.light}
    </p>
  )
}

export default HSLDisplay
