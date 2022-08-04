import React from 'react'
import Button from './Button'

function IntroductionBox(props) {
    return (
        <div className="introductionBox">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
            <div className="buttonArea">
                <Button text="Submit for Proposal" href={props.href}/>
            </div>

        </div>
    ) 
}

export default IntroductionBox