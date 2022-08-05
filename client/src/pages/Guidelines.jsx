import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

import SectionHeading from '../components/SectionHeading';

function Guidelines() {
    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">
                <br />
                <div className="flex-box-section">
                    <SectionHeading title="Submission Guidelines"/>
                    <br />
                    <p>
                        Due to COVID-19 restrictions, I understand that if my presentation is virtual, I may be 
                        asked to pre-record my session on camera in an approved personal location and work with 
                        the content team on specifications and requirements for this specific delivery.
                    </p>
                    <br />
                    <p>
                        I agree to abide by the COVID-19 protocols set in place by Ignite '22, which may include 
                        providing proof of a negative COVID-19 test and/or proof of full vaccination, practicing hand 
                        hygiene, social distancing, wearing face coverings, and/or other measures to reduce the risks 
                        of exposure to COVID-19.
                    </p>
                    <br />
                    <p>
                        For PAN employees, I acknowledge that my cost center owner has budgeted for my travel-related expenses to 
                        participate in Ignite '22 in Q3FY23.
                    </p>
                    <p>If attendee registration for my session has high demand, I may be asked to repeat the session during the conference.</p>
                </div>

                
            </div>
            <br />
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default Guidelines