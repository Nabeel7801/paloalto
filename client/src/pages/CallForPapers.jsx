import React from 'react'
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

import SectionHeading from '../components/SectionHeading';
import CfpBox from '../components/CfpBox';
import BoldHeadBox from '../components/BoldHeadBox';
import ListBox from '../components/ListBox';
import Button from '../components/Button';

function CallForPapers() {
    return (
        <React.Fragment>
            <MainHeader />

            <div className="pageContainer">

                <div className="CfpArea">
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

                <div className="BoldHeadArea">
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

                <div className="ListArea">
                    <div className="flex-box-section">
                        <br />
                        <ListBox 
                            description="Call for Papers (CFP) Schedule"
                            text="CFP Opens: Thursday, June 16, 2022"
                        />
                        <ListBox 
                            text="CFP Closes: Tuesday, August 9, 2022 at 11:59 PM PDT"
                        />
                        <ListBox 
                            text="CFP Notifications: Tuesday, September 6, 2022"
                        />
                        <ListBox 
                            text="Schedule Announcement: Tuesday, September 27, 2022"
                        />
                        <ListBox 
                            text="Presentation Slide Due Date: Friday, December 2, 2022"
                        />
                        <ListBox 
                            text="Event Dates: December 12-15, 2022"
                            textButton="Submit Your Proposal"
                        />
                    </div>
                </div>

                <div className="buttonArea">
                    <Button text="Submit for Proposal"/>
                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default CallForPapers