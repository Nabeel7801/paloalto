import React, { useEffect} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import SectionHeading from '../components/SectionHeading';

function Session() {

    useEffect(() => {
        
        const user = localStorage.getItem('user');
        if (typeof user == 'undefined' || user == null) {
            window.location.replace("/login")
        }

    }, [])

    return (
        <React.Fragment>
            <Header />

            <div className="pageContainer">

                <div className="flex-box-section">
                    
                    <SectionHeading title="Session Form"/>
                    
                </div>

            </div>

        </React.Fragment>
    )
  
}

export default Session