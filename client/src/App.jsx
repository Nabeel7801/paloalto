import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'

function App() {
    return (
        <BrowserRouter>
            
            <Routes>

                {/* --------------- Home Page --------------- */}
                <Route path="/" element={<Home />} />

                {/* --------------- Call For Papers --------------- */}
                <Route path="/callForPapers" element={<CallForPapers />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
