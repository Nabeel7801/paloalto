import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

function CallForPapers() {
    return (
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="flex-box-section">
                    
                    <SectionHeading title="Ignite '22 Call For Papers"/>
                    
                    <br />
                    <p>Break out your big ideas. The call for presentations is open. Submit your pages now.</p>
                    
                    <p>Ignite ‘22 Call for Papers is now open!</p>
                    
                    <p>Submit your presentation idea by Tuesday, August 9, 2022.</p>
                    <br />

                    <strong>Ignite ‘22</strong><br />
                    <strong>Las Vegas, NV</strong><br />
                    <strong>Dec 12-Dec 15, 2022</strong><br />
                    
                    <br />
                    <p>Call for Papers (CFP) Schedule</p>
                    <ul>
                        <p><li>CFP Opens: Thursday, June 16, 2022</li></p>
                        <p><li>CFP Closes: Tuesday, August 9, 2022 at 11:59 PM PDT</li></p>
                        <p><li>Schedule Announcement: Tuesday, September 27, 2022</li></p>
                        <p><li>Presentation Slide Due Date: Friday, December 2, 2022</li></p>
                        <p><li>Event Dates: December 12-15, 2022</li> </p>
                    </ul>
                    
                    <div className="buttonArea">
                        <Button text="Submit for Proposal" href="/cfp/session"/>
                    </div>

                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default CallForPapers