import React from 'react'
import Button from './Button'

function IntroductionBox(props) {
    return (
        <div className="introductionBox">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <Button text={props.text}/>
        </div>
    )
}

export default IntroductionBox