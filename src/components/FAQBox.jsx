import React from 'react'

function FAQBox(props) {
    return (
        <div className="faqBox">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
        </div>
    )
}

export default FAQBox