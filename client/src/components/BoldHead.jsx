import React from 'react'
import BoldHeadBox from './BoldHeadBox'

function BoldHead() {
  return (
    <div className="BoldHeadArea" id="BoldHead">
            <div className="flex-box-section">
                <br />
                <BoldHeadBox 
                    title="Ignite ‘22"
                />
                <BoldHeadBox 
                    title="Las Vegas, NV"
                />
                <BoldHeadBox 
                    title="Dec 12-Dec 15, 2022"
                />



            </div>
        </div>
  )
}

export default BoldHead