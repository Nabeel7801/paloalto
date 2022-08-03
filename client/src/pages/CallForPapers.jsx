import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cfp from '../components/Cfp';
import BoldHead from '../components/BoldHead';
import List from '../components/List';
import CfpButton from '../components/CfpButton';

function CallForPapers() {
    return (
        <React.Fragment>
            <Header />

            <div className="pageContainer">
                <Cfp />
                <BoldHead />
                <List />
                <CfpButton />
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default CallForPapers