import React from 'react'

function TrackBox(props) {
  return (
    <div className="TrackBox">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
    </div>
    
  )
}

export default TrackBox