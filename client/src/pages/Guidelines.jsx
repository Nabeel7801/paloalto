import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import SectionHeading from '../components/SectionHeading';

function Guidelines() {
    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="flex-box-section">
                    
                    <SectionHeading title="Submission Guidelines"/>
                    
                </div>

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Guidelines