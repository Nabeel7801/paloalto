import React from 'react'
import Button from './Button'

function CfpButtonBox(props) {
  return (
    <div className="CfpButtonBox">
            <div className="buttonArea text-center">
                <Button text={props.text}/>
            </div>
        </div>
  )
}

export default CfpButtonBox