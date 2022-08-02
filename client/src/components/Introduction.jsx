import React from 'react'
import IntroductionBox from './IntroductionBox'
import SectionHeading from './SectionHeading'

function Introduction() {
    return (
        <div className="introductionArea" id="Introduction">
            <div className="flex-box-section">
                
                <SectionHeading title="Introduction"/>

                <IntroductionBox 
                    title="Call for Papers"
                    description="Break out your big ideas. The call for presentations is open. Submit your pages now."
                    text="Submit your Proposal"
                />

                <IntroductionBox 
                    title="Never. Stop. Evolving."
                    description="Digital worlds and cyberthreats are constantly changing. Come join the next generation of visionaries as we once again head at full throttle into an innovative future. You’ll have the option of experiencing Ignite ’22 in person or virtually. Dive into all the technical talks, labs certifications, best practice sessions and more.
                    We’re still honing the details. In the meantime, be sure to sign up for Ignite ’22 updates."
                    text="Stay Updated"
                />

            </div>
        </div>
    )
}

export default Introduction