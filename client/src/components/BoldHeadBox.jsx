import React from 'react'

function BoldHeadBox(props) {
  return (
    <div className="BoldHeadBox">
            <strong><div className="title">{props.title}</div></strong>
    </div>

  )
}

export default BoldHeadBox