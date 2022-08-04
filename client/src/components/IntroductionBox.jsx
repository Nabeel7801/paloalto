import React from 'react'


function IntroductionBox(props) {
    return (
        <div className="introductionBox">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
        </div>
    )
}

export default IntroductionBox