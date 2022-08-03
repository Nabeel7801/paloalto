import React from 'react'

function ListBox(props) {
  return (
    <div className="ListBox">
        <div className="description">{props.description}</div>
        <ul>
            <li className="text">{props.text}</li>
        </ul>
        
    </div>
  )
}

export default ListBox