import React from 'react'
import FAQBox from './FAQBox'
import SectionHeading from './SectionHeading'

function FAQ() {
    return (
        <div className="flex-box-section" id="FAQ">
            <SectionHeading title="FAQ"/>
            
            <div style={{paddingTop: "50px"}}>
                
                <FAQBox 
                    title="When is Ignite ’22?"
                    description="Ignite ’22 will be held December 12–15, 2022, in Las Vegas, Nevada."
                />
                <hr />
                <FAQBox 
                    title="Where is Ignite ’22?"
                    description="Ignite ’22 will be held in Las Vegas, Nevada. More details about the location will be available at a later date."
                />
                <hr />
                <FAQBox 
                    title="What are my options if I am unable to attend in person?"
                    description="If you’re interested in attending but can’t or don’t prefer to be there in person, digital options will be available. Stay tuned for more details this summer."
                />
                <hr />
                <FAQBox 
                    title="What COVID-19 safety measures will be in place for the in-person event?"
                    description="Health and safety are some of our top priorities. COVID-19 safety measures will be in place and outlined when registration opens."
                />
                <hr />
                <FAQBox 
                    title="Who can attend Ignite ’22?"
                    description="Ignite ’22 is open to all cybersecurity professionals. CIOs/CISOs, VPs of IT, network engineers/architects, SOC engineers, DevOps and cloud architects and IT directors/managers will find sessions designed just for them.
                    This event is not open to employees of competitive companies."
                />
                <hr />
                <FAQBox 
                    title="How do I submit my presentation proposal?"
                    description={ 
                        <p>
                            The call for papers is now open through August 9, so submit your papers today. If you have any questions, please email us at
                            <a href="mailto:ignitecfp@paloaltonetworks.com"> ignitecfp@paloaltonetworks.com</a>.
                        </p>}
                />
                <hr />
                <FAQBox 
                    title="When does registration for the event open?"
                    description="Registration will be open in summer 2022."
                />
                <hr />
                <FAQBox 
                    title="Will there be a cost associated with attending the event?"
                    description="Conference pass prices for 2022 will be available soon."
                />
                <hr />
                <FAQBox 
                    title="How can my company sponsor Ignite ’22?"
                    description={ 
                        <p>
                            More information will be available on Ignite ’22 sponsorship opportunities in summer 2022. If you have any questions, please email us at 
                            <a href="mailto:ignitesponsors@paloaltonetworks.com"> ignitesponsors@paloaltonetworks.com</a>.
                        </p>}
                    />

            </div>
        </div>
    )
}

export default FAQ