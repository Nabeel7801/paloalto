import React from 'react'
import { useHistory } from "react-router-dom";

function Button(props) {
    const history = useHistory();
    
    return (
        <button className="customBtn" onClick={() => history.push(props.href)}>
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