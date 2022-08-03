import React from 'react'
import CfpButtonBox from './CfpButtonBox'

function CfpButton() {
  return (
    <div className="CfpButtonArea" id="CfpButton">
            <div className="flex-box-section">
                <br />
                <CfpButtonBox 
                    text="Submit Your Proposal"
                />
                <br />
            </div>
        </div>
  )
}

export default CfpButton