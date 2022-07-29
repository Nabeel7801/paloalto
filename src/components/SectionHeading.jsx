import React from 'react'

function SectionHeading(props) {
    return (
        <div className="sectionHeading">
            <div className="topline"/>
            <div className="heading" style={props.style && props.style}>{props.title}</div>
        </div>
    )
}

export default SectionHeading