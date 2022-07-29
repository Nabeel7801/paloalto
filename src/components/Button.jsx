import React from 'react'

function Button(props) {
    return (
        <button className="customBtn">
            {props.text} &nbsp; 
            <strong>
                <svg width="16" height="12" viewBox="0 0 18 13" fill="none">
                    <path d="M1 6.5L16.2938 6.5" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M10.5586 1L16.2938 6.5L10.5586 12" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </strong>
        </button>
    )
}

export default Button