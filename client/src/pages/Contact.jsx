import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import SectionHeading from '../components/SectionHeading';

function Contact() {
    return (
        
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="flex-box-section">
                    
                    <SectionHeading title="Stay Updated"/>
                    
                </div>

            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact