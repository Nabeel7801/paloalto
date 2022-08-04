import React from 'react'

function BigHeadBox(props) {
  return (
    <div className="BigHeadBox">
            <strong><div className="title" style={{fontSize: "2rem"}}>{props.title}</div></strong>
    </div>

  )
}

export default BigHeadBox