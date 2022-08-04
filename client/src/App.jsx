import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'
import TrackUseCases from './pages/TrackUseCases';

function App() {
    return (
        <Router>
            
            <Switch>

                {/* --------------- Home Page --------------- */}
                <Route path="/" exact component={() => <Home />} />

                {/* --------------- Call For Papers --------------- */}
                <Route path="/callforpapers" exact component={() => <CallForPapers />} />

                 {/* --------------- Track and Use Cases --------------- */}
                 <Route path="/trackusecases" exact component={() => <TrackUseCases />} />


            </Switch>

        </Router>
    );
}

export default App;
