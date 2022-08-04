import React from 'react'
import Header from '../components/Header';

import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import IntroductionBox from '../components/IntroductionBox'
import FAQBox from '../components/FAQBox'

import Footer from '../components/Footer';

function Home() {
    return (
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="bannerArea">
                    <div className="flex-box-section">

                        <div className="bannerText col-md-12 col-lg-9 col-xl-7">
                            <SectionHeading title="Ignite '22" style={{color: "#fff"}}/>
                            <div className="title">Save the Date</div>
                            <div className="subtext">
                                Get ready for the world’s premier cybersecurity event. 
                                <br /><strong>December 12–15, 2022</strong>
                            </div>
                            
                            <Button text="Get Updates" href="/contact"/>
                            
                        </div>

                    </div>
                </div>

                <div className="flex-box-section">
                        
                    <div className="introductionArea">
                            
                        <SectionHeading title="Introduction"/>

                        <IntroductionBox 
                            title="Call for Papers"
                            description="Break out your big ideas. The call for presentations is open. Submit your pages now."
                            text="Submit your Proposal"
                            href="/callforpapers"
                        />

                        <IntroductionBox 
                            title="Never. Stop. Evolving."
                            description="Digital worlds and cyberthreats are constantly changing. Come join the next generation of visionaries as we once again head at full throttle into an innovative future. You’ll have the option of experiencing Ignite ’22 in person or virtually. Dive into all the technical talks, labs certifications, best practice sessions and more.
                            We’re still honing the details. In the meantime, be sure to sign up for Ignite ’22 updates."
                            text="Stay Updated"
                            href="/contact"
                        />

                    </div>
                        
                    <div id="FAQ">
                        <div style={{padding: "30px 0"}}>
                            <SectionHeading title="FAQ"/>
                        </div>
                        
                        <div>
                            
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

                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Home