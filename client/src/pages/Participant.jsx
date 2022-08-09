import React, { useEffect} from 'react'
import Header from '../components/Header';
import UnderDevelopment from '../components/UnderDevelopment';

function Participant() {

    const sessionID = localStorage.getItem('sessionID');
    if (!sessionID) {
        window.location.replace("/callforpapers")
    }

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
                
                <UnderDevelopment webpage="Participants Form" />

            </div>
        </React.Fragment>
    )
  
}

export default Participant