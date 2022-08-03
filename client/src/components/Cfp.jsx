import React from 'react'
import CfpBox from './CfpBox'
import SectionHeading from './SectionHeading'


function Cfp() {
    return (
        <div className="CfpArea" id="Cfp">
            <div className="flex-box-section">
                <br />
                <br />
                <SectionHeading title="Ignite '22 Call For Papers"/>
                <br />
                <CfpBox 
                    description="Break out your big ideas. The call for presentations is open. Submit your pages now."
                />
                <br />
                 <CfpBox 
                    description="Ignite ‘22 Call for Papers is now open!"
                />
                <br />
                <CfpBox 
                    description="Submit your presentation idea by Tuesday, August 9, 2022."
                />




            </div>
        </div>
    )
}

export default Cfp