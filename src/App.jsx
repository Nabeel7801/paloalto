import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import FAQ from './components/FAQ'
import Footer from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <Header />
                <div className="pageContainer">
                    <Banner />
                    <Introduction />
                    <FAQ />
                </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
