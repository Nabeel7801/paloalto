import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'

function App() {
    return (
        <Router>
            
            <Switch>

                {/* --------------- Home Page --------------- */}
                <Route path="/" exact component={() => <Home />} />

                {/* --------------- Call For Papers --------------- */}
                <Route path="/callforpapers" exact component={() => <CallForPapers />} />

            </Switch>

        </Router>
    );
}

export default App;
