import React from 'react'
import Button from './Button'
import SectionHeading from './SectionHeading'

function Banner() {
    return (
        <div className="bannerArea">
            <div className="flex-box-section">

                <div className="bannerText col-md-12 col-lg-9 col-xl-7">
                    <SectionHeading title="Ignite '22" style={{color: "#fff"}}/>
                    <div className="title">Save the Date</div>
                    <div className="subtext">
                        Get ready for the world’s premier cybersecurity event. 
                        <br />December 12–15, 2022
                    </div>
                    
                    <Button text="Get Updates"/>
                    
                </div>

            </div>
        </div>
    )
}

export default Banner